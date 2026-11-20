import { useEffect, useMemo, useRef, useState } from "react";
import { asset, assetSrcSet } from "../lib/assets";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "../data/gallery";

const layoutClass: Record<GalleryItem["layout"], string> = {
  wide: "gallery-item--wide",
  tall: "gallery-item--tall",
  square: "gallery-item--square",
  pano: "gallery-item--pano",
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "Tout">("Tout");
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => (filter === "Tout" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (selected === null) return;
    document.body.classList.add("lightbox-open");
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") {
        setSelected((current) => (current === null ? null : (current - 1 + items.length) % items.length));
      }
      if (event.key === "ArrowRight") {
        setSelected((current) => (current === null ? null : (current + 1) % items.length));
      }
      if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [selected, items.length]);

  const current = selected !== null ? items[selected] : null;

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filtrer la galerie">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${filter === category ? "is-active" : ""}`.trim()}
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setSelected(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`gallery-item ${layoutClass[item.layout]}`.trim()}
            onClick={() => setSelected(index)}
            aria-label={`Agrandir : ${item.caption}`}
          >
            <img
              src={asset(item.src)}
              srcSet={assetSrcSet(item.srcSet)}
              sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
            />
            <span className="gallery-item__overlay">
              <span className="gallery-item__caption">{item.caption}</span>
              <span className="gallery-item__credit">{item.credit}</span>
            </span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-[11px] leading-relaxed text-[var(--muted-2)]">
        Photos de lieu : reportage Info-Chalon / Laurent Guillaumé, 2025. Affiches et photo d'équipe :
        ONE CLUB. Visuels utilisés dans le cadre de cette maquette ; autorisations à obtenir avant
        publication.
      </p>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo ONE CLUB"
          ref={dialogRef}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Fermer la galerie"
            ref={closeRef}
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Image précédente"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((value) => (value === null ? null : (value - 1 + items.length) % items.length));
            }}
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img src={asset(current.src)} alt={current.alt} width={current.width} height={current.height} />
            <figcaption className="lightbox__caption">
              {current.caption}
              <span>{current.credit}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Image suivante"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((value) => (value === null ? null : (value + 1) % items.length));
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
