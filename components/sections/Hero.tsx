import { Container } from "../ui/Container";
import { content } from "@/lib/content";

export function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center">
            <Container className="relative z-10 ml-0 md:ml-24">
                <div className="flex flex-col gap-6 max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-medium">
                        ( I ) Introduction
                    </span>

                    <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
                        {content.hero.name}
                    </h1>

                    <h2 className="text-xl md:text-2xl text-muted font-normal font-sans tracking-wide">
                        {content.hero.role}
                    </h2>

                    <p className="mt-8 text-lg font-serif italic text-muted-foreground max-w-lg leading-relaxed text-balance">
                        {content.hero.intro}
                    </p>
                </div>
            </Container>
        </section>
    );
}
