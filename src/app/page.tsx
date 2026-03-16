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


      <Nav />

      <main id="main-content">
        {/* 1 — Hero + Marquee (shares animated gradient) */}
        <Hero />

        

        {/* Orange zone: portfolio */}
        <div className="bg-[#FF5A00]">
          {/* 2 — Portfolio */}
          <Portfolio />
        </div>

        {/* Gradient transition: orange → white */}
        <div className="h-48 md:h-72 bg-gradient-to-b from-[#FF5A00] via-[#FF8C40] to-[rgb(238,247,253)]" aria-hidden="true" />

        {/* 3 — Features / Services */}
        <Features />

        {/* About strip */}
        <About />

        {/* Gradient transition: white → orange */}
        <div className="h-48 md:h-72 bg-gradient-to-b from-[rgb(238,247,253)] via-[#FF8C40] to-[#FF6712]" aria-hidden="true" />

        {/* 4 — CTA */}
        <div className="bg-[#FF5A00]">
          <CtaSection />
        </div>

        {/* Gradient transition: orange → black */}
        <div className="h-64 md:h-72 bg-gradient-to-b from-[#FF6712] to-[#0a0a0a]" aria-hidden="true" />
      </main>

      <Footer />
    </>
  );
}
