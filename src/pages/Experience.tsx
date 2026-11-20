import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { SITE } from "../config/site";
import { universes } from "../data/experience";
import { asset } from "../lib/assets";

export default function Experience() {
  return (
    <>
      <Seo
        title="L'expérience — Rap, afrobeats, club et nuits à thème"
        description="Les univers du ONE CLUB à Saint-Marcel : rap et hip-hop, afrobeats, électro et club, nuits thématiques. Une programmation nourrie par les showcases et les soirées."
        path="/experience"
        image="/images/gallery/club-wide-1200.webp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Expérience", item: `${SITE.url}/experience` },
          ],
        }}
      />

      <PageHero
        eyebrow="L'expérience"
        title={
          <>
            Quatre façons
            <br />
            de vivre la nuit.
          </>
        }
        intro="Rap, afrobeats, club, thèmes : le ONE CLUB change de tempo sans changer d'exigence. Une programmation pensée pour faire tenir la salle jusqu'à 5h30."
        image="/images/gallery/club-wide-1200.webp"
        imageAlt="Vue large du dancefloor et du bar du ONE CLUB."
        meta={["Rap & hip-hop", "Afrobeats", "Électro & club", "Nuits thématiques"]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            number="01"
            eyebrow="Les univers"
            title="Une nuit, plusieurs terrains."
            intro="Chaque univers a ses artistes, ses références et son énergie. La programmation future dépendra de l'autorisation de réouverture."
          />

          <div>
            {universes.map((universe, index) => (
              <Reveal key={universe.slug} delay={index * 60}>
                <article className="experience-card">
                  <div className="experience-card__media">
                    <img
                      src={asset(universe.image)}
                      alt={universe.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="experience-card__index">{universe.index}</span>
                    <h3>{universe.title}</h3>
                    <div className="experience-card__sub">{universe.subtitle}</div>
                    <p>{universe.text}</p>
                    <div className="references">
                      {universe.references.map((reference) => (
                        <span key={reference}>{reference}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="quote-block mt-12">
              <blockquote>
                Je veux qu'on retrouve un vrai esprit discothèque, avec un DJ résident et des
                soirées à thème.
              </blockquote>
              <cite>Eric Andreozzi — Le JSL, janvier 2026</cite>
            </div>
          </Reveal>

          <p className="mt-6 max-w-[70ch] text-[11px] leading-relaxed text-[var(--muted-2)]">
            Les univers présentés s'appuient sur les artistes et les soirées réellement programmés
            au ONE CLUB (presse, Shotgun, Xceed, affiches officielles). Ils ne constituent pas une
            promesse de programmation future.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/evenements" className="btn btn--gold">
              Voir la programmation <span className="btn__arrow">↗</span>
            </Link>
            <a
              href={SITE.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Voir les vidéos TikTok <span className="btn__arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
