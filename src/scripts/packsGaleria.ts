/**
 * Visor de las capturas de la planilla (bloque "Ejemplo real: BB Studio").
 *
 * Las miniaturas son <button>, no links: sin JS no pasa nada al tocarlas, pero
 * la captura ya se ve en la fila, asi que no se pierde contenido. Con JS abren
 * el visor, que es donde una planilla se lee de verdad en un celular.
 *
 * Cierra con la X, con clic en el fondo o con Escape. Se pasa de captura con
 * los botones, con las flechas del teclado o deslizando el dedo. El recorrido
 * es circular: de la ultima se vuelve a la primera.
 */
export function initPacksGaleria(): void {
  const overlay = document.querySelector<HTMLElement>('[data-ej-overlay]');
  const thumbs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-ej-open]'));
  const slides = Array.from(overlay?.querySelectorAll<HTMLElement>('[data-ej-slide]') ?? []);
  if (!overlay || thumbs.length === 0 || slides.length === 0) return;

  const count = overlay.querySelector<HTMLElement>('[data-ej-count]');

  let actual = 0;
  let lastFocused: HTMLElement | null = null;

  const pintar = () => {
    slides.forEach((s, i) => {
      s.hidden = i !== actual;
    });
    if (count) count.textContent = `${actual + 1} / ${slides.length}`;
  };

  const mover = (paso: number) => {
    actual = (actual + paso + slides.length) % slides.length;
    pintar();
  };

  const abrir = (idx: number) => {
    actual = Math.min(Math.max(idx, 0), slides.length - 1);
    pintar();
    lastFocused = document.activeElement as HTMLElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    overlay.querySelector<HTMLElement>('[data-ej-close]')?.focus();
  };

  const cerrar = () => {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
    lastFocused?.focus();
    lastFocused = null;
  };

  thumbs.forEach((t) => {
    t.addEventListener('click', () => abrir(Number(t.dataset.ejOpen)));
  });

  // Clic en el fondo cierra; adentro del panel no.
  overlay.addEventListener('click', cerrar);
  overlay
    .querySelector<HTMLElement>('[data-ej-panel]')
    ?.addEventListener('click', (e) => e.stopPropagation());

  overlay.querySelector<HTMLElement>('[data-ej-close]')?.addEventListener('click', cerrar);
  overlay.querySelector<HTMLElement>('[data-ej-prev]')?.addEventListener('click', () => mover(-1));
  overlay.querySelector<HTMLElement>('[data-ej-next]')?.addEventListener('click', () => mover(1));

  window.addEventListener('keydown', (e) => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') cerrar();
    else if (e.key === 'ArrowRight') mover(1);
    else if (e.key === 'ArrowLeft') mover(-1);
  });

  /*
   * Deslizar con el dedo. Es el gesto que cualquiera espera de una imagen a
   * pantalla completa en celular, y los botones quedan igual para quien
   * prefiera tocar. El umbral de 45px evita que un toque con la mano apoyada
   * cuente como deslizada.
   */
  let x0: number | null = null;

  overlay.addEventListener(
    'touchstart',
    (e) => {
      x0 = e.touches[0].clientX;
    },
    { passive: true }
  );

  overlay.addEventListener(
    'touchend',
    (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 45) mover(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );
}
