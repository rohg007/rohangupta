"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768
    ? 50  // Mobile - reduced for better performance
    : 80; // Desktop - full detail

// Geometric generation logic (Pure / Module level)
const generateTargets = () => {
    const t: Record<string, Float32Array> = {};

    // 1. Hero: Sparse Drift
    const hero = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
        hero[i * 3] = (Math.random() - 0.5) * 35;
        hero[i * 3 + 1] = (Math.random() - 0.5) * 20;
        hero[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    t["hero"] = hero;

    // 2. Work: Ordered Grid
    const work = new Float32Array(NODE_COUNT * 3);
    const rows = 8;
    const cols = 10;
    for (let i = 0; i < NODE_COUNT; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        work[i * 3] = (col - cols / 2) * 2.5;
        work[i * 3 + 1] = (row - rows / 2) * 2.0;
        work[i * 3 + 2] = 0;
    }
    t["work"] = work;

    // 3. Impact: Constellation Cluster
    const impact = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
        const isCore = i < NODE_COUNT * 0.7;
        const r = isCore ? 4 : 15;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        impact[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        impact[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        impact[i * 3 + 2] = r * Math.cos(phi);
    }
    t["impact"] = impact;

    // 4. Projects: Directional Flow
    const projects = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
        const x = (i / NODE_COUNT) * 50 - 25;
        projects[i * 3] = x;
        projects[i * 3 + 1] = Math.sin(x * 0.3) * 5;
        projects[i * 3 + 2] = Math.cos(x * 0.3) * 2;
    }
    t["projects"] = projects;

    // 5. Writings: Spiral/Radial, Calm, Editorial
    const writings = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
        const t = i / NODE_COUNT;
        const angle = t * Math.PI * 4; // Spiral outward
        const radius = 2 + t * 8; // Gradual expansion
        writings[i * 3] = Math.cos(angle) * radius;
        writings[i * 3 + 1] = Math.sin(angle) * radius;
        writings[i * 3 + 2] = Math.sin(t * Math.PI * 2) * 1.5; // Gentle wave in Z
    }
    t["writings"] = writings;

    // 6. Contact: Void / Dispersion
    const contact = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 20;
        contact[i * 3] = Math.cos(angle) * dist;
        contact[i * 3 + 1] = Math.sin(angle) * dist;
        contact[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    t["contact"] = contact;

    return t;
};

// Generate once
const TARGETS = generateTargets();
const INITIAL_POINTS = TARGETS["hero"];

// Generate indices once
const LINE_INDICES = (() => {
    const indices = [];
    const cols = 10;
    for (let i = 0; i < NODE_COUNT; i++) {
        if ((i + 1) % cols !== 0 && i + 1 < NODE_COUNT) {
            indices.push(i, i + 1);
        }
        if (i + cols < NODE_COUNT) {
            indices.push(i, i + cols);
        }
    }
    return new Uint16Array(indices);
})();


function GraphNodes({ activeSection = "hero" }: { activeSection?: string }) {
    // We maintain ONE set of points buffer, but we calculate TARGET positions
    // based on the active section.

    // Memoize the target positions for each state to avoid re-calculating
    const targets = TARGETS;

    // Current positions buffer ref
    const geometryRef = useRef<THREE.BufferGeometry>(null);
    const lineGeometryRef = useRef<THREE.BufferGeometry>(null);
    const pointsRef = useRef<THREE.Points>(null);
    const prevSectionRef = useRef<string>(activeSection);

    // CRITICAL: Create stable position buffers that persist across re-renders
    // This prevents the abrupt reset to hero pattern when section changes
    const positionsBufferRef = useRef<Float32Array>(Float32Array.from(INITIAL_POINTS));
    const linePositionsBufferRef = useRef<Float32Array>(Float32Array.from(INITIAL_POINTS));

    useFrame(() => {
        if (!geometryRef.current) return;

        // Operate on our stable buffer ref - this persists across re-renders
        const positions = positionsBufferRef.current;
        const target = targets[activeSection] || targets["hero"];

        // Lerp current positions to target - simple uniform lerp for performance
        let lerpFactor = 0.08;
        if (activeSection === 'work') {
            lerpFactor = 0.12; // Snappy for grid formation
        } else if (activeSection === 'hero') {
            lerpFactor = 0.07; // Slightly slower for spread pattern
        } else if (activeSection === 'writings') {
            lerpFactor = 0.07; // Calm transition for editorial section
        } else if (activeSection === 'contact') {
            lerpFactor = 0.07;
        }

        // Simple lerp without expensive per-point distance calc
        for (let i = 0; i < positions.length; i++) {
            positions[i] += (target[i] - positions[i]) * lerpFactor;
        }

        // Sync our stable buffer to the geometry
        const geoPositions = geometryRef.current.attributes.position.array as Float32Array;
        geoPositions.set(positions);
        geometryRef.current.attributes.position.needsUpdate = true;

        // Sync line geometry positions  
        if (lineGeometryRef.current) {
            const linePositions = lineGeometryRef.current.attributes.position.array as Float32Array;
            linePositions.set(positions);
            lineGeometryRef.current.attributes.position.needsUpdate = true;
        }
    });

    // Customize connectivity for structure
    const linesIndex = LINE_INDICES;

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry ref={geometryRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={NODE_COUNT}
                        array={positionsBufferRef.current}
                        itemSize={3}
                        args={[positionsBufferRef.current, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.25} // Slightly larger for "secondary accent"
                    color="#4A2020"
                    transparent
                    opacity={0.2}
                    sizeAttenuation={true}
                />
            </points>

            <lineSegments>
                {/* 
                    Sharing the same BufferGeometry ref allows lines to automatically
                    follow the points as they are updated in useFrame.
                 */}
                <bufferGeometry ref={lineGeometryRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={NODE_COUNT}
                        array={linePositionsBufferRef.current}
                        itemSize={3}
                        args={[linePositionsBufferRef.current, 3]}
                    />
                    <bufferAttribute
                        attach="index"
                        count={linesIndex.length}
                        array={linesIndex}
                        itemSize={1}
                        args={[linesIndex, 1]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#4A2020"
                    transparent
                    opacity={0.15} // Visible but calm
                    linewidth={1}
                />
            </lineSegments>
        </group>
    );
}

// Memoize to prevent re-renders unless activeSection changes
// Actually, activeSection changes frequently? No, only on threshold cross.
// But we want to ensure parent re-renders don't cause this to re-mount/re-calc targets.
export const SystemGraph = React.memo(function SystemGraph({ activeSection }: { activeSection?: string }) {
    const groupRef = useRef<THREE.Group>(null);
    const isVisibleRef = useRef(true);

    // Detect when tab is hidden to stop rendering
    React.useEffect(() => {
        const handleVisibilityChange = () => {
            isVisibleRef.current = !document.hidden;
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    useFrame((state) => {
        if (!groupRef.current || !isVisibleRef.current) return; // Skip when tab hidden
        // Very slow, subtle rotation constant
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
            <GraphNodes activeSection={activeSection} />
        </group>
    );
});
