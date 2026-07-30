/**
 * Visibilidad del boton flotante de WhatsApp.
 *
 * Se muestra solo cuando el hero YA salio de pantalla y la seccion de contacto
 * TODAVIA no entro. Si no hay IntersectionObserver el boton queda oculto: es el
 * estado seguro, porque un boton fijo que no sabe cuando esconderse termina
 * tapando el envio del formulario.
 */
export function initWhatsAppFab(): void {
  const fab = document.getElementById('waFab');
  const hero = document.getElementById('hero');
  const contacto = document.getElementById('contacto');
  if (!fab || !hero) return;
  if (!('IntersectionObserver' in window)) return;

  let heroALaVista = true;
  let contactoALaVista = false;

  const actualizar = () => {
    fab.classList.toggle('is-visible', !heroALaVista && !contactoALaVista);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.target === hero) heroALaVista = e.isIntersecting;
        if (e.target === contacto) contactoALaVista = e.isIntersecting;
      });
      actualizar();
    },
    { threshold: 0 }
  );

  io.observe(hero);
  if (contacto) io.observe(contacto);
  actualizar();
}
