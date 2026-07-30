import { resumeData } from '../data/resumeData';
import { ScrollReveal } from './ScrollReveal';
import { SkillGroupCard } from './SkillGroupCard';

export function TechProfile() {
  return (
    <section id="skills" className="section" aria-label="Technical Profile">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Technical Profile</span>
          <span className="section-line" />
        </div>
      </ScrollReveal>

      <div className="skills-grid">
        {resumeData.skills.map((group, index) => (
          <ScrollReveal key={group.category} delay={Math.min(index + 1, 4)}>
            <SkillGroupCard group={group} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
