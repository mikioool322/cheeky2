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
  // Repeat the word list multiple times so the marquee always fills wide viewports
  const items = Array(4).fill(WORDS).flat();

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
