# Tests

## Build et routes GitHub Pages

```bash
npm run build:pages
npx vite preview --port 4180 --strictPort --base=/oneclub71/
node tests/pages-build.mjs
```

`pages-build.mjs` vérifie les routes, les images, la police, l'absence de formulaire sur la page contact, la présence de l'e-mail, du téléphone et des trois comptes officiels, ainsi que le lien interne vers la confidentialité. Il écrit `docs/pages-build-test.json`.

## Audits visuels et accessibilité

Les scripts `audit.mjs`, `interactions.mjs`, `axe.mjs`, `premium-audit.mjs`, `dark-screenshots.mjs`, `mobile-pages.mjs` et `screenshots.mjs` documentent la refonte visuelle. Certains supposent le build de production sur `http://127.0.0.1:4173`.

```bash
npm run build
npm run preview
node tests/audit.mjs
node tests/axe.mjs
```

## Guide PDF

```bash
node tests/make-pdf.mjs
```

Génère `docs/ONE-CLUB-71-guide.pdf` depuis `docs/guide-site.html`. `tests/pdf-preview.mjs` produit des aperçus PNG des quatre pages.

## Note

Le formulaire, l'API et l'espace `/admin` ont été retirés du site à la demande du client. Le site est désormais entièrement statique : aucune donnée n'est collectée.
