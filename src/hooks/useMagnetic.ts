import { useRef, useCallback, useMemo, type MouseEvent as ReactMouseEvent } from 'react';

const supportsHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Pulls an element a few px toward the cursor while hovered, springing
 * back on leave. Purely cosmetic — disabled on touch and reduced-motion.
 */
export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);
  const active = useMemo(() => supportsHover() && !prefersReducedMotion(), []);

  const onMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (!active) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [active, strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
