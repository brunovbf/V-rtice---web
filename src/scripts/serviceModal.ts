/**
 * Modal de los servicios secundarios (02-04).
 *
 * Los tres paneles se renderizan en el HTML y arrancan con [hidden]; este
 * script solo los muestra. Las tarjetas siguen siendo <a href="wa.me/...">:
 * si no hay JS, el clic va derecho a WhatsApp y el navegador muestra la URL
 * de destino al pasar por encima. Esa degradacion es intencional.
 *
 * Cierra con el boton X, con clic en el overlay o con Escape. El clic dentro
 * del panel no propaga. Mientras esta abierto se bloquea el scroll del body.
 */
export function initServiceModal(): void {
  const overlays = Array.from(
    document.querySelectorAll<HTMLElement>('[data-svc-overlay]')
  );
  if (overlays.length === 0) return;

  let openOverlay: HTMLElement | null = null;
  let lastFocused: HTMLElement | null = null;

  const close = () => {
    if (!openOverlay) return;
    openOverlay.hidden = true;
    openOverlay = null;
    document.body.style.overflow = '';
    lastFocused?.focus();
    lastFocused = null;
  };

  const open = (idx: string) => {
    const overlay = overlays.find((o) => o.dataset.svcOverlay === idx);
    if (!overlay) return;
    lastFocused = document.activeElement as HTMLElement;
    overlay.hidden = false;
    openOverlay = overlay;
    document.body.style.overflow = 'hidden';
    overlay.querySelector<HTMLElement>('[data-svc-close]')?.focus();
  };

  // Disparo desde las tarjetas 02/03/04.
  document.querySelectorAll<HTMLAnchorElement>('[data-svc-open]').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      open(card.dataset.svcOpen!);
    });
  });

  overlays.forEach((overlay) => {
    // Clic en el fondo cierra.
    overlay.addEventListener('click', close);
    // Clic dentro del panel no.
    overlay
      .querySelector<HTMLElement>('[data-svc-panel]')
      ?.addEventListener('click', (e) => e.stopPropagation());
    overlay
      .querySelector<HTMLElement>('[data-svc-close]')
      ?.addEventListener('click', close);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && openOverlay) close();
  });
}
