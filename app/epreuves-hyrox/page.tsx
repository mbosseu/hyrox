import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { STATIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Les 8 épreuves HYROX",
  description:
    "Présentation des 8 stations HYROX : distances, muscles sollicités, conseils et erreurs fréquentes.",
  alternates: { canonical: "/epreuves-hyrox" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Le format"
        title="Les 8 épreuves HYROX"
        text="Chaque kilomètre de course est suivi d'une station. Maîtriser les mouvements change plus un chrono que de simplement « pousser plus dur »."
        image="/images/row.jpg"
        alt="Force fonctionnelle, stations HYROX"
      />
      <section className="container-page py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {STATIONS.map((station, index) => (
            <article key={station.name} className="bg-white p-6">
              <p className="text-sm font-bold text-brand">Station {index + 1} · après 1 km</p>
              <h2 className="mt-1 text-3xl">{station.name}</h2>
              <p className="mt-3 text-neutral-700">{station.detail}</p>
              <p className="mt-2 text-sm text-neutral-600">
                Conseil : gardez une marge pour la course qui suit. Erreur fréquente : tout donner sur la station et
                marcher le kilomètre d&apos;après.
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-neutral-700">
          Pour transformer ça en plan :{" "}
          <Link className="font-bold text-brand underline" href="/entrainement-hyrox">
            entraînement HYROX
          </Link>{" "}
          et{" "}
          <Link className="font-bold text-brand underline" href="/hyrox-musculation">
            musculation spécifique
          </Link>
          .
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
