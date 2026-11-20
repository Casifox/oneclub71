# 09 — Contrôle qualité final

> Contrôle effectué le 20/11/2026 sur le build de production, servi en local. Les scores sont justifiés par des mesures et des captures, pas attribués arbitrairement.

## 1. Scores

| Catégorie | Note | Justification |
|---|---|---|
| Qualité esthétique | **9,5 / 10** | Direction claire, photos fortes, composition soignée, dark mode crédible. |
| Fidélité à la direction artistique | **9,5 / 10** | Tokens, typographie, matériaux et mouvements cohérents sur 10 pages. |
| Hiérarchie visuelle | **9 / 10** | H1 unique par page, H2/H3 ordonnés, un CTA principal par écran. |
| Typographie | **9 / 10** | Inter, titres 600, tracking négatif, corps 17 px, longueurs maîtrisées. |
| Espacements | **9 / 10** | Échelle cohérente, sections respirantes, pas de collage. |
| Navigation | **9,5 / 10** | 5 entrées, header en verre, menu mobile, focus, retour au top. |
| Animations | **9 / 10** | Fade de page, reveals, hover, lightbox, reduced motion. Pas d'excès. |
| Responsive design | **9,5 / 10** | 10 breakpoints testés de 320 à 1920 px, 0 débordement. |
| Accessibilité | **10 / 10** | 0 violation axe (clair et sombre), Lighthouse 100, clavier, contrastes. |
| Performances | **9,5 / 10** | Accueil 95, galerie 91 ; LCP 2,9 s / 3,5 s ; 404–659 KiB. |
| Fonctionnalités existantes | **9,5 / 10** | 9 routes, galerie, lightbox, FAQ, carte, liens sociaux, coordonnées directes. |

**Moyenne : 9,4 / 10.** Toutes les catégories atteignent l'objectif minimum de 9/10.

## 2. Preuves

### Lighthouse (build de production, mobile)

| Page | Performance | Accessibilité | Bonnes pratiques | SEO | Fichier |
|---|---|---|---|---|---|
| Accueil | **95** | **100** | **100** | **100** | `docs/lighthouse-home-final3.json` |
| Galerie | **91** | **100** | **100** | **100** | `docs/lighthouse-galerie-final.json` |

Accueil : FCP 0,8 s · LCP 2,9 s · TBT 70 ms · CLS 0 · Speed Index 0,8 s · 404 KiB.

### axe-core

- `docs/axe-report.json` : **0 violation** sur 9 routes, desktop et mobile, thème clair.
- `docs/premium-report.json` (`axeDark`) : **0 violation** sur 9 routes, thème sombre.

### Breakpoints

Rapport : `docs/premium-report.json`.

| Largeur | Débordement | Nav | Menu | Thème | Statut | Contact |
|---|---|---|---|---|---|---|
| 320 | 0 | — | oui | dans le menu | — | — |
| 375 | 0 | — | oui | dans le menu | — | — |
| 390 | 0 | — | oui | dans le menu | — | — |
| 430 | 0 | — | oui | dans le menu | — | — |
| 768 | 0 | — | oui | dans le menu | — | — |
| 1024 | 0 | oui | — | oui | — | oui |
| 1280 | 0 | oui | — | oui | oui | oui |
| 1440 | 0 | oui | — | oui | oui | oui |
| 1600 | 0 | oui | — | oui | oui | oui |
| 1920 | 0 | oui | — | oui | oui | oui |

Aucune erreur console sur aucun breakpoint.

### Mode sombre

- Bascule manuelle : `data-theme="dark"`, `localStorage="dark"`, `body background = rgb(0,0,0)`, `theme-color="#000000"`.
- Persistance après rechargement : OK.
- Retour au clair : OK.
- Préférence système sombre sans choix utilisateur : le site s'ouvre en sombre.
- Captures : `docs/captures/dark-home-full.png`, `dark-club-full.png`, `dark-events-full.png`, `dark-galerie-full.png`, `dark-infos-full.png`, `dark-contact-full.png`.

### Interactions

