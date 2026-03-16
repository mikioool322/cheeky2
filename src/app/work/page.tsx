import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Play } from "lucide-react";

/* ─── Data ─── */
const TVC_ITEMS = [
  {
    id: "vision-express",
    title: 'VISION EXPRESS" 30TH"',
    client: "Vision Express",
    agency: "Walk Creative",
    dir: "Tomasz Knittel",
    dop: "Igor Połaniewicz",
  },
  {
    id: "nck",
    title: "NCK",
    client: "Narodowe Centrum Kultury",
    agency: "Freundschaft",
    dir: "Jan Foryś",
    dop: "Kajetan Plis",
  },
  {
    id: "dkms",
    title: "DKMS",
    client: "DKMS",
    agency: "Walk Creative",
    dir: "Tomasz Knittel",
    dop: null,
  },
];

/* ─── Długie formy internetowe ─── */
const DLUGIE_FORMY_ITEMS = [
  {
    id: "webinary",
    title: "WEBINARY (dietetyczny i kulinarny)",
    client: "UPEMI",
    agency: "Walk Creative",
    dir: null,
    dop: null,
  },
  {
    id: "carrefour",
    title: 'CARREFOUR \u201eRODZINA NA WIDELCU\u201d serial internetowy (4 sezony)',
    client: "Carrefour",
    agency: "Saatchi&Saatchi IS",
    dir: null,
    dop: null,
  },
];

/* ─── Product Video ─── */
const PRODUCT_VIDEO_ITEMS = [
  {
    id: "neonail-futuro",
    title: "NEONAIL FUTURO",
    client: "NEONAIL",
    agency: "Endless",
  },
];

/* ─── 3D Animation ─── */
const ANIMATION_3D = {
  main: {
    title: "Vectra",
    client: "Vectra",
    agency: "Endless",
    dir: "Bartek Kędzierski",
  },
};

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

/* ─── Reusable placeholder component ─── */
function VideoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative bg-neutral-900 overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Subtle noise/grain overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(80,80,80,0.18)_0%,transparent_70%)]" />
      {/* Play button */}
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

