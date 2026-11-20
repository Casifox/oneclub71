export type ExperienceUniverse = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  text: string;
  references: string[];
  image: string;
  alt: string;
};

export const universes: ExperienceUniverse[] = [
  {
    slug: "rap-hip-hop",
    index: "01",
    title: "Rap & hip-hop",
    subtitle: "La colonne vertébrale du ONE",
    text: "Le ONE CLUB s'est imposé comme l'une des scènes rap du Chalonnais. Des showcases d'artistes nationaux, souvent annoncés en exclusivité régionale, et des nuits qui prolongent le concert jusqu'au petit matin.",
    references: ["Gims", "PLK", "Zola", "NAPS", "Soso Maness"],
    image: "/images/gallery/club-main-1200.webp",
    alt: "Salle principale du ONE CLUB, bar central et lumières bleues.",
  },
  {
    slug: "afrobeats-urbain",
    index: "02",
    title: "Afrobeats & sons urbains",
    subtitle: "Une nuit qui voyage",
    text: "Dadju, Soso Maness, NAPS : la programmation du ONE fait dialoguer rap, afrobeats et sonorités urbaines. Le dancefloor change de tempo sans changer d'exigence.",
    references: ["Dadju", "Soso Maness", "NAPS", "Kalash"],
    image: "/images/gallery/club-vip-1200.webp",
    alt: "Espace VIP du ONE CLUB avec jeux de lumière.",
  },
  {
    slug: "electro-club",
    index: "03",
    title: "Électro & club",
    subtitle: "Jusqu'à 5h30",
    text: "DJ résident, invités et DJ de showcases se relaient pour tenir la salle jusqu'à la fermeture. Le son a été repensé pendant les travaux de 2026 pour une expérience plus immersive.",
    references: ["DJ K Paris", "DJ Lexou", "DJ Mike", "DJ M-JID"],
    image: "/images/gallery/club-wide-1200.webp",
    alt: "Vue large du dancefloor du ONE CLUB, éclairage bleu et violet.",
  },
  {
    slug: "nuits-thematiques",
    index: "04",
    title: "Nuits thématiques",
    subtitle: "Anniversaires, célibataires, années 80",
    text: "Le ONE change de décor et de scénario. Soirées célibataires, birthdays, thèmes années 80 et concepts saisonniers : la direction a annoncé en 2026 vouloir remettre le thème au cœur de la nuit.",
    references: ["Célibataire 2.0", "Birthday Party", "Jungle Party", "Summer Break"],
    image: "/images/events/celibataire-2026-640.webp",
    alt: "Affiche de la soirée Célibataire 2.0 au ONE CLUB.",
  },
];
