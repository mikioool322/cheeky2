import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Marquee from "@/components/marquee";
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
        {/* 1 — Hero: hook + above-fold CTA */}
        <Hero />

        {/* Marquee ticker */}
        <Marquee />

        {/* 2 — Portfolio */}
        <Portfolio />

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