export default function PortfolioPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-[rgb(238,247,253)] pt-16">
        {/* ── Page content ── */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-14 md:py-20">

          {/* ══ PAGE HEADER ══ */}
          <div className="mb-16 md:mb-24">
            <h1 className="display-lg text-primary uppercase leading-none mb-4">
              Nasze portfolio
            </h1>
            <p className="text-base md:text-lg text-foreground/60 font-light max-w-lg leading-relaxed">
              Filmy, kampanie i projekty, które mówią same za siebie — od TVC po animację 3D.
            </p>
          </div>

          {/* ══ TVC SECTION ══ */}
          <section aria-labelledby="tvc-heading" className="mb-20 md:mb-28">

            <h2 id="tvc-heading" className="display-md text-primary uppercase mb-10 md:mb-12">
              TVC
            </h2>

            {/* ── Mobile: heading → each video paired with its info ── */}
            <div className="flex flex-col gap-8 md:hidden">
              {TVC_ITEMS.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <div className="w-full aspect-video">
                    <VideoPlaceholder className="w-full h-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">{item.title}</h3>
                    <p className="text-sm text-foreground/80">Client: {item.client}</p>
                    <p className="text-sm text-foreground/80">Agency: {item.agency}</p>
                    <p className="text-sm text-foreground/80">DIR: {item.dir}</p>
                    {item.dop && <p className="text-sm text-foreground/80">DOP: {item.dop}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop: original grouped layout ── */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[3fr_5fr] gap-5 mb-12 items-stretch">
                <div className="flex flex-col gap-5">
                  <div className="w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
                  <div className="w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
                </div>
                <div className="flex"><VideoPlaceholder className="w-full h-full" /></div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {TVC_ITEMS.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1.5">
                    <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/80">Client: {item.client}</p>
                    <p className="text-sm text-foreground/80">Agency: {item.agency}</p>
                    <p className="text-sm text-foreground/80">DIR: {item.dir}</p>
                    {item.dop && <p className="text-sm text-foreground/80">DOP: {item.dop}</p>}
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
              D&#322;UGIE FORMY INTERNETOWE
            </h2>

            {/* ── Thumbnails: left smaller (3fr), right larger (5fr) ── */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-4 md:gap-5 mb-0">

              {/* Left — WEBINARY */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-video">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                    {DLUGIE_FORMY_ITEMS[0].title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Client: {DLUGIE_FORMY_ITEMS[0].client}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Agency: {DLUGIE_FORMY_ITEMS[0].agency}
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
                    {DLUGIE_FORMY_ITEMS[1].title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Client: {DLUGIE_FORMY_ITEMS[1].client}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Agency: {DLUGIE_FORMY_ITEMS[1].agency}
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* ══ PRODUCT VIDEO SECTION ══ */}
          <section aria-labelledby="product-video-heading" className="mb-20 md:mb-28">

            {/* ── Mobile: heading first, then video pairs ── */}
            <div className="md:hidden flex flex-col gap-8">
              <h2 id="product-video-heading" className="display-md text-primary uppercase leading-none">
                PRODUCT VIDEO
              </h2>
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
                  <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">{PRODUCT_VIDEO_ITEMS[0].title}</h3>
                  <p className="text-sm text-foreground/80">Client: {PRODUCT_VIDEO_ITEMS[0].client}</p>
                  <p className="text-sm text-foreground/80">Agency: {PRODUCT_VIDEO_ITEMS[0].agency}</p>
                </div>
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-[3fr_5fr] gap-x-5">
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-[4/3]">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <h2 id="product-video-heading-desktop" className="display-md text-primary uppercase leading-none">
                  PRODUCT<br />VIDEO
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-video">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">{PRODUCT_VIDEO_ITEMS[0].title}</h3>
                  <p className="text-sm text-foreground/80">Client: {PRODUCT_VIDEO_ITEMS[0].client}</p>
                  <p className="text-sm text-foreground/80">Agency: {PRODUCT_VIDEO_ITEMS[0].agency}</p>
                </div>
              </div>
            </div>

          </section>

          {/* ══ 3D ANIMATION SECTION ══ */}
          <section aria-labelledby="animation-heading" className="mb-20 md:mb-28">

            {/* ── Mobile: heading → large thumb + info → 2 small thumbs ── */}
            <div className="md:hidden flex flex-col gap-8">
              <h2 id="animation-heading" className="display-md text-primary uppercase leading-none">
                3D ANIMATION
              </h2>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-video">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-black tracking-tight leading-tight text-base">{ANIMATION_3D.main.title}</h3>
                  <p className="text-sm text-foreground/80">Client: {ANIMATION_3D.main.client}</p>
                  <p className="text-sm text-foreground/80">Agency: {ANIMATION_3D.main.agency}</p>
                  <p className="text-sm text-foreground/80">DIR: {ANIMATION_3D.main.dir}</p>
                </div>
              </div>
              <div className="w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-[5fr_3fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
              <h2 className="col-start-2 row-start-1 display-md text-primary uppercase text-right leading-none">
                3D ANIMATION
              </h2>
              <div className="col-start-1 row-start-2 w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="col-start-2 row-start-2 w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
                <h3 className="text-primary font-black tracking-tight leading-tight text-base mb-1">{ANIMATION_3D.main.title}</h3>
                <p className="text-sm text-foreground/80">Client: {ANIMATION_3D.main.client}</p>
                <p className="text-sm text-foreground/80">Agency: {ANIMATION_3D.main.agency}</p>
                <p className="text-sm text-foreground/80">DIR: {ANIMATION_3D.main.dir}</p>
              </div>
              <div className="col-start-2 row-start-3 w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
            </div>

          </section>

          {/* ══ SPOTY DIGITAL SECTION ══ */}
          {/*
            5-col grid, 2 rows:
            Row 1, cols 1-4 : portrait 9:16 thumbs
            Row 1-2, col 5  : one tall thumb (row-span-2)
            Row 2, cols 1-4 : mixed-ratio thumbs
          */}
          <section aria-labelledby="spoty-heading" className="mb-20 md:mb-28">

            <h2
              id="spoty-heading"
              className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
            >
              SPOTY DIGITAL
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">

              {/* Row 1 — col 1: portrait */}
              <div className="aspect-[9/16]">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 1 — col 2: portrait */}
              <div className="aspect-[9/16]">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 1 — col 3: portrait */}
              <div className="aspect-[9/16]">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 1 — col 4: portrait */}
              <div className="aspect-[9/16]">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Col 5 — spans both rows: tall portrait */}
              <div className="hidden md:block md:row-span-2">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 2 — col 1: portrait */}
              <div className="aspect-[9/16]">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 2 — col 2: square */}
              <div className="aspect-square">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 2 — col 3: landscape */}
              <div className="aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>

              {/* Row 2 — col 4: square */}
              <div className="aspect-square">
                <VideoPlaceholder className="w-full h-full" />
              </div>

            </div>

          </section>

          {/* ══ MAKING OF + DATA PRESENTATION SECTION ══ */}
          <section aria-labelledby="making-of-heading" className="mb-20 md:mb-28">

            {/* ── Mobile: heading → DKMS pair → CIECH pair → DATA PRESENTATION ── */}
            <div className="md:hidden flex flex-col gap-8">
              <h2 id="making-of-heading" className="display-md text-primary uppercase leading-none">
                MAKING OF
              </h2>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-video">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">DKMS MAKING OF CAMPAIGN</h3>
                  <p className="text-sm text-foreground/80">Client: Fundacja DKMS</p>
                  <p className="text-sm text-foreground/80">Agency: Walk Creatives</p>
                  <p className="text-sm text-foreground/80">DIR: Tomasz Knittel</p>
                  <p className="text-sm text-foreground/80">DOP: Łukasz Łatanik</p>
                </div>
              </div>
              <h2 className="display-md text-primary uppercase leading-none">
                DATA PRESENTATION
              </h2>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-video">
                  <VideoPlaceholder className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">CIECH</h3>
                  <p className="text-sm text-foreground/80">Client: Grupa Ciech</p>
                  <p className="text-sm font-bold text-foreground">we did postproduction</p>
                </div>
              </div>
              
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-2 grid-rows-[auto_auto_auto] gap-x-8 gap-y-5">
              <h2 className="col-start-1 row-start-1 display-md text-primary uppercase leading-none">MAKING OF</h2>
              <div className="col-start-2 row-start-1 flex flex-col gap-0.5 text-right">
                <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">CIECH</h3>
                <p className="text-sm text-foreground/80">Client: Grupa Ciech</p>
                <p className="text-sm font-bold text-foreground">we did postproduction</p>
              </div>
              <div className="col-start-1 row-start-2 w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="col-start-2 row-start-2 w-full aspect-video">
                <VideoPlaceholder className="w-full h-full" />
              </div>
              <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
                <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight mb-1">DKMS MAKING OF CAMPAIGN</h3>
                <p className="text-sm text-foreground/80">Client: Fundacja DKMS</p>
                <p className="text-sm text-foreground/80">Agency: Walk Creatives</p>
                <p className="text-sm text-foreground/80">DIR: Tomasz Knittel</p>
                <p className="text-sm text-foreground/80">DOP: Łukasz Łatanik</p>
              </div>
              <h2 className="col-start-2 row-start-3 display-md text-primary uppercase leading-none text-right self-end">
                DATA<br />PRESENTATION
              </h2>
            </div>

          </section>

          {/* ══ PHOTO SHOOTS SECTION ══ */}
          <section aria-labelledby="photo-shoots-heading" className="mb-20 md:mb-28">

            <h2
              id="photo-shoots-heading"
              className="display-md text-primary uppercase text-center mb-10 md:mb-12 leading-none"
            >
              PHOTO SHOOTS
            </h2>

            {/* ── Mobile: each photo paired with its info ── */}
            <div className="md:hidden flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="aspect-[4/3]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">NEONAIL</h3>
                  <p className="text-xs text-foreground/80">Client: NEONAIL</p>
                  <p className="text-xs text-foreground/80">Agency: Endless</p>
                  <p className="text-xs text-foreground/80">Photo: Daniel Korzewa</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">APEROL</h3>
                  <p className="text-xs text-foreground/80">Client: Aperol</p>
                  <p className="text-xs text-foreground/80">Agency: Walk Creatives</p>
                  <p className="text-xs text-foreground/80">Photo: Marcin Klaban</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">DOLINA DOBRA</h3>
                  <p className="text-xs text-foreground/80">Client: Dolina Dobra</p>
                  <p className="text-xs text-foreground/80">Agency: Freundschaft</p>
                  <p className="text-xs text-foreground/80">Photo: Daniel Korzewa</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">TRENDY OPTICIANS 2023</h3>
                  <p className="text-xs text-foreground/80">Klient: Trendy Opticians</p>
                  <p className="text-xs text-foreground/80">Agencja: Walk Creative</p>
                  <p className="text-xs text-foreground/80">Fotograf: Daniel Korzewa</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/5]"><PhotoPlaceholder className="w-full h-full" /></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">NEONAIL SUMMER 23 &amp;24</h3>
                  <p className="text-xs text-foreground/80">Klient: NEONAIL</p>
                  <p className="text-xs text-foreground/80">Agencja: Endless</p>
                  <p className="text-xs text-foreground/80">Fotograf: Daniel Korzewa</p>
                </div>
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mb-4 items-stretch">
                <div className="aspect-[4/3]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="h-full"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="h-full"><PhotoPlaceholder className="w-full h-full" /></div>
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mb-12">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">NEONAIL</h3>
                  <p className="text-xs text-foreground/80">Client: NEONAIL</p>
                  <p className="text-xs text-foreground/80">Agency: Endless</p>
                  <p className="text-xs text-foreground/80">Photo: Daniel Korzewa</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">APEROL</h3>
                  <p className="text-xs text-foreground/80">Client: Aperol</p>
                  <p className="text-xs text-foreground/80">Agency: Walk Creatives</p>
                  <p className="text-xs text-foreground/80">Photo: Marcin Klaban</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">DOLINA DOBRA</h3>
                  <p className="text-xs text-foreground/80">Client: Dolina Dobra</p>
                  <p className="text-xs text-foreground/80">Agency: Freundschaft</p>
                  <p className="text-xs text-foreground/80">Photo: Daniel Korzewa</p>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-4">
                <div className="col-start-1 row-start-1 aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-2 row-start-1 row-span-2 aspect-auto"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-3 row-start-1 flex flex-col gap-0.5 text-right">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">NEONAIL SUMMER 23 &amp;24</h3>
                  <p className="text-xs text-foreground/80">Klient: NEONAIL</p>
                  <p className="text-xs text-foreground/80">Agencja: Endless</p>
                  <p className="text-xs text-foreground/80">Fotograf: Daniel Korzewa</p>
                </div>
                <div className="col-start-1 row-start-2 flex flex-col gap-0.5 self-end">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">TRENDY OPTICIANS 2023</h3>
                  <p className="text-xs text-foreground/80">Klient: Trendy Opticians</p>
                  <p className="text-xs text-foreground/80">Agencja: Walk Creative</p>
                  <p className="text-xs text-foreground/80">Fotograf: Daniel Korzewa</p>
                </div>
                <div className="col-start-3 row-start-2 aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
              </div>
            </div>

          </section>

          {/* ══ PRODUCT SHOOTS SECTION ══ */}
          <section aria-labelledby="product-shoots-heading" className="mb-20 md:mb-28">

            <h2
              id="product-shoots-heading"
              className="display-md text-primary uppercase text-center mb-10 md:mb-12 leading-none"
            >
              PRODUCT SHOOTS
            </h2>

            {/* ── Mobile: each photo paired with its info ── */}
            <div className="md:hidden flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="aspect-[4/3]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">NEONAIL &apos;FUTURO&apos;</h3>
                  <p className="text-xs text-foreground/80">Client: NEONAIL</p>
                  <p className="text-xs text-foreground/80">Agency: Endless</p>
                  <p className="text-xs text-foreground/80">Photo: Aleksandra Loska</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[4/3]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-3">
                  <div className="aspect-square"><PhotoPlaceholder className="w-full h-full" /></div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-primary font-black uppercase tracking-tight text-sm">VISION EXPRESS 2023</h3>
                  <p className="text-xs text-foreground/80">Client: Vision Express</p>
                  <p className="text-xs text-foreground/80">Agency: Walk Creative</p>
                  <p className="text-xs text-foreground/80">Photo: Aleksandra Loska</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-[5fr_2fr_5fr_3fr] grid-rows-[auto_auto] gap-4">
              <div className="col-start-1 row-start-1 h-72"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-2 col-span-2 row-start-1 h-72"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-4 row-start-1 row-span-2"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-1 row-start-2 flex flex-col gap-0.5 pt-1">
                <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">NEONAIL &#39;FUTURO&#39;</h3>
                <p className="text-xs text-foreground/80">Client: NEONAIL</p>
                <p className="text-xs text-foreground/80">Agency: Endless</p>
                <p className="text-xs text-foreground/80">Photo: Aleksandra Loska</p>
              </div>
              <div className="col-start-2 row-start-2 aspect-square"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-3 row-start-2 flex flex-col gap-0.5 pt-1">
                <h3 className="text-primary font-black uppercase tracking-tight text-sm mb-0.5">VISION EXPRESS 2023</h3>
                <p className="text-xs text-foreground/80">Client: Vision Express</p>
                <p className="text-xs text-foreground/80">Agency: Walk Creative</p>
                <p className="text-xs text-foreground/80">Photo: Aleksandra Loska</p>
              </div>
            </div>

          </section>

          {/* ══ POSTPRODUCTION SECTION ══ */}
          <section aria-labelledby="postproduction-heading" className="mb-20 md:mb-28">

            <h2
              id="postproduction-heading"
              className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
            >
              POSTPRODUCTION
            </h2>

            {/* Full-width ultrawide placeholder ~16:6 */}
            <div className="w-full aspect-[16/6]">
              <VideoPlaceholder className="w-full h-full" />
            </div>

          </section>

          {/* ══ OUT-OF-THE-BOX SECTION ══ */}
          <section aria-labelledby="outofthebox-heading" className="mb-20 md:mb-28">

            <h2
              id="outofthebox-heading"
              className="display-md text-primary uppercase mb-10 md:mb-12 leading-none"
            >
              OUT-OF-THE-BOX
            </h2>

            {/* ── Mobile: each media with its description ── */}
            <div className="md:hidden flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="aspect-[9/16]"><VideoPlaceholder className="w-full h-full" /></div>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  produkcja materiałów promujących konkurs (realizacja video podczas nagrań do klipu) – po naszej stronie: operator i realizator dźwięku, postprodukcja
                </p>
              </div>
              <div className="aspect-[9/16]"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="aspect-[9/16]"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="aspect-video"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="flex flex-col gap-3">
                <div className="aspect-square"><PhotoPlaceholder className="w-full h-full" /></div>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  produkcja płyt winylowych z przyprawą Flamin Hot: testy, koordynacja produkcji
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-foreground/70 leading-relaxed font-semibold">produkcja i dystrybucja nagród:</p>
                <ul className="text-xs text-foreground/70 leading-relaxed list-disc list-outside pl-4 space-y-1.5">
                  <li>jadalna płyta winylowa (własna produkcja, opracowanie receptury potwierdzonej certyfikatem zdatności do spożycia)</li>
                  <li>dedykowany box umożliwiający transport jadalnej płyty (delikatnej, kruchej) do zwycięzców konkursu</li>
                  <li>produkcja toreb prezentowych imitujących paczkę chipsów</li>
                  <li>logistyka wręczania nagród (7 miast w Polsce)</li>
                  <li>materiał video z realizacji całego procesu</li>
                </ul>
              </div>
              <div className="aspect-video"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="aspect-[3/4]"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">
                  FLAMIN&apos; HOT &ldquo;JADALNA P&#321;YTA&rdquo; &ndash; JADALNY GRA<span className="uppercase">J</span>&#258;CY WINYL Z&nbsp;PRZYPRAW&#260; FLAMIN&apos; HOT
                </h3>
                <p className="text-sm text-foreground/80">Klient: Pepsico</p>
                <p className="text-sm text-foreground/80">Agencja: DDB, Endless</p>
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[1.6fr_1.4fr_1.6fr_2fr_2fr] grid-rows-[auto_auto] gap-4 mb-4">
                <div className="col-start-1 row-start-1 aspect-auto min-h-48"><VideoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-2 row-start-1 flex items-start pt-1">
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    produkcja materiałów promujących konkurs (realizacja video podczas nagrań do klipu) – po naszej stronie: operator i realizator dźwięku, postprodukcja
                  </p>
                </div>
                <div className="col-start-3 row-start-1"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-4 row-start-1"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-5 row-start-1"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="col-start-5 row-start-2 flex flex-col gap-2">
                  <div className="aspect-square"><PhotoPlaceholder className="w-full h-full" /></div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    produkcja płyt winylowych z przyprawą Flamin Hot: testy, koordynacja produkcji
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[2fr_3fr_2fr] gap-4 mb-8">
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-xs text-foreground/70 leading-relaxed font-semibold">produkcja i dystrybucja nagród:</p>
                  <ul className="text-xs text-foreground/70 leading-relaxed list-disc list-outside pl-4 space-y-1.5">
                    <li>jadalna płyta winylowa (własna produkcja, opracowanie receptury potwierdzonej certyfikatem zdatności do spożycia)</li>
                    <li>dedykowany box umożliwiający transport jadalnej płyty (delikatnej, kruchej) do zwycięzców konkursu</li>
                    <li>produkcja toreb prezentowych imitujących paczkę chipsów</li>
                    <li>logistyka wręczania nagród (7 miast w Polsce)</li>
                    <li>materiał video z realizacji całego procesu</li>
                  </ul>
                </div>
                <div className="min-h-64"><PhotoPlaceholder className="w-full h-full" /></div>
                <div><PhotoPlaceholder className="w-full h-full" /></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base mb-1">
                  FLAMIN&apos; HOT &ldquo;JADALNA P&#321;YTA&rdquo; &ndash; JADALNY GRA<span className="uppercase">J</span>&#258;CY WINYL Z&nbsp;PRZYPRAW&#260; FLAMIN&apos; HOT
                </h3>
                <p className="text-sm text-foreground/80">Klient: Pepsico</p>
                <p className="text-sm text-foreground/80">Agencja: DDB, Endless</p>
              </div>
            </div>

          </section>

          {/* ══ DOOH SECTION ══ */}
          <section aria-labelledby="dooh-heading" className="mb-20 md:mb-28">

            {/* ── Mobile: heading → large thumb + info → 2 additional thumbs ── */}
            <div className="md:hidden flex flex-col gap-8">
              <h2 id="dooh-heading" className="display-md text-primary uppercase leading-none">DOOH</h2>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight">FLAMIN&apos; HOT</h3>
                  <p className="text-sm text-foreground/80">Client: Pepsico</p>
                  <p className="text-sm text-foreground/80">Agency: DDB</p>
                </div>
              </div>
              <div className="w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-[5fr_3fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
              <h2 className="col-start-2 row-start-1 display-md text-primary uppercase text-right leading-none">DOOH</h2>
              <div className="col-start-1 row-start-2 w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-2 row-start-2 w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-1 row-start-3 flex flex-col gap-1.5">
                <h3 className="text-primary font-black uppercase tracking-tight text-base leading-tight mb-1">FLAMIN&#39; HOT</h3>
                <p className="text-sm text-foreground/80">Client: Pepsico</p>
                <p className="text-sm text-foreground/80">Agency: DDB</p>
              </div>
              <div className="col-start-2 row-start-3 w-full aspect-video"><VideoPlaceholder className="w-full h-full" /></div>
            </div>

          </section>

          {/* ══ EVENTS SECTION ══ */}
          <section aria-labelledby="events-heading" className="mb-20 md:mb-28">

            {/* ── Mobile: heading → each item with its info ── */}
            <div className="md:hidden flex flex-col gap-8">
              <h2 id="events-heading" className="display-md text-primary uppercase leading-none">EVENTS</h2>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-[4/3]"><VideoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">GALA AD WO/MAN 2021</h3>
                  <p className="text-sm text-foreground/80">Client: Press</p>
                </div>
              </div>
              <div className="w-full aspect-[3/4]"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-[4/3]"><PhotoPlaceholder className="w-full h-full" /></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">POLPHARMA EVENT</h3>
                    <div className="flex-shrink-0 w-12 h-12 border-2 border-foreground/30 bg-white grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                      <div className="bg-foreground" /><div className="bg-transparent" /><div className="bg-foreground" />
                      <div className="bg-transparent" /><div className="bg-foreground" /><div className="bg-transparent" />
                      <div className="bg-foreground" /><div className="bg-transparent" /><div className="bg-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80">Client: Polpharma</p>
                  <p className="text-sm text-foreground/80">Agency: Endless</p>
                  <p className="text-sm text-foreground/80">Branding AR na evencie klienta</p>
                </div>
              </div>
            </div>

            {/* ── Desktop: original layout ── */}
            <div className="hidden md:grid grid-cols-[1fr_1.2fr_1fr] grid-rows-[auto_auto_auto] gap-x-5 gap-y-5">
              <h2 className="col-start-1 row-start-1 display-md text-primary uppercase leading-none">EVENTS</h2>
              <div className="col-start-2 row-start-1 row-span-3"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-3 row-start-1 row-span-2"><PhotoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-1 row-start-2 w-full aspect-[4/3]"><VideoPlaceholder className="w-full h-full" /></div>
              <div className="col-start-1 row-start-3 flex flex-col gap-1 self-start">
                <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">GALA AD WO/MAN 2021</h3>
                <p className="text-sm text-foreground/80">Client: Press</p>
              </div>
              <div className="col-start-3 row-start-3 flex flex-col gap-1 self-start">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-primary font-black uppercase tracking-tight leading-tight text-base">POLPHARMA EVENT</h3>
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-foreground/30 bg-white grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                    <div className="bg-foreground" /><div className="bg-transparent" /><div className="bg-foreground" />
                    <div className="bg-transparent" /><div className="bg-foreground" /><div className="bg-transparent" />
                    <div className="bg-foreground" /><div className="bg-transparent" /><div className="bg-foreground" />
                  </div>
                </div>
                <p className="text-sm text-foreground/80">Client: Polpharma</p>
                <p className="text-sm text-foreground/80">Agency: Endless</p>
                <p className="text-sm text-foreground/80">Branding AR na evencie klienta</p>
              </div>
            </div>

          </section>

        </div>

        {/* Gradient transition: background → footer */}
        <div className="h-48 md:h-72 bg-gradient-to-b from-[rgb(238,247,253)] to-neutral-950" aria-hidden="true" />
      </main>

      <Footer />
    </>
  );
}
