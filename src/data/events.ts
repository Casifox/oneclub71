export type EventStatus = "past" | "cancelled" | "upcoming";

export type ClubEvent = {
  slug: string;
  title: string;
  dateLabel: string;
  dateISO?: string;
  year: string;
  type: string;
  artists?: string[];
  description: string;
  status: EventStatus;
  image?: {
    src: string;
    srcSet?: string;
    alt: string;
    width: number;
    height: number;
  };
  source?: string;
};

/**
 * Aucun événement futur confirmé au 19/11/2026.
 * La programmation reprendra après l'autorisation de réouverture.
 * Pour ajouter un événement : dupliquer un objet, passer status à "upcoming",
 * renseigner une date vérifiée et une image officielle.
 */
export const upcomingEvents: ClubEvent[] = [];

export const season2026: ClubEvent[] = [
  {
    slug: "naps-12-juin-2026",
    title: "NAPS — Urban Night",
    dateLabel: "Vendredi 12 juin 2026",
    dateISO: "2026-06-12",
    year: "2026",
    type: "Showcase",
    artists: ["NAPS", "DJ M-JID", "MC Marra"],
    description:
      "Urban Night au ONE CLUB avec NAPS en showcase, DJ M-JID aux platines et MC Marra à la présentation.",
    status: "past",
    image: {
      src: "/images/events/naps-2026-640.webp",
      srcSet: "/images/events/naps-2026-360.webp 360w, /images/events/naps-2026-640.webp 640w",
      alt: "Affiche NAPS — Urban Night au ONE CLUB, vendredi 12 juin.",
      width: 512,
      height: 640,
    },
    source: "Affiche officielle ONE CLUB (Instagram, 24/05/2026) ; Bandsintown.",
  },
  {
    slug: "celibataire-20-juin-2026",
    title: "Célibataire 2.0",
    dateLabel: "Samedi 20 juin 2026",
    dateISO: "2026-06-20",
    year: "2026",
    type: "Soirée à thème",
    artists: ["DJ Lexou"],
    description:
      "Le retour de la soirée Célibataire, avec bracelets de couleurs, entrée gratuite pour tous et DJ Lexou.",
    status: "past",
    image: {
      src: "/images/events/celibataire-2026-640.webp",
      srcSet:
        "/images/events/celibataire-2026-360.webp 360w, /images/events/celibataire-2026-640.webp 640w",
      alt: "Affiche rose de la soirée Célibataire 2.0 au ONE CLUB, samedi 20 juin.",
      width: 480,
      height: 640,
    },
    source: "Affiche officielle ONE CLUB (Instagram, 17/06/2026).",
  },
  {
    slug: "birthday-27-juin-2026",
    title: "Birthday Party — dernière soirée",
    dateLabel: "Samedi 27 juin 2026",
    dateISO: "2026-06-27",
    year: "2026",
    type: "Soirée à thème",
    artists: ["DJ Lexou"],
    description:
      "Dernière soirée avant la fermeture temporaire. Anniversaires du mois, entrée gratuite, DJ Lexou. Le club ferme ses portes le 29 juin pour travaux.",
    status: "past",
    image: {
      src: "/images/events/birthday-2026-640.webp",
      srcSet:
        "/images/events/birthday-2026-360.webp 360w, /images/events/birthday-2026-640.webp 640w",
      alt: "Affiche Birthday Party du ONE CLUB, samedi 27 juin, dernière soirée avant fermeture.",
      width: 512,
      height: 640,
    },
    source: "Affiches officielles ONE CLUB (Instagram, 23/06/2026 et 27/06/2026).",
  },
  {
    slug: "lagui-19-septembre-2026",
    title: "LAGUI — annulé",
    dateLabel: "Samedi 19 septembre 2026",
    dateISO: "2026-09-19",
    year: "2026",
    type: "Showcase",
    artists: ["LAGUI", "DJ M-JID", "MC Marra"],
    description:
      "Showcase annulé : le club était toujours dans l'attente de l'autorisation d'ouverture. Les billets annoncés comme remboursés.",
    status: "cancelled",
    image: {
      src: "/images/events/lagui-2026-640.webp",
      srcSet: "/images/events/lagui-2026-360.webp 360w, /images/events/lagui-2026-640.webp 640w",
      alt: "Affiche LAGUI au ONE CLUB, samedi 19 septembre, avec la mention annulé.",
      width: 533,
      height: 640,
    },
    source: "Affiche officielle ONE CLUB (Instagram, 14/09/2026).",
  },
];

