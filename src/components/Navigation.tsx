import { useState, useEffect, useCallback } from 'react';
import { IconMenu, IconX } from './Icons';

const NAV_ITEMS = [
  { id: 'work', label: 'Featured Work' },
  { id: 'skills', label: 'Technical Profile' },
  { id: 'journey', label: 'Journey' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, close]);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <IconMenu />
      </button>

      <div
        className="mobile-nav-overlay"
        data-open={isOpen}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        className="mobile-nav-panel"
        data-open={isOpen}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal={isOpen}
      >
        <button
          className="mobile-nav-close"
          onClick={close}
          aria-label="Close navigation menu"
        >
          <IconX />
        </button>

        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="mobile-nav-item"
                data-active={activeSection === item.id}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
