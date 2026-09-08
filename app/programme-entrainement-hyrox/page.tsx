import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Programme d'entraînement HYROX",
  description:
    "Exemple de programme HYROX sur une semaine : course, force, séance hybride et récupération.",
  path: "/programme-entrainement-hyrox",
  image: "/images/gym-class.webp",
});

const days = [
  { day: "Lundi", title: "Course facile", text: "30 à 45 min allure conversation. Technique de foulée, relâchement." },
  { day: "Mardi", title: "Force fonctionnelle", text: "Squat, fentes, row, carry, core. 4 à 6 mouvements, 3-4 séries." },
  { day: "Mercredi", title: "Récupération active", text: "Marche, mobilité 20 min, ou repos complet selon la fatigue." },
  { day: "Jeudi", title: "Hybride", text: "1 km course + station (rameur ou wall balls ou sled léger), 4 à 6 tours." },
  { day: "Vendredi", title: "Option force courte", text: "Haut du corps / grip / farmers. Ou repos si les jambes sont cuites." },
  { day: "Samedi", title: "Course qualité", text: "Fractionné ou allure cible, volume raisonnable (pas un semi-marathon)." },
  { day: "Dimanche", title: "Off", text: "Sommeil, repas, rien à prouver." },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Plan"
        title="Programme d'entraînement"
        text="Un canevas débutant / intermédiaire. Adaptez les charges et le volume. Ce n'est pas un plan d'élite."
        image="/images/gym-class.webp"
        alt="Salle de sport, cadre d'entraînement régulier"
      />
      <section className="container-page space-y-4 py-14">
        {days.map((item) => (
          <div key={item.day} className="grid gap-2 bg-white p-5 md:grid-cols-[140px_1fr]">
            <p className="font-extrabold uppercase text-brand">{item.day}</p>
            <div>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-1 text-neutral-700">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
      <CtaBanner title="Besoin d'un cadre club ?" text="Les cours HYROX du Boxing Center évitent de tout construire seul." />
    </>
  );
}
