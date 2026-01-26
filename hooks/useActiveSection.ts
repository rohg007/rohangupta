"use client";

import { useState, useEffect } from "react";

export type SectionType = "hero" | "work" | "impact" | "projects" | "writings" | "contact";

const SECTIONS: SectionType[] = ["hero", "work", "impact", "projects", "writings", "contact"];

/**
 * useActiveSection - Detects the "active" section for pattern transitions.
 * 
 * Uses Intersection Observer API for efficient, native section detection.
 * More performant than scroll-based calculations.
 */
export function useActiveSection(): SectionType {
    const [activeSection, setActiveSection] = useState<SectionType>("hero");

    useEffect(() => {
        const observerOptions = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            rootMargin: '-10% 0px -10% 0px' // Trigger when section is centered
        };

        const observer = new IntersectionObserver((entries) => {
            // Find the section with the largest intersection ratio
            let maxRatio = 0;
            let mostVisibleSection: SectionType = activeSection;

            entries.forEach((entry) => {
                if (entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    mostVisibleSection = entry.target.id as SectionType;
                }
            });

            // Only update if section is at least 30% visible
            if (maxRatio > 0.3) {
                setActiveSection(mostVisibleSection);
            }
        }, observerOptions);

        // Observe all sections
        SECTIONS.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []); // Empty deps - only set up once

    return activeSection;
}
