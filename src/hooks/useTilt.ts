import { useRef, useCallback, useMemo, type MouseEvent as ReactMouseEvent } from 'react';

interface TiltOptions {
  /** max rotation in degrees */
  max?: number;
  /** scale applied on hover */
  scale?: number;
}

const supportsHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Applies a subtle 3D tilt + mouse-tracked spotlight glow to a card element.
 * Sets CSS custom properties (--spot-x, --spot-y, --spot-o) that the
 * .tilt-card::before spotlight gradient reads, plus a transform for tilt.
 */
export function useTilt({ max = 8, scale = 1.015 }: TiltOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const active = useMemo(() => supportsHover() && !prefersReducedMotion(), []);

  const onMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (!active) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * max * 2;
      const rotateX = (0.5 - py) * max * 2;

      el.style.setProperty('--spot-x', `${px * 100}%`);
      el.style.setProperty('--spot-y', `${py * 100}%`);
      el.style.setProperty('--spot-o', '1');
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    },
    [active, max, scale]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--spot-o', '0');
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
