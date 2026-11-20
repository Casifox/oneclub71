# 07 — Tests et validation

> Tests réalisés les 19 et 20/11/2026 sur Windows, avec le build de production servi en local. Les captures et rapports bruts sont dans `docs/` et `docs/captures/`.

## 1. Environnement

| Élément | Version / état |
|---|---|
| Node.js | v24.22.1 |
| npm | 11.19.1 |
| Vite | 8.3.8 |
| React | 19.3.1 |
| TypeScript | 7.0.2 |
| Navigateur de test | Chromium 1254 (Playwright), headless |
| Accessibilité | axe-core / @axe-core/playwright |
| Performance | Lighthouse (mobile, build de production) |

## 2. Build et vérifications statiques

```bash
npm run lint      # tsc --noEmit : OK
npm run build     # tsc -b && vite build : OK
```

Résultat du build :

```
dist/index.html                   5,16 kB │ gzip: 1,76 kB
dist/assets/index-*.css          50,59 kB │ gzip: 9,91 kB
dist/assets/index-*.js          350,15 kB │ gzip: 103,06 kB
```

Aucune erreur TypeScript, aucun avertissement bloquant.

## 3. Routes testées

Toutes les routes répondent **HTTP 200** et affichent un `h1` :

| Route | Statut | Titre / H1 |
|---|---|---|
| `/` | 200 | La nuit a son adresse. |
| `/le-club` | 200 | 1 800 m² de nuit. |
| `/evenements` | 200 | La programmation reprendra. |
| `/galerie` | 200 | L'envers du décor. |
| `/experience` | 200 | Quatre façons de vivre la nuit. |
| `/infos` | 200 | Nous trouver. |
| `/contact` | 200 | Parlons de votre nuit. |
| `/mentions-legales` | 200 | Mentions légales |
| `/confidentialite` | 200 | Politique de confidentialité |
| `/page-qui-nexiste-pas` | 200 (SPA) | 404 — Cette nuit-là n'existe pas. |

## 4. Console, images, débordements

Rapport : `docs/audit-report.json`, `docs/visual-report.json`.

- **Erreurs console** : 0 sur toutes les pages, desktop et mobile.
- **Erreurs JavaScript** : 0.
- **Requêtes échouées** : 0.
- **Images cassées** : 0 (toutes les images ont `naturalWidth > 0`).
- **Débordement horizontal de la page** : 0 à 1440 px, 768 px et 390 px.
- **Header vs hero** : pas de chevauchement (header bottom 61 px, contenu hero top 112 px à 390 px).
- **Marquee** : le contenu interne dépasse volontairement (3604 px) mais reste contenu par `overflow: hidden` ; aucun débordement de page.

## 5. Tests d'interaction

Rapport : `docs/interaction-report.json`.

| Test | Résultat |
|---|---|
| Navigation desktop Accueil → Événements | OK, URL `/evenements`, H1 correct |
| Lightbox galerie : ouverture | OK |
| Lightbox : flèche droite | OK, légende changée |
| Lightbox : Échap | OK, dialogue fermé |
| FAQ : ouverture d'une question | OK |
| Formulaire vide : validation | 4 erreurs affichées, aucun faux succès |
| Formulaire valide : préparation du message | Message d'information affiché, aucun envoi simulé |
| Menu mobile : ouverture | OK, `body.menu-open` |
| Menu mobile : navigation vers Galerie | OK, menu refermé |
| `prefers-reduced-motion` | 28 éléments `.reveal`, 0 masqué |

## 6. Accessibilité — axe-core

Rapport : `docs/axe-report.json`.

**0 violation** sur les 9 routes, en desktop (1440 × 900) et mobile (390 × 844), avec les tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`.

Corrections apportées pendant l'audit :

- Contraste de l'or sur fond clair : `#a98545` (3,15:1) → `#8a6832` (4,70:1).
- Contraste des textes secondaires : `#86868b` (3,32:1) → `#6e6e73` (4,66:1) ou `#5f5f64`.
- Liens dans le texte : ajout d'un soulignement pour ne pas dépendre uniquement de la couleur.
- Ordre des titres : ajout d'un `h2` sur la galerie ; pied de page passé de `h4` à `h3`.
- Formulaire : labels associés, `aria-invalid`, messages d'erreur, focus visible.

