import { OFFICIAL_HYROX_URL } from "@/lib/site";

export function CtaBanner({
  title = "Prêt à passer à l'entraînement ?",
  text = "Découvrez les cours HYROX à Toulouse : mixte, tous niveaux, coachs diplômés.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand px-4 py-12 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl text-white/90">{text}</p>
        </div>
        <a
          href={OFFICIAL_HYROX_URL}
          className="shrink-0 rounded-sm bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black"
        >
          Découvrir les entraînements HYROX
        </a>
      </div>
    </section>
  );
}
