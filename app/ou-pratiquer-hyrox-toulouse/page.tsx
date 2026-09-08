import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/lib/seo";
import { BOXING_CENTER_PHONE, BOXING_CENTER_PHONE_TEL, OFFICIAL_HYROX_URL, SALLES } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Où pratiquer le HYROX à Toulouse",
  description:
    "Où s'entraîner au HYROX à Toulouse : cours du Boxing Center, 5 salles, coachs, lien vers la page officielle.",
  path: "/ou-pratiquer-hyrox-toulouse",
  image: "/images/toulouse.webp",
});

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Local"
        title="Où pratiquer à Toulouse ?"
        text="Le Boxing Center propose des cours HYROX mixtes, tous niveaux, avec une préparation inspirée de la boxe. Planning et inscriptions sur la page officielle."
        image="/images/toulouse.webp"
        alt="Capitole de Toulouse, ancrage local HYROX"
      />
      <section className="container-page py-14">
        <p className="max-w-3xl text-neutral-800">
          Cherchez un lieu avec du cardio, de la force fonctionnelle et un encadrement. Le Boxing Center, club de sports
          de combat et de préparation physique à Toulouse (5 salles), a conçu des séances HYROX accessibles aux
          débutants comme aux confirmés. Les cours sont mixtes.
        </p>
        <p className="mt-4 max-w-3xl text-neutral-800">
          L&apos;approche du club ajoute des outils issus de la boxe (fractionné au sac, shadow, corde à sauter) à
          l&apos;esprit HYROX. Vérifiez toujours horaires, salles et tarifs sur le site officiel : ces informations
          évoluent.
        </p>
        <h2 className="mt-10 text-3xl">Les 5 salles</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {SALLES.map((salle) => (
            <li key={salle.name} className="bg-white p-5">
              <p className="text-xl font-extrabold uppercase">{salle.name}</p>
              <p className="text-sm text-neutral-600">{salle.focus}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-neutral-800">
          Téléphone Boxing Center :{" "}
          <a className="font-bold text-brand underline" href={BOXING_CENTER_PHONE_TEL}>
            {BOXING_CENTER_PHONE}
          </a>
        </p>
        <p className="mt-3">
          <a className="font-bold text-brand underline" href={OFFICIAL_HYROX_URL}>
            Page officielle HYROX du Boxing Center
          </a>
          {" · "}
          <Link className="font-bold underline" href="/faq-hyrox">
            FAQ
          </Link>
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
