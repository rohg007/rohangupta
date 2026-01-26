import { content } from "@/lib/content";
import { Section } from "../ui/Section";
import React from "react";

export const Impact = React.memo(function Impact() {
    return (
        <Section id="impact" chapter="III" title="Impact">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {content.impact.map((stat, i) => (
                    <div key={i} className="relative pl-6 border-l border-mustard/30">
                        <h4 className="text-4xl md:text-6xl font-serif text-burgundy mb-3">
                            {stat.value}
                        </h4>
                        <p className="text-sm font-medium text-foreground uppercase tracking-widest mb-2 text-xs">
                            {stat.label}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
});
