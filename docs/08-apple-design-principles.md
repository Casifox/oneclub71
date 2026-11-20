# 08 — Principes Apple appliqués au site

> Référence principale consultée le 20/11/2026 : **https://developer.apple.com/design/** (page officielle Design). La documentation HIG est référencée à **https://developer.apple.com/design/human-interface-guidelines/**. Cette page et ses sous-pages sont rendues côté client ; leur contenu complet n'a pas pu être extrait dans l'environnement (timeout / rendu JavaScript). Les principes ci-dessous sont ceux de la HIG telle que présentée publiquement et ont été appliqués avec discernement, sans prétendre reproduire Apple.

## 1. Les principes retenus

### Clarté
- Une idée par section, un CTA principal par écran.
- Navigation courte : Le Club, Événements, Galerie, Expérience, Infos.
- Statut de réouverture visible, formulé sans ambiguïté.
- Hiérarchie typographique nette : un H1 par page, des H2 de section, des H3 pour les cartes.

### Deference (l'interface s'efface)
- Les photos du club sont le contenu principal ; les cartes ne sont qu'un écrin.
- Pas de cadres décoratifs, pas de motifs, pas de dorure partout.
- L'or est un accent (logo, lien, point de statut), pas une surface.
- Le header est discret, translucide, et ne mange pas l'image.

### Profondeur
- Header en verre dépoli (`backdrop-filter`), badges en verre, ombres diffuses.
- Cartes arrondies 22–32 px, images en pleine largeur, empilement crédible.
- La profondeur est utilisée pour **séparer** les plans, pas pour décorer.

### Cohérence
- Un seul système de tokens (couleurs, rayons, espacements, typographie).
- Mêmes composants (boutons, cartes, filtres, formulaires) sur toutes les pages.
- Deux apparences (claire/sombre) qui partagent la même structure.

### Feedback
- Boutons : hover, active, focus visible.
- Cartes : élévation légère au survol.
- Galerie : lightbox, navigation clavier, fermeture Échap.
- Formulaire : validation immédiate, erreurs sous les champs, message d'état honnête (mailto).
- Menu mobile : ouverture/fermeture animée, verrouillage du scroll, fermeture à la navigation.

### Accessibilité
- Contrastes AA vérifiés (or assombri sur fond clair).
- Focus visible or, labels explicites, `aria-*` sur les contrôles.
- `prefers-reduced-motion` respecté.
- Dark mode testé avec axe-core : 0 violation.

### Adaptabilité
- Breakpoints testés de 320 à 1920 px.
- Navigation recomposée : nav complète ≥ 961 px, menu mobile ≤ 960 px.
- Titres, images et cartes recomposés, pas seulement réduits.
- Aucun débordement horizontal.

### Mode sombre
- Le site suit l'apparence du système par défaut (`prefers-color-scheme`), avec un bouton clair/sombre dans le header et le menu mobile.
- Le choix est mémorisé dans `localStorage`.
- Le `theme-color` du navigateur est mis à jour.
- Les tokens changent, pas la structure.

## 2. Traduction concrète dans ONE CLUB

| Principe Apple | Application ONE CLUB |
|---|---|
| Clarté | « La nuit a son adresse. » ; un statut unique ; 5 entrées de navigation |
| Deference | Les photos de salle et les affiches portent l'identité ; l'UI est neutre |
| Profondeur | Header en verre, cartes d'images, ombres douces, pas de skeuomorphisme |
| Typographie | Inter, titres 600, tracking négatif, corps 17 px, ligne 1,6 |
| Couleur | Canvas `#f5f5f7`, encre `#1d1d1f`, or `#8a6832` / `#c8a45e` |
| Matériaux | `backdrop-filter` sur le header, badges et étiquettes ; utilisé avec parcimonie |
| Mouvement | Fade de page 0,4 s, reveals 0,7 s, hover 0,2–0,3 s, reduced motion |
| Accessibilité | WCAG 2.1 AA, focus, clavier, contrastes, structure de titres |
| Adaptabilité | 320, 375, 390, 430, 768, 1024, 1280, 1440, 1600, 1920 |
| Mode sombre | Toggle + préférence système, tokens dédiés, axe 0 |

## 3. Ce que nous n'avons pas fait

- **Aucun logo, icône ou asset Apple** n'est utilisé.
- **Aucune page Apple n'a été copiée** : la composition, les textes et les images sont propres à ONE CLUB.
- **Aucune prétention à utiliser SF Pro** : Inter est une approximation libre, auto-hébergée.
- **Pas de Liquid Glass partout** : le verre est réservé au header, aux badges et aux étiquettes. Les cartes restent des surfaces opaques.
- **Pas de dark mode automatique sans contrôle** : l'utilisateur peut revenir au clair ; le choix est persisté.
- **Pas de fausse donnée** : le statut de fermeture, les dates et les artistes sont sourcés.

## 4. Sources

- Apple Developer — Design : https://developer.apple.com/design/
- Apple Developer — Human Interface Guidelines : https://developer.apple.com/design/human-interface-guidelines/
- Apple Developer — vidéos de design citées sur la page officielle (Meet Liquid Glass, Get to know the new design system) : titres consultés sur la page Design, vidéos non visionnées.
- Les principes HIG (clarté, deference, profondeur, cohérence, feedback, accessibilité, adaptabilité) sont des principes publics bien établis ; ils ont été appliqués, pas recopiés.

## 5. Limite de consultation

La HIG est une application web rendue côté client. Les tentatives d'extraction directe des pages `color`, `typography` et `materials` ont échoué (timeout / absence de contenu serveur). Nous n'affirmons pas avoir lu ces pages dans leur intégralité. La page officielle Design a bien été consultée, et les principes appliqués sont documentés ci-dessus.
