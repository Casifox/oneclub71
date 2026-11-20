# ONE CLUB — Site vitrine

Site de présentation de **ONE CLUB**, discothèque de 1 800 m² à Saint-Marcel (71380), aux portes de Chalon-sur-Saône.

- **Démonstration en ligne** : https://casifox.github.io/oneclub71/
- **Code source** : https://github.com/Casifox/oneclub71

> Le site est **entièrement statique**. Il ne contient plus de formulaire, ni de base de données, ni d'espace d'administration. Les visiteurs contactent directement le club par e-mail, téléphone ou réseaux sociaux. Aucune donnée personnelle n'est collectée.

## Statut du club

> **Fermé temporairement depuis le 29 juin 2026** pour travaux et mise en conformité (arrêté municipal ADM-153-2026). La réouverture est annoncée comme prochaine, **sans date officielle confirmée**. Le site affiche ce statut et n'invente aucune date, aucun événement, aucun prix ni aucune statistique.

## Contenu

- Direction artistique « Quiet Night » : fond clair `#f5f5f7`, texte `#1d1d1f`, accents or, photos de nuit, cartes arrondies, verre dépoli, mouvement discret.
- Mode clair / sombre avec préférence système, bouton de bascule et mémorisation.
- Pages : Accueil, Le Club, Événements, Galerie, Expérience, Infos, Contact, Mentions légales, Confidentialité, 404.
- Galerie filtrable avec lightbox clavier.
- Responsive de 320 à 1920 px, `prefers-reduced-motion`, navigation clavier.
- SEO local, Open Graph, sitemap, robots, données structurées.
- Page contact avec e-mail, téléphone, adresse, horaires et comptes officiels Instagram, Facebook et TikTok.
- Aucun formulaire, aucun cookie de mesure d'audience, aucun outil de suivi.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **React Router 7**
- **Tailwind CSS 4** + CSS custom
- Police **Inter** auto-hébergée
- Images **WebP** optimisées, carte statique OpenStreetMap
- Tests : **Playwright Chromium**, **axe-core**, **Lighthouse**

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur http://127.0.0.1:5173.

### Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur de développement Vite |
| `npm run build` | build de production dans `dist/` |
| `npm run build:pages` | build pour `https://casifox.github.io/oneclub71/` |
| `npm run preview` | prévisualisation du build |
| `npm run lint` | vérification TypeScript |

## Structure

```text
oneclub71/
├─ public/
│  ├─ fonts/                 # Inter auto-hébergée
│  ├─ images/                # logo, photos, affiches, carte, Open Graph
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ site.webmanifest
├─ src/
│  ├─ components/            # Header, Footer, ThemeToggle, GalleryGrid…
│  ├─ config/site.ts         # coordonnées, statut, réseaux, mentions légales
│  ├─ data/                  # événements, galerie, univers
│  ├─ pages/                 # 10 pages
│  ├─ lib/assets.ts          # gestion du base path GitHub Pages
│  ├─ styles.css             # design system
│  ├─ fonts.css              # @font-face
│  └─ App.tsx
├─ docs/                     # audit, DA, tests, captures
├─ tests/                    # scripts Playwright / axe / Lighthouse
├─ index.html
└─ vite.config.ts
```

## Modifier le contenu

- **Coordonnées, statut, réseaux** : `src/config/site.ts`.
- **Événements** : `src/data/events.ts`.
- **Galerie** : `src/data/gallery.ts` et images dans `public/images/gallery/`.
- **Univers** : `src/data/experience.ts`.
- **Page contact** : `src/pages/Contact.tsx`.

Les coordonnées actuelles sont celles trouvées lors de l'audit (téléphone, e-mail, adresse, réseaux). Elles doivent être confirmées par ONE CLUB avant publication officielle.

## Données personnelles

Le site ne collecte aucune donnée :

- pas de formulaire ;
- pas de base de données ;
- pas de compte utilisateur ;
- pas de cookie de mesure d'audience ou de publicité ;
- pas de service publicitaire ou de suivi intrusif.

