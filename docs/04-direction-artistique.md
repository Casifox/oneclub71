# 04 — Direction artistique du site ONE CLUB

> Direction retenue : **« QUIET NIGHT »** — une interface inspirée des principes d'Apple (clarté, espace, typographie, cartes, verre dépoli, mouvement discret) appliquée à l'univers nocturne de ONE CLUB. Le noir et l'or de la marque restent le socle ; le site ne copie pas Apple, il en emprunte la discipline.

## 1. Pourquoi ce virage

La première piste « noir + or + affiches » était cohérente avec les posters, mais elle restait dans un registre de club traditionnel : fonds sombres, cadres dorés, typographies condensées, effets de scène. Elle ne traduisait pas assez le positionnement premium et la clarté attendue d'un site vitrine moderne.

La direction « QUIET NIGHT » fait le choix inverse :

- **Un fond clair** (gris Apple `#f5f5f7`) qui laisse respirer les photos du club.
- **Une typographie sobre et précise** (Inter, proche de SF Pro), avec de grands titres, des phrases courtes et beaucoup d'espace.
- **Des cartes arrondies** et des ombres douces, comme des fiches produit.
- **Un header en verre dépoli**, discret, qui accompagne la navigation.
- **L'or en accent unique** : le logo, un mot dans le titre, un point de statut, un lien. Pas de surfaces dorées.
- **Le noir profond** réservé aux photos, au CTA final et au logo : le club reste une expérience nocturne.

Apple n'est pas un thème : c'est une **méthode** — enlever le bruit, hiérarchiser, laisser le contenu parler, soigner le mobile, rendre chaque interaction évidente. C'est exactement ce dont ONE CLUB a besoin pour passer d'une communication d'affiches à une marque de lieu.

## 2. Palette

| Token | Couleur | Usage |
|---|---|---|
| `--canvas` | `#f5f5f7` | Fond général, sections respirantes |
| `--surface` | `#ffffff` | Cartes, panneaux, header |
| `--ink` | `#1d1d1f` | Titres, texte principal |
| `--ink-2` | `#424245` | Texte courant |
| `--muted` | `#6e6e73` | Texte secondaire |
| `--muted-2` | `#86868b` | Légendes, métadonnées |
| `--line` | `#d2d2d7` | Séparateurs |
| `--line-soft` | `#e5e5e7` | Bordures de cartes |
| `--gold` | `#a98545` | Accent texte sur fond clair |
| `--gold-bright` | `#c8a45e` | Boutons, points, reflets |
| `--gold-light` | `#ead29a` | Sur fond noir |
| `--gold-deep` | `#7a5a26` | Hover |
| `--black` | `#000000` | Logo, CTA final, photos |

**Règle :** 90 % neutre, 8 % noir, 2 % or. L'or ne doit jamais devenir une couleur de fond pleine page.

## 3. Typographie

| Rôle | Fonte | Graisses | Traitement |
|---|---|---|---|
| Titres | **Inter** | 600 | `letter-spacing: -0.045em`, line-height 1.05, casse normale |
| Texte | **Inter** | 400 | 17 px, line-height 1.6, `#424245` |
| Labels | **Inter** | 500/600 | 11–13 px, casse normale, gris ou or |
| Chiffres | **Inter** | 600 | Très grands, `letter-spacing: -0.05em` |

**Pourquoi Inter :** c'est la meilleure approximation libre de SF Pro, avec une excellente lisibilité en français et un rendu neutre. Les polices sont auto-hébergées (pas de requête Google Fonts).

**À éviter :** Bebas Neue, Syncopate, Cormorant, les capitales espacées façon affiche, les scripts. Ces codes appartiennent aux posters, pas au site.

## 4. Composants

### Header
- Barre fixe en verre dépoli : `rgba(255,255,255,.72)`, `backdrop-filter: blur(20px) saturate(180%)`, bordure 1 px `rgba(0,0,0,.07)`.
- Logo dans une **tuile noire arrondie** (12 px), comme une icône d'application : le wordmark blanc/or reste lisible sur fond clair.
- Navigation en texte noir/gris, 13 px, point or sous l'onglet actif.
- Pilule de statut « Réouverture prochaine » à droite, puis Instagram et CTA noir.
- Mobile : bouton rond, menu plein écran blanc, liens 30 px, coordonnées en bas.

### Hero
- Fond clair, contenu centré, titre sur deux lignes : « La nuit » / « a son adresse. » avec « adresse. » en or.
- Sous-titre gris, deux boutons pilule (or et contour).
- Grande **carte photo arrondie 32 px** (16:9) sous le texte, avec un badge en verre « 1 800 m² · Saint-Marcel ».
- Barre de statut sous l'image : fermé temporairement, coordonnées, « faire défiler ».

### Cartes
- Rayon 22–32 px, bordure 1 px `#e5e5e7`, ombre très douce.
- Pas de cadres dorés, pas de coins décoratifs.
- Les photos sont le contenu ; la carte n'est qu'un écrin.

### Boutons
- Pilule 999 px, hauteur 46 px, texte 14 px.
- Primaire : or champagne, texte noir.
- Secondaire : blanc, bordure grise, texte noir.
- Sur fond noir : or et contour blanc.

### Statut de réouverture
- Pilule discrète avec point or, jamais un bandeau d'alerte.
- Bloc dédié sur la page Infos, avec les dates et la référence de l'arrêté.
- Aucun compte à rebours, aucune fausse date.

