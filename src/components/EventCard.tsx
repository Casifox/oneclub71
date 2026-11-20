import type { ClubEvent } from "../data/events";
import { eventTypeLabels } from "../data/events";
import { asset, assetSrcSet } from "../lib/assets";

export default function EventCard({ event }: { event: ClubEvent }) {
  const isCancelled = event.status === "cancelled";

  return (
    <article className="event-card">
      {event.image && (
        <div className="event-card__media">
          <img
            src={asset(event.image.src)}
            srcSet={assetSrcSet(event.image.srcSet)}
            sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
            alt={event.image.alt}
            width={event.image.width}
            height={event.image.height}
            loading="lazy"
            decoding="async"
          />
          <span className={`event-card__tag ${isCancelled ? "event-card__tag--cancelled" : ""}`.trim()}>
            {isCancelled ? "Annulé" : event.type}
          </span>
        </div>
      )}
      <div className="event-card__body">
        <span className="event-card__date">{event.dateLabel}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <span className="sr-only">Statut : {eventTypeLabels[event.status]}</span>
      </div>
    </article>
  );
}
