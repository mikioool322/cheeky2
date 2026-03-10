"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clapperboard, Film, Palette, Volume2, Zap, Globe } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: Clapperboard,
    title: "Direction",
    description:
      "Conceptual vision translated into moving image. We direct commercials, brand films, music videos and documentary short-forms that earn attention.",
  },
  {
    num: "02",
    icon: Film,
    title: "Production",
    description:
      "Full-service production management — locations, talent, crew, logistics. We assemble the right team for every project, anywhere in the world.",
  },
  {
    num: "03",
    icon: Palette,
    title: "Colour Grading",
    description:
      "From technical correction to full creative look development. We build the visual language that makes your project unmistakable.",
  },
  {
    num: "04",
    icon: Volume2,
    title: "Sound Design",
    description:
      "Bespoke audio — score composition, foley, mix and mastering. Because the best visuals deserve to be heard at the same level.",
  },
  {
    num: "05",
    icon: Zap,
    title: "Post Production",
    description:
      "Edit, VFX, motion graphics and delivery across all specs. Fast, transparent, no surprises.",
  },
  {
    num: "06",
    icon: Globe,
    title: "Brand Strategy",
    description:
      "We help brands find the story only they can tell — from a single manifesto to a multi-year content architecture.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

export default function Features() {
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const listInView = useInView(listRef, { once: true, margin: "-5% 0px" });

  return (
    <section
      id="services"
      aria-label="Our services"
      className="px-6 md:px-10 max-w-screen-xl mx-auto py-24 md:py-36"
    >
      {/* Section header */}
      <motion.div
        ref={headerRef}
        variants={headerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end gap-6 md:justify-between"
      >
        <h2 className="display-lg">
          What we
          <br />
          <span className="text-primary">do</span>
        </h2>
        <p className="max-w-sm text-base text-muted-foreground leading-relaxed font-light">
          End-to-end production from concept to delivery.
          No hand-offs to strangers. One team, one vision.
        </p>
      </motion.div>

      {/* Services list */}
      <div ref={listRef} className="divide-y divide-neutral-100">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.num}
              custom={i}
              variants={serviceVariants}
              initial="hidden"
              animate={listInView ? "visible" : "hidden"}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-4 md:gap-8 py-8 md:py-10 transition-colors duration-200 hover:bg-neutral-50 -mx-6 md:-mx-10 px-6 md:px-10"
            >
              {/* Number */}
              <span className="hidden md:block text-xs font-medium text-muted-foreground tracking-widest pt-1">
                {service.num}
              </span>

              {/* Title + icon */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-neutral-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-black text-2xl md:text-3xl tracking-tight leading-none">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light pt-1">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
