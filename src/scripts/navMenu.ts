/**
 * Menu hamburguesa de mobile.
 *
 * Panel a pantalla completa, no un dropdown. Cierra al tocar un link, con la X
 * y con Escape. Bloquea el scroll del body y lo restaura, igual que el modal de
 * servicios.
 *
 * El panel arranca con [hidden]; para que el fade corra hay que sacar el hidden
 * primero y recien en el frame siguiente agregar la clase que sube la opacidad.
 */
export function initNavMenu(): void {
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('navMenu');
  const close = document.getElementById('navMenuClose');
  if (!burger || !menu) return;

  let ultimoFoco: HTMLElement | null = null;

  const abrir = () => {
    ultimoFoco = document.activeElement as HTMLElement;
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close?.focus();
  };

  const cerrar = () => {
    menu.classList.remove('is-open');
    menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    ultimoFoco?.focus();
    ultimoFoco = null;
  };

  burger.addEventListener('click', abrir);
  close?.addEventListener('click', cerrar);

  // Tocar un link cierra: si no, el panel tapa la seccion a la que saltaste.
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) cerrar();
  });

  // Si se agranda la ventana con el menu abierto, queda un panel huerfano.
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
    if (e.matches && !menu.hidden) cerrar();
  });
}
