import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import { SITE } from "../config/site";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Galerie — Le lieu, les nuits, les affiches"
        description="Galerie photo du ONE CLUB à Saint-Marcel : salle principale, espace VIP, scène, lounge, équipe et affiches des soirées."
        path="/galerie"
        image="/images/gallery/club-wide-1200.webp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Galerie", item: `${SITE.url}/galerie` },
          ],
        }}
      />

      <PageHero
        eyebrow="Galerie"
        title={
          <>
            L'envers
            <br />
            du décor.
          </>
        }
        intro="Le lieu, la scène, les coulisses et les affiches. Une sélection d'images officielles, en attendant la reprise."
        image="/images/gallery/club-wide-1200.webp"
        imageAlt="Vue large du dancefloor et du bar du ONE CLUB."
        meta={["Le lieu", "Les affiches", "L'équipe"]}
      />

      <section className="section">
        <div className="container-x">
          <div className="section-head">
            <span className="eyebrow">La collection</span>
            <h2 className="display h2">Le lieu, les affiches, l'équipe.</h2>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
