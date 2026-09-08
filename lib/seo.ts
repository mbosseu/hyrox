import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/logo.webp";

export function pageSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      locale: "fr_FR",
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
