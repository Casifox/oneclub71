export default function Marquee({ items }: { items: string[] }) {
  const group = (
    <div className="marquee__group">
      {items.map((item) => (
        <span className="flex items-center gap-8" key={item}>
          <span className="marquee__item">{item}</span>
          <span className="marquee__star" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-label="Artistes passés au ONE CLUB">
      <div className="marquee__track">
        {group}
        <div aria-hidden="true">{group}</div>
      </div>
    </div>
  );
}
