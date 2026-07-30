/**
 * Reveals al scrollear, con la logica defensiva que pide el handoff.
 *
 * Los elementos nacen VISIBLES en el CSS. Este script les agrega .armed
 * (que los oculta) solo despues de confirmar que hay IntersectionObserver y
 * que el usuario no pidio movimiento reducido. Ademas hay una red de
 * seguridad a 2.5s que desarma todo, para que nunca quede contenido invisible
 * si el observer no dispara: pestana en segundo plano, impresion, export a
 * PDF o bots de SEO.
 *
 * @param selector `.reveal` en la landing, `.rv` en las demos.
 */
export function initReveal(selector = '.reveal'): void {
  const all = () => document.querySelectorAll<HTMLElement>(selector);
  const unarmAll = () => all().forEach((el) => el.classList.remove('armed'));

  const reduce = window.matchMedia?.('(prefers-reduced-motion:reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    unarmAll();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  const seen = new WeakSet<Element>();

  const scan = () => {
    all().forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);

      const r = el.getBoundingClientRect();
      // Ya visible al primer barrido: armar y revelar en el acto, sin observer.
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add('armed');
        requestAnimationFrame(() => el.classList.add('in'));
        setTimeout(() => el.classList.add('in'), 60);
        return;
      }

      el.classList.add('armed');
      io.observe(el);
    });
  };

  scan();
  const tick = setInterval(scan, 250);
  setTimeout(() => clearInterval(tick), 8000);

  // Red de seguridad incondicional: nunca dejar contenido oculto.
  setTimeout(unarmAll, 2500);
}
