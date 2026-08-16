/**
 * Reveals al scrollear, con la logica defensiva que pide el handoff.
 *
 * Los elementos nacen VISIBLES en el CSS. Este script les agrega .armed
 * (que los oculta) solo despues de confirmar que hay IntersectionObserver y
 * que el usuario no pidio movimiento reducido.
 *
 * RED DE SEGURIDAD: la regla es "nada que el visitante tenga delante de los
 * ojos puede quedar invisible". Antes eso se cumplia desarmando TODO a los
 * 2.5s, lo que apagaba el efecto en el resto de la pagina: el observer seguia
 * disparando pero .in sin .armed no anima nada, asi que solo se veia moverse
 * lo que estaba cerca del viewport en los primeros 2.5s. Ahora se desarma solo
 * lo que esta EN pantalla y no llego a revelarse. Lo que esta abajo sigue
 * armado y entra cuando el visitante llega, que es el punto del patron.
 *
 * @param selector `.reveal` en la landing, `.rv` en las demos.
 */
export function initReveal(selector = '.reveal'): void {
  const all = () => document.querySelectorAll<HTMLElement>(selector);
  const unarmAll = () => all().forEach((el) => el.classList.remove('armed'));

  /** Un elemento cuenta como visible si su caja cruza el viewport. */
  const enPantalla = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };

  const reduce = window.matchMedia?.('(prefers-reduced-motion:reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    unarmAll();
    return;
  }

  /**
   * Revela el elemento y, cuando la animacion termina, le saca las dos clases.
   * El elemento queda igual que sin JS (opacidad 1, sin transform) y su propio
   * `transition` de hover vuelve a mandar: varias tarjetas tienen uno y no
   * tiene sentido que sigan arrastrando la curva de 0.7s de la entrada.
   *
   * El chequeo de `e.target` es necesario porque transitionend burbujea: sin
   * el, el hover de cualquier hijo daria por terminada la entrada del padre.
   */
  const revelar = (el: HTMLElement) => {
    if (el.classList.contains('in')) return;

    const listo = (e: TransitionEvent) => {
      if (e.target !== el) return;
      el.removeEventListener('transitionend', listo);
      el.classList.remove('armed', 'in');
    };
    el.addEventListener('transitionend', listo);
    el.classList.add('in');
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          revelar(en.target as HTMLElement);
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

      // Ya visible al primer barrido: armar y revelar en el acto, sin observer.
      if (enPantalla(el)) {
        el.classList.add('armed');
        requestAnimationFrame(() => revelar(el));
        setTimeout(() => revelar(el), 60);
        return;
      }

      el.classList.add('armed');
      io.observe(el);
    });
  };

  /**
   * Desarma lo que esta en pantalla sin haberse revelado: si el observer no
   * disparo (pestana en segundo plano, throttling del navegador), el visitante
   * igual ve el contenido. Lo de mas abajo no se toca.
   */
  const unarmVisible = () => {
    all().forEach((el) => {
      if (el.classList.contains('in')) return;
      if (enPantalla(el)) el.classList.remove('armed');
    });
  };

  scan();
  const tick = setInterval(scan, 250);
  setTimeout(() => clearInterval(tick), 8000);

  setTimeout(unarmVisible, 2500);

  // Al volver de una pestana en segundo plano, rescatar lo que quedo colgado.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') unarmVisible();
  });

  // Impresion y export a PDF: nada oculto, en toda la pagina. El @media print
  // de reveal.css cubre lo mismo por CSS; esto es el cinturon del tirador.
  window.addEventListener('beforeprint', unarmAll);
}
