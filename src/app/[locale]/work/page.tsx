import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import WorkPageContent from "./work-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const baseUrl = "https://cheeky.studio";

  return {
    title: dict.meta.work.title,
    description: dict.meta.work.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/work`,
      languages: {
        "x-default": `${baseUrl}/pl/work`,
        pl: `${baseUrl}/pl/work`,
        en: `${baseUrl}/en/work`,
      },
    },
    openGraph: {
      title: dict.meta.work.title,
      description: dict.meta.work.description,
      url: `${baseUrl}/${locale}/work`,
      locale: locale === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: locale === "pl" ? "Portfolio realizacji" : "Portfolio",
    description:
      locale === "pl"
        ? "Spoty TVC, filmy produktowe, animacje 3D, sesje zdjęciowe — realizacje domu produkcyjnego cheeky"
        : "TVC spots, product films, 3D animation, photo shoots — work by cheeky production house",
    url: `https://cheeky.studio/${locale}/work`,
    isPartOf: {
      "@type": "WebSite",
      name: "cheeky studio",
      url: "https://cheeky.studio",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `https://cheeky.studio/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "pl" ? "Portfolio" : "Work",
          item: `https://cheeky.studio/${locale}/work`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="min-h-screen bg-[rgb(238,247,253)] pt-16">
        <WorkPageContent />
        <div
          className="h-48 md:h-72 bg-gradient-to-b from-[rgb(238,247,253)] to-neutral-950"
          aria-hidden="true"
        />
      </main>
      <Footer />
    </>
  );
}
