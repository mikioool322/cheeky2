"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-white/10"
        role="banner"
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-xl tracking-tight leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded flex items-center"
            aria-label="Cheeky Studio – go to homepage"
          >
            {/* replace '/logo.png' with your actual image path in public/ */}
            <Image
              src="/logo.png"
              alt="Cheeky Studio logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center shrink-0 rounded-none font-semibold tracking-tight px-5 h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-sm transition-colors duration-200"
            >
              Let&#39;s talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-40 flex flex-col",
          "bg-[rgb(238,247,253)]",
          "transition-all duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="h-16" aria-hidden="true" />
        <nav
          className="flex flex-col gap-2 px-6 py-8"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="display-md py-2 text-foreground hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#contact"
            onClick={handleLinkClick}
            className="mt-6 inline-block w-fit bg-primary text-primary-foreground font-semibold text-lg px-8 py-3 rounded-none hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Let&#39;s talk
          </a>
        </nav>
      </div>
    </>
  );
}
