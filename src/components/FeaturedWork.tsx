import { resumeData } from '../data/resumeData';
import { ScrollReveal } from './ScrollReveal';
import { FeaturedCard } from './FeaturedCard';

export function FeaturedWork() {
  return (
    <section id="work" className="section" aria-label="Featured Work">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Featured Work</span>
          <span className="section-line" />
        </div>
      </ScrollReveal>

      <div className="featured-list">
        {resumeData.featuredWork.map((work, index) => (
          <ScrollReveal key={work.id} delay={Math.min(index + 1, 3)}>
            <FeaturedCard work={work} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
