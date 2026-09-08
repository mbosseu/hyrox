import { SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }) }}
    />
  );
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR",
    description:
      "Guide spécialisé du HYROX à Toulouse : épreuves, entraînement, débutants et où pratiquer.",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
