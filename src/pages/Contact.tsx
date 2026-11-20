import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { SITE } from "../config/site";

const accounts = [
  {
    label: "Instagram",
    handle: "@oneclub71",
    href: SITE.socials.instagram,
    description: "Annonces, coulisses et soirées",
  },
  {
    label: "Facebook",
    handle: "ONE CLUB",
    href: SITE.socials.facebook,
    description: "Page officielle de l'établissement",
  },
  {
    label: "TikTok",
    handle: "@oneclub71",
    href: SITE.socials.tiktok,
    description: "Images et moments du club",
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — ONE CLUB"
        description="Contacter le ONE CLUB à Saint-Marcel : téléphone, e-mail, adresse et comptes officiels Instagram, Facebook et TikTok. Réouverture prochaine."
        path="/contact"
        image="/images/gallery/club-main-1200.webp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — ONE CLUB",
          url: `${SITE.url}/contact`,
          mainEntity: { "@id": `${SITE.url}/#club` },
        }}
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Nos
            <br />
            coordonnées.
          </>
        }
        intro="Une soirée privée, un partenariat, une question sur la réouverture ou une demande presse : retrouvez ici les coordonnées directes du ONE et ses comptes officiels."
        image="/images/gallery/club-main-1200.webp"
        imageAlt="Salle principale du ONE CLUB, bar central et lumières bleues."
        meta={["Téléphone", "E-mail", "Instagram", "Facebook", "TikTok"]}
      />

      <section className="section">
        <div className="container-x">
          <div className="contact-grid">
            <div>
              <div className="grid gap-6">
                <div className="contact-card">
                  <span className="eyebrow">Nous joindre</span>
                  <h2 className="display h3 mt-3">Directement.</h2>
                  <p>
                    Pour une privatisation, un anniversaire, un événement d'entreprise, une demande
                    presse ou toute autre question, contactez la direction du ONE CLUB.
                  </p>

                  <div className="contact-channels">
                    <a className="contact-channel" href={`mailto:${SITE.email}`}>
                      <span className="contact-channel__label">E-mail</span>
                      <strong>{SITE.email}</strong>
                      <span className="contact-channel__action">Écrire ↗</span>
                    </a>
                    <a className="contact-channel" href={`tel:${SITE.phoneHref}`}>
                      <span className="contact-channel__label">Téléphone</span>
                      <strong>{SITE.phone}</strong>
                      <span className="contact-channel__action">Appeler ↗</span>
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <h3>Adresse</h3>
                  <p>
                    {SITE.address.street}
                    <br />
                    {SITE.address.postalCode} {SITE.address.city}
                    <br />
                    France
                  </p>
                  <p>
                    <a
                      href={SITE.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      Itinéraire <span aria-hidden="true">↗</span>
                    </a>
                  </p>
                </div>

                <div className="contact-card">
                  <h3>Horaires habituels</h3>
                  <p>
                    {SITE.hours.day} · {SITE.hours.time}
                  </p>
                  <p>{SITE.hours.note}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="contact-card contact-card--accounts">
                <span className="eyebrow">Nos comptes</span>
                <h2 className="display h3 mt-3">La nuit, en direct.</h2>
                <p>
                  Les annonces officielles, les coulisses et les prochaines soirées sont publiées
                  sur les comptes du ONE CLUB.
                </p>

                <div className="contact-accounts">
                  {accounts.map((account) => (
                    <a
                      key={account.label}
                      className="contact-account"
                      href={account.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <strong>{account.label}</strong>
                        <small>{account.description}</small>
                      </span>
                      <span className="contact-account__handle">
                        {account.handle} <span aria-hidden="true">↗</span>
                        <span className="sr-only"> — nouvel onglet</span>
                      </span>
                    </a>
                  ))}
                </div>

                <p className="contact-card__note">
                  Comptes officiels vérifiés. Aucun autre compte ne représente le ONE CLUB.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-[70ch] text-[11px] leading-relaxed text-[var(--muted-2)]">
            Le site ne collecte aucune donnée personnelle et n'utilise aucun formulaire. Les
            informations affichées permettent de contacter directement l'établissement. Voir la{" "}
            <Link className="link-gold" to="/confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
