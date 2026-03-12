const WORDS = [
  "Direction",
  "·",
  "Production",
  "·",
  "Colour",
  "·",
  "Sound",
  "·",
  "Brand Films",
  "·",
  "Commercials",
  "·",
  "Documentaries",
  "·",
  "Post Production",
  "·",
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS]; // duplicate for seamless loop

  return (
    <div
      className="w-full overflow-hidden border-y border-white/20 py-4 bg-transparent select-none"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
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
