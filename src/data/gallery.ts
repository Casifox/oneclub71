export type GalleryCategory = "Le lieu" | "Les affiches" | "L'équipe";

export type GalleryItem = {
  id: string;
  src: string;
  srcSet?: string;
  alt: string;
  caption: string;
  credit: string;
  category: GalleryCategory;
  layout: "wide" | "tall" | "square" | "pano";
  width: number;
  height: number;
};

export const galleryCategories: Array<GalleryCategory | "Tout"> = [
  "Tout",
  "Le lieu",
  "Les affiches",
  "L'équipe",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "club-main",
    src: "/images/gallery/club-main-1200.webp",
    srcSet: "/images/gallery/club-main-640.webp 640w, /images/gallery/club-main-1200.webp 1200w",
    alt: "Salle principale du ONE CLUB, bar central éclairé en bleu et banquettes.",
    caption: "La salle principale et son bar central.",
    credit: "Photo : Info-Chalon / Laurent Guillaumé, 2025.",
    category: "Le lieu",
    layout: "wide",
    width: 1200,
    height: 770,
  },
  {
    id: "club-vip",
    src: "/images/gallery/club-vip-1200.webp",
    srcSet: "/images/gallery/club-vip-640.webp 640w, /images/gallery/club-vip-1200.webp 1200w",
    alt: "Espace VIP du ONE CLUB avec banquettes, tables basses et jeux de lumière.",
    caption: "L'espace VIP, entre banquettes et lumières.",
    credit: "Photo : Info-Chalon / Laurent Guillaumé, 2025.",
    category: "Le lieu",
    layout: "tall",
    width: 1200,
    height: 733,
  },
  {
    id: "club-wide",
    src: "/images/gallery/club-wide-1200.webp",
    srcSet: "/images/gallery/club-wide-640.webp 640w, /images/gallery/club-wide-1200.webp 1200w",
    alt: "Vue large du dancefloor et du bar du ONE CLUB, éclairage bleu et violet.",
    caption: "Le dancefloor vu depuis la mezzanine.",
    credit: "Photo : Info-Chalon / Laurent Guillaumé, 2025.",
    category: "Le lieu",
    layout: "pano",
    width: 1200,
    height: 776,
  },
  {
    id: "team",
    src: "/images/gallery/team-640.webp",
    srcSet: "/images/gallery/team-360.webp 360w, /images/gallery/team-640.webp 640w",
    alt: "L'équipe du ONE CLUB devant le mur logo du club.",
    caption: "L'équipe du ONE, devant le mur logo.",
    credit: "Photo : ONE CLUB (Instagram, 10/06/2026).",
    category: "L'équipe",
    layout: "tall",
    width: 640,
    height: 853,
  },
  {
    id: "affiche-naps",
    src: "/images/events/naps-2026-640.webp",
    srcSet: "/images/events/naps-2026-360.webp 360w, /images/events/naps-2026-640.webp 640w",
    alt: "Affiche de la soirée NAPS au ONE CLUB, vendredi 12 juin.",
    caption: "NAPS — Urban Night, 12 juin 2026.",
    credit: "Affiche : ONE CLUB.",
    category: "Les affiches",
    layout: "tall",
    width: 512,
    height: 640,
  },
  {
    id: "affiche-birthday",
    src: "/images/events/birthday-2026-640.webp",
    srcSet: "/images/events/birthday-2026-360.webp 360w, /images/events/birthday-2026-640.webp 640w",
    alt: "Affiche de la Birthday Party du ONE CLUB, samedi 27 juin.",
    caption: "Birthday Party, 27 juin 2026 — la dernière avant la fermeture.",
    credit: "Affiche : ONE CLUB.",
    category: "Les affiches",
    layout: "tall",
    width: 512,
    height: 640,
  },
  {
    id: "affiche-manifesto",
    src: "/images/events/manifesto-640.webp",
    srcSet: "/images/events/manifesto-360.webp 360w, /images/events/manifesto-640.webp 640w",
    alt: "Affiche ON N'A PAS DISPARU du ONE CLUB, septembre 2026.",
    caption: "« On n'a pas disparu. » — septembre 2026.",
    credit: "Affiche : ONE CLUB.",
    category: "Les affiches",
    layout: "square",
    width: 640,
    height: 640,
  },
];
