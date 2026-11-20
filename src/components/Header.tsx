import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE } from "../config/site";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { InstagramIcon } from "./SocialLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`.trim()}>
        <div className="container-x header-inner">
          <Logo />

          <nav className="main-nav" aria-label="Navigation principale">
            {SITE.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`.trim()}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/infos#statut" className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Réouverture prochaine
            </Link>
            <ThemeToggle />
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Instagram — nouvel onglet"
            >
              <InstagramIcon size={17} />
            </a>
            <Link to="/contact" className="btn btn--small">
              Contact
            </Link>
            <button
              type="button"
              className={`menu-toggle ${open ? "is-open" : ""}`.trim()}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`.trim()}
        aria-hidden={!open}
      >
        <div>
          <nav aria-label="Navigation mobile">
            {SITE.nav.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`.trim()}
              >
                <span className="mr-4 text-[10px] tracking-[0.2em] text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mobile-menu__foot">
          <Link to="/infos#statut" className="status-pill w-fit">
            <span className="status-dot" aria-hidden="true" />
            {SITE.status.short} — {SITE.status.detail}
          </Link>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <p className="m-0 text-[12px] leading-relaxed text-[var(--muted-2)]">
            {SITE.address.street}
            <br />
            {SITE.address.postalCode} {SITE.address.city}
          </p>
          <div className="mobile-menu__theme">
            <ThemeToggle withLabel />
          </div>
          <div className="mobile-menu__socials">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
