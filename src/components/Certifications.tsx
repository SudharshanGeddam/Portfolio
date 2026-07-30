import { resumeData } from '../data/resumeData';
import { ScrollReveal } from './ScrollReveal';
import { CertCard } from './CertCard';

export function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <span className="section-line" />
        </div>
      </ScrollReveal>

      <div className="certs-grid">
        {resumeData.certifications.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={Math.min(index + 1, 5)}>
            <CertCard cert={cert} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
