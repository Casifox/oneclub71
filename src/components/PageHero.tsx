import type { ReactNode } from "react";
import { asset, assetSrcSet } from "../lib/assets";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  meta?: string[];
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, intro, image, imageAlt, meta, children }: PageHeroProps) {
  const responsive = image?.includes("/images/gallery/") && image.endsWith("-1200.webp");
  const srcSet = responsive
    ? assetSrcSet(`${image!.replace("-1200.webp", "-640.webp")} 640w, ${image} 1200w`)
    : undefined;

  return (
    <section className="page-hero">
      <div className="container-x">
        <div className="page-hero__content">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display">{title}</h1>
          {intro && <p>{intro}</p>}
          {meta && (
            <div className="page-hero__meta">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className="page-hero__visual">
            <img
              src={asset(image)}
              srcSet={srcSet}
              sizes={responsive ? "(max-width: 900px) 100vw, 1200px" : undefined}
              alt={imageAlt ?? ""}
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </section>
  );
}
