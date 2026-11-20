export const SITE = {
  name: "ONE CLUB",
  shortName: "ONE",
  legalName: "LAXE",
  // Domaine cible. Surchargé par VITE_SITE_URL pour GitHub Pages / production.
  url: (import.meta.env.VITE_SITE_URL || "https://oneclub71.fr").replace(/\/$/, ""),
  description:
    "Discothèque de 1 800 m² à Saint-Marcel (71380), aux portes de Chalon-sur-Saône. Showcases rap et urbains, soirées club, parking privé. Réouverture prochaine.",
  address: {
    street: "1 rue Joseph Cugnot",
    postalCode: "71380",
    city: "Saint-Marcel",
    region: "Bourgogne-Franche-Comté",
    country: "FR",
    countryLabel: "France",
    lat: 46.762511,
    lng: 4.867369,
  },
  phone: "09 52 33 72 55",
  phoneHref: "+33952337255",
  email: "eric.andreo71@gmail.com",
  hours: {
    day: "Samedi",
    time: "23h30 — 05h30",
    note: "Horaires habituels publiés par les annuaires. À confirmer à la réouverture.",
  },
  status: {
    closed: true,
    short: "Fermé temporairement",
    headline: "Réouverture prochaine",
    detail: "Date officielle à confirmer",
    since: "29 juin 2026",
    authority: "Arrêté municipal ADM-153-2026",
    lastUpdate: "30 octobre 2026",
    lastUpdateLabel: "Dernière prise de parole officielle",
    statementUrl: "https://www.instagram.com/oneclub71/p/DdqyZO_K4NO/",
    facebookUrl: "https://www.facebook.com/p/ONE-CLUB-100057037106607/",
  },
  stats: {
    surface: "1 800 m²",
    closing: "05h30",
    city: "Saint-Marcel",
  },
  socials: {
    instagram: "https://www.instagram.com/oneclub71/",
    facebook: "https://www.facebook.com/p/ONE-CLUB-100057037106607/",
    tiktok: "https://www.tiktok.com/@oneclub71",
  },
  legal: {
    company: "LAXE",
    legalForm: "SAS",
    siren: "940 676 547",
    siret: "940 676 547 00018",
    vat: "FR20940676547",
    president: "Eric Andreozzi",
    publisher: "Eric Andreozzi",
    host: "À compléter avant la mise en ligne",
    address: "1 rue Joseph Cugnot, 71380 Saint-Marcel, France",
  },
  nav: [
    { label: "Le Club", to: "/le-club" },
    { label: "Événements", to: "/evenements" },
    { label: "Galerie", to: "/galerie" },
    { label: "Expérience", to: "/experience" },
    { label: "Infos", to: "/infos" },
  ],
  mapUrl:
    "https://www.openstreetmap.org/?mlat=46.762511&mlon=4.867369#map=17/46.762511/4.867369",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1+rue+Joseph+Cugnot+71380+Saint-Marcel",
} as const;

export type NavItem = (typeof SITE.nav)[number];
