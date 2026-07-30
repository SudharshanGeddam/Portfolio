import type { RefObject } from 'react';
import { resumeData } from '../data/resumeData';
import { IconGitHub, IconLinkedIn, IconMail, IconDownload } from './Icons';
import { useMagnetic } from '../hooks/useMagnetic';
import heroArt from '../assets/hero.png';

interface HeroProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'work', label: 'Featured Work' },
  { id: 'skills', label: 'Technical Profile' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function Hero({ activeSection }: HeroProps) {
  const { name, role, about, github, linkedin, email, resumePath } = resumeData.personal;
  const primaryMagnet = useMagnetic(0.3);
  const ghostMagnet = useMagnetic(0.3);

  return (
    <header className="hero" id="hero">
      <div className="hero-art" aria-hidden="true">
        <img src={heroArt} alt="" />
      </div>

      <div>
        <div className="hero-identity">
          <span className="hero-status">
            <span className="hero-status-dot" />
            Open to opportunities
          </span>

          <h1 className="hero-name">
            <span className="hero-name-gradient">{name}</span>
          </h1>
          <p className="hero-role">{role}</p>
          <p className="hero-about">{about}</p>

          <div className="hero-actions">
            <a
              href="#work"
              ref={primaryMagnet.ref as RefObject<HTMLAnchorElement>}
              onMouseMove={primaryMagnet.onMouseMove}
              onMouseLeave={primaryMagnet.onMouseLeave}
              className="btn btn-primary"
            >
              View Work
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              ref={ghostMagnet.ref as RefObject<HTMLAnchorElement>}
              onMouseMove={ghostMagnet.onMouseMove}
              onMouseLeave={ghostMagnet.onMouseLeave}
              className="btn btn-ghost"
              aria-label="Download Resume"
            >
              <IconDownload size={14} />
              Resume
            </a>
          </div>
        </div>

        <nav className="hero-nav" aria-label="Page sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hero-nav-link"
              data-active={activeSection === item.id}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              <span className="hero-nav-indicator" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-footer">
        <a href={github} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub profile">
          <IconGitHub size={16} />
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn profile">
          <IconLinkedIn size={16} />
          LinkedIn
        </a>
        <a href={`mailto:${email}`} className="hero-social-link" aria-label="Send email">
          <IconMail size={16} />
          Email
        </a>
      </div>
    </header>
  );
}