export const archive2025: ClubEvent[] = [
  {
    slug: "gims-18-janvier-2025",
    title: "Gims — ouverture",
    dateLabel: "18 janvier 2025",
    dateISO: "2025-01-18",
    year: "2025",
    type: "Showcase",
    artists: ["Gims"],
    description:
      "Soirée d'ouverture du ONE CLUB, après la fermeture du Loft. Gims inaugure le nouveau nom et le nouveau concept.",
    status: "past",
    source: "Le JSL, 07/01/2025.",
  },
  {
    slug: "naza-avril-2025",
    title: "Naza",
    dateLabel: "Avril 2025",
    year: "2025",
    type: "Showcase",
    artists: ["Naza"],
    description: "Naza en showcase au ONE CLUB.",
    status: "past",
    source: "Le JSL, 07/04/2025.",
  },
  {
    slug: "tayc-mai-2025",
    title: "Tayc",
    dateLabel: "Mai 2025",
    year: "2025",
    type: "Showcase",
    artists: ["Tayc"],
    description: "Tayc en showcase au ONE CLUB.",
    status: "past",
    source: "Le JSL, 02/05/2025.",
  },
  {
    slug: "heuss-mai-2025",
    title: "Heuss l'Enfoiré",
    dateLabel: "Mai 2025",
    year: "2025",
    type: "Showcase",
    artists: ["Heuss l'Enfoiré"],
    description: "Heuss l'Enfoiré en showcase au ONE CLUB.",
    status: "past",
    source: "Le JSL, 30/05/2025.",
  },
  {
    slug: "soso-maness-14-juin-2025",
    title: "Soso Maness",
    dateLabel: "Samedi 14 juin 2025",
    dateISO: "2025-06-14",
    year: "2025",
    type: "Showcase",
    artists: ["Soso Maness"],
    description: "Showcase Soso Maness, programmé par le ONE CLUB.",
    status: "past",
    source: "Xceed, fiche ONE CLUB.",
  },
  {
    slug: "dadju-28-juin-2025",
    title: "Dadju",
    dateLabel: "Samedi 28 juin 2025",
    dateISO: "2025-06-28",
    year: "2025",
    type: "Showcase",
    artists: ["Dadju"],
    description: "Showcase Dadju, programmé par le ONE CLUB.",
    status: "past",
    source: "Xceed, fiche ONE CLUB.",
  },
  {
    slug: "naps-30-aout-2025",
    title: "Naps",
    dateLabel: "Samedi 30 août 2025",
    dateISO: "2025-08-30",
    year: "2025",
    type: "Showcase",
    artists: ["Naps"],
    description: "Naps en showcase au ONE CLUB.",
    status: "past",
    source: "Shotgun, fiche ONE CLUB.",
  },
  {
    slug: "dj-k-paris-6-septembre-2025",
    title: "DJ K Paris — American Borderline",
    dateLabel: "Samedi 6 septembre 2025",
    dateISO: "2025-09-06",
    year: "2025",
    type: "Soirée",
    artists: ["DJ K Paris"],
    description: "Soirée American Borderline avec DJ K Paris.",
    status: "past",
    source: "Shotgun, fiche ONE CLUB.",
  },
  {
    slug: "jokair-13-septembre-2025",
    title: "Jok'air",
    dateLabel: "Samedi 13 septembre 2025",
    dateISO: "2025-09-13",
    year: "2025",
    type: "Showcase",
    artists: ["Jok'air"],
    description: "Jok'air en showcase au ONE CLUB.",
    status: "past",
    source: "Shotgun, fiche ONE CLUB.",
  },
  {
    slug: "zola-octobre-2025",
    title: "Zola",
    dateLabel: "Octobre 2025",
    year: "2025",
    type: "Showcase",
    artists: ["Zola"],
    description: "Zola en showcase au ONE CLUB.",
    status: "past",
    source: "Le JSL, 12/10/2025.",
  },
  {
    slug: "plk-18-octobre-2025",
    title: "PLK",
    dateLabel: "Samedi 18 octobre 2025",
    dateISO: "2025-10-18",
    year: "2025",
    type: "Showcase",
    artists: ["PLK"],
    description: "PLK remplit le ONE CLUB avant son Stade de France.",
    status: "past",
    source: "Le JSL, 19/10/2025.",
  },
  {
    slug: "ad-laurent-octobre-2025",
    title: "AD Laurent",
    dateLabel: "Octobre 2025",
    year: "2025",
    type: "Showcase",
    artists: ["AD Laurent"],
    description: "AD Laurent en showcase au ONE CLUB.",
    status: "past",
    source: "Le JSL, 09/10/2025.",
  },
  {
    slug: "gims-29-novembre-2025",
    title: "Gims — le retour",
    dateLabel: "Samedi 29 novembre 2025",
    dateISO: "2025-11-29",
    year: "2025",
    type: "Showcase",
    artists: ["Gims"],
    description: "Gims revient au ONE CLUB devant plus d'un millier de personnes.",
    status: "past",
    source: "Le JSL, 29/11/2025.",
  },
  {
    slug: "fatal-bazooka-decembre-2025",
    title: "Fatal Bazooka",
    dateLabel: "Décembre 2025",
    year: "2025",
    type: "Showcase",
    artists: ["Fatal Bazooka"],
    description: "Fatal Bazooka met le feu au ONE CLUB avec « Fous ta cagoule ».",
    status: "past",
    source: "Le JSL, 22/12/2025.",
  },
];

export const marqueeArtists = [
  "GIMS",
  "PLK",
  "ZOLA",
  "NAPS",
  "DADJU",
  "TAYC",
  "HEUSS L'ENFOIRÉ",
  "SOSO MANESS",
  "JOK'AIR",
  "NAZA",
  "AD LAURENT",
  "FATAL BAZOOKA",
  "KALASH",
];

export const eventTypeLabels: Record<EventStatus, string> = {
  past: "Passé",
  cancelled: "Annulé",
  upcoming: "À venir",
};
