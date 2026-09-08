export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "comment-preparer-son-premier-hyrox",
    title: "Comment préparer son premier HYROX ?",
    description:
      "Les bases pour arriver serein à sa première course : course à pied, stations, récupération et erreurs à éviter.",
    date: "2026-08-20",
    image: "/images/start-line.webp",
    alt: "Départ d'une course, préparation d'un premier HYROX",
    paragraphs: [
      "Un premier HYROX se prépare comme un effort hybride, pas comme un simple 10 km. Le format alterne 8 fois 1 km de course et 8 stations fonctionnelles. L'objectif n'est pas de tout écraser dès la première séance, mais d'arriver capable d'enchaîner sans explosion précoce.",
      "Commencez par ancrer une base de course : 2 à 3 sorties par semaine, dont une avec des changements de rythme. Ajoutez ensuite les mouvements des stations (sled, farmers, wall balls, rameur) à allure contrôlée. Le plus utile est le « brick » : courir, enchaîner une station, puis courir à nouveau.",
      "La semaine type d'un débutant peut tenir en 4 séances : une course facile, une séance force fonctionnelle, une séance hybride courte, et une séance plus longue mais plus lente. Gardez un jour de mobilité et de vraie récupération.",
      "Le jour J, partez plus lentement que votre ego. Les wall balls de la fin punissent ceux qui ont trop donné sur le sled. Arrivez hydraté, avec une stratégie de ravitaillement simple, et un plan de rythme au kilomètre.",
    ],
  },
  {
    slug: "hyrox-debutant-guide-complet",
    title: "HYROX débutant : guide complet",
    description:
      "Niveau nécessaire, première séance, endurance, force et pièges classiques quand on débute le HYROX.",
    date: "2026-08-28",
    image: "/images/coach.webp",
    alt: "Coach encadrant une séance pour débutants",
    paragraphs: [
      "Non, il ne faut pas être un athlète confirmé pour commencer le HYROX. Il faut pouvoir marcher, courir à son rythme et accepter de progresser. Les charges et les volumes s'adaptent ; le format, lui, reste le même.",
      "La première séance sert à découvrir les mouvements, pas à battre un chrono. Apprenez le sled sans tout donner, le farmers carry sans se déhancher, le wall ball avec un squat complet. Un coach accélère cette étape : la technique économise les genoux et les lombaires.",
      "Deux qualités font la différence chez le débutant : l'endurance aérobie et la capacité à reprendre la course après une station. La musculation « bodybuilding » seule ne suffit pas. Inversement, courir 40 km par semaine sans force rend le sled très cher.",
      "Erreurs fréquentes : trop de HIIT, zéro récupération, ignorer la course, copier le programme d'un finisher de compétition. Donnez-vous 8 à 12 semaines avant une première course, ou simplement un bloc d'entraînement au club.",
    ],
  },
  {
    slug: "hyrox-ou-crossfit-differences",
    title: "HYROX ou CrossFit : quelles différences ?",
    description:
      "Deux disciplines fonctionnelles, deux logiques : format connu d'un côté, variété constante de l'autre.",
    date: "2026-09-02",
    image: "/images/functional.webp",
    alt: "Entraînement fonctionnel intense en salle",
    paragraphs: [
      "Le HYROX est une course à format standardisé : 8 km de course et 8 stations identiques d'une épreuve à l'autre. On peut donc comparer les temps, viser un objectif clair et s'entraîner spécifiquement.",
      "Le CrossFit varie davantage les workouts, les charges et les compétences (haltérophilie olympique, gymnastique, etc.). Il développe une condition très large, mais prépare moins « mécaniquement » un chrono HYROX si on ne court pas assez.",
      "Beaucoup d'athlètes croisent les deux. Un fond CrossFit aide sur les wall balls et le mental. Un bloc HYROX ajoute de la course, du sled et de l'enchaînement. Ni l'un ni l'autre n'est « mieux » : ça dépend de votre objectif.",
      "À Toulouse, l'important est de trouver un encadrement régulier. Le Boxing Center propose des cours HYROX mixtes, avec une touche de préparation inspirée de la boxe, pour ceux qui veulent un cadre club plutôt qu'un programme solo.",
    ],
  },
  {
    slug: "ou-sentrainer-hyrox-toulouse",
    title: "Où s'entraîner au HYROX à Toulouse ?",
    description:
      "Pistes pour préparer le HYROX à Toulouse et pourquoi le Boxing Center est un point d'entrée naturel.",
    date: "2026-09-05",
    image: "/images/toulouse-capitole.webp",
    alt: "Place du Capitole à Toulouse",
    paragraphs: [
      "Toulouse compte plusieurs salles de sport fonctionnel. Pour le HYROX, cherchez trois choses : de la course (extérieur ou tapis), du matériel de stations (traîneau, rameur, wall balls) et un coaching qui gère l'enchaînement.",
      "Le Boxing Center dispose de 2 salles à Toulouse pour le HYROX : Saint-Cyprien et États-Unis. Les cours y sont conçus pour tous les niveaux, hommes et femmes, avec des coachs diplômés.",
      "La particularité du club : une fusion avec des éléments de préparation physique issus de la boxe (fractionné au sac, shadow, corde à sauter). Ce n'est pas un substitut aux 8 stations officielles, mais un complément cardio et mental très utile.",
      "Horaires, tarifs et inscriptions évoluent : la page officielle HYROX du Boxing Center reste la source à jour. Utilisez ce guide pour comprendre la discipline, puis allez vérifier le planning sur le site du club.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
