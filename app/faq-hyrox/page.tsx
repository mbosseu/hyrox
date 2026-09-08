import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ HYROX",
  description:
    "Questions fréquentes sur le HYROX : format, niveau, entraînement et pratique à Toulouse.",
  alternates: { canonical: "/faq-hyrox" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Questions"
        title="FAQ HYROX"
        text="Les réponses utiles avant de s'inscrire à un cours ou de viser une première course."
        image="/images/running.jpg"
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
