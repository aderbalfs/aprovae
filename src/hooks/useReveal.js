import { useEffect, useRef } from 'react';

// Module-level so the stagger index and the single IntersectionObserver
// are shared across every component instance on the page.
const siblingIndex = new WeakMap();
const assignedDelay = new WeakMap();
const revealedEls = new WeakSet();
let sharedObserver = null;

const ANIM_SELECTOR = '.aa-ring, .aa-boot-cell, .aa-boot-stat, .aa-boot-badge, .aa-graticule, .aa-anim-grow';

function runCounters(root) {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('[data-count-to]').forEach((el) => {
    const to = parseInt(el.getAttribute('data-count-to'), 10);
    const prefix = el.getAttribute('data-count-prefix') || '';
    const suffix = el.getAttribute('data-count-suffix') || '';
    const grouped = el.hasAttribute('data-count-grouped');
    const format = (n) => prefix + (grouped ? n.toLocaleString('pt-BR') : String(n)) + suffix;
    if (reduced) { el.textContent = format(to); return; }
    el.textContent = format(0);
    const delay = parseFloat(el.getAttribute('data-count-delay') || '0') * 1000;
    const dur = 650;
    let start = null;
    const step = (now) => {
      if (start === null) start = now + delay;
      if (now < start) { requestAnimationFrame(step); return; }
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = format(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      revealedEls.add(el);
      el.style.opacity = '1';
      el.style.transform = 'none';
      sharedObserver.unobserve(el);
      el.querySelectorAll(ANIM_SELECTOR).forEach((child) => {
        child.style.animationPlayState = 'running';
      });
      if (el.hasAttribute('data-hero-boot')) {
        runCounters(el);
        el.style.setProperty('--reveal', '1');
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  return sharedObserver;
}

/**
 * Fade + rise reveal-on-scroll, staggered across siblings that reveal
 * together (a card grid reads as a cascading list instead of popping in at once).
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // A prior (e.g. React StrictMode double-invoked) pass already revealed
    // this element — keep it visible instead of re-hiding and re-observing.
    if (revealedEls.has(el)) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (el.hasAttribute('data-hero-boot')) el.style.setProperty('--reveal', '1');
      return undefined;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    let delay = assignedDelay.get(el);
    if (delay === undefined) {
      const parent = el.parentElement;
      const idx = siblingIndex.get(parent) || 0;
      siblingIndex.set(parent, idx + 1);
      delay = Math.min(idx * 60, 240);
      assignedDelay.set(el, delay);
    }
    el.style.transition = `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .7s cubic-bezier(.16,1,.3,1) ${delay}ms`;

    const observer = getObserver();
    observer.observe(el);
    return () => {
      if (!revealedEls.has(el)) observer.unobserve(el);
    };
  }, []);

  return ref;
}
