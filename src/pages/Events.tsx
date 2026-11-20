import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import EventCard from "../components/EventCard";
import { SITE } from "../config/site";
import { archive2025, season2026 } from "../data/events";

export default function Events() {
  return (
    <>
      <Seo
        title="Événements & archives — ONE CLUB"
        description="La programmation du ONE CLUB à Saint-Marcel : dernière saison 2026, archives 2025 et statut de réouverture. Aucune date future confirmée au 19/11/2026."
        path="/evenements"
        image="/images/events/birthday-2026-640.webp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Événements", item: `${SITE.url}/evenements` },
          ],
        }}
      />

      <PageHero
        eyebrow="Événements"
        title={
          <>
            La programmation
            <br />
            reprendra.
          </>
        }
        intro="Le ONE est fermé temporairement depuis le 29 juin 2026. Aucun événement futur n'est confirmé à ce jour. En attendant, retrouvez la dernière saison et les archives."
        image="/images/events/birthday-2026-640.webp"
        imageAlt="Affiche de la Birthday Party du ONE CLUB, samedi 27 juin 2026."
        meta={["Aucune date future confirmée", "Dernière saison : 2026", "Archives : 2025"]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="status-panel">
              <div>
                <span className="eyebrow">À venir</span>
                <h3>Aucun événement confirmé.</h3>
                <p>
                  La billetterie et la programmation rouvriront après l'autorisation de réouverture.
                  Pour être informé(e) en premier, suivez les comptes officiels. Aucune date ne sera
                  inventée sur ce site.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small"
                  >
                    Instagram <span className="btn__arrow">↗</span>
                  </a>
                  <a
                    href={SITE.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--ghost"
                  >
                    Facebook <span className="btn__arrow">↗</span>
                  </a>
                </div>
              </div>
              <dl className="status-panel__meta">
                <div>
                  <dt>Fermeture</dt>
                  <dd>Depuis le {SITE.status.since}</dd>
                </div>
                <div>
                  <dt>Réouverture</dt>
                  <dd>{SITE.status.detail}</dd>
                </div>
                <div>
                  <dt>Dernière information</dt>
                  <dd>{SITE.status.lastUpdate}</dd>
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
            eyebrow="Dernière saison"
            title="2026, avant la pause."
            intro="Quatre rendez-vous pour finir la saison : un showcase NAPS, la soirée Célibataire, la Birthday Party et un showcase LAGUI annulé."
          />

          <div className="event-grid">
            {season2026.map((event, index) => (
              <Reveal key={event.slug} delay={index * 70}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="quote-block mt-12">
              <blockquote>
                Le showcase LAGUI, initialement prévu le samedi 19 septembre, est annulé : nous
                sommes toujours dans l'attente de l'autorisation d'ouvrir.
              </blockquote>
              <cite>ONE CLUB — Instagram, 14 septembre 2026</cite>
              <p className="mt-5 max-w-[64ch] text-sm font-light text-[var(--muted)]">
                Le club a annoncé le remboursement des billets et la reprogrammation du showcase.
                Aucune nouvelle date n'a été confirmée publiquement à ce jour.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            number="02"
            eyebrow="Archives"
            title="2025, la première saison."
            intro="Les artistes passés au ONE CLUB, d'après la presse locale, les billetteries officielles et les affiches du club. Les dates sans jour précis sont indiquées par mois."
          />

          <Reveal>
            <div className="archive-list">
              {archive2025.map((event) => (
                <div className="archive-row" key={event.slug}>
                  <span className="archive-row__date">{event.dateLabel}</span>
                  <span className="archive-row__title">
                    {event.title}
                  </span>
                  <span className="archive-row__type">{event.type}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-6 max-w-[70ch] text-[11px] leading-relaxed text-[var(--muted-2)]">
            Sources : Le JSL, Shotgun, Xceed, affiches officielles ONE CLUB. Certains articles de
            presse sont réservés aux abonnés ; seuls les titres, chapôs et extraits accessibles ont
            été utilisés. Les dates 2025 sont recoupées avec le jour de la semaine annoncé.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Suivre la programmation <span className="btn__arrow">↗</span>
            </a>
            <Link to="/contact" className="btn btn--ghost">
              Proposer un événement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
