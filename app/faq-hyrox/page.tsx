import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "FAQ HYROX",
  description:
    "Questions fréquentes sur le HYROX : format, niveau, entraînement et pratique à Toulouse.",
  path: "/faq-hyrox",
  image: "/images/running.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        kicker="Questions"
        title="FAQ HYROX"
        text="Les réponses utiles avant de s'inscrire à un cours ou de viser une première course."
        image="/images/running.webp"
        alt="Progression et questions de débutant"
      />
      <section className="container-page space-y-4 py-14">
        {faqs.map((item) => (
          <article key={item.q} className="bg-white p-6">
            <h2 className="text-2xl">{item.q}</h2>
            <p className="mt-2 text-neutral-700">{item.a}</p>
          </article>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
