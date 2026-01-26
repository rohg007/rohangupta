import clsx from "clsx";
import { Container } from "./Container";

interface SectionProps {
    id: string;
    className?: string;
    chapter?: string; // e.g. "01", "I"
    title?: string;
    children: React.ReactNode;
}

export function Section({ id, className, chapter, title, children }: SectionProps) {
    return (
        <section id={id} className={clsx("relative py-24 md:py-32", className)}>
            <Container>
                {/* Chapter Header */}
                {(chapter || title) && (
                    <header className="flex items-baseline gap-4 mb-20 md:mb-32 border-b border-dashed border-foreground/20 pb-4">
                        {chapter && (
                            <span className="font-serif italic text-lg text-burgundy">
                                ({chapter})
                            </span>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
                                {title}
                            </h2>
                        )}
                    </header>
                )}

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </Container>
        </section>
    );
}
