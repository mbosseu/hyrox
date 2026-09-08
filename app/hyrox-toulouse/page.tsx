import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumb } from "@/components/JsonLd";
import { articles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
import { OFFICIAL_HYROX_URL, STATIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "HYROX Toulouse | Guide et entraînement",
  },
  description:
    "Guide du HYROX à Toulouse : comprendre la discipline, les 8 épreuves, commencer l'entraînement et pratiquer au Boxing Center.",
  alternates: { canonical: "/hyrox-toulouse" },
};

export default function HyroxToulousePage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "WebPage",
          name: "HYROX Toulouse",
          description:
            "Guide du HYROX à Toulouse : comprendre la discipline, les 8 épreuves, commencer l'entraînement et pratiquer au Boxing Center.",
        }}
      />
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/hyrox-toulouse" }])} />
      <section className="relative isolate min-h-[82vh] overflow-hidden bg-[#f3eee6] text-ink">
        <div className="pointer-events-none absolute -top-10 right-[-12%] bottom-[-12%] z-0 w-[min(980px,80vw)] mix-blend-multiply">
          <Image
            src="/logo.png"
            alt=""
            width={980}
            height={670}
            className="h-full w-full object-contain object-right select-none"
            priority
          />
        </div>
        <div className="container-page relative z-[2] flex min-h-[82vh] items-center py-16 md:py-24">
          <div className="max-w-lg rounded-sm bg-[#f3eee6]/70 py-4 pr-4 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Guide spécialisé</p>
            <h1 className="mt-3 text-6xl md:text-8xl">HYROX Toulouse</h1>
            <p className="mt-5 text-lg text-neutral-700">
              Comprendre la discipline, préparer les 8 épreuves et trouver où s&apos;entraîner à Toulouse — sans
              jargon inutile, avec un vrai plan pour passer à la pratique.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={OFFICIAL_HYROX_URL}
                className="rounded-sm bg-brand px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white"
              >
                Découvrir les entraînements HYROX
              </a>
              <Link
                href="/epreuves-hyrox"
                className="rounded-sm border border-ink px-5 py-3 text-sm font-extrabold uppercase"
              >
                Voir les 8 épreuves
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">La discipline</p>
          <h2 className="mt-2 text-4xl">Qu&apos;est-ce que le HYROX ?</h2>
          <p className="mt-4 text-neutral-700">
            Le HYROX est une course de fitness indoor : 8 kilomètres de course à pied, coupés par 8 stations
            fonctionnelles. Le format est le même partout, ce qui permet de comparer les temps et de s&apos;entraîner
            avec un objectif clair.
          </p>
          <p className="mt-3 text-neutral-700">
            C&apos;est exigeant, mais accessible : on y vient du running, de la musculation, du CrossFit ou simplement
            d&apos;une envie de se tester.{" "}
            <Link href="/hyrox-c-est-quoi" className="font-bold text-brand underline">
              Lire le guide complet
            </Link>
            .
          </p>
        </div>
        <Image
          src="/images/accueil.png"
          alt="Séance d'entraînement fonctionnel en groupe"
          width={900}
          height={600}
          className="h-72 w-full object-cover object-center"
        />
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="text-4xl">Les 8 épreuves</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Après chaque kilomètre, une station. La course reprend ensuite. Le détail, les muscles et les erreurs
            fréquentes sont sur la page épreuves.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATIONS.map((station, index) => (
              <div key={station.name} className="border border-black/10 p-4">
                <p className="text-xs font-bold text-brand">0{index + 1}</p>
                <h3 className="mt-1 text-xl">{station.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{station.detail}</p>
              </div>
            ))}
          </div>
          <Link href="/epreuves-hyrox" className="mt-6 inline-block font-bold uppercase text-brand">
            Toutes les épreuves →
          </Link>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-3">
        <article>
          <Image src="/images/coach.jpg" alt="Première séance encadrée" width={600} height={400} className="h-44 w-full object-cover" />
          <h2 className="mt-4 text-2xl">Comment commencer</h2>
          <p className="mt-2 text-neutral-700">Niveau, première séance, erreurs à éviter.</p>
          <Link href="/hyrox-debutant" className="mt-3 inline-block font-bold text-brand">
            Guide débutant →
          </Link>
        </article>
        <article>
          <Image src="/images/track.jpg" alt="Course à pied HYROX" width={600} height={400} className="h-44 w-full object-cover" />
          <h2 className="mt-4 text-2xl">Comment s&apos;entraîner</h2>
          <p className="mt-2 text-neutral-700">Course, force, cardio, mobilité, programme.</p>
          <Link href="/entrainement-hyrox" className="mt-3 inline-block font-bold text-brand">
            Entraînement →
          </Link>
        </article>
        <article>
          <Image src="/images/boxing.jpg" alt="Boxing Center Toulouse" width={600} height={400} className="h-44 w-full object-cover" />
          <h2 className="mt-4 text-2xl">HYROX à Toulouse</h2>
          <p className="mt-2 text-neutral-700">Le Boxing Center propose des cours mixtes, tous niveaux.</p>
          <Link href="/ou-pratiquer-hyrox-toulouse" className="mt-3 inline-block font-bold text-brand">
            Où pratiquer →
          </Link>
        </article>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl">Boxing Center</h2>
            <p className="mt-4 text-white/80">
              Club toulousain, 5 salles, coachs diplômés. Les cours HYROX mêlent le format de la discipline à une
              préparation physique inspirée de la boxe. Inscriptions, planning et tarifs : uniquement sur la page
              officielle.
            </p>
            <a href={OFFICIAL_HYROX_URL} className="mt-6 inline-flex bg-brand px-5 py-3 text-sm font-extrabold uppercase">
              Voir les informations HYROX
            </a>
          </div>
          <Image
            src="/images/materiel.png"
            alt="Matériel de musculation et préparation physique"
            width={800}
            height={520}
            className="h-72 w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-4xl">Articles récents</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.slice(0, 4).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white">
              <Image src={article.image} alt={article.alt} width={700} height={420} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl">{article.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="text-4xl">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 4).map((item) => (
              <div key={item.q} className="border border-black/10 p-5">
                <h3 className="text-xl">{item.q}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>
          <Link href="/faq-hyrox" className="mt-6 inline-block font-bold uppercase text-brand">
            Toute la FAQ →
          </Link>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
