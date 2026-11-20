import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE } from "../config/site";

export default function Legal() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales du site ONE CLUB : éditeur, hébergement, propriété intellectuelle, crédits visuels et données personnelles."
        path="/mentions-legales"
      />

      <div className="container-x">
        <article className="legal-page">
          <span className="eyebrow">Informations légales</span>
          <h1 className="display h2 mt-4">Mentions légales</h1>
          <p className="lead">
            Informations relatives à l'édition et à l'hébergement du site de présentation du ONE
            CLUB.
          </p>

          <div className="notice">
            <strong>Site de démonstration.</strong> Cette version est une proposition de refonte
            réalisée pour ONE CLUB. Elle n'est pas le site officiel publié par l'établissement. Les
            visuels publics utilisés dans cette maquette appartiennent à leurs auteurs et nécessitent
            une autorisation avant toute publication définitive.
          </div>

          <h2>Éditeur du site</h2>
          <p>
            <strong>{SITE.legal.company} {SITE.legal.legalForm}</strong>
            <br />
            SIREN : {SITE.legal.siren} — SIRET : {SITE.legal.siret}
            <br />
            TVA intracommunautaire : {SITE.legal.vat}
            <br />
            Siège social : {SITE.legal.address}
            <br />
            Président : {SITE.legal.president}
            <br />
            Téléphone : <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            <br />
            E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p>
            Enseigne : « LE ONE » — nom commercial : ONE CLUB. Activité : débits de boissons
            (NAF 56.30Z). Données issues de l'API Recherche d'entreprises (INSEE/RNE) consultée le
            19/11/2026.
          </p>

          <h2>Directeur de la publication</h2>
          <p>
            {SITE.legal.publisher}, en qualité de président de {SITE.legal.company}. À confirmer
            avant la mise en ligne officielle.
          </p>

          <h2>Hébergement</h2>
          <p>
            La version publiée de démonstration est hébergée par <strong>GitHub Pages</strong>
            (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis). Le
            site est entièrement statique : il ne contient ni formulaire, ni base de données, ni
            espace d'administration.
          </p>
          <p>
            Hébergeur cible à renseigner avant toute exploitation commerciale :{" "}
            <strong>{SITE.legal.host}</strong>.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Le logo, le nom ONE CLUB, les affiches, les photographies et l'ensemble des contenus
            présentés sont protégés par le droit d'auteur et le droit des marques. Toute reproduction,
            représentation, modification ou exploitation, totale ou partielle, sans autorisation
            écrite préalable de ONE CLUB et/ou des auteurs concernés est interdite.
          </p>
          <p>
            Les textes éditoriaux de ce site ont été rédigés pour la présentation du projet. Ils ne
            peuvent pas être repris sans accord.
          </p>

          <h2 id="credits">Crédits visuels</h2>
          <ul>
            <li>
              Photographies du lieu : reportage Info-Chalon / Laurent Guillaumé, article « Coup de
              projecteur sur le ONE CLUB », 18 janvier 2025.
            </li>
            <li>Affiches d'événements, photo d'équipe et logo : ONE CLUB.</li>
            <li>Police Inter : licence SIL Open Font License 1.1, fichier auto-hébergé.</li>
            <li>Carte : OpenStreetMap et ses contributeurs (licence ODbL).</li>
          </ul>
          <p>
            Les visuels sont utilisés dans le cadre de cette maquette de présentation. Leur
            réutilisation sur un site publié nécessite l'accord écrit de ONE CLUB et, pour les photos
            de presse, du photographe.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le site ne collecte aucune donnée personnelle : il ne contient ni formulaire, ni base de
            données, ni compte utilisateur. Les coordonnées affichées permettent de contacter
            directement l'établissement. Voir la{" "}
            <Link to="/confidentialite">politique de confidentialité</Link> pour le détail.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site n'utilise aucun cookie de mesure d'audience ou de publicité. Les polices sont
            auto-hébergées. La carte est une image statique générée à partir de données
            OpenStreetMap : elle ne dépose aucun cookie et n'appelle aucun service externe. Les liens
            vers Instagram, Facebook, TikTok et Google Maps ouvrent des sites tiers soumis à leurs
            propres politiques.
          </p>

          <h2>Liens externes</h2>
          <p>
            Les liens vers Instagram, Facebook, TikTok, Google Maps et OpenStreetMap sont fournis
            pour faciliter la navigation. ONE CLUB n'exerce aucun contrôle sur ces plateformes et
            décline toute responsabilité quant à leurs contenus ou à leurs politiques de
            confidentialité.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux français
            seront compétents, sous réserve des règles impératives applicables aux consommateurs.
          </p>

          <p className="mt-10 text-[11px] text-[var(--muted-2)]">
            Dernière mise à jour : 20 novembre 2026.
          </p>
        </article>
      </div>
    </>
  );
}
