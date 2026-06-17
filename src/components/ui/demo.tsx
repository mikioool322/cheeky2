"use client";

import React from "react";
import { HeroSection } from "@/components/ui/feature-carousel";

const videos = [
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
    title: "Big Buck Bunny",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/elephant-dream.mp4",
    title: "Elephant Dream",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/for-big-laude.mp4",
    title: "For Big Laude",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
    title: "Sintel",
  },
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/tears-of-steel.mp4",
    title: "Tears of Steel",
  },
];

export default function FeatureCarouselDemo() {
  const title = (
    <>
      Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Videos
      </span>
    </>
  );

  return (
    <div className="w-full">
      <HeroSection
        title={title}
        subtitle="Watch our latest production work and creative projects."
        videos={videos}
      />
    </div>
  );
}
