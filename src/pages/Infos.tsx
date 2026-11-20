import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import MapEmbed from "../components/MapEmbed";
import { SITE } from "../config/site";

const faq = [
  {
    q: "Le ONE CLUB est-il ouvert ?",
    a: "Non. Le club est fermé temporairement depuis le 29 juin 2026 pour des travaux et une mise en conformité. La réouverture est annoncée comme prochaine, sans date officielle confirmée au 19 novembre 2026.",
  },
  {
    q: "Quand aura lieu la réouverture ?",
    a: "Aucune date n'a été communiquée publiquement. Le club a indiqué que la date officielle serait annoncée dès qu'il aurait l'autorisation nécessaire. Ce site ne publiera pas de date avant confirmation.",
  },
  {
    q: "Comment être informé de la réouverture ?",
    a: "Le plus simple est de suivre les comptes officiels Instagram et Facebook du ONE CLUB. Le site affichera également le statut à jour dès qu'une information officielle sera disponible.",
  },
  {
    q: "Peut-on réserver une table ou acheter des billets ?",
    a: "Aucune billetterie n'est active tant que la programmation n'est pas confirmée. Les liens officiels seront publiés sur la page Événements dès qu'ils seront disponibles.",
  },
  {
    q: "Y a-t-il un parking ?",
    a: "Oui, le club communique sur un parking privé clôturé et éclairé, avec des contrôles dès l'entrée. Les conditions d'accès exactes sont à confirmer auprès du club.",
  },
  {
    q: "Le club est-il accessible aux personnes à mobilité réduite ?",
    a: "PagesJaunes liste un « accès handicapé ». Les aménagements exacts (entrée, sanitaires, place de parking) restent à confirmer avec l'établissement.",
  },
];

export default function Infos() {
  return (
    <>
      <Seo
        title="Infos pratiques — Adresse, accès et réouverture"
        description="Adresse, téléphone, horaires, accès, parking et statut de réouverture du ONE CLUB, 1 rue Joseph Cugnot, 71380 Saint-Marcel, près de Chalon-sur-Saône."
        path="/infos"
        image="/images/gallery/club-wide-1200.webp"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Infos pratiques", item: `${SITE.url}/infos` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Infos pratiques"
        title="Nous trouver."
        intro="1 rue Joseph Cugnot, 71380 Saint-Marcel. Aux portes de Chalon-sur-Saône, avec un parking privé clôturé et éclairé."
        image="/images/gallery/club-wide-1200.webp"
        imageAlt="Vue large du dancefloor et du bar du ONE CLUB."
        meta={["Saint-Marcel · 71380", "Parking privé", "Réouverture prochaine"]}
      />

      <section className="section" id="statut">
        <div className="container-x">
          <Reveal>
            <div className="status-panel">
              <div>
                <span className="eyebrow">Statut officiel</span>
                <h3>Fermé temporairement.</h3>
                <p>
                  Le ONE CLUB est fermé depuis le <strong>29 juin 2026</strong> pour des travaux et
                  des remises en conformité. Le club a annoncé une réouverture prochaine et attend
                  l'autorisation nécessaire. Aucune date officielle n'est confirmée à ce jour.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={SITE.status.statementUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small"
                  >
                    Message du 24/09/2026 <span className="btn__arrow">↗</span>
                  </a>
                  <a
                    href="https://www.saintmarcel.com/t%C3%A9l%C3%A9chargements/arrete-adm-153-2026-arrete-de-fermeture-provisoire-etablissement-one-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--ghost"
                  >
                    Arrêté ADM-153-2026 <span className="btn__arrow">↗</span>
                  </a>
                </div>
              </div>
              <dl className="status-panel__meta">
                <div>
                  <dt>Depuis</dt>
                  <dd>{SITE.status.since}</dd>
                </div>
                <div>
                  <dt>Autorisation</dt>
                  <dd>{SITE.status.authority}</dd>
                </div>
                <div>
                  <dt>Dernière prise de parole</dt>
                  <dd>{SITE.status.lastUpdate}</dd>
                </div>
                <div>
                  <dt>Réouverture</dt>
                  <dd>{SITE.status.detail}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--panel">
        <div className="container-x">
          <SectionHeading
            number="01"
            eyebrow="Coordonnées"
            title="Le club."
            intro="Les informations vérifiées et les points à confirmer avant votre venue."
          />

          <div className="info-grid">
            <Reveal>
              <dl className="info-list">
                <div className="info-row">
                  <dt>Adresse</dt>
                  <dd>
                    {SITE.address.street}
                    <br />
                    {SITE.address.postalCode} {SITE.address.city}
                    <span>Coordonnées GPS : 46.7625, 4.8674</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Téléphone</dt>
                  <dd>
                    <a className="link-gold" href={`tel:${SITE.phoneHref}`}>
                      {SITE.phone}
                    </a>
                    <span>Numéro public affiché par le club et les annuaires</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>E-mail</dt>
                  <dd>
                    <a className="link-gold" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                    <span>Adresse publique affichée sur la page Facebook du club</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Horaires</dt>
                  <dd>
                    {SITE.hours.day} : {SITE.hours.time}
                    <span>{SITE.hours.note}</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Accès</dt>
                  <dd>
                    Parking privé clôturé et éclairé
                    <span>Contrôles dès l'entrée du parking — source : direction, 2026</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Accessibilité</dt>
                  <dd>
                    Accès handicapé listé par PagesJaunes
                    <span>Aménagements exacts à confirmer auprès du club</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Paiements</dt>
                  <dd>
                    Espèces, carte bancaire, Visa, Mastercard, Apple Pay
                    <span>Source : PagesJaunes, fiche mise à jour le 01/11/2026</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Privatisation</dt>
                  <dd>
                    Soirée privée listée par PagesJaunes
                    <span>Conditions et disponibilités à confirmer — nous écrire</span>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <MapEmbed />
              <div className="contact-card mt-6">
                <h3>Venir au ONE</h3>
                <p>
                  En voiture depuis Chalon-sur-Saône : direction Saint-Marcel, rue Joseph Cugnot.
                  Le club dispose d'un parking privé. Pour un itinéraire à jour, utilisez le lien
                  ci-dessous.
                </p>
                <div>
                  <a
                    href={SITE.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small"
                  >
                    Ouvrir l'itinéraire <span className="btn__arrow">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            number="02"
            eyebrow="Questions fréquentes"
            title="Avant de venir."
            intro="Les réponses vérifiées aux questions les plus posées. Les points non confirmés sont signalés."
          />

          <Reveal>
            <div className="faq">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn--gold">
              Nous écrire <span className="btn__arrow">↗</span>
            </Link>
            <a href={`tel:${SITE.phoneHref}`} className="btn btn--ghost">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
