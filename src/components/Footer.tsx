import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              1 800 m² de nuit aux portes de Chalon-sur-Saône. Showcases rap et urbains, soirées
              club et nuits à thème depuis 2025.
            </p>
            <Link to="/infos#statut" className="footer-status">
              <span className="status-dot" aria-hidden="true" />
              {SITE.status.short} — {SITE.status.detail}
            </Link>
          </div>

          <div className="footer-col">
            <h3>Explorer</h3>
            <ul>
              {SITE.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Informations</h3>
            <ul>
              <li>
                <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <p>
                  {SITE.hours.day} : {SITE.hours.time}
                  <br />
                  <span className="text-[11px] text-[var(--muted-2)]">
                    Horaires habituels, à confirmer
                  </span>
                </p>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Suivre</h3>
            <ul>
              <li>
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook ↗
                </a>
              </li>
              <li>
                <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer">
                  TikTok ↗
                </a>
              </li>
              <li>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                  Plan & itinéraire ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} ONE CLUB — {SITE.legal.company} {SITE.legal.legalForm}. Tous droits réservés.
          </span>
          <span className="flex flex-wrap gap-5">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
            <Link to="/mentions-legales#credits">Crédits visuels</Link>
          </span>
          <span>Site de démonstration — visuels ONE CLUB / Info-Chalon.</span>
        </div>
      </div>
    </footer>
  );
}
