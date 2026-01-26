import { content } from "@/lib/content";
import { Section } from "../ui/Section";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const Writings = React.memo(function Writings() {
    const hasWritings = content.writings && content.writings.length > 0;

    return (
        <Section id="writings" chapter="V" title="Writings">
            {!hasWritings ? (
                <p className="text-lg text-muted italic font-serif">
                    A few notes. More soon.
                </p>
            ) : (
                <div className="space-y-8">
                    {content.writings.map((note, i) => (
                        <a
                            key={i}
                            href={note.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border-t border-border pt-6 transition-all duration-300 hover:pl-3"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                                {/* Title and Category */}
                                <div className="md:w-2/3 mb-3 md:mb-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-serif text-foreground group-hover:underline decoration-mustard decoration-2 underline-offset-4 transition-all">
                                            {note.title}
                                        </h3>
                                        {note.category && (
                                            <span className="px-2 py-0.5 text-xs font-mono bg-mustard/10 text-burgundy rounded border border-mustard/20">
                                                {note.category}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {note.description}
                                    </p>
                                </div>

                                {/* Date and Link Icon */}
                                <div className="md:w-1/3 flex items-center justify-between md:justify-end gap-4">
                                    {note.date && (
                                        <span className="text-sm font-mono text-muted">
                                            {note.date}
                                        </span>
                                    )}
                                    <ArrowUpRight
                                        size={18}
                                        className="text-muted group-hover:text-mustard transition-colors flex-shrink-0"
                                        aria-label="External link"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </Section>
    );
});
