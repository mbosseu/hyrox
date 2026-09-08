import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "HYROX et musculation",
  description:
    "Musculation utile au HYROX : sled, carries, squat, dos, grip — sans transformer l'entraînement en bodybuilding.",
  path: "/hyrox-musculation",
  image: "/images/kettlebell.webp",
});

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Force utile"
        title="HYROX et musculation"
        text="On ne cherche pas le développé couché max. On cherche des jambes, un dos, un tronc et un grip qui tiennent 8 stations."
        image="/images/kettlebell.webp"
        alt="Travail de force, soulevé de terre"
      />
      <article className="container-page max-w-3xl space-y-5 py-14 text-neutral-800">
        <p>
          Priorités : squat / fentes, hinge (soulevé), poussée (sled), traction (sled pull, row), portage. Les wall
          balls demandent un squat profond et des épaules qui durent.
        </p>
        <p>
          2 séances de force par semaine suffisent pour beaucoup de profils, si la course et l&apos;hybride sont là.
          Laissez 48 h aux cuisses avant une séance sled lourde.
        </p>
        <p>
          En club, le matériel et le regard d&apos;un coach évitent les égos sur le traîneau. C&apos;est souvent là que
          les débutants se blessent le dos.
        </p>
      </article>
      <CtaBanner />
    </>
  );
}
