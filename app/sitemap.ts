import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/hyrox-toulouse",
    "/hyrox-c-est-quoi",
    "/epreuves-hyrox",
    "/hyrox-debutant",
    "/entrainement-hyrox",
    "/programme-entrainement-hyrox",
    "/hyrox-course-a-pied",
    "/hyrox-musculation",
    "/ou-pratiquer-hyrox-toulouse",
    "/faq-hyrox",
    "/blog",
  ];

  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/hyrox-toulouse" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
