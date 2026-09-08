import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog HYROX",
  description:
    "Articles HYROX : premier race, guide débutant, différences avec le CrossFit, s'entraîner à Toulouse.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Éditorial"
        title="Blog HYROX"
        text="Des articles utiles, pas du volume. Préparation, débutant, comparatifs et pratique locale."
        image="/images/start-line.jpg"
        alt="Course, communauté, contenus de blog"
      />
      <section className="container-page grid gap-8 py-14 md:grid-cols-2">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white">
            <Image src={article.image} alt={article.alt} width={800} height={480} className="h-52 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-brand">{article.date}</p>
              <h2 className="mt-2 text-2xl">{article.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{article.description}</p>
            </div>
          </Link>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
