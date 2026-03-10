"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Per-item entry animation: translateX/Y offsets (hidden state)
const INITIAL_TRANSFORM: Record<number, string> = {
  0: "translateY(70px)",  // slide from bottom
  1: "translateX(-70px)", // slide from left
  2: "translateX(70px)",  // slide from right
  3: "translateX(-70px)", // slide from left
  4: "translateX(70px)",  // slide from right
  5: "translateY(70px)",  // slide from bottom
};

const PROJECTS = [
  {
    id: 1,
    title: "APEX RUNNING",
    category: "Brand Film",
    year: "2025",
    bg: "bg-neutral-900",
    accent: "bg-primary",
    span: "md:col-span-2",
    description: "A 90-second manifesto for the world's fastest running brand.",
  },
  {
    id: 2,
    title: "VOLTA SPIRITS",
    category: "Commercial",
    year: "2025",
    bg: "bg-neutral-100",
    accent: "bg-foreground",
    span: "md:col-span-1",
    description: "Cinematic launch campaign across 12 global markets.",
  },
  {
    id: 3,
    title: "MIREN OLIVE",
    category: "Product Film",
    year: "2024",
    bg: "bg-[oklch(0.647_0.234_32.6)]",
    accent: "bg-white",
    span: "md:col-span-1",
    description: "Slow luxury for a Basque premium oil brand.",
  },
  {
    id: 4,
    title: "NORTHERN TRUST",
    category: "Corporate",
    year: "2024",
    bg: "bg-neutral-800",
    accent: "bg-primary",
    span: "md:col-span-1",
    description: "Thought leadership content series — 8 episodes.",
  },
  {
    id: 5,
    title: "JADE ATELIER",
    category: "Fashion Film",
    year: "2024",
    bg: "bg-neutral-200",
    accent: "bg-foreground",
    span: "md:col-span-1",
    description: "SS24 campaign for a Paris-based couture house.",
  },
  {
    id: 6,
    title: "DEEP CURRENT",
    category: "Documentary",
    year: "2023",
    bg: "bg-neutral-900",
    accent: "bg-primary",
    span: "md:col-span-2",
    description: "Marine conservation doc screened at 6 international festivals.",
  },
];

export default function Portfolio() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(i));
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="work"
      aria-label="Our work"
      className="px-6 md:px-10 max-w-screen-xl mx-auto py-24 md:py-36"
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <h2 className="display-lg text-foreground">
          Selected
          <br />
          <span className="text-primary">work</span>
        </h2>
        <p className="max-w-sm text-base text-muted-foreground leading-relaxed font-light">
          A handpicked cut of projects across film, brand and commercial
          — chosen for craft, not quantity.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            ref={(el) => { itemRefs.current[idx] = el; }}
            className={[
              "group relative overflow-hidden cursor-pointer",
              project.span,
              project.bg,
            ].join(" ")}
            aria-label={`${project.title} — ${project.category}`}
            style={{
              transform: visible.has(idx) ? "none" : INITIAL_TRANSFORM[idx],
              opacity: visible.has(idx) ? 1 : 0,
              transition: "transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.75s ease",
            }}
          >
            {/* Aspect ratio spacer */}
            <div className="aspect-[16/9] relative">
              {/* Decorative grid-dot pattern */}
              <div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Large background text */}
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className="font-black text-[20vw] md:text-[12vw] leading-none opacity-5 text-current"
                >
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top: category + year */}
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={[
                      "rounded-none border-current/20 text-[10px] tracking-widest uppercase px-2.5 py-0.5 font-medium",
                      project.bg.includes("neutral-9") || project.bg.includes("neutral-8")
                        ? "text-white"
                        : project.bg.includes("0.647")
                        ? "text-white"
                        : "text-foreground",
                    ].join(" ")}
                  >
                    {project.category}
                  </Badge>
                  <span
                    className={[
                      "text-xs font-medium",
                      project.bg.includes("neutral-9") || project.bg.includes("neutral-8")
                        ? "text-white/50"
                        : project.bg.includes("0.647")
                        ? "text-white/60"
                        : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Bottom: title + arrow */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3
                      className={[
                        "font-black text-2xl md:text-3xl tracking-tight leading-none mb-1",
                        project.bg.includes("neutral-9") || project.bg.includes("neutral-8")
                          ? "text-white"
                          : project.bg.includes("0.647")
                          ? "text-white"
                          : "text-foreground",
                      ].join(" ")}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={[
                        "text-sm font-light leading-snug max-w-56 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200",
                        project.bg.includes("neutral-9") || project.bg.includes("neutral-8")
                          ? "text-white/70"
                          : project.bg.includes("0.647")
                          ? "text-white/80"
                          : "text-muted-foreground",
                      ].join(" ")}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={[
                      "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full",
                      "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                      "transition-all duration-200",
                      project.accent,
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={16}
                      className={
                        project.accent === "bg-white" || project.accent === "bg-foreground"
                          ? "text-background"
                          : "text-white"
                      }
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View all */}
      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          Commission your project
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
