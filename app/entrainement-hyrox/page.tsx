import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Entraînement HYROX",
  description:
    "Entraînement HYROX : course, force, cardio, exercices fonctionnels, mobilité et récupération.",
  alternates: { canonical: "/entrainement-hyrox" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Méthode"
        title="Entraînement HYROX"
        text="Un bon plan HYROX n'est pas que du fractionné. C'est de la course que l'on reprend après une station, plus de la force utile."
        image="/images/strength.jpg"
        alt="Travail de force pour l'entraînement HYROX"
      />
      <article className="container-page grid gap-8 py-14 md:grid-cols-2">
        <div className="space-y-4 bg-white p-6">
          <h2 className="text-2xl">Course à pied</h2>
          <p>
            2 à 4 sorties selon le niveau. Une facile, une avec allure course, éventuellement des côtes. Détail :{" "}
            <Link className="font-bold text-brand underline" href="/hyrox-course-a-pied">
              HYROX et course à pied
            </Link>
            .
          </p>
        </div>
        <div className="space-y-4 bg-white p-6">
          <h2 className="text-2xl">Force</h2>
          <p>
            Squat, soulevé, fentes, rowing, carry. Charges que vous contrôlez. Page dédiée :{" "}
            <Link className="font-bold text-brand underline" href="/hyrox-musculation">
              musculation HYROX
            </Link>
            .
          </p>
        </div>
        <div className="space-y-4 bg-white p-6">
          <h2 className="text-2xl">Cardio &amp; fonctionnel</h2>
          <p>SkiErg, rameur, sled, wall balls. Qualité du mouvement avant le volume. Enchaînez ensuite avec 400 à 1 000 m de course.</p>
        </div>
        <div className="space-y-4 bg-white p-6">
          <h2 className="text-2xl">Mobilité &amp; récupération</h2>
          <p>Hanches, chevilles, thoracique. Sommeil, protéines, jours faciles. Un programme type est ici :{" "}
            <Link className="font-bold text-brand underline" href="/programme-entrainement-hyrox">
              programme d&apos;entraînement
            </Link>
            .
          </p>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
