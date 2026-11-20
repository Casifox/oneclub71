import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable"
        description="La page demandée n'existe pas ou a été déplacée. Retrouvez le ONE CLUB, ses événements et ses informations pratiques."
        path="/404"
      />
      <section className="not-found">
        <div className="container-x">
          <span className="eyebrow">Erreur 404</span>
          <div className="not-found__code">404</div>
          <h1 className="display h2 mt-4">Cette nuit-là n'existe pas.</h1>
          <p className="lead mt-4 max-w-[520px]">
            La page demandée est introuvable. Le club, lui, est toujours à Saint-Marcel — en
            attendant la réouverture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="btn btn--gold">
              Retour à l'accueil <span className="btn__arrow">↗</span>
            </Link>
            <Link to="/evenements" className="btn btn--ghost">
              Voir les événements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
