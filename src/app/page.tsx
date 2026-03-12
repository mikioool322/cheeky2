import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Features from "@/components/sections/features";
import About from "@/components/sections/about";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Skip-to-content for keyboard users */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-none"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        {/* 1 — Hero + Marquee (shares animated gradient) */}
        <Hero />

        {/* Gradient transition: black → orange */}
        <div className="h-32 md:h-48 bg-gradient-to-b from-black to-[#FF5A00]" aria-hidden="true" />

        {/* Orange zone: portfolio */}
        <div className="bg-[#FF5A00]">
          {/* 2 — Portfolio */}
          <Portfolio />
        </div>

        {/* Gradient transition: orange → white */}
        <div className="h-48 md:h-72 bg-gradient-to-b from-[#FF5A00] via-[#FF8C40] to-white" aria-hidden="true" />

        {/* 3 — Features / Services */}
        <Features />

        {/* About strip */}
        <About />

        {/* 4 — CTA */}
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
