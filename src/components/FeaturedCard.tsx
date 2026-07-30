import type { FeaturedWork } from '../data/resumeData';
import type { RefObject } from 'react';
import { useTilt } from '../hooks/useTilt';

export function FeaturedCard({ work }: { work: FeaturedWork }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 5, scale: 1.01 });

  return (
    <article
      ref={ref as RefObject<HTMLElement>}
      className="featured-card tilt-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="featured-card-header">
        <div>
          <h3 className="featured-card-title">{work.title}</h3>
          <p className="featured-card-subtitle">{work.subtitle}</p>
          {work.org && <p className="featured-card-org">@ {work.org}</p>}
        </div>
        <span className="featured-card-type" data-type={work.type}>
          {work.type === 'professional' ? 'Professional' : 'Project'}
        </span>
      </div>

      <p className="featured-card-context">{work.context}</p>

      <div className="featured-contributions">
        {work.contributions.map((contribution, i) => (
          <p key={i} className="featured-contribution">
            <span>{contribution}</span>
          </p>
        ))}
      </div>

      <div className="featured-tech-stack">
        {work.techStack.map((tech) => (
          <span key={tech} className="pill">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
