"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SystemGraph } from "./SystemGraph";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Scene() {
    const activeSection = useActiveSection();

    return (
        <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 20], fov: 35 }} // Moved back slightly for better framing
            gl={{
                antialias: true,
                alpha: true,
                stencil: false,
                depth: false
            }}
            className="bg-background transition-colors duration-1000"
        >
            <Suspense fallback={null}>
                <SystemGraph activeSection={activeSection} />
            </Suspense>
        </Canvas>
    );
}
