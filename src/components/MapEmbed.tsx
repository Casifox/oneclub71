import { SITE } from "../config/site";
import { asset } from "../lib/assets";

export default function MapEmbed() {
  return (
    <div>
      <a
        className="map-frame"
        href={SITE.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ouvrir le plan du ONE CLUB sur OpenStreetMap"
      >
        <img
          src={asset("/images/map-oneclub.webp")}
          alt="Plan du quartier du ONE CLUB, 1 rue Joseph Cugnot à Saint-Marcel."
          width={1200}
          height={900}
          loading="lazy"
        />
      </a>
      <div className="map-note">
        <span>© OpenStreetMap contributors</span>
        <a
          className="link-underline"
          href={SITE.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvrir l'itinéraire ↗
        </a>
      </div>
    </div>
  );
}
