# 03 — Analyse du logo et du branding ONE CLUB

> Analyse réalisée à partir des visuels officiels consultés le 19/11/2026. Le logo n'a pas été redessiné ni vectorisé. Les fichiers utilisés sont des fichiers publics officiels, classés dans `assets/reference/`.

## 1. Le logo officiel

### Description morphologique

Le logo est un **wordmark horizontal** sur fond noir :

- **« ONE »** en très grandes capitales blanches, dessiné dans une typographie géométrique large, à angles droits, avec des barres fines et un espacement important. Le « O » est un **cercle ouvert** (deux arcs) qui contient un **« 1 » doré en relief**, avec un empattement supérieur et une base évasée.
- **« CLUB »** en petites capitales blanches, centré dans l'espace libre sous le « N » et le « E », sur deux lignes visuelles (le mot est sur une ligne, mais placé au cœur du wordmark).
- Le **« 1 »** est le seul élément coloré : dégradé or/champagne, highlights blancs, ombres brunes. Il donne au logo son point focal.
- Le wordmark est **large et bas** : proportion approximative 2,2:1 (fichier 778 × 441 px). Il est pensé pour les affiches, les écrans LED et les murs du club.
- Le monogramme **« 1 » dans un cercle doré** existe séparément (photo de profil Instagram, affiches). C'est une déclinaison, pas le logo principal.

### Fichiers et variantes observés

| Variante | Support | Fichier de référence | Qualité |
|---|---|---|---|
| Wordmark blanc + 1 doré sur fond noir | Affiches, site presse, écran LED | `assets/reference/press/info-chalon-finale.png` (778 × 441, RGBA) | Bonne, fond noir opaque |
| Wordmark sur carré noir | Avatar TikTok | `assets/reference/brand/logo-tiktok-avatar.jpg` (966 × 966) | Très bonne |
| Monogramme « 1 » doré dans un cercle | Photo de profil Instagram, affiches | Capture `docs/captures/instagram-profil.jpg` | 150 px, insuffisant pour impression |
| Logo mural | Photos du club | `assets/reference/press/info-chalon-1903.jpg`, `info-chalon-the-one.jpg` | Photo, perspective |
| Logo sur affiche | Affiches d'événements | `assets/reference/instagram/2026-06-27.jpg`, `2026-09-24_on-na-pas-disparu.jpg` | Intégré dans des compositions |

**Aucun fichier SVG ou AI officiel n'a été trouvé publiquement.** Il ne faut pas vectoriser automatiquement une version basse résolution. Pour une publication officielle, demander le pack logo (SVG, PNG transparent, monochrome, noir, blanc) à la direction.

### Règles d'usage observées

- Toujours sur **noir** ou sur photo sombre.
- **Ne pas déformer**, ne pas changer la couleur du « 1 », ne pas recomposer le wordmark.
- Le logo est lisible à petite taille grâce au contraste blanc/noir, mais le mot « CLUB » devient illisible sous ~120 px de large. Prévoir le monogramme pour les favicons et les petits formats.
- Le fond noir fait partie de l'identité : sur fond clair, placer le logo dans un bloc noir plutôt que de l'inverser.

## 2. Palette extraite

Échantillonnage réalisé sur `logo-tiktok-avatar.jpg` (966 × 966) et sur les affiches officielles.

| Rôle | Couleur | Code | Preuve |
|---|---|---|---|
| Noir de fond | Noir pur | `#000000` | Fond du logo, affiches |
| Blanc du wordmark | Blanc cassé | `#F4F1E8` (moyenne des pixels clairs) | Wordmark |
| Or moyen | Champagne | `#AA884C` (moyenne des pixels dorés) | « 1 » |
| Or clair | Champagne clair | `#FFE88B` (pixel le plus lumineux) | Reflets du « 1 » |
| Or profond | Bronze | `#7A5A26` (estimation sur les ombres du « 1 ») | Ombres |
| Rouge d'alerte | Rouge | `#D22B2B` (estimation sur l'affiche LAGUI annulé) | Mention « ANNULÉ » |

**Palette secondaire observée dans les affiches :** rose fluo (Célibataire), vert jungle (Jungle Party), bleu/violet des lumières de salle. Ces couleurs appartiennent aux **campagnes**, pas au socle de marque. Le site ne les utilisera pas comme couleurs dominantes.

**Couleurs estimées :** l'or profond et le rouge sont estimés à partir de zones d'ombre/texte des JPEG ; ils ne sont pas issus d'un fichier charte. L'or moyen et l'or clair sont mesurés.

## 3. Typographies

### Logo
- **Wordmark custom** : géométrique, large, angles droits, barres fines. Aucune fonte commerciale identifiée avec certitude. Les proximités les plus fortes sont les familles *wide geometric sans* (type Monument Extended, Syncopate, Michroma). **Ne pas affirmer qu'il s'agit d'une fonte précise.**
- **« CLUB »** : sans-serif géométrique, petites capitales, espacement large.

