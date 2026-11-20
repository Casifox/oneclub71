import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { SITE } from "../config/site";
import { asset } from "../lib/assets";

export default function Club() {
  return (
    <>
      <Seo
        title="Le Club — 1 800 m² de nuit à Saint-Marcel"
        description="Histoire, scène, espaces et engagement du ONE CLUB, discothèque de 1 800 m² à Saint-Marcel, près de Chalon-sur-Saône. Ouvert en janvier 2025, fermé temporairement pour travaux."
        path="/le-club"
        image="/images/gallery/club-main-1200.webp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Le Club", item: `${SITE.url}/le-club` },
          ],
        }}
      />

      <PageHero
        eyebrow="Le Club"
        title={
          <>
            1 800 m²
            <br />
            de nuit.
          </>
        }
        intro="Un ancien loft devenu l'une des scènes rap les plus suivies du Chalonnais. Une salle, un dancefloor, des espaces VIP et une programmation qui voit grand."
        image="/images/gallery/club-main-1200.webp"
        imageAlt="Salle principale du ONE CLUB, bar central et lumières bleues."
        meta={["Saint-Marcel · 71380", "Ouvert depuis janvier 2025", "1 800 m²"]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            number="01"
            eyebrow="L'histoire"
            title={
              <>
                Du Loft
                <br />
                au ONE.
              </>
            }
            intro="Le lieu existe depuis longtemps dans la nuit chalonnaise. Le ONE CLUB lui a donné un nouveau nom, un nouveau concept et une nouvelle ambition."
          />

          <div className="split split--wide-left">
            <Reveal>
              <div className="timeline">
                <div className="timeline__item">
                  <span className="timeline__year">2020</span>
                  <h3>Le Loft</h3>
                  <p>
                    Le Premium devient Le Loft. La discothèque de Saint-Marcel poursuit son histoire
                    avec une nouvelle identité.
                  </p>
                </div>
                <div className="timeline__item">
                  <span className="timeline__year">18 janvier 2025</span>
                  <h3>Naissance du ONE CLUB</h3>
                  <p>
                    Le Loft ferme le 4 janvier. Le ONE CLUB ouvre deux semaines plus tard avec un
                    showcase de Gims. Nouveau nom, nouveau concept, nouvelle équipe.
                  </p>
                </div>
                <div className="timeline__item">
                  <span className="timeline__year">2025</span>
                  <h3>Une première saison de showcases</h3>
                  <p>
                    Gims, Naza, Tayc, Heuss l'Enfoiré, Soso Maness, Dadju, Naps, DJ K Paris, Jok'air,
                    Zola, PLK, AD Laurent, Fatal Bazooka : la scène accueille les noms du rap et de
                    la nuit urbaine.
                  </p>
                </div>
                <div className="timeline__item">
                  <span className="timeline__year">Janvier 2026</span>
                  <h3>Un nouveau propriétaire</h3>
                  <p>
                    Eric Andreozzi rachète le ONE CLUB. Il annonce vouloir « refaire une vraie
                    discothèque », avec un DJ résident, moins de showcases et des soirées à thème.
                  </p>
                </div>
                <div className="timeline__item">
                  <span className="timeline__year">29 juin 2026</span>
                  <h3>Fermeture pour travaux</h3>
                  <p>
                    Le club ferme temporairement pour des travaux et des remises en conformité
                    exigées par la mairie : climatisation, son, lumières, vidéosurveillance.
                  </p>
                </div>
                <div className="timeline__item is-now">
                  <span className="timeline__year">Aujourd'hui</span>
                  <h3>Réouverture prochaine</h3>
                  <p>
                    « On n'a pas disparu. » Le ONE attend l'autorisation nécessaire à sa réouverture.
                    La date officielle sera annoncée dès qu'elle sera connue.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4">
                <figure className="frame">
                  <img
                    src={asset("/images/gallery/club-vip-1200.webp")}
                    alt="Espace VIP du ONE CLUB, banquettes et lumières."
                    width={1200}
                    height={733}
                    loading="lazy"
                  />
                  <figcaption className="frame__caption">
                    <span>L'espace VIP</span>
                    <span>ONE CLUB</span>
                  </figcaption>
                </figure>
                <div className="quote-block">
                  <blockquote>Je veux faire revenir les gens en boîte.</blockquote>
                  <cite>Eric Andreozzi — Le JSL, janvier 2026</cite>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="container-x">
          <SectionHeading
            number="02"
            eyebrow="Le lieu"
            title={
              <>
                Une salle
                <br />
                pensée pour la nuit.
              </>
            }
            intro="Un dancefloor central, un bar, une scène, des espaces VIP. Le tout dans une esthétique noir et or, signature du ONE."
          />

          <div className="split">
            <Reveal>
              <figure className="frame">
                <img
                  src={asset("/images/gallery/club-wide-1200.webp")}
                  alt="Vue large du dancefloor et du bar du ONE CLUB, éclairage bleu et violet."
                  width={1200}
                  height={776}
                  loading="lazy"
                />
                <figcaption className="frame__caption">
                  <span>Le dancefloor</span>
                  <span>Vue depuis la mezzanine</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="editorial">
                <p>
                  <strong>1 800 m²</strong> de volumes, de lumières et de matière noire. Le ONE a
                  été pensé comme un club urbain : une piste centrale, un bar accessible, une scène
                  pour les showcases, des salons pour les groupes.
                </p>
                <p>
                  Les photos du lieu montrent un sol brillant, des banquettes claires, des écrans,
                  des jeux de lumière bleu et violet. Un cadre contemporain, à des années-lumière
                  des clubs de village traditionnels.
                </p>
                <p>
                  La terrasse, annoncée en 2025 pour les beaux jours, et les espaces VIP font partie
                  des atouts du lieu. Leur configuration exacte reste à confirmer avec la direction.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            number="03"
            eyebrow="L'engagement"
            title={
              <>
                La fête,
                <br />
                en sécurité.
              </>
            }
            intro="Le ONE a fait de la sécurité un sujet central. Un engagement à vérifier, à expliquer et à tenir dans la durée."
          />

          <div className="pillars">
            <Reveal className="pillar">
              <span className="pillar__index">ACCÈS</span>
              <div>
                <h3>Un parking privé, clôturé et éclairé</h3>
                <p>
                  Les contrôles commencent dès l'entrée du parking. Un accès privé pour arriver et
                  repartir dans de bonnes conditions.
                </p>
              </div>
            </Reveal>
            <Reveal className="pillar" delay={80}>
              <span className="pillar__index">SURVEILLANCE</span>
              <div>
                <h3>Vidéosurveillance et équipe renforcée</h3>
                <p>
                  Le club a communiqué sur un système de vidéosurveillance et une équipe de sécurité
                  renouvelée. Les dispositifs exacts sont à confirmer à la réouverture.
                </p>
              </div>
            </Reveal>
            <Reveal className="pillar" delay={160}>
              <span className="pillar__index">PRÉVENTION</span>
              <div>
                <h3>Des bougies LED à la place des étincelles</h3>
                <p>
                  En janvier 2026, la direction a remplacé les bougies étincelantes par un système
                  LED, par sécurité. Un choix de prévention assumé.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="quote-block mt-12">
              <blockquote>
                On a mis le maximum là-dessus pour que les fêtards se sentent bien, le tout dans un
                univers encadré. On veut prouver que tout est réglé.
              </blockquote>
              <cite>Eric Andreozzi — Le JSL, janvier 2026</cite>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-x">
          <span className="eyebrow">La suite</span>
          <h2 className="display h2">La nuit reprendra.</h2>
          <p>
            En attendant la réouverture, retrouvez les artistes passés, les images du lieu et les
            informations pratiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/evenements" className="btn btn--gold">
              Voir les événements <span className="btn__arrow">↗</span>
            </Link>
            <Link to="/galerie" className="btn btn--ghost">
              Ouvrir la galerie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
