import type { SkillGroup } from '../data/resumeData';
import type { RefObject } from 'react';
import { useTilt } from '../hooks/useTilt';

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 6, scale: 1.02 });

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="skill-group tilt-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <p className="skill-group-label">{group.category}</p>
      <div className="skill-group-items">
        {group.skills.map((skill) => (
          <span key={skill} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
