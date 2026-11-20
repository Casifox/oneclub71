import { Link } from "react-router-dom";
import { asset } from "../lib/assets";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label="ONE CLUB — retour à l'accueil">
      <img
        src={asset("/images/brand/one-club-wordmark-240.png")}
        alt="ONE CLUB"
        width={240}
        height={95}
        decoding="async"
      />
    </Link>
  );
}
