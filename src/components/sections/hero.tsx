"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Marquee from "@/components/marquee";
import { useDictionary } from "@/lib/dictionary-context";

// Brand-orange radial glow on near-black — rgb(255, 90, 0) = #FF5A00
const GRADIENT_COLORS = [
  "#000000", // deep black core
  "#2D0A00", // very dark warm
  "#FF5A00", // brand orange peak
  "#FF5A00", // solid orange
  "#FF5A00", // solid orange
  "#FF5A00", // solid orange
  "#FF5A00", // solid orange edge
];
const GRADIENT_STOPS = [1, 20, 30, 45, 60, 75, 100];

const STAT_VALUES = ["120+", "8", "40+", "3"];

export default function Hero() {
  const { dict } = useDictionary();
  const t = dict.hero;

  const STATS = [
    { value: STAT_VALUES[0], label: t.stats.projects },
    { value: STAT_VALUES[1], label: t.stats.years },
    { value: STAT_VALUES[2], label: t.stats.brands },
    { value: STAT_VALUES[3], label: t.stats.continents },
  ];

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[50vh] md:min-h-[50vh] xl:min-h-screen overflow-hidden bg-black"
    >
      {/* Animated gradient fills the full viewport */}
      <AnimatedGradientBackground
        gradientColors={GRADIENT_COLORS}
        gradientStops={GRADIENT_STOPS}
        startingGap={220}
        Breathing
        breathingRange={4}
        animationSpeed={0.02}
        topOffset={10}
        containerClassName="bg-black"
      />

      {/* Content — centred, dark-on-light flipped to light-on-dark */}
      <div className="relative z-10 md:min-h-[50vh] xl:min-h-screen flex flex-col justify-between pt-4 pb-4 px-6 md:px-10 max-w-screen-xl mx-auto">
        {/* Top area: badge + headline */}
        <div className="flex flex-col gap-8 pt-16 md:pt-24 lg:pt-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Badge
              variant="outline"
              className="rounded-none border-white/25 text-white/60 font-medium tracking-widest uppercase text-[10px] px-3 py-1 bg-white/5"
            >
              {t.badge}
            </Badge>
            <span className="text-[10px] tracking-widest uppercase text-white/40 font-medium">
              {t.est}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display-xl text-white text-balance animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            {t.headlineLine1}
            <br />
            {t.headlineLine2}
            <br />
            <span className="text-[#FF5A00]">{t.headlineLine3}</span>
          </h1>

          {/* Sub-copy */}
          <p
            className="max-w-xl text-base md:text-xl font-light text-white/65 leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {t.sub1}
            <br className="hidden sm:block" />
            {t.sub2}
          </p>

          {/* CTA above fold */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#work"
              className="inline-flex items-center shrink-0 rounded-none font-bold tracking-tight h-12 px-8 bg-[#FF5A00] hover:bg-[#e05000] text-white text-base group transition-colors duration-200 ease-in-out border border-[#eef7fd]"
            >
              {t.ctaWork}
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                aria-hidden="true"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center shrink-0 rounded-none font-medium h-12 px-6 text-base text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 ease-in-out group gap-2"
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-[#FF5A00] transition-colors duration-200 ease-in-out"
                aria-hidden="true"
              >
                <Play size={12} className="text-white fill-white" />
              </span>
              {t.ctaContact}
            </a>
          </div>
        </div>


      </div>

      {/* Marquee sits on the animated gradient */}
      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  );
}
