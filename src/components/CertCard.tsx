import type { Certification } from '../data/resumeData';
import type { RefObject } from 'react';
import { useTilt } from '../hooks/useTilt';

export function CertCard({ cert }: { cert: Certification }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 7, scale: 1.025 });

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      ref={ref as RefObject<HTMLAnchorElement>}
      className="cert-card tilt-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <p className="cert-title">{cert.title}</p>
      <p className="cert-issuer">{cert.issuer}</p>
    </a>
  );
}