### Formulaire
- Champs arrondis 12 px, fond `#f5f5f7`, focus doré avec halo.
- Validation immédiate, messages sobres.
- Le formulaire prépare un e-mail ; il ne prétend pas envoyer.

## 5. Images

- Photos de lieu : traitement naturel, légère désaturation, pas de filtre violet.
- Posters d'événements : conservés tels quels (couleurs incluses), présentés dans des cartes neutres. Ils apportent la couleur sans polluer le socle.
- Ratios : 16:9 pour le hero, 21:9 pour les pages intérieures, 4:5 pour les affiches, 4:3 pour les cartes.
- Toujours `object-fit: cover`, `loading="lazy"` hors hero, `width`/`height` renseignés.
- Carte : image statique OpenStreetMap, traitée en gris chaud, avec pin or et étiquette blanche. Aucun iframe, aucun cookie.

## 6. Mouvement

- Apparitions : opacité 0 → 1, translation 16 px, 700 ms, `cubic-bezier(.22,1,.36,1)`.
- Cartes : élévation de 4 px au survol, ombre douce.
- Images : zoom 1.03 au survol, 800 ms.
- Header : fond qui s'opacifie au scroll.
- Marquee des artistes : lent, gris, pause au survol.
- `prefers-reduced-motion` : tout est figé, aucun mouvement non essentiel.
- Pas de parallaxe lourde, pas de curseur custom, pas de néons animés.

## 7. UX

- Navigation à 5 entrées : Le Club, Événements, Galerie, Expérience, Infos.
- Un CTA principal par écran.
- Statut de réouverture visible dans le header et sur les pages clés.
- Mobile first : le hero, les cartes, les filtres de galerie et le formulaire sont recomposés, pas simplement réduits.
- Accessibilité : contrastes AA, focus visible or, `aria-label`, lightbox au clavier, `dialog` avec focus trap.
- Performance : polices locales, images WebP, JS léger, pas de librairie d'animation.

## 8. Page par page

### Accueil
Hero clair + photo → marquee artistes → manifeste + chiffres → citation « On n'a pas disparu » → trois piliers → événements + statut → galerie → infos + carte → CTA noir.

### Le Club
Hero clair + photo → timeline (Loft → ONE → travaux → réouverture) → lieu et espaces → engagement sécurité → citation du propriétaire → CTA.

### Événements
Hero clair → statut « aucun événement confirmé » → dernière saison 2026 (NAPS, Célibataire, Birthday, LAGUI annulé) → archives 2025 → sources.

### Galerie
Hero clair + photo → filtres pilule → grille asymétrique arrondie → lightbox.

### Expérience
Hero clair → quatre univers (rap, afrobeats, électro, thèmes) → références réelles → citation → CTA.

### Infos
Hero clair → statut + arrêté → coordonnées, carte statique, accès, paiements, accessibilité → FAQ.

### Contact
Hero clair → cartes de contact → formulaire → mentions RGPD.

## 9. Ce qui distingue le site

1. **La clarté** : un lieu, un statut, une histoire, une programmation. Pas de surcharge.
2. **La tuile logo** : le wordmark noir/or devient une icône de marque, pas un élément décoratif.
3. **Le contraste clair/sombre** : fond Apple clair, photos de nuit, CTA noir. Le club reste nocturne sans être un site « néon ».
4. **Le statut honnête** : la fermeture est assumée, documentée, sans fake.
5. **Le mobile** : aussi soigné que le desktop.
6. **La retenue** : pas de dorure partout, pas de promesse invérifiée, pas de fausse date.

## 10. Limites et précautions

- **Ne pas copier Apple** : pas de logo Apple, pas de « One more thing », pas de plagiat de pages. On emprunte des principes, pas des assets.
- **Ne pas prétendre utiliser SF Pro** :Inter est une approximation libre.
- **Le logo doit rester officiel** : la tuile noire est un conteneur, pas une modification du dessin.
- **Les posters colorés** : ils sont officiels ; on ne les retouche pas. Ils assument la couleur dans un écrin neutre.
- **Le statut** : aucune date inventée, aucun « ouvert » tant que l'autorisation n'est pas confirmée.

## 11. Mode sombre

Le site propose deux apparences qui partagent la même structure :

- **Clair** : canvas `#f5f5f7`, surfaces blanches, encre `#1d1d1f`, or `#8a6832`.
- **Sombre** : canvas `#000000`, surfaces `#111113`, encre `#f5f5f7`, or `#d4b473`.

Le mode suit l'apparence du système par défaut. Un bouton dans le header (icône lune/soleil) et dans le menu mobile permet de basculer. Le choix est mémorisé dans `localStorage` et le `theme-color` du navigateur est mis à jour.

Le verre dépoli, les cartes, les formulaires et la carte passent en sombre via des tokens et des surcharges ciblées. Les photos et les affiches restent inchangées : elles apportent la couleur.

## 12. Transitions et micro-interactions

- **Transition de page** : fondu de 0,4 s à chaque changement de route.
- **Révélations** : opacity + translation 16 px, 0,7 s, délais échelonnés.
- **Boutons** : hover de couleur, `:active` scale 0,98, focus visible.
- **Cartes** : élévation de 4 px au survol.
- **Images** : zoom 1,03 au survol.
- **Menu mobile** : fondu, verrouillage du scroll, fermeture à la navigation.
- **Lightbox** : ouverture, flèches, Échap, focus trap.
- **Mode sombre** : bascule instantanée, sans flash au chargement grâce au script inline.
- **`prefers-reduced-motion`** : toutes les animations non essentielles sont neutralisées.
