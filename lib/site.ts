export const SITE_NAME = "HYROX Toulouse";
export const SITE_TAGLINE = "Plus qu'un training, une communauté";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyrox-ashen.vercel.app";
export const SITE_DESCRIPTION =
  "Guide HYROX Toulouse : comprendre la discipline, préparer les 8 épreuves, s'entraîner et trouver où pratiquer — sans jargon, avec un plan concret.";

export const OFFICIAL_HYROX_URL =
  "https://boxingcenter.fr/activites-sportives-boxe-toulouse/hyrox-toulouse/";

export const BOXING_CENTER_PHONE = "05 62 24 46 82";
export const BOXING_CENTER_PHONE_TEL = "tel:+33562244682";

export const SALLES = [
  { name: "Toulouse Saint-Cyprien", focus: "Toutes disciplines" },
  { name: "Toulouse Minimes", focus: "Boxe anglaise" },
  { name: "Toulouse États-Unis", focus: "Plus grande salle, toutes disciplines" },
  { name: "Ramonville", focus: "Boxe anglaise & éducative" },
  { name: "Portet-sur-Garonne", focus: "Boxe & cross training" },
] as const;

export const STATIONS = [
  { name: "SkiErg", detail: "1 000 m — haut du corps, tronc, endurance." },
  { name: "Sled Push", detail: "50 m — poussée de traîneau, puissance des jambes." },
  { name: "Sled Pull", detail: "50 m — traction, chaîne postérieure et dos." },
  { name: "Burpee Broad Jump", detail: "80 m — explosivité, cardio, coordination." },
  { name: "Rameur", detail: "1 000 m — endurance globale et rythme." },
  { name: "Farmers Carry", detail: "200 m — grip, gainage, marche chargée." },
  { name: "Fentes sac de sable", detail: "100 m — fentes, hanches, stabilité." },
  { name: "Wall Balls", detail: "100 répétitions — squat + lancer, finisher." },
] as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/hyrox-c-est-quoi", label: "C'est quoi ?" },
  { href: "/epreuves-hyrox", label: "Épreuves" },
  { href: "/hyrox-debutant", label: "Débutant" },
  { href: "/entrainement-hyrox", label: "Entraînement" },
  { href: "/ou-pratiquer-hyrox-toulouse", label: "À Toulouse" },
  { href: "/blog", label: "Blog" },
  { href: "/faq-hyrox", label: "FAQ" },
] as const;