## 7. Lighthouse — build de production

### Accueil

Fichier : `docs/lighthouse-home-final3.json`.

| Catégorie | Score |
|---|---|
| Performance | **95 / 100** |
| Accessibilité | **100 / 100** |
| Bonnes pratiques | **100 / 100** |
| SEO | **100 / 100** |

Métriques :

| Métrique | Valeur |
|---|---|
| First Contentful Paint | 0,8 s |
| Largest Contentful Paint | 2,9 s |
| Total Blocking Time | 10 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 0,8 s |
| Poids total | 412 KiB |

### Galerie

Fichier : `docs/lighthouse-galerie-final.json`.

| Catégorie | Score |
|---|---|
| Performance | **91 / 100** |
| Accessibilité | **100 / 100** |
| Bonnes pratiques | **100 / 100** |
| SEO | **100 / 100** |

La galerie est une page image : le score de performance est inférieur à l'accueil, ce qui est attendu. Les images sont en WebP, dimensionnées, chargées en lazy et limitées aux formats 640/1200.

### Optimisations réalisées

- Hero responsive 800/1200/1600 WebP + préchargement par route.
- Logo 240 px pour le header (au lieu du PNG 823 px).
- Images de galerie 640/1200 WebP, qualité 72–78.
- Polices auto-hébergées, pas de Google Fonts.
- Carte statique au lieu d'un iframe.
- Animations CSS + IntersectionObserver, pas de librairie d'animation.
- `prefers-reduced-motion` respecté.

## 8. Responsive — captures

Captures dans `docs/captures/` :

- `home-1440-viewport.png`, `home-1440-full.png`
- `home-768-viewport.png`, `home-390-viewport.png`, `home-390.png`
- `club-1440-full.png`, `club-390.png`
- `events-1440-full.png`, `events-390.png`
- `galerie-1440-full.png`, `galerie-390.png`
- `experience-1440-full.png`, `experience-390.png`
- `infos-1440-full.png`, `infos-390.png`
- `contact-1440-full.png`, `contact-390.png`
- `legal-1440-full.png`
- `section-manifeste.png`, `section-evenements.png`, `section-galerie.png`, `section-infos.png`
- Captures des concurrents : `concurrent-club400.jpg`, `concurrent-sagona.jpg`, `concurrent-tsar.jpg`
- Capture du profil Instagram : `instagram-profil.jpg`

## 9. Corrections issues des tests

| Problème détecté | Correction |
|---|---|
| Galerie en grille avec grands trous | Passage en masonry CSS (`columns`) |
| Champs de formulaire invisibles sur fond clair | Formulaire en carte blanche, champs gris |
| Contraste insuffisant de l'or et des gris | Tokens assombris, vérifiés par axe |
| Ordre des titres invalide | `h2` galerie, `h3` footer |
| Carte vide / iframe lente | Carte statique OpenStreetMap générée |
| Logo trop chargé (55 Ko) | Version 240 px (13 Ko) |
| Images de personnes identifiables | Retirées des pages publiques, sauf photo d'équipe officielle |
| Débordement du marquee | `overflow: hidden` sur le conteneur |
| LCP élevé en dev | Mesure sur build de production + images optimisées |

## 10. Ce qui n'a pas été testé

