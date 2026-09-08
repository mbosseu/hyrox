import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "HYROX et course à pied",
  description:
    "La course dans le HYROX : 8 x 1 km, allure, enchaînement après les stations et erreurs de pacing.",
  alternates: { canonical: "/hyrox-course-a-pied" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="8 × 1 km"
        title="HYROX et course à pied"
        text="Huit kilomètres, mais jamais d'une traite. Le vrai sujet : retrouver ses appuis après le sled ou les wall balls."
        image="/images/track.jpg"
        alt="Course à pied, composante centrale du HYROX"
      />
      <article className="container-page max-w-3xl space-y-5 py-14 text-neutral-800">
        <p>
          Courez assez souvent pour que 1 km ne soit pas un événement. Puis entraînez la transition : dès que la
          station est finie, repartez en trottinant 20 secondes avant d&apos;accélérer.
        </p>
        <p>
          L&apos;allure cible d&apos;une première course est souvent plus proche de votre allure 10 km « confortable »
          que d&apos;un 5 km à bloc. Les stations taxent les quadriceps : une foulée trop ambitieuse au km 1 se paie au
          km 7.
        </p>
        <p>
          Complétez avec la{" "}
          <Link className="font-bold text-brand underline" href="/hyrox-musculation">
            musculation
          </Link>{" "}
          et le{" "}
          <Link className="font-bold text-brand underline" href="/programme-entrainement-hyrox">
            programme
          </Link>
          .
        </p>
      </article>
      <CtaBanner />
    </>
  );
}
