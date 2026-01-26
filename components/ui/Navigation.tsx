"use client";

import { content } from "@/lib/content";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-mustard pointer-events-none">
                {/* Monogram - Left aligned */}
                <div className="font-mono text-lg font-bold tracking-tighter pointer-events-auto cursor-default">
                    {content.hero.monogram}
                </div>

                {/* Desktop Links - Hidden on mobile */}
                <div className="hidden md:flex gap-6 pointer-events-auto items-center">
                    <NavLink href="#work">Work</NavLink>
                    <NavLink href="#impact">Impact</NavLink>
                    <NavLink href="#projects">Thesis</NavLink>
                    <NavLink href="#writings">Writings</NavLink>
                    <NavLink href="#contact">Contact</NavLink>

                    <a
                        href="/Rohan_Gupta_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-xs font-mono border-b border-mustard/30 pb-0.5 hover:text-white hover:border-white transition-colors"
                    >
                        Download Resume →
                    </a>
                </div>

                {/* Hamburger Button - Visible on mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden pointer-events-auto relative w-6 h-5 flex flex-col justify-between"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-full h-0.5 bg-mustard transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                            }`}
                    />
                    <span
                        className={`block w-full h-0.5 bg-mustard transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-full h-0.5 bg-mustard transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <MobileNavLink href="#work" onClick={handleLinkClick} delay={0}>
                        Work
                    </MobileNavLink>
                    <MobileNavLink href="#impact" onClick={handleLinkClick} delay={50}>
                        Impact
                    </MobileNavLink>
                    <MobileNavLink href="#projects" onClick={handleLinkClick} delay={100}>
                        Thesis
                    </MobileNavLink>
                    <MobileNavLink href="#writings" onClick={handleLinkClick} delay={150}>
                        Writings
                    </MobileNavLink>
                    <MobileNavLink href="#contact" onClick={handleLinkClick} delay={200}>
                        Contact
                    </MobileNavLink>

                    <a
                        href="/Rohan_Gupta_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className={`mt-4 text-sm font-mono text-mustard border-b border-mustard/30 pb-0.5 hover:text-white hover:border-white transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        style={{ transitionDelay: isMenuOpen ? "250ms" : "0ms" }}
                    >
                        Download Resume →
                    </a>
                </div>
            </div>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium tracking-wide uppercase hover:text-white transition-colors opacity-80 hover:opacity-100"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({
    href,
    children,
    onClick,
    delay,
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    delay: number;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-2xl font-medium tracking-wide uppercase text-mustard hover:text-white transition-all duration-300"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Link>
    );
}

