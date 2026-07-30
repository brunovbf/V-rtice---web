/**
 * Redibuja la V del logo al pasar el mouse por el bloque de marca.
 * (El glow del hero no necesita JS: corre solo con la animacion heroDrift.)
 */
export function initLogoDraw(): void {
  const brand = document.getElementById('navBrand');
  const v = document.getElementById('navLogoV');
  if (!brand || !v) return;
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  brand.addEventListener('mouseenter', () => {
    v.style.animation = 'none';
    void v.getBoundingClientRect(); // fuerza reflow para reiniciar
    v.style.animation = 'drawV 1s ease forwards';
  });
}
