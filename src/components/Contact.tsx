import { resumeData } from '../data/resumeData';
import { ScrollReveal } from './ScrollReveal';
import { IconMail, IconGitHub, IconLinkedIn } from './Icons';

export function Contact() {
  const { email, github, linkedin, name } = resumeData.personal;

  return (
    <section id="contact" className="section contact-section" aria-label="Contact">
      <ScrollReveal>
        <h2 className="contact-heading">Let's Connect</h2>
        <p className="contact-desc">
          Open to opportunities, collaborations, and conversations about mobile development,
          Flutter, and building products. Feel free to reach out.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <div className="contact-links">
          <a
            href={`mailto:${email}`}
            className="contact-link contact-link-primary"
            aria-label="Send email"
          >
            <IconMail size={16} />
            {email}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            aria-label="GitHub profile"
          >
            <IconGitHub size={16} />
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn size={16} />
            LinkedIn
          </a>

        </div>
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <footer className="site-footer">
          <p>Built by {name}</p>
        </footer>
      </ScrollReveal>
    </section>
  );
}