### Affiches et réseaux
- **Titres** : condensé bold en capitales, proche de Bebas Neue / Anton / Oswald. Les affiches utilisent plusieurs variantes selon les prestataires.
- **Scripts** : signatures manuscrites (« Chers Clients, Chers amis », « Restez connectés »), proches de fonts script calligraphiques.
- **Textes** : sans-serif lisible, souvent en blanc.
- **Bio Instagram** : caractères Unicode stylisés (𝗢𝗡𝗘 𝗖𝗟𝗨𝗕), qui ne sont pas une fonte mais un artifice de profil.

### Recommandation pour le site
- **Typographie unique** : Inter (400/500/600), auto-hébergée, pour les titres et le texte. C'est une approximation libre et lisible de SF Pro, cohérente avec la direction « Apple-inspired » du site.
- **Titres** : Inter 600, `letter-spacing: -0.045em`, casse normale. Pas de Bebas, pas de Syncopate, pas de script : ces codes restent dans les affiches.
- **Labels** : Inter 500/600, 11–13 px, gris ou or.
- **Logo** : conservé tel quel, placé dans une tuile noire arrondie sur fond clair.
- Ne pas introduire une police décorative supplémentaire.

## 4. Traitements graphiques récurrents

- **Cadres fins dorés** avec coins lumineux.
- **Lignes horizontales** de séparation, dorées à faible opacité.
- **Poussière d'or / confettis / éclats** dans les coins.
- **Portraits détourés** avec halo sombre.
- **Chaînes, bouteilles, champagne, trophées** : codes « bling » assumés.
- **Affiches très contrastées**, texte blanc ou or sur noir.
- **Photos de salle** : noirs profonds, néons bleu/violet, LED, sols brillants, murs logo.
- **Compositions** : souvent centrées, avec un cadre, une headline, une liste d'informations, un logo en bas.

## 5. Style photographique

### Photos de lieu (Info-Chalon, 2025)
- Grand angle, salle vide ou en préparation.
- Lumière mixte : néons bleu/cyan, violet, LED, projecteurs.
- Sol noir brillant, banquettes blanches, bar central, écrans, murs logo.
- Ambiance **club haut de gamme**, pas « festival ».
- Les photos sont sombres ; il faut les éclaircir légèrement et préserver les noirs.

### Photos d'événements (réseaux)
- Portraits d'artistes, vidéos verticales, foule, téléphones levés.
- Qualité variable (captures, vidéos compressées).
- Peu de photos de danse en haute résolution.

### Recommandation
- Utiliser les photos de lieu comme **décor editorial** (grandes, sombres, avec overlay).
- Utiliser les portraits d'artistes comme **preuve de programmation**, pas comme décoration générique.
- Éviter les filtres colorés excessifs ; privilégier un étalonnage chaud (or) sur des noirs froids.
- Ajouter un grain léger pour unifier des sources de qualité inégale.

## 6. Ce qui fonctionne / ce qui doit être amélioré

### Fonctionne
- Noir + or + blanc : immédiat, premium, mémorisable.
- Le « 1 » doré : signal fort, facile à décliner.
- Le wordmark large : bonne présence sur affiche et sur écran.
- Les portraits d'artistes : preuve sociale et attractivité.
- Le ton humain de la communication de crise.

### À améliorer
- Trop de polices et de couleurs secondaires sur les affiches.
- Le mot « CLUB » est parfois illisible en petit format.
- Pas de version horizontale sur fond clair ni de version monochrome noire.
- Pas de règles de composition stables (logo, marges, hiérarchie).
- Photos de lieu peu nombreuses et peu diffusées.
- Aucune déclinaison favicon / icône d'application officielle.

## 7. Fichiers de référence classés

- `assets/reference/brand/logo-tiktok-avatar.jpg` — wordmark officiel, 966 × 966.
- `assets/reference/press/info-chalon-finale.png` — wordmark officiel, 778 × 441, fond noir.
- `assets/reference/press/info-chalon-1903.jpg` — logo mural + scène.
- `assets/reference/press/info-chalon-the-one.jpg` — espace VIP + logo mural.
- `assets/reference/instagram/2026-06-27.jpg` — affiche de fermeture, logo + codes or/noir.
- `assets/reference/instagram/2026-09-24_on-na-pas-disparu.jpg` — affiche de réassurance, logo + cadres dorés.

## 8. Droits

Les visuels et le logo appartiennent à ONE CLUB et/ou à leurs auteurs (photographes, agences, promoteurs). Ils ont été collectés depuis des pages publiques pour **l'analyse de marque et la maquette de présentation**. Toute publication officielle du site nécessite l'accord écrit de ONE CLUB et, pour les photos de presse, du photographe (Info-Chalon / Laurent Guillaumé). Voir `06-informations-a-confirmer.md`.
