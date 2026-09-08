import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "HYROX débutant",
  description:
    "HYROX débutant : niveau nécessaire, première séance, endurance, force, récupération et erreurs à éviter.",
  alternates: { canonical: "/hyrox-debutant" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Commencer"
        title="HYROX débutant"
        text="Vous n'avez pas besoin d'être déjà « prêt pour une course ». Vous avez besoin d'un cadre, d'une technique propre et d'un rythme que vous pouvez tenir."
        image="/images/coach.jpg"
        alt="Encadrement d'une séance pour débuter le HYROX"
      />
      <article className="container-page max-w-3xl space-y-5 py-14 text-neutral-800">
        <h2 className="text-3xl">Niveau nécessaire</h2>
        <p>
          Savoir courir ou marcher-courir 20 à 30 minutes est un bon point de départ. La force s&apos;apprend ensuite
          sur les stations, avec des charges adaptées. Si vous revenez de blessure, faites d&apos;abord le point avec un
          professionnel de santé.
        </p>
        <h2 className="pt-2 text-3xl">Première séance</h2>
        <p>
          Objectif : découvrir les mouvements, pas le chrono. Un coach corrige le sled, le farmers et le wall ball en
          quelques rounds. C&apos;est plus sûr — et plus rapide — que YouTube en solo.
        </p>
        <h2 className="pt-2 text-3xl">Endurance, force, récupération</h2>
        <p>
          Alternez course facile, force fonctionnelle et une séance hybride courte. Dormez. Mangez. La récupération
          n&apos;est pas un luxe : c&apos;est ce qui rend la semaine suivante possible.
        </p>
        <h2 className="pt-2 text-3xl">Erreurs à éviter</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Copier le volume d&apos;un compétiteur dès la semaine 1.</li>
          <li>Négliger la course « parce que je fais déjà du HIIT ».</li>
          <li>Sauter la mobilité et se coincer les hanches sur les fentes.</li>
        </ul>
        <p>
          Suite logique :{" "}
          <Link className="font-bold text-brand underline" href="/entrainement-hyrox">
            comment s&apos;entraîner
          </Link>{" "}
          puis{" "}
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
