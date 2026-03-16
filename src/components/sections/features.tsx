"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Clapperboard, Smartphone, Mic, Camera, Box, Film, Zap } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: Clapperboard,
    title: "TVC",
    description:
      "Robimy produkcje sprawnie i konkretnie; przy nas zawsze możesz czuć się bezpiecznie. Od początku procesu doradzamy, planujemy, optymalizujemy i szukamy rozwiązań, a przy tym utrzymujemy standardy i dbamy o ekipę.",
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Social Media Content",
    description:
      "Wszechogarniający nas content video to po części nasza sprawka. Robimy materiały na social media, niestandardowe formaty w niestandardowych okolicznościach, często w nieoczekiwanym miejscu i czasie. Żadna specyfikacja techniczna nie jest nam straszna.",
  },
  {
    num: "03",
    icon: Mic,
    title: "Radio",
    description:
      "Organizujemy sesje nagraniowe stacjonarne lub transmisje online. Pomagamy w wyborze lektorów oraz doborze muzyki. Koordynujemy cały proces i dbamy o każdy detal od początku do końca.",
  },
  {
    num: "04",
    icon: Camera,
    title: "Photo & Video Shoots",
    description:
      "Organizujemy sesje fotograficzne w studio, w plenerze, w lokacji, gdzie tylko zechcesz – możemy też zawsze podpowiedzieć, gdzie będzie najlepiej. Prowadzimy castingi, załatwiamy scenografie, kostiumy, make'upy – wszystko co konieczne, a przy tym dbamy o komfort pracy na planie i miłą atmosferę.",
  },
  {
    num: "05",
    icon: Box,
    title: "3D Animation",
    description:
      "W naszym portfolio znajdziesz całą serię animowanych filmów z postaciami 3D. Generujemy świat 3D od podstaw, modelujemy, animujemy, renderujemy, później to wszystko składamy i oprawiamy dźwiękiem – dzięki zoptymalizowanemu pipeline'owi przekłada się to na atrakcyjny czas realizacji i budżet. Nie kłamiemy!",
  },
  {
    num: "06",
    icon: Film,
    title: "Postproduction",
    description:
      "Znamy się na tym. Robimy dokładnie to co inne studia postprodukcyjne, tylko lepiej i szybciej. Nasz zakres prac uwzględnia: montaż offline, korekcję koloru, montaż online, animacje 2D, compositing, rendering, tracking 3D. Nie wahaj się napisać do nas w tej sprawie.",
  },
  {
    num: "07",
    icon: Zap,
    title: "Out-of-the-Box",
    description:
      "Powinniśmy od tego zacząć! Jeśli masz niestandardowy pomysł i nie wiesz, jak się zabrać za jego realizację – koniecznie zgłoś się do nas. Jesteśmy ekipą od zadań specjalnych. Nie ma głupich pomysłów, a dla nas niemożliwe nie istnieje.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
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
          const SECTION_ANCHORS: Record<string, string> = {
            "TVC": "#tvc-heading",
            "Social Media Content": "#spoty-heading",
            "Radio": "#making-of-heading",
            "Photo & Video Shoots": "#photo-shoots-heading",
            "3D Animation": "#animation-heading",
            "Postproduction": "#postproduction-heading",
            "Out-of-the-Box": "#outofthebox-heading",
          };

          const linkTarget = SECTION_ANCHORS[service.title] ?? "#services";

          return (
            <Link
              key={service.num}
              href={`/work${linkTarget}`}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-start gap-4 md:gap-8 py-8 md:py-10 transition-colors duration-200 hover:bg-neutral-50 -mx-6 md:-mx-10 px-6 md:px-10"
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
