"use client";

import { Play } from "lucide-react";
import { useDictionary } from "@/lib/dictionary-context";

/* ─── Photo placeholder (no play button) ─── */
function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative bg-neutral-800 overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(100,100,100,0.15)_0%,transparent_70%)]" />
    </div>
  );
}

/* ─── Reusable video placeholder ─── */
function VideoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative bg-neutral-900 overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(80,80,80,0.18)_0%,transparent_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:border-white group-hover:bg-black/50 transition-all duration-200">
          <Play
            size={20}
            className="text-white fill-white translate-x-0.5"
            strokeWidth={0}
          />
        </div>
      </div>
    </div>
  );
}

export default function WorkPageContent() {
  const { dict } = useDictionary();
  const t = dict.workPage;

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-14 md:py-20">
      {/* ══ PAGE HEADER ══ */}
      <div className="mb-16 md:mb-24">
        <h1 className="display-lg text-primary uppercase leading-none mb-4">
          {t.pageTitle}
        </h1>
        <p className="text-base md:text-lg text-foreground/60 font-light max-w-lg leading-relaxed">
          {t.pageSubtitle}
        </p>
      </div>

      {/* ══ TVC SECTION ══ */}
      <section aria-labelledby="tvc-heading" className="mb-20 md:mb-28">
        <h2
          id="tvc-heading"
          className="display-md text-primary uppercase mb-10 md:mb-12"
        >
          {t.sections.tvc}
        </h2>

        {/* Mobile */}
        <div className="flex flex-col gap-8 md:hidden">
          {t.tvcItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div className="w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/80">
                  {t.labels.client}: {item.client}
                </p>
                <p className="text-sm text-foreground/80">
                  {t.labels.agency}: {item.agency}
                </p>
                <p className="text-sm text-foreground/80">
                  {t.labels.dir}: {item.dir}
                </p>
                {item.dop && (
                  <p className="text-sm text-foreground/80">
                    {t.labels.dop}: {item.dop}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[3fr_5fr] gap-5 mb-12 items-stretch">
            <div className="flex flex-col gap-5">
              <div className="w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
            </div>
            <div className="flex">
              <VideoPlaceholder className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {t.tvcItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-1.5">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/80">
                  {t.labels.client}: {item.client}
                </p>
                <p className="text-sm text-foreground/80">
                  {t.labels.agency}: {item.agency}
                </p>
                <p className="text-sm text-foreground/80">
                  {t.labels.dir}: {item.dir}
                </p>
                {item.dop && (
                  <p className="text-sm text-foreground/80">
                    {t.labels.dop}: {item.dop}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DŁUGIE FORMY INTERNETOWE SECTION ══ */}
      <section aria-labelledby="dlugie-heading" className="mb-20 md:mb-28">
        <h2
          id="dlugie-heading"
          className="display-md text-primary uppercase mb-10 md:mb-12"
        >
          {t.sections.longForm}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-4 md:gap-5 mb-0">
          {/* Left — WEBINARY */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                {t.dlugieFormyItems[0].title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.labels.client}: {t.dlugieFormyItems[0].client}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.labels.agency}: {t.dlugieFormyItems[0].agency}
              </p>
            </div>
          </div>
          {/* Right — CARREFOUR */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                {t.dlugieFormyItems[1].title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.labels.client}: {t.dlugieFormyItems[1].client}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.labels.agency}: {t.dlugieFormyItems[1].agency}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCT VIDEO SECTION ══ — fixed: single H2 */}
      <section
        aria-labelledby="product-video-heading"
        className="mb-20 md:mb-28"
      >
        <h2
          id="product-video-heading"
          className="sr-only"
        >
          {t.sections.productVideo}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.productVideo}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[4/3]">
              <VideoPlaceholder className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                {t.productVideoItems[0].title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.productVideoItems[0].client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.productVideoItems[0].agency}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[3fr_5fr] gap-x-5">
          <div className="flex flex-col gap-5">
            <div className="w-full aspect-[4/3]">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div
              className="display-md text-primary uppercase leading-none"
              aria-hidden="true"
            >
              {t.sections.productVideo.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 0 && <br />}
                  {i > 0 && " "}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                {t.productVideoItems[0].title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.productVideoItems[0].client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.productVideoItems[0].agency}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3D ANIMATION SECTION ══ — fixed: single H2 */}
      <section
        aria-labelledby="animation-heading"
        className="mb-20 md:mb-28"
      >
        <h2 id="animation-heading" className="sr-only">
          {t.sections.animation3d}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.animation3d}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black tracking-tight leading-tight text-base">
                {t.animation3d.title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.animation3d.client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.animation3d.agency}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.dir}: {t.animation3d.dir}
              </p>
            </div>
          </div>
          <div className="w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[5fr_3fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
          <div
            className="col-start-2 row-start-1 display-md text-primary uppercase text-right leading-none"
            aria-hidden="true"
          >
            {t.sections.animation3d}
          </div>
          <div className="col-start-1 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-2 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
            <h3 className="text-primary font-black tracking-tight leading-tight text-base mb-1">
              {t.animation3d.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.animation3d.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.animation3d.agency}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.dir}: {t.animation3d.dir}
            </p>
          </div>
          <div className="col-start-2 row-start-3 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ══ SPOTY DIGITAL SECTION ══ */}
      <section aria-labelledby="spoty-heading" className="mb-20 md:mb-28">
        <h2
          id="spoty-heading"
          className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
        >
          {t.sections.digitalSpots}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          <div className="aspect-[9/16]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[9/16]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[9/16]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[9/16]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="hidden md:block md:row-span-2">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[9/16]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-square">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-square">
            <VideoPlaceholder className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ══ MAKING OF + DATA PRESENTATION ══ — fixed: single H2 each */}
      <section aria-labelledby="making-of-heading" className="mb-20 md:mb-28">
        <h2 id="making-of-heading" className="sr-only">
          {t.sections.makingOf}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.makingOf}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">
                {t.makingOf.title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.makingOf.client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.makingOf.agency}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.dir}: {t.makingOf.dir}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.dop}: {t.makingOf.dop}
              </p>
            </div>
          </div>
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.dataPresentation}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">
                {t.dataPresentation.title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.dataPresentation.client}
              </p>
              <p className="text-sm font-bold text-foreground">
                {t.dataPresentation.note}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 grid-rows-[auto_auto_auto] gap-x-8 gap-y-5">
          <div
            className="col-start-1 row-start-1 display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.makingOf}
          </div>
          <div className="col-start-2 row-start-1 flex flex-col gap-0.5 text-right">
            <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">
              {t.dataPresentation.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.dataPresentation.client}
            </p>
            <p className="text-sm font-bold text-foreground">
              {t.dataPresentation.note}
            </p>
          </div>
          <div className="col-start-1 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-2 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
            <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight mb-1">
              {t.makingOf.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.makingOf.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.makingOf.agency}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.dir}: {t.makingOf.dir}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.dop}: {t.makingOf.dop}
            </p>
          </div>
          <div
            className="col-start-2 row-start-3 display-md text-primary uppercase leading-none text-right self-end"
            aria-hidden="true"
          >
            {t.sections.dataPresentation.split(" ").map((word, i) => (
              <span key={i}>
                {word}
                {i < t.sections.dataPresentation.split(" ").length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHOTO SHOOTS SECTION ══ */}
      <section
        aria-labelledby="photo-shoots-heading"
        className="mb-20 md:mb-28"
      >
        <h2
          id="photo-shoots-heading"
          className="display-md text-primary uppercase text-center mb-10 md:mb-12 leading-none"
        >
          {t.sections.photoShoots}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          {t.photoShoots.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className={
                  i === 0
                    ? "aspect-[4/3]"
                    : i === 4
                      ? "aspect-[3/5]"
                      : "aspect-[3/4]"
                }
              >
                <PhotoPlaceholder className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-primary font-black uppercase tracking-tight text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/80">
                  {t.labels.client}: {item.client}
                </p>
                <p className="text-xs text-foreground/80">
                  {t.labels.agency}: {item.agency}
                </p>
                <p className="text-xs text-foreground/80">
                  {t.labels.photo}: {item.photo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mb-4 items-stretch">
            <div className="aspect-[4/3]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="h-full">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="h-full">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mb-12">
            {t.photoShoots.slice(0, 3).map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/80">
                  {t.labels.client}: {item.client}
                </p>
                <p className="text-xs text-foreground/80">
                  {t.labels.agency}: {item.agency}
                </p>
                <p className="text-xs text-foreground/80">
                  {t.labels.photo}: {item.photo}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-4">
            <div className="col-start-1 row-start-1 aspect-[3/4]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-2 row-start-1 row-span-2 aspect-auto">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-3 row-start-1 flex flex-col gap-0.5 text-right">
              <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">
                {t.photoShoots[4].title}
              </h3>
              <p className="text-xs text-foreground/80">
                {t.labels.client}: {t.photoShoots[4].client}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.agency}: {t.photoShoots[4].agency}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.photo}: {t.photoShoots[4].photo}
              </p>
            </div>
            <div className="col-start-1 row-start-2 flex flex-col gap-0.5 self-end">
              <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">
                {t.photoShoots[3].title}
              </h3>
              <p className="text-xs text-foreground/80">
                {t.labels.client}: {t.photoShoots[3].client}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.agency}: {t.photoShoots[3].agency}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.photo}: {t.photoShoots[3].photo}
              </p>
            </div>
            <div className="col-start-3 row-start-2 aspect-[3/4]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCT SHOOTS SECTION ══ */}
      <section
        aria-labelledby="product-shoots-heading"
        className="mb-20 md:mb-28"
      >
        <h2
          id="product-shoots-heading"
          className="display-md text-primary uppercase text-center mb-10 md:mb-12 leading-none"
        >
          {t.sections.productShoots}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="aspect-[4/3]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-primary font-black uppercase tracking-tight text-sm">
                {t.productShoots[0].title}
              </h3>
              <p className="text-xs text-foreground/80">
                {t.labels.client}: {t.productShoots[0].client}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.agency}: {t.productShoots[0].agency}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.photo}: {t.productShoots[0].photo}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="aspect-[4/3]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="aspect-square">
                <PhotoPlaceholder className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-primary font-black uppercase tracking-tight text-sm">
                {t.productShoots[1].title}
              </h3>
              <p className="text-xs text-foreground/80">
                {t.labels.client}: {t.productShoots[1].client}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.agency}: {t.productShoots[1].agency}
              </p>
              <p className="text-xs text-foreground/80">
                {t.labels.photo}: {t.productShoots[1].photo}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="aspect-[3/4]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[5fr_2fr_5fr_3fr] grid-rows-[auto_auto] gap-4">
          <div className="col-start-1 row-start-1 h-72">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-2 col-span-2 row-start-1 h-72">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-4 row-start-1 row-span-2">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-2 flex flex-col gap-0.5 pt-1">
            <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">
              {t.productShoots[0].title}
            </h3>
            <p className="text-xs text-foreground/80">
              {t.labels.client}: {t.productShoots[0].client}
            </p>
            <p className="text-xs text-foreground/80">
              {t.labels.agency}: {t.productShoots[0].agency}
            </p>
            <p className="text-xs text-foreground/80">
              {t.labels.photo}: {t.productShoots[0].photo}
            </p>
          </div>
          <div className="col-start-2 row-start-2 aspect-square">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-3 row-start-2 flex flex-col gap-0.5 pt-1">
            <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">
              {t.productShoots[1].title}
            </h3>
            <p className="text-xs text-foreground/80">
              {t.labels.client}: {t.productShoots[1].client}
            </p>
            <p className="text-xs text-foreground/80">
              {t.labels.agency}: {t.productShoots[1].agency}
            </p>
            <p className="text-xs text-foreground/80">
              {t.labels.photo}: {t.productShoots[1].photo}
            </p>
          </div>
        </div>
      </section>

      {/* ══ POSTPRODUCTION SECTION ══ */}
      <section
        aria-labelledby="postproduction-heading"
        className="mb-20 md:mb-28"
      >
        <h2
          id="postproduction-heading"
          className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
        >
          {t.sections.postproduction}
        </h2>

        <div className="w-full aspect-[16/6]">
          <VideoPlaceholder className="w-full h-full" />
        </div>
      </section>

      {/* ══ OUT-OF-THE-BOX SECTION ══ */}
      <section
        aria-labelledby="outofthebox-heading"
        className="mb-20 md:mb-28"
      >
        <h2
          id="outofthebox-heading"
          className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
        >
          {t.sections.outOfTheBox}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="aspect-[9/16]">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">
              {t.outOfTheBox.videoDesc}
            </p>
          </div>
          <div className="aspect-[9/16]">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[9/16]">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-video">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="aspect-square">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">
              {t.outOfTheBox.vinylDesc}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-foreground/70 leading-relaxed font-semibold">
              {t.outOfTheBox.prizesTitle}
            </p>
            <ul className="text-xs text-foreground/70 leading-relaxed list-disc list-outside pl-4 space-y-1.5">
              {t.outOfTheBox.prizes.map((prize, i) => (
                <li key={i}>{prize}</li>
              ))}
            </ul>
          </div>
          <div className="aspect-video">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="aspect-[3/4]">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
              {t.outOfTheBox.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.outOfTheBox.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.outOfTheBox.agency}
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1.6fr_1.4fr_1.6fr_2fr_2fr] grid-rows-[auto_auto] gap-4 mb-4">
            <div className="col-start-1 row-start-1 aspect-auto min-h-48">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-2 row-start-1 flex items-start pt-1">
              <p className="text-xs text-foreground/70 leading-relaxed">
                {t.outOfTheBox.videoDesc}
              </p>
            </div>
            <div className="col-start-3 row-start-1">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-4 row-start-1">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-5 row-start-1">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="col-start-5 row-start-2 flex flex-col gap-2">
              <div className="aspect-square">
                <PhotoPlaceholder className="w-full h-full" />
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">
                {t.outOfTheBox.vinylDesc}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[2fr_3fr_2fr] gap-4 mb-8">
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-xs text-foreground/70 leading-relaxed font-semibold">
                {t.outOfTheBox.prizesTitle}
              </p>
              <ul className="text-xs text-foreground/70 leading-relaxed list-disc list-outside pl-4 space-y-1.5">
                {t.outOfTheBox.prizes.map((prize, i) => (
                  <li key={i}>{prize}</li>
                ))}
              </ul>
            </div>
            <div className="min-h-64">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div>
              <PhotoPlaceholder className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
              {t.outOfTheBox.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.outOfTheBox.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.outOfTheBox.agency}
            </p>
          </div>
        </div>
      </section>

      {/* ══ DOOH SECTION ══ — fixed: single H2 */}
      <section aria-labelledby="dooh-heading" className="mb-20 md:mb-28">
        <h2 id="dooh-heading" className="sr-only">
          {t.sections.dooh}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.dooh}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">
                {t.dooh.title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.dooh.client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.dooh.agency}
              </p>
            </div>
          </div>
          <div className="w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[5fr_3fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
          <div
            className="col-start-2 row-start-1 display-md text-primary uppercase text-right leading-none"
            aria-hidden="true"
          >
            {t.sections.dooh}
          </div>
          <div className="col-start-1 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-2 row-start-2 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
            <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight mb-1">
              {t.dooh.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.dooh.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.dooh.agency}
            </p>
          </div>
          <div className="col-start-2 row-start-3 w-full aspect-video">
            <VideoPlaceholder className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* ══ EVENTS SECTION ══ — fixed: single H2 */}
      <section aria-labelledby="events-heading" className="mb-20 md:mb-28">
        <h2 id="events-heading" className="sr-only">
          {t.sections.events}
        </h2>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <div
            className="display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.events}
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[4/3]">
              <VideoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                {t.events.gala.title}
              </h3>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.events.gala.client}
              </p>
            </div>
          </div>
          <div className="w-full aspect-[3/4]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[4/3]">
              <PhotoPlaceholder className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                  {t.events.polpharma.title}
                </h3>
                <div className="flex-shrink-0 w-12 h-12 border-2 border-foreground/30 bg-white grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                  <div className="bg-foreground" />
                  <div className="bg-transparent" />
                  <div className="bg-foreground" />
                  <div className="bg-transparent" />
                  <div className="bg-foreground" />
                  <div className="bg-transparent" />
                  <div className="bg-foreground" />
                  <div className="bg-transparent" />
                  <div className="bg-foreground" />
                </div>
              </div>
              <p className="text-sm text-foreground/80">
                {t.labels.client}: {t.events.polpharma.client}
              </p>
              <p className="text-sm text-foreground/80">
                {t.labels.agency}: {t.events.polpharma.agency}
              </p>
              <p className="text-sm text-foreground/80">
                {t.events.polpharma.note}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_1.2fr_1fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
          <div
            className="col-start-1 row-start-1 display-md text-primary uppercase leading-none"
            aria-hidden="true"
          >
            {t.sections.events}
          </div>
          <div className="col-start-2 row-start-1 row-span-3">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-3 row-start-1 row-span-2">
            <PhotoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-2 w-full aspect-[4/3]">
            <VideoPlaceholder className="w-full h-full" />
          </div>
          <div className="col-start-1 row-start-3 flex flex-col gap-1 self-start">
            <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
              {t.events.gala.title}
            </h3>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.events.gala.client}
            </p>
          </div>
          <div className="col-start-3 row-start-3 flex flex-col gap-1 self-start">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                {t.events.polpharma.title}
              </h3>
              <div className="flex-shrink-0 w-12 h-12 border-2 border-foreground/30 bg-white grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                <div className="bg-foreground" />
                <div className="bg-transparent" />
                <div className="bg-foreground" />
                <div className="bg-transparent" />
                <div className="bg-foreground" />
                <div className="bg-transparent" />
                <div className="bg-foreground" />
                <div className="bg-transparent" />
                <div className="bg-foreground" />
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              {t.labels.client}: {t.events.polpharma.client}
            </p>
            <p className="text-sm text-foreground/80">
              {t.labels.agency}: {t.events.polpharma.agency}
            </p>
            <p className="text-sm text-foreground/80">
              {t.events.polpharma.note}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
