"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";
import { Section } from "../ui/Section";
import clsx from "clsx";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Work = React.memo(function Work() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <Section id="work" chapter="II" title="Selected Work">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.work.map((job) => (
                    <WorkCard
                        key={job.id}
                        job={job}
                        expanded={expandedId === job.id}
                        onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                    />
                ))}
            </div>
        </Section>
    );
});

function WorkCard({
    job,
    expanded,
    onClick,
}: {
    job: (typeof content.work)[number];
    expanded: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={clsx(
                "group relative cursor-pointer overflow-hidden border-b border-border hover:bg-foreground/5 transition-colors pb-6",
                expanded ? "md:col-span-2 lg:col-span-2 row-span-2" : "h-auto"
            )}
        >
            <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-baseline mb-4">
                    <div className="flex items-center gap-4">
                        <div className="relative w-8 h-8 opacity-75 group-hover:opacity-100 transition-opacity">
                            <Image
                                src={job.logo}
                                alt={`${job.company} Logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-foreground group-hover:text-mustard transition-colors">
                                {job.company}
                            </h3>
                            <p className="text-sm text-muted mt-1 font-mono">{job.role}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs text-muted font-mono hidden md:inline-block">{job.period}</span>
                        <button className="text-foreground/50 group-hover:text-foreground transition-colors">
                            {expanded ? <Minus size={18} /> : <Plus size={18} />}
                        </button>
                    </div>
                </div>

                <motion.div layout>
                    <p className={clsx("text-base text-muted-foreground leading-relaxed max-w-prose", expanded ? "line-clamp-none" : "line-clamp-2")}>
                        {job.description}
                    </p>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-8 pt-4 border-t border-border/50"
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-4 font-medium">
                                            Outcome
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground group-marker:text-mustard">
                                            {job.highlights.map((highlight, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-mustard text-xs mt-1">●</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-4 font-medium">
                                            Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {job.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-mono text-muted-foreground border-b border-border/0 hover:border-mustard transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
}
