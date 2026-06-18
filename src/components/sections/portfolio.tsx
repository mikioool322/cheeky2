"use client";

import { VideoCarousel } from "@/components/ui/feature-carousel";
import { useDictionary } from "@/lib/dictionary-context";

const PUBLIC_VIDEOS = [
  { path: "/GEELY 15s A_TV_OUT_1_1080.mp4", title: "GEELY 15s A" },
  { path: "/GEELY 15s B_TV_OUT_1_1080.mp4", title: "GEELY 15s B" },
  { path: "/Ministerstwo Cyfryzacji_CYBER_15s Film_1v2_16x9_digital_-1db_20260509_1080.mp4", title: "Ministerstwo Cyfryzacji CYBER 1" },
  { path: "/Ministerstwo Cyfryzacji_CYBER_15s Film_2v3_16x9_digital_-1db_20260509_1080.mp4", title: "Ministerstwo Cyfryzacji CYBER 2" },
  { path: "/NCK_30s_TV-23LUFS_2025_11_07-prev_1080.mp4", title: "NCK 30s" },
  { path: "/SuperBet BetBuilder 30 final_1920x1080_digi_-1db_2026_06_03_1080.mp4", title: "SuperBet BetBuilder" },
  { path: "/SuperBet Sponsoring 30s_-1db_digi_2026_05_26_1080.mp4", title: "SuperBet Sponsoring" },
  { path: "/SuperBet SuperBooster 15_1920x1080_TV_-23LUFS_2026_06_03_v2_prev_1080.mp4", title: "SuperBet SuperBooster" },
  { path: "/VECTRA Disney 16n9 YT EMIS SUB_1080.mp4", title: "VECTRA Disney" },
  { path: "/VECTRA Krolewska 30 iNet emis_1080.mp4", title: "VECTRA Królewska" },
  { path: "/VECTRA Netflix Bridgertonowie_1080.mp4", title: "VECTRA Netflix Bridgerton" },
];

const PUBLIC_VIDEO_POSTERS = [
  "/GEELY 15s A_TV_OUT_1_1080_poster.webp",
  "/GEELY 15s B_TV_OUT_1_1080_poster.webp",
  "/Ministerstwo Cyfryzacji_CYBER_15s Film_1v2_16x9_digital_-1db_20260509_1080_poster.webp",
  "/Ministerstwo Cyfryzacji_CYBER_15s Film_2v3_16x9_digital_-1db_20260509_1080_poster.webp",
  "/NCK_30s_TV-23LUFS_2025_11_07-prev_1080_poster.webp",
  "/SuperBet BetBuilder 30 final_1920x1080_digi_-1db_2026_06_03_1080_poster.webp",
  "/SuperBet Sponsoring 30s_-1db_digi_2026_05_26_1080_poster.webp",
  "/SuperBet SuperBooster 15_1920x1080_TV_-23LUFS_2026_06_03_v2_prev_1080_poster.webp",
  "/VECTRA Disney 16n9 YT EMIS SUB_1080_poster.webp",
  "/VECTRA Krolewska 30 iNet emis_1080_poster.webp",
  "/VECTRA Netflix Bridgertonowie_1080_poster.webp",
];

export default function Portfolio() {
  const { dict } = useDictionary();
  const t = dict.portfolio;

  const videos = t.projects.map((project, index) => ({
    src: PUBLIC_VIDEOS[index % PUBLIC_VIDEOS.length].path,
    poster: PUBLIC_VIDEO_POSTERS[index % PUBLIC_VIDEO_POSTERS.length],
    title: project.title,
  }));

  return (
    <section
      id="work"
      aria-label="Our work"
      className="px-6 md:px-10 max-w-screen-xl mx-auto py-24 md:py-36 bg-[#FF5A00]"
    >
      <VideoCarousel
        className="bg-transparent text-white min-h-0 p-0"
        title={
          <>
            {t.heading1} <span className="text-black">{t.heading2}</span>
          </>
        }
        subtitle={t.description}
        videos={videos}
      />
    </section>
  );
}
