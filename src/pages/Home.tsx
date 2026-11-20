import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Marquee from "../components/Marquee";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import EventCard from "../components/EventCard";
import MapEmbed from "../components/MapEmbed";
import { SITE } from "../config/site";
import { marqueeArtists, season2026 } from "../data/events";
import { asset, assetSrcSet } from "../lib/assets";

export default function Home() {
  return (
    <>
      <Seo
        title="ONE CLUB — La nuit a son adresse. Saint-Marcel (71)"
        description="Discothèque de 1 800 m² à Saint-Marcel (71380), aux portes de Chalon-sur-Saône. Showcases rap et urbains, soirées club, parking privé. Réouverture prochaine."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
          ],
        }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container-x hero__content">
          <div className="hero__topline">
            <span className="hero__kicker">Saint-Marcel · 71 · Discothèque</span>
            <Link to="/infos#statut" className="hero__status-pill">
              <span className="status-dot" aria-hidden="true" />
              Réouverture prochaine
            </Link>
          </div>

          <h1 className="hero__title" id="hero-title">
            <span className="line-1">La nuit</span>
            <span className="line-2">
              a son <span className="gold">adresse.</span>
            </span>
          </h1>

          <p className="hero__sub">
            1 800 m². Une scène. Un dancefloor. L'adresse des grandes nuits du Chalonnais — et des
            showcases qui font vibrer la Saône-et-Loire.
          </p>

          <div className="hero__actions">
            <Link to="/le-club" className="btn btn--gold">
              Découvrir le club <span className="btn__arrow">↗</span>
            </Link>
            <Link to="/evenements" className="btn btn--ghost">
              Voir la programmation
            </Link>
          </div>

          <div className="hero__visual">
            <picture>
              <source
                type="image/webp"
                srcSet={assetSrcSet("/images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero.webp 1600w")}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <img
                src={asset("/images/hero.jpg")}
                alt="Salle principale du ONE CLUB, bar central et lumières bleues."
                width={1600}
                height={1026}
                fetchPriority="high"
              />
            </picture>
            <span className="hero__visual-badge">1 800 m² · Saint-Marcel</span>
          </div>

          <div className="hero__bottom">
            <div className="hero__status">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>{SITE.status.short}</strong>
                Réouverture prochaine — date à confirmer
              </div>
            </div>
            <div className="hero__coords">46.7625° N — 4.8674° E</div>
            <a className="hero__scroll" href="#manifeste">
              Faire défiler
            </a>
          </div>
        </div>
      </section>

      <Marquee items={marqueeArtists} />

      <section className="section" id="manifeste">
        <div className="container-x">
          <SectionHeading
            number="01"
            eyebrow="Le Club"
            title={
              <>
                Plus qu'une boîte.
                <br />
                Une scène.
              </>
            }
            intro="Ouvert en janvier 2025 dans les murs de l'ancien Loft, le ONE CLUB s'est imposé comme l'une des adresses rap les plus suivies du Chalonnais. 1 800 m², une programmation nationale, et une nuit qui ne s'arrête qu'à 5h30."
          />

          <div className="split split--wide-left">
            <Reveal>
              <div className="editorial">
                <p>
                  Le ONE CLUB a ouvert le <strong>18 janvier 2025</strong> à Saint-Marcel, après la
                  fermeture du Loft. En un an, la salle a accueilli <strong>Gims</strong>,{" "}
                  <strong>PLK</strong>, <strong>Zola</strong>, <strong>NAPS</strong>,{" "}
                  <strong>Dadju</strong>, <strong>Tayc</strong>, <strong>Soso Maness</strong> ou
                  encore <strong>Heuss l'Enfoiré</strong>. Des artistes nationaux, une scène de
                  proximité, et un public qui vient de tout le Chalonnais.
                </p>
                <p>
                  Aujourd'hui, le club se refait une beauté. Travaux, son, lumières, sécurité : la
                  direction a annoncé une réouverture prochaine, sans date confirmée. En attendant,
                  l'histoire continue de s'écrire — et la scène n'a pas dit son dernier mot.
                </p>
                <div className="mt-8">
                  <Link to="/le-club" className="link-underline">
                    Lire l'histoire du ONE <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="frame">
                <img
                  src={asset("/images/gallery/club-main-1200.webp")}
                  srcSet={assetSrcSet("/images/gallery/club-main-640.webp 640w, /images/gallery/club-main-1200.webp 1200w")}
                  sizes="(max-width: 900px) 100vw, 600px"
                  alt="Salle principale du ONE CLUB, bar central éclairé en bleu."
                  width={1200}
                  height={770}
                  loading="lazy"
                />
                <figcaption className="frame__caption">
                  <span>La salle principale</span>
                  <span>Saint-Marcel, 2025</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="stat-row mt-16">
              <div className="stat">
                <div className="stat__value">1 800 m²</div>
                <div className="stat__label">Surface du club — source officielle</div>
              </div>
              <div className="stat">
                <div className="stat__value">05h30</div>
                <div className="stat__label">Fin de nuit habituelle</div>
              </div>
              <div className="stat">
                <div className="stat__value">71</div>
                <div className="stat__label">Saint-Marcel, aux portes de Chalon</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--panel">
        <div className="container-x">
          <div className="split split--wide-right">
            <Reveal>
              <figure className="frame">
                <img
                  src={asset("/images/gallery/club-wide-1200.webp")}
                  srcSet={assetSrcSet("/images/gallery/club-wide-640.webp 640w, /images/gallery/club-wide-1200.webp 1200w")}
                  sizes="(max-width: 900px) 100vw, 600px"
                  alt="Vue large du dancefloor et du bar du ONE CLUB."
                  width={1200}
                  height={776}
                  loading="lazy"
                />
                <figcaption className="frame__caption">
                  <span>Le dancefloor</span>
                  <span>Saint-Marcel</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <div className="quote-block">
                <blockquote>
                  On n'a pas disparu. Tout est prêt pour vous retrouver dans les meilleures
                  conditions.
                </blockquote>
                <cite>ONE CLUB — septembre 2026</cite>
                <p className="mt-6 max-w-[46ch] text-sm font-light text-[var(--muted)]">
                  Fermé temporairement depuis le 29 juin 2026 pour travaux et mise en conformité, le
                  ONE attend l'autorisation nécessaire à sa réouverture. La date officielle sera
                  annoncée dès qu'elle sera connue.
                </p>
                <div className="mt-6">
                  <a
                    href={SITE.status.statementUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Lire le message officiel <span aria-hidden="true">↗</span>
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
            eyebrow="L'expérience"
            title={
              <>
                Ce qui fait
                <br />
                la différence.
              </>
            }
            intro="Une programmation, un lieu, un accueil. Trois piliers pour une nuit qui ne ressemble pas aux autres."
          />

          <div className="pillars">
            <Reveal className="pillar">
              <span className="pillar__index">01 / SHOWCASES</span>
              <div>
                <h3>Des artistes nationaux, à Saint-Marcel</h3>
                <p>
                  Gims, PLK, Zola, NAPS, Dadju… Des showcases rap et urbains, souvent annoncés en
                  exclusivité régionale, sur une scène taillée pour les grandes nuits.
                </p>
              </div>
            </Reveal>
            <Reveal className="pillar" delay={80}>
              <span className="pillar__index">02 / NUITS THÉMATIQUES</span>
              <div>
                <h3>Une nuit, un thème, un décor</h3>
                <p>
                  Célibataires, birthdays, années 80, concepts saisonniers : le ONE change de
                  scénario et remet le thème au cœur de la fête.
                </p>
              </div>
            </Reveal>
            <Reveal className="pillar" delay={160}>
              <span className="pillar__index">03 / SÉCURITÉ & ACCÈS</span>
              <div>
                <h3>Entrer, danser, rentrer sereinement</h3>
                <p>
                  Parking privé clôturé et éclairé, vidéosurveillance, contrôles dès l'entrée du
                  parking : la direction fait de la sécurité une priorité.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--panel" id="evenements">
        <div className="container-x">
          <SectionHeading
            number="03"
            eyebrow="Événements"
            title={
              <>
                La programmation
                <br />
                reprendra.
              </>
            }
            intro="Aucune date confirmée à ce jour. La dernière saison a accueilli NAPS, Célibataire 2.0, la Birthday Party et un showcase LAGUI annulé."
          />

          <Reveal>
            <div className="status-panel">
              <div>
                <span className="eyebrow">Statut officiel</span>
                <h3>Réouverture prochaine.</h3>
                <p>
                  Le ONE est fermé temporairement depuis le 29 juin 2026 pour travaux et mise en
                  conformité. La date officielle de réouverture sera annoncée dès que l'autorisation
                  sera délivrée.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small"
                  >
                    Suivre l'actualité <span className="btn__arrow">↗</span>
                  </a>
                  <Link to="/evenements" className="btn btn--small btn--ghost">
                    Tous les événements
                  </Link>
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
                  <dt>Dernière information</dt>
                  <dd>{SITE.status.lastUpdate}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div className="event-grid mt-10">
            {season2026.map((event, index) => (
              <Reveal key={event.slug} delay={index * 70}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="galerie">
        <div className="container-x">
          <SectionHeading
            number="04"
            eyebrow="Galerie"
            title={
              <>
                L'envers
                <br />
                du décor.
              </>
            }
            intro="Le lieu, la scène, les coulisses. Quelques images en attendant la fête."
          />

          <div className="preview-grid">
            <Reveal>
              <figure>
                <img
                  src={asset("/images/gallery/club-wide-1200.webp")}
                  srcSet={assetSrcSet("/images/gallery/club-wide-640.webp 640w, /images/gallery/club-wide-1200.webp 1200w")}
                  sizes="(max-width: 900px) 100vw, 600px"
                  alt="Vue large du dancefloor et du bar du ONE CLUB."
                  width={1200}
                  height={776}
                  loading="lazy"
                />
                <figcaption>Le dancefloor</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure>
                <img
                  src={asset("/images/gallery/club-vip-1200.webp")}
                  srcSet={assetSrcSet("/images/gallery/club-vip-640.webp 640w, /images/gallery/club-vip-1200.webp 1200w")}
                  sizes="(max-width: 900px) 100vw, 600px"
                  alt="Espace VIP du ONE CLUB, banquettes et lumières."
                  width={1200}
                  height={733}
                  loading="lazy"
                />
                <figcaption>L'espace VIP</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure>
                <img
                  src={asset("/images/gallery/club-main-1200.webp")}
                  srcSet={assetSrcSet("/images/gallery/club-main-640.webp 640w, /images/gallery/club-main-1200.webp 1200w")}
                  sizes="(max-width: 900px) 100vw, 600px"
                  alt="Salle principale du ONE CLUB, bar central et lumières bleues."
                  width={1200}
                  height={770}
                  loading="lazy"
                />
                <figcaption>La salle principale</figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-8">
            <Link to="/galerie" className="link-underline">
              Ouvrir la galerie <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--panel" id="infos">
        <div className="container-x">
          <SectionHeading
            number="05"
            eyebrow="Infos pratiques"
            title="Nous trouver."
            intro="À Saint-Marcel, aux portes de Chalon-sur-Saône. Parking privé clôturé et éclairé."
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
                    <span>À quelques minutes de Chalon-sur-Saône</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Téléphone</dt>
                  <dd>
                    <a className="link-gold" href={`tel:${SITE.phoneHref}`}>
                      {SITE.phone}
                    </a>
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
                    <span>Accès PMR listé par PagesJaunes — à confirmer auprès du club</span>
                  </dd>
                </div>
                <div className="info-row">
                  <dt>Statut</dt>
                  <dd>
                    Fermé temporairement — réouverture prochaine
                    <span>Dernière information officielle : {SITE.status.lastUpdate}</span>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={120}>
              <MapEmbed />
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/infos" className="btn btn--ghost">
              Toutes les infos pratiques
            </Link>
            <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Itinéraire <span className="btn__arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-x">
          <span className="eyebrow">Contact</span>
          <h2 className="display h2">Une soirée à organiser ?</h2>
          <p>
            Privatisation, partenariat, presse ou simple question : écrivez-nous. Nous vous
            répondrons dès que possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
