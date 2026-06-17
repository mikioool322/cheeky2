import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cheeky.studio";

  return [
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: { pl: `${baseUrl}/pl`, en: `${baseUrl}/en` },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: { pl: `${baseUrl}/pl`, en: `${baseUrl}/en` },
      },
    },
  ];
}
