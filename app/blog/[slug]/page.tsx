import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/lib/articles";
import { pageSeo } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageSeo({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    image: article.image,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@type": "Article",
          headline: article.title,
          description: article.description,
          datePublished: article.date,
          image: `${SITE_URL}${article.image}`,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
        }}
      />
      <article>
        <div className="relative min-h-[40vh] overflow-hidden bg-ink">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="container-page relative py-16 text-white sm:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">{article.date}</p>
            <h1 className="mt-3 max-w-4xl text-3xl sm:text-4xl md:text-6xl">{article.title}</h1>
          </div>
        </div>
        <div className="container-page max-w-3xl space-y-5 py-12 text-neutral-800">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p>
            <Link className="font-bold text-brand underline" href="/blog">
              ← Tous les articles
            </Link>
          </p>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
