"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { MenuIcon, XIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

// "Temesgen Birhenu" -> "TB"
const initials = profileData.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // The scroll handler only flips one boolean. React skips the re-render
  // when the value is unchanged, so this is cheap.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link: IntersectionObserver tells us when a section crosses a thin band
  // near the middle of the screen. The old version measured every section on
  // every scroll event, which forces layout work on each frame.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled ? "border-line bg-bg/90" : "border-transparent bg-bg/70"
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="#hero" className="group flex items-center gap-2.5 rounded-lg p-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white transition-transform group-hover:scale-105">
              {initials}
            </span>
            <span className="flex flex-col">
              <span className="font-display text-base font-bold leading-tight tracking-tight">
                {profileData.name}
              </span>
              <span className="text-xs font-medium leading-none text-muted">
                {profileData.role}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent-ink"
                      : "text-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop action */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#contact">
              <span>Let&apos;s Connect</span>
              <ArrowRightIcon size={14} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-lg border border-line bg-surface p-2 text-muted transition-colors hover:text-ink"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="animate-fade-up border-t border-line bg-bg px-4 pb-6 pt-2 shadow-lg md:hidden"
        >
          <nav aria-label="Mobile navigation" className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent-ink"
                      : "text-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 border-t border-line pt-4">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <span>Let&apos;s Connect</span>
              <ArrowRightIcon size={15} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}