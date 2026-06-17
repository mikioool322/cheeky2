import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { DictionaryProvider } from "@/lib/dictionary-context";
import { SetHtmlLang } from "@/lib/set-html-lang";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
    title: {
      default: dict.meta.home.title,
      template: `%s | cheeky`,
    },
    description: dict.meta.home.description,
    keywords: [
      locale === "pl" ? "dom produkcyjny" : "production house",
      locale === "pl" ? "produkcja filmowa" : "film production",
      locale === "pl" ? "produkcja reklamowa" : "commercial production",
      locale === "pl" ? "spoty TVC" : "TVC spots",
      locale === "pl" ? "animacja 3D" : "3D animation",
      locale === "pl" ? "sesje zdjęciowe" : "photo shoots",
      locale === "pl" ? "AI" : "AI",
      "cheeky",
      "video production",
    ],
    authors: [{ name: "cheeky" }],
    creator: "cheeky",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}` : `${baseUrl}/${locale}`,
      languages: {
        "x-default": `${baseUrl}`,
        pl: `${baseUrl}/pl`,
        en: `${baseUrl}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      url: locale === "en" ? `${baseUrl}` : `${baseUrl}/${locale}`,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      siteName: "cheeky",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      creator: "@cheekystudio",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductionCompany",
    name: "cheeky studio",
    url: "https://cheeky.studio",
    logo: "https://cheeky.studio/logo.png",
    description:
      locale === "pl"
        ? "Dom produkcyjny — produkcja filmowa, spoty TVC, animacje 3D, sesje zdjęciowe"
        : "Production house — film production, TVC spots, 3D animation, photo shoots",
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
    sameAs: [
      "https://instagram.com/cheekystudio",
      "https://linkedin.com/company/cheekystudio",
      "https://youtube.com/@cheekystudio",
    ],
  };

  return (
    <DictionaryProvider dictionary={dict} locale={locale as Locale}>
      <SetHtmlLang locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </DictionaryProvider>
  );
}
