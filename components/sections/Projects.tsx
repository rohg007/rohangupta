import { content } from "@/lib/content";
import { Section } from "../ui/Section";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const Projects = React.memo(function Projects() {
    return (
        <Section id="projects" chapter="IV" title="Projects & Research">
            <div className="space-y-16">
                {content.projects.map((project, i) => (
                    <div key={i} className="group border-t border-border pt-6 md:flex md:gap-20 transition-colors rounded-sm">
                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <span className="text-xs font-mono text-muted block mb-3 pl-1 border-l border-mustard">
                                {project.year}
                            </span>
                            <h3 className="text-3xl font-serif text-foreground">{project.title}</h3>
                        </div>

                        <div className="md:w-2/3 flex flex-col justify-between">
                            <div>
                                <p className="text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed text-balance">
                                    {project.description}
                                </p>

                                {project.metrics && (
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                                        {project.metrics.map((metric, j) => (
                                            <span key={j} className="text-xs font-mono text-muted">
                                                * {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {project.impact && (
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                                        {project.impact}
                                    </p>
                                )}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium hover:text-mustard transition-colors group-hover:translate-x-1 duration-300"
                            >
                                View Project <ArrowUpRight size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
});
