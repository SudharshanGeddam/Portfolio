import { resumeData } from '../data/resumeData';
import { ScrollReveal } from './ScrollReveal';

export function Journey() {
  return (
    <section id="journey" className="section" aria-label="Journey">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Journey</span>
          <span className="section-line" />
        </div>
      </ScrollReveal>

      <div className="timeline" role="list">
        {resumeData.timeline.map((entry, index) => (
          <ScrollReveal key={entry.id} delay={Math.min(index + 1, 5)}>
            <div className="timeline-item" data-type={entry.type} role="listitem">
              <div className="timeline-dot" />
              <span className="timeline-period">{entry.period}</span>
              <h3 className="timeline-title">{entry.title}</h3>
              <p className="timeline-subtitle">
                {entry.subtitle}
                {entry.location ? ` — ${entry.location}` : ''}
              </p>

              {entry.score && (
                <span className="timeline-score">{entry.score}</span>
              )}

              {entry.details.length > 0 && (
                <div className="timeline-details">
                  {entry.details.map((detail, i) => (
                    <p key={i} className="timeline-detail">
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              )}

              {entry.techHighlights && entry.techHighlights.length > 0 && (
                <div className="timeline-tech">
                  {entry.techHighlights.map((tech) => (
                    <span key={tech} className="pill">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
