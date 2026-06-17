"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useDictionary } from "@/lib/dictionary-context";

export default function Footer() {
  const { dict, locale } = useDictionary();
  const t = dict.footer;

  // Helper to generate locale-aware paths
  const getLocalePath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`;
  };

  const FOOTER_LINKS: Record<string, string[]> = {
    [t.sections.work]: t.links.work,
    [t.sections.services]: t.links.services,
    [t.sections.company]: t.links.company,
  };

  const SOCIALS = [
    { Icon: Instagram, href: "https://instagram.com/cheekystudio", label: t.socials.instagram },
    { Icon: Twitter, href: "https://twitter.com/cheekystudio", label: t.socials.twitter },
    { Icon: Linkedin, href: "https://linkedin.com/company/cheekystudio", label: t.socials.linkedin },
    { Icon: Youtube, href: "https://youtube.com/@cheekystudio", label: t.socials.youtube },
  ];

  return (
    <footer className="bg-neutral-950 text-white" aria-label="Site footer">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* Top: logo + nav */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-12">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              href={getLocalePath("/")}
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={dict.nav.homeAriaLabel}
            >
              <Image
                src="/logo.png"
                alt={dict.nav.logoAlt}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-white/40 font-light max-w-[200px] leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
                  {heading}
                </span>
                {links.map((link) => (
                  <a
                    key={link}
                    href={getLocalePath("/#")}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Copyright */}
          <span className="text-xs text-white/30 font-medium">
            &copy; {new Date().getFullYear()} {t.copyright}
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-4" aria-label="Social media links">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
