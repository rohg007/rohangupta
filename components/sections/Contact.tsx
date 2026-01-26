import { content } from "@/lib/content";
import { Section } from "../ui/Section";
import Image from "next/image";

export function Contact() {
    return (
        <Section id="contact" className="pb-12 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-foreground p-10 md:p-20 bg-foreground text-background">
                <div>
                    <span className="font-serif italic text-lg text-burgundy block mb-6">
                        ( V )
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8">Let&apos;s Connect</h2>
                    <p className="text-background/60 max-w-sm mb-12 font-sans leading-relaxed">
                        Always open to discussing high-performance mobile architectures and platform engineering.
                    </p>

                    <div className="flex flex-col items-start gap-4">
                        {/* Author Photo */}
                        {content.contact.authorPhoto && (
                            <div className="mb-4">
                                <Image
                                    src={content.contact.authorPhoto}
                                    alt="Portrait of Rohan Gupta"
                                    width={64}
                                    height={64}
                                    className="rounded-lg object-cover grayscale-[30%] contrast-90 border border-background/20 shadow-sm"
                                    priority={false}
                                    quality={85}
                                />
                            </div>
                        )}

                        <a
                            href={`mailto:${content.contact.email}`}
                            className="text-xl md:text-3xl hover:text-mustard transition-colors font-serif italic border-b border-mustard/30 pb-2 inline-block"
                        >
                            {content.contact.email}
                        </a>

                        <a
                            href="/Rohan_Gupta_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-mono text-muted hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/20 pb-0.5"
                        >
                            Download Full Resume →
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-start md:items-end gap-6">
                    <SocialLink href={content.contact.linkedin}>LinkedIn</SocialLink>
                    <SocialLink href={content.contact.github}>GitHub</SocialLink>
                </div>
            </div>
        </Section>
    );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-mustard transition-colors"
        >
            {children}
        </a>
    );
}
