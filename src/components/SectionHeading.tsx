import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  number?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
};

export default function SectionHeading({ number, eyebrow, title, intro, center }: SectionHeadingProps) {
  if (center) {
    return (
      <div className="section-head section-head--center">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="display h2">{title}</h2>
          {intro && <p className="section-head__intro">{intro}</p>}
        </Reveal>
      </div>
    );
  }

  return (
    <div className="section-head">
      <Reveal>
        {number && <div className="section-number">{number}</div>}
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display h2">{title}</h2>
        {intro && <p className="section-head__intro">{intro}</p>}
      </Reveal>
    </div>
  );
}
