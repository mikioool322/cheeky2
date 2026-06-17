"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useDictionary } from "@/lib/dictionary-context";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { dict, locale } = useDictionary();
  const pathname = usePathname();

  // Helper to generate locale-aware paths
  const getLocalePath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`;
  };

  const NAV_LINKS = [
    { label: dict.nav.work, href: getLocalePath("/#work") },
    { label: dict.nav.services, href: getLocalePath("/#services") },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/40 backdrop-blur-sm border-b border-white/10"
        role="banner"
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={getLocalePath("/")}
            className="font-black text-xl tracking-tight leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded flex items-center"
            aria-label={dict.nav.homeAriaLabel}
          >
            <Image
              src="/logo.png"
              alt={dict.nav.logoAlt}
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label={dict.nav.mainNav}>
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
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getLocalePath("/#contact")}
              className="inline-flex items-center shrink-0 rounded-none font-semibold tracking-tight px-5 h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-sm transition-colors duration-200"
            >
              {dict.nav.letsTalk}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
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
          aria-label={dict.nav.mobileNav}
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
            href={getLocalePath("/#contact")}
            onClick={handleLinkClick}
            className="mt-6 inline-block w-fit bg-primary text-primary-foreground font-semibold text-lg px-8 py-3 rounded-none hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {dict.nav.letsTalk}
          </a>
        </nav>
      </div>
    </>
  );
}
