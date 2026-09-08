import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumb, faqJsonLd, websiteJsonLd } from "@/components/JsonLd";
import { articles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
import { OFFICIAL_HYROX_URL, SITE_URL, STATIONS } from "@/lib/site";

export function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd
        data={{
          "@type": "WebPage",
          name: "HYROX Toulouse",
          description:
            "Guide du HYROX à Toulouse : comprendre la discipline, les 8 épreuves, commencer l'entraînement et trouver où pratiquer.",
          url: SITE_URL,
        }}
      />
      <JsonLd data={breadcrumb([{ name: "Accueil", path: "/" }])} />
      <JsonLd data={faqJsonLd(faqs.slice(0, 4))} />

      <section className="overflow-hidden bg-[#f3eee6] text-ink">
        <div className="container-page grid items-center gap-8 py-10 sm:py-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 md:py-16 lg:gap-14 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Guide spécialisé</p>
            <h1 className="mt-3 text-[2.35rem] leading-[0.92] sm:text-5xl md:text-6xl lg:text-7xl">
              HYROX Toulouse
            </h1>
            <p className="mt-5 max-w-xl text-base text-neutral-700 sm:text-lg">
              Comprendre la discipline, préparer les 8 épreuves et trouver où s&apos;entraîner à Toulouse — sans
              jargon inutile, avec un vrai plan pour passer à la pratique.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={OFFICIAL_HYROX_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-5 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white"
              >
                Découvrir les entraînements HYROX
              </a>
              <Link
                href="/epreuves-hyrox"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-ink px-5 py-3 text-center text-sm font-extrabold uppercase"
              >
                Voir les 8 épreuves
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <Image
              src="/logo.webp"
              alt="Illustration HYROX Toulouse : coureur, skyline et logo"
              width={900}
              height={616}
              className="h-auto w-full select-none object-contain mix-blend-multiply"
              sizes="(max-width: 768px) 90vw, 46vw"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-8 py-12 sm:py-16 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">La discipline</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Qu&apos;est-ce que le HYROX ?</h2>
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
          src="/images/accueil.webp"
          alt="Séance d'entraînement fonctionnel en groupe à Toulouse"
          width={900}
          height={600}
          className="h-56 w-full object-cover object-center sm:h-72"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Les 8 épreuves</h2>
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

      <section className="container-page grid gap-10 py-12 sm:py-16 md:grid-cols-3 md:gap-8">
        <article>
          <Image
            src="/images/coach.webp"
            alt="Première séance encadrée"
            width={600}
            height={400}
            className="h-44 w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <h2 className="mt-4 text-2xl">Comment commencer</h2>
          <p className="mt-2 text-neutral-700">Niveau, première séance, erreurs à éviter.</p>
          <Link href="/hyrox-debutant" className="mt-3 inline-block font-bold text-brand">
            Guide débutant →
          </Link>
        </article>
        <article>
          <Image
            src="/images/track.webp"
            alt="Course à pied HYROX"
            width={600}
            height={400}
            className="h-44 w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <h2 className="mt-4 text-2xl">Comment s&apos;entraîner</h2>
          <p className="mt-2 text-neutral-700">Course, force, cardio, mobilité, programme.</p>
          <Link href="/entrainement-hyrox" className="mt-3 inline-block font-bold text-brand">
            Entraînement →
          </Link>
        </article>
        <article>
          <Image
            src="/images/wall-balls.webp"
            alt="Athlètes en wall balls, entraînement HYROX à Toulouse"
            width={600}
            height={400}
            className="h-44 w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <h2 className="mt-4 text-2xl">HYROX à Toulouse</h2>
          <p className="mt-2 text-neutral-700">Cours mixtes, tous niveaux, dans l&apos;agglomération toulousaine.</p>
          <Link href="/ou-pratiquer-hyrox-toulouse" className="mt-3 inline-block font-bold text-brand">
            Où pratiquer →
          </Link>
        </article>
      </section>

      <section className="bg-ink py-12 text-white sm:py-16">
        <div className="container-page grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl">Boxing Center</h2>
            <p className="mt-4 text-white/80">
              Club toulousain, salles Saint-Cyprien et États-Unis, coachs diplômés. Les cours HYROX mêlent le format de la discipline à une
              préparation physique inspirée de la boxe. Inscriptions, planning et tarifs : uniquement sur la page
              officielle.
            </p>
            <a
              href={OFFICIAL_HYROX_URL}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand px-5 py-3 text-sm font-extrabold uppercase sm:w-auto"
            >
              Voir les informations HYROX
            </a>
          </div>
          <Image
            src="/images/boxing-center.webp"
            alt="Athlètes du Boxing Center en séance d'entraînement"
            width={1400}
            height={969}
            className="h-56 w-full object-cover object-center sm:h-72"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl">Articles récents</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.slice(0, 4).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white">
              <Image
                src={article.image}
                alt={article.alt}
                width={700}
                height={420}
                className="h-44 w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="p-5">
                <h3 className="text-2xl">{article.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
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
