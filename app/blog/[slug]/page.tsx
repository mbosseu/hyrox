import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { articles, getArticle } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <article>
        <div className="relative min-h-[40vh]">
          <Image src={article.image} alt={article.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/55" />
          <div className="container-page relative py-20 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">{article.date}</p>
            <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl">{article.title}</h1>
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
