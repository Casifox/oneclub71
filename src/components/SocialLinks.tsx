import { SITE } from "../config/site";

type IconProps = { size?: number };

export function InstagramIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.5h-2.4c-2.6 0-4.1 1.6-4.1 4.2v1.8H8V12h2.5v9.5H14V12h2.7l.4-3.5H14Z" />
    </svg>
  );
}

export function TikTokIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14.2 3v10.1a3.9 3.9 0 1 1-3.3-3.8" />
      <path d="M14.2 3c.4 2.6 1.9 4.1 4.6 4.4" />
    </svg>
  );
}

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = [
    { href: SITE.socials.instagram, label: "Instagram", icon: <InstagramIcon /> },
    { href: SITE.socials.facebook, label: "Facebook", icon: <FacebookIcon /> },
    { href: SITE.socials.tiktok, label: "TikTok", icon: <TikTokIcon /> },
  ];

  return (
    <div className="flex items-center gap-4" aria-label="Réseaux sociaux officiels">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "icon-link" : "link-underline"}
          aria-label={`${link.label} — nouvel onglet`}
        >
          {compact ? link.icon : <>{link.label}</>}
        </a>
      ))}
    </div>
  );
}
