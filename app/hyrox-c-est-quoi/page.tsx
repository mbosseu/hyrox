import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Qu'est-ce que le HYROX ?",
  description:
    "Le HYROX expliqué simplement : format de course, public, différences avec le CrossFit, et pourquoi ça se prépare.",
  alternates: { canonical: "/hyrox-c-est-quoi" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="La discipline"
        title="Qu'est-ce que le HYROX ?"
        text="Une course indoor qui mélange 8 km de running et 8 stations de force fonctionnelle. Un format unique, comparable, et ouvert à tous les niveaux."
        image="/images/race.jpg"
        alt="Esprit course et communauté sportive"
      />
      <article className="container-page max-w-3xl space-y-5 py-14 text-neutral-800">
        <p>
          Le HYROX se présente comme une « World Series of Fitness Racing ». Concrètement : vous courez 1 km, vous
          enchaînez une station, et vous répétez le cycle huit fois. SkiErg, sled push, sled pull, burpee broad jumps,
          rameur, farmers carry, fentes avec sac, wall balls.
        </p>
        <p>
          Contrairement à un WOD improvisé, le déroulé est connu à l&apos;avance. On peut donc s&apos;entraîner
          spécifiquement, viser un temps, et comparer sa perf d&apos;une course à l&apos;autre.
        </p>
        <h2 className="pt-4 text-3xl">Pour qui ?</h2>
        <p>
          Pour les coureurs qui veulent de la force, les salles de musculation qui veulent du cardio, les profils
          CrossFit qui veulent un chrono lisible, et les débutants encadrés. Vous n&apos;avez pas besoin d&apos;être
          « déjà prêt » pour commencer un cycle d&apos;entraînement.
        </p>
        <h2 className="pt-4 text-3xl">HYROX et CrossFit</h2>
        <p>
          Les deux travaillent le fonctionnel. Le CrossFit varie davantage. Le HYROX standardise. Un article détaille
          les différences :{" "}
          <Link className="font-bold text-brand underline" href="/blog/hyrox-ou-crossfit-differences">
            HYROX ou CrossFit
          </Link>
          .
        </p>
        <p>
          Ensuite :{" "}
          <Link className="font-bold text-brand underline" href="/epreuves-hyrox">
            les 8 épreuves
          </Link>
          , le{" "}
          <Link className="font-bold text-brand underline" href="/hyrox-debutant">
            guide débutant
          </Link>{" "}
          et{" "}
          <Link className="font-bold text-brand underline" href="/ou-pratiquer-hyrox-toulouse">
            où pratiquer à Toulouse
          </Link>
          .
        </p>
      </article>
      <CtaBanner />
    </>
  );
}