Les liens e-mail, téléphone et réseaux sociaux permettent de contacter directement l'établissement. Voir `/confidentialite` et `/mentions-legales`.

## Déploiement

### GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` construit le site avec `npm run build:pages` et le publie sur GitHub Pages. Le base path est `/oneclub71/`.

- URL : https://casifox.github.io/oneclub71/
- `404.html` est une copie de `index.html`, ce qui permet aux routes React Router de fonctionner sur les liens directs.

### Cloudflare Pages

Le projet est compatible avec Cloudflare Pages (site statique, aucun Worker ni base D1 nécessaire). La connexion Cloudflare n'a pas pu être réalisée dans cet environnement : aucun compte Cloudflare ni jeton API n'était disponible. Pour la faire manuellement :

1. créer un projet Cloudflare Pages connecté au dépôt GitHub ;
2. commande de build : `npm run build` ;
3. dossier de sortie : `dist` ;
4. variable `VITE_SITE_URL` : URL publique du site.

Aucun service payant, aucune carte bancaire et aucun abonnement ne sont nécessaires pour un site statique de cette taille.

## Tests

```bash
npm run build:pages
npx vite preview --port 4180 --strictPort --base=/oneclub71/
node tests/pages-build.mjs
```

Le rapport `docs/pages-build-test.json` vérifie les routes, les images, la police, l'absence de formulaire, les coordonnées et les comptes officiels.

Autres scripts : `tests/audit.mjs`, `tests/axe.mjs`, `tests/interactions.mjs`, `tests/premium-audit.mjs` (voir `tests/README.md`).

Résultats connus :

- Lighthouse accueil (build de production, mobile) : **93 / 100 / 100 / 100** (fichier `docs/lighthouse-home-2026-11-20.json`, audit antérieur au retrait du formulaire).
- axe-core site public : 0 violation sur 9 routes, desktop et mobile (rapport `docs/axe-report.json`).
- Build GitHub Pages : 0 requête échouée (rapport `docs/pages-build-test.json`).

## Documentation

- [Guide PDF du site](https://casifox.github.io/oneclub71/ONE-CLUB-71-guide.pdf)
- [01 — Recherche ONE CLUB](docs/01-recherche-oneclub.md)
- [02 — Audit des réseaux sociaux](docs/02-audit-reseaux-sociaux.md)
- [03 — Analyse du logo et du branding](docs/03-analyse-logo-branding.md)
- [04 — Direction artistique](docs/04-direction-artistique.md)
- [05 — Analyse concurrentielle](docs/05-analyse-concurrentielle.md)
- [06 — Informations à confirmer](docs/06-informations-a-confirmer.md)
- [07 — Tests et validation](docs/07-tests-et-validation.md)
- [08 — Principes Apple appliqués](docs/08-apple-design-principles.md)
- [09 — Contrôle qualité final](docs/09-controle-qualite.md)
- [10 — Rapport final](docs/10-rapport-final.md)

## Limites connues

- Aucune date de réouverture officielle : le site ne peut pas en inventer.
- Les photos de presse et le logo nécessitent une autorisation écrite avant publication.
- Le téléphone et l'e-mail affichés proviennent de l'audit et doivent être confirmés.
- Les tests ont été réalisés sur Chromium (Playwright). Safari et Firefox n'ont pas été testés.
- Les scores Lighthouse varient selon la machine et le réseau.
- Le domaine `oneclub71.fr` n'était pas enregistré au registre AFNIC au 19/11/2026 ; sa disponibilité n'est pas garantie.
- Cloudflare Pages n'a pas été connecté faute d'accès au compte Cloudflare.

## Crédits

- Photos du lieu : reportage Info-Chalon / Laurent Guillaumé, article du 18/01/2025.
- Logo, affiches, photo d'équipe : ONE CLUB.
- Police Inter : SIL Open Font License 1.1, auto-hébergée.
- Carte : © OpenStreetMap contributors (ODbL).

Les visuels sont utilisés dans le cadre de cette maquette de présentation. Toute publication officielle nécessite l'accord écrit de ONE CLUB et, pour les photos de presse, du photographe.
