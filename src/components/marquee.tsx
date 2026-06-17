"use client";

import { useDictionary } from "@/lib/dictionary-context";

export default function Marquee() {
  const { dict } = useDictionary();
  const items = Array(4).fill(dict.marquee.words).flat();

  return (
    <div
      className="w-full overflow-hidden border-y border-white/20 py-4 bg-transparent select-none"
      aria-hidden="true"
    >
      <div className="inline-flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className={[
              "inline-block px-3 text-sm font-medium uppercase tracking-widest",
              word === "·"
                ? "text-white"
                : "text-white/60",
            ].join(" ")}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
