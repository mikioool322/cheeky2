"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useDictionary } from "@/lib/dictionary-context";

const headerVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Features() {
  const { dict } = useDictionary();
  const t = dict.features;
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

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
          {t.heading1}
          <br />
          <span className="text-primary">{t.heading2}</span>
        </h2>
        <p className="max-w-sm text-base text-muted-foreground leading-relaxed font-light">
          {t.description}
        </p>
      </motion.div>

      {/* Services list */}
      <div ref={listRef} className="divide-y divide-neutral-100">
        {t.services.map((service, i) => {
          return (
            <div
              key={service.num}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-4 md:gap-8 py-8 md:py-10 transition-colors duration-200 -mx-6 md:-mx-10 px-6 md:px-10"
            >
              {/* Number */}
              <span className="hidden md:block text-xs font-medium text-muted-foreground tracking-widest pt-1">
                {service.num}
              </span>

              {/* Title + icon */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-neutral-200 group-hover:border-primary group-hover:bg-primary transition-all duration-200">
                  <Image
                    src="/emoji_outline.png"
                    alt=""
                    width={18}
                    height={18}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-black text-2xl md:text-3xl tracking-tight leading-none">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light pt-1">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
