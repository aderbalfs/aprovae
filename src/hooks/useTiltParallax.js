import { useEffect } from 'react';

/**
 * Pointer-driven depth for the hero mockup: writes --px/--py (-1..1, rAF-throttled)
 * onto the given element for CSS to consume as a subtle 3D tilt + parallax.
 * Skips entirely under prefers-reduced-motion or without a fine hover pointer
 * (touch gets the CSS-only entrance settle in index.css, no continuous tracking).
 */
export function useTiltParallax(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
    if (reduced || !canHover) return undefined;

    let frame = null;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      frame = null;
      el.style.setProperty('--px', pendingX.toFixed(3));
      el.style.setProperty('--py', pendingY.toFixed(3));
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pendingX = Math.max(-1, Math.min(1, (x - 0.5) * 2));
      pendingY = Math.max(-1, Math.min(1, (y - 0.5) * 2));
      if (frame === null) frame = requestAnimationFrame(apply);
      if (!el.hasAttribute('data-tilt-active')) el.setAttribute('data-tilt-active', '');
    };

    const onLeave = () => {
      if (frame !== null) { cancelAnimationFrame(frame); frame = null; }
      el.removeAttribute('data-tilt-active');
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ref]);
}