- **Safari** et **Firefox** : non testés. Le site utilise des fonctionnalités standard (CSS grid, `columns`, `backdrop-filter`, `IntersectionObserver`, `dialog` custom), compatibles avec les versions récentes, mais une passe cross-browser reste à faire.
- **Appareils physiques** : les tests sont des émulations Chromium, pas des iPhone/Android réels.
- **Envoi réel d'e-mail** : le formulaire ouvre un `mailto:` ; aucun serveur SMTP n'est branché. Le comportement dépend du logiciel de messagerie du visiteur.
- **Hébergement réel** : aucun déploiement public n'a été effectué. Les rewrites SPA sont fournis pour Netlify/Vercel, mais n'ont pas été testés en production.
- **Billetterie** : aucun lien de billetterie actif, car aucune programmation future n'est confirmée.
- **Réseaux sociaux** : les intégrations sont des liens sortants, pas des embeds (pas de cookies tiers).
- **Lighthouse desktop** : seul le mode mobile par défaut a été mesuré ; le desktop sera meilleur.
- **Tests de charge** : non pertinents pour un site statique de cette taille.

## 11. Commandes de reproduction

```bash
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4173

# Dans un autre terminal
node tests/audit.mjs
node tests/interactions.mjs
node tests/axe.mjs
node tests/mobile-pages.mjs
node tests/screenshots.mjs

npx lighthouse http://127.0.0.1:4173/ \
  --chrome-path="C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe" \
  --chrome-flags="--headless=new --no-sandbox" \
  --output=json --output-path=docs/lighthouse-home-final3.json \
  --only-categories=performance,accessibility,best-practices,seo
```

## 12. Conclusion

Le site est **fonctionnel, testé et documenté**. Il ne prétend pas que le club est ouvert, n'invente aucune date, aucun prix et aucun événement. Les points restants sont des **validations métier et juridiques** (date de réouverture, droits visuels, adresse e-mail, hébergeur, domaine) et non des défauts techniques connus.


## 13. Mode sombre et apparence

- Bouton d'apparence dans le header (desktop) et dans le menu mobile.
- Choix mémorisé dans `localStorage` (`oneclub-theme`).
- Sans choix utilisateur, le site suit `prefers-color-scheme`.
- `theme-color` mis à jour (`#f5f5f7` en clair, `#000000` en sombre).
- Vérifications : bascule clair → sombre, persistance après rechargement, retour au clair, ouverture automatique en sombre avec un système sombre.
- axe-core en mode sombre : **0 violation** sur les 9 routes.
- Captures : `docs/captures/dark-home-full.png`, `dark-club-full.png`, `dark-events-full.png`, `dark-galerie-full.png`, `dark-infos-full.png`, `dark-contact-full.png`.

## 14. Breakpoints 320 → 1920

Rapport : `docs/premium-report.json`.

| Largeur | Débordement | Navigation | Menu | Thème | Statut | Contact |
|---|---|---|---|---|---|---|
| 320 px | 0 | masquée | oui | dans le menu | masqué | masqué |
| 375 px | 0 | masquée | oui | dans le menu | masqué | masqué |
| 390 px | 0 | masquée | oui | dans le menu | masqué | masqué |
| 430 px | 0 | masquée | oui | dans le menu | masqué | masqué |
| 768 px | 0 | masquée | oui | dans le menu | masqué | masqué |
| 1024 px | 0 | visible | — | visible | masqué | visible |
| 1280 px | 0 | visible | — | visible | visible | visible |
| 1440 px | 0 | visible | — | visible | visible | visible |
| 1600 px | 0 | visible | — | visible | visible | visible |
| 1920 px | 0 | visible | — | visible | visible | visible |

Aucune erreur console sur aucun breakpoint. Captures : `premium-320.png`, `premium-430.png`, `premium-1024.png`, `premium-1600.png`.

## 15. Transitions et micro-interactions

- Fade de page à chaque navigation (`page-transition`, 0,4 s).
- Révélations au scroll (`IntersectionObserver`, 0,7 s, délais échelonnés).
- Hover cartes/images/boutons, `:active` sur boutons et filtres.
- Lightbox : ouverture, flèches, Échap, focus trap.
- Menu mobile : ouverture/fermeture, verrouillage du scroll, fermeture à la navigation.
- `prefers-reduced-motion` : animations neutralisées, 28 reveals visibles sur 28.
