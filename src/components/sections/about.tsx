"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const CLIENTS = [
  "Nike",
  "Hermès",
  "Dyson",
  "Red Bull",
  "Aesop",
  "Net-a-Porter",
  "Bang & Olufsen",
  "Wallpaper*",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About cheeky"
      className="border-t border-neutral-100 px-6 md:px-10 max-w-screen-xl mx-auto py-24 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center overflow-hidden">
        {/* Statement */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <Badge
            variant="outline"
            className="rounded-none w-fit border-neutral-200 text-muted-foreground text-[10px] uppercase tracking-widest"
          >
            Est. 2019
          </Badge>
          <h2 className="display-lg text-foreground">
            We build
            <br />
            <span className="text-primary">visual</span>
            <br />
            legacies.
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-sm">
            cheeky started in a Shoreditch basement with two editors and a shared
            Avid licence. Today we&apos;re a 30-strong studio with offices in London,
            New York and Paris — still run by the people who cut the first reel.
          </p>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-sm">
            We don&apos;t take on more than we can handle. We don&apos;t hide costs.
            We don&apos;t disappear after delivery.
          </p>
        </div>

        {/* Clients marquee-style grid */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Brands we&apos;ve worked with
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-100">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="bg-[rgb(238,247,253)] flex items-center justify-center py-6 px-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