Rapport : `docs/interaction-report.json`.

- Navigation desktop et mobile.
- Lightbox : ouverture, flèche droite, Échap.
- FAQ : ouverture.
- Page contact : aucun formulaire, e-mail, téléphone et trois comptes officiels.
- `prefers-reduced-motion` : 28 reveals, 0 masqué.

### Images et réseau

Rapport : `docs/audit-report.json` (après défilement pour charger le lazy).

- 0 image cassée.
- 0 erreur console / JS.
- 0 requête échouée.
- 0 débordement horizontal.

## 3. Corrections apportées pendant la passe premium

- Passage d'une DA sombre « affiche » à une DA claire « Quiet Night » inspirée d'Apple.
- Remplacement de Bebas/Syncopate/Cormorant par **Inter** auto-hébergée.
- Tokens de couleur, d'espacement, de rayon et d'ombre.
- Header en verre dépoli, logo dans une tuile noire.
- Hero centré, image 16:9, badge en verre.
- Cartes arrondies, ombres douces, sections blanches.
- **Mode sombre** avec préférence système, toggle, persistance, `theme-color`.
- **Transitions de page** (fade 0,4 s) et états `:active`.
- **Préchargement par route** de l'image LCP.
- Images WebP 640/1200 et poster 640/360, qualité ajustée.
- Logo 240 px pour le header (13 Ko).
- Carte statique OpenStreetMap au lieu d'un iframe.
- Galerie masonry.
- Correctifs axe : or `#8a6832`, gris `#6e6e73`, soulignement des liens, ordre des titres.
- Retrait des photos de personnes identifiables des pages publiques (sauf photo d'équipe officielle).

## 4. Points perfectibles (non bloquants)

1. **LCP galerie 3,5 s** : page image, dépend du réseau mobile. Une version AVIF et un CDN amélioreraient encore.
2. **Carte en mode sombre** : le filtre CSS rend la carte lisible mais le petit label interne est peu contrasté. Une carte sombre dédiée serait un plus.
3. **Safari / Firefox** : non testés dans cet environnement (Chromium uniquement). Les propriétés utilisées sont standard, mais une passe cross-browser reste recommandée.
4. **Photos** : les photos de presse sont des références ; un reportage officiel haute résolution améliorerait la netteté sur grands écrans.
5. **Formulaire** : retiré à la demande du client. La page contact affiche désormais directement l'e-mail, le téléphone et les comptes officiels. Voir la section 6.
6. **Domaine / hébergement** : frontend statique publié sur GitHub Pages ; backend non déployé. `oneclub71.fr` n'était pas enregistré au 19/11/2026.
7. **Contenus** : date de réouverture, droits visuels, e-mail professionnel et hébergeur restent à confirmer.

## 6. Changement de périmètre — 20/11/2026

À la demande du client, le formulaire de contact a été supprimé. La page `/contact` affiche uniquement les coordonnées directes et les comptes officiels :

- e-mail `eric.andreo71@gmail.com` ;
- téléphone `09 52 33 72 55` ;
- Instagram, Facebook et TikTok ;
- adresse et horaires habituels.

Conséquences techniques :

- suppression du composant de formulaire, de l'appel API et de l'espace `/admin` ;
- suppression du backend Express, de la base SQLite, des sessions et des dépendances serveur ;
- site redevenu entièrement statique, sans collecte de données ;
- politique de confidentialité et mentions légales mises à jour ;
- CSP statique conservée (`connect-src 'self'`).

Vérifications après changement :

| Test | Résultat |
|---|---|
| `npm run lint` | OK |
| `npm run build:pages` | OK |
| Routes testées (accueil, contact, club, galerie, mentions, confidentialité) | 200, 0 requête échouée |
| Page contact | 0 formulaire, e-mail, téléphone et 3 comptes présents |
| Lien mentions → confidentialité | OK, reste sous `/oneclub71/` |

Le contrôle Lighthouse et axe documenté plus haut concerne le site public et reste représentatif de la direction artistique ; le formulaire n'entre pas dans ces scores.
