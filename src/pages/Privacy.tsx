import Seo from "../components/Seo";
import { SITE } from "../config/site";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description="Politique de confidentialité du site ONE CLUB : aucune collecte de données via le site, contact direct par e-mail, téléphone et réseaux sociaux."
        path="/confidentialite"
      />

      <div className="container-x">
        <article className="legal-page">
          <span className="eyebrow">Données personnelles</span>
          <h1 className="display h2 mt-4">Politique de confidentialité</h1>
          <p className="lead">
            Cette page explique quelles données sont utilisées lorsque vous consultez le site du
            ONE CLUB et comment le contacter.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            {SITE.legal.company} {SITE.legal.legalForm}, SIREN {SITE.legal.siren}, siège{" "}
            {SITE.legal.address}. Contact :{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> — {SITE.phone}.
          </p>

          <h2>Aucune collecte via le site</h2>
          <p>
            Le site ne contient <strong>aucun formulaire</strong>, aucune base de données de
            contact, aucun compte utilisateur et aucun outil de mesure d'audience. Aucune donnée
            personnelle n'est enregistrée par le site lorsque vous le consultez.
          </p>
          <p>
            Les coordonnées affichées (e-mail, téléphone, comptes Instagram, Facebook et TikTok)
            permettent de contacter directement l'établissement. Si vous écrivez par e-mail ou par
            message privé, votre message est traité par votre fournisseur et par celui du ONE CLUB,
            uniquement pour répondre à votre demande.
          </p>

          <h2>Finalité et base légale</h2>
          <p>
            Les informations que vous choisissez d'envoyer par e-mail, téléphone ou message privé
            sont utilisées uniquement pour répondre à votre demande (information, privatisation,
            presse, partenariat, réouverture). La base légale est votre démarche volontaire et, le
            cas échéant, votre consentement.
          </p>

          <h2>Destinataires</h2>
          <p>
            Les messages sont destinés à ONE CLUB / {SITE.legal.company} et aux personnes chargées
            de traiter votre demande. Ils ne sont ni vendus ni cédés à des tiers.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les échanges sont conservés le temps nécessaire au traitement de la demande, puis
            supprimés ou archivés selon les obligations légales. Le site lui-même ne conserve aucune
            demande.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
            d'opposition et de retrait du consentement. Pour exercer ces droits, écrivez à{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Une réponse vous sera apportée dans
            les délais prévus par le RGPD.
          </p>
          <p>
            En cas de difficulté, vous pouvez introduire une réclamation auprès de la CNIL :{" "}
            <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
              cnil.fr
            </a>
            .
          </p>

          <h2>Cookies et ressources externes</h2>
          <p>
            Le site n'utilise aucun cookie de mesure d'audience, de publicité ou de profilage. Les
            polices sont auto-hébergées. La carte est une image statique générée à partir de données
            OpenStreetMap : elle n'appelle aucun service externe et ne dépose aucun cookie. Les liens
            vers Instagram, Facebook, TikTok et Google Maps ouvrent des sites tiers soumis à leurs
            propres politiques.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages (GitHub, Inc.). Comme tout hébergeur, GitHub peut
            traiter des journaux techniques (adresse IP, date, page demandée) pour assurer la
            sécurité et le fonctionnement du service. Voir la politique de confidentialité de
            GitHub.
          </p>

          <h2>Modification</h2>
          <p>
            Cette politique peut être mise à jour si le site ajoute un service (billetterie,
            newsletter, mesure d'audience). La date de mise à jour figure ci-dessous.
          </p>

          <p className="mt-10 text-[11px] text-[var(--muted-2)]">
            Dernière mise à jour : 20 novembre 2026.
          </p>
        </article>
      </div>
    </>
  );
}
