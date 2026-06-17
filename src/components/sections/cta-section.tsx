"use client";

import { ArrowRight } from "lucide-react";
import { useDictionary } from "@/lib/dictionary-context";

export default function CtaSection() {
  const { dict } = useDictionary();
  const t = dict.cta;

  return (
    <section
      id="contact"
      aria-label="Contact and call to action"
      className="bg-[#ff6712] text-white overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24 md:py-36 flex flex-col gap-12">
        {/* Headline */}
        <div>
          <h2 className="display-xl text-white leading-none">
            {t.heading1}
            <br />
            {t.heading2}
            <br />
            {t.heading3}
          </h2>
        </div>

        {/* Description + form */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 md:items-center">
          <p className="text-white/80 text-lg font-light max-w-sm leading-relaxed">
            {t.description}
          </p>

          {/* Contact form */}
          <form
            className="flex-1 flex flex-col gap-4 max-w-lg"
            aria-label="Contact form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="cta-name" className="text-xs uppercase tracking-widest font-medium text-white/60">
                  {t.form.name}
                </label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder={t.form.namePlaceholder}
                  autoComplete="name"
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm font-medium rounded-none focus:outline-none focus:border-white transition-colors duration-150"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cta-email" className="text-xs uppercase tracking-widest font-medium text-white/60">
                  {t.form.email}
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  autoComplete="email"
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm font-medium rounded-none focus:outline-none focus:border-white transition-colors duration-150"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cta-message" className="text-xs uppercase tracking-widest font-medium text-white/60">
                {t.form.brief}
              </label>
              <textarea
                id="cta-message"
                rows={4}
                placeholder={t.form.briefPlaceholder}
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm font-medium rounded-none focus:outline-none focus:border-white transition-colors duration-150 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 bg-[rgb(238,247,253)] text-[#ff6712] font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-none hover:bg-[rgb(238,247,253)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(238,247,253)] group"
            >
              {t.form.submit}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>

        {/* Direct contact lines */}
        <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">{t.contact.email}</span>
            <a
              href="mailto:hello@cheekystudio.pl"
              className="text-sm font-semibold text-white hover:text-white/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              hello@cheekystudio.pl
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">{t.contact.phone}</span>
            <a
              href="tel:+48503990040"
              className="text-sm font-semibold text-white hover:text-white/70 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              +48 503 990 040
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">{t.contact.location}</span>
            <span className="text-sm font-semibold text-white">{t.contact.locationValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
