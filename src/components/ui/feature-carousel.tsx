"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoItem {
  src: string;
  title: string;
  poster?: string;
}

interface VideoCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  videos: VideoItem[];
}

export const VideoCarousel = React.forwardRef<HTMLDivElement, VideoCarouselProps>(
  ({ title, subtitle, videos, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(
      Math.floor(videos.length / 2)
    );
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [timerResetKey, setTimerResetKey] = React.useState(0);
    const [loadedVideos, setLoadedVideos] = React.useState<Set<string>>(new Set());
    const videoRefsRef = React.useRef<Record<string, HTMLVideoElement>>({});

    const handlePlayClick = React.useCallback((src: string, videoElement: HTMLVideoElement) => {
      setLoadedVideos((prev) => new Set(prev).add(src));
    }, []);

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setTimerResetKey((prev) => prev + 1);
    }, [videos.length]);

    const handlePrev = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
      setTimerResetKey((prev) => prev + 1);
    }, [videos.length]);

    React.useEffect(() => {
      if (videos.length < 2 || isPlaying) return;
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 4000);
      return () => clearInterval(timer);
    }, [videos.length, isPlaying, timerResetKey]);

    if (videos.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full flex flex-col items-center justify-center  bg-background text-foreground p-4 md:p-6",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(128,90,213,0.3),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,123,255,0.3),rgba(255,255,255,0))]" />
        </div>

        <div className="z-10 flex w-full flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-4xl">
              {title}
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="relative w-full h-96 md:h-[480px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {videos.map((video, index) => {
                const offset = index - currentIndex;
                const total = videos.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={video.src}
                    className={cn(
                      "absolute w-72 md:w-96 lg:w-[500px] xl:w-[600px] transition-all duration-500 ease-in-out",
                      "flex flex-col items-center justify-center"
                    )}
                    style={{
                      transform: `
                        translateX(${pos * 45}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${pos * -10}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? "blur(0px)" : "blur(4px)",
                      visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                    }}
                  >
                    {/* Video Player */}
                    <video
                      ref={(el) => {
                        if (el) videoRefsRef.current[video.src] = el;
                      }}
                      src={video.src}
                      poster={video.poster}
                      controls={isCenter}
                      controlsList="nodownload"
                      preload={loadedVideos.has(video.src) ? "auto" : "none"}
                      onPlay={(e) => {
                        const videoElement = e.currentTarget;
                        setIsPlaying(true);
                        handlePlayClick(video.src, videoElement);
                      }}
                      onPause={() => setIsPlaying(false)}
                      onContextMenu={(e) => e.preventDefault()}
                      className="w-full aspect-video rounded-3xl border-2 border-foreground/10 shadow-2xl bg-black object-cover"
                      style={{ pointerEvents: isCenter ? "auto" : "none" }}
                    />
                    {/* Video Title */}
                    <h3 className="absolute top-full mt-4 text-sm md:text-base font-semibold text-center text-foreground max-w-xs line-clamp-2 whitespace-normal">
                      {video.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 h-14 w-14 z-20 text-foreground hover:bg-[#edf7fd] rounded-full transition-colors"
              onClick={handlePrev}
              aria-label="Previous video"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 h-14 w-14 z-20 text-foreground hover:bg-[#edf7fd] rounded-full transition-colors"
              onClick={handleNext}
              aria-label="Next video"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);