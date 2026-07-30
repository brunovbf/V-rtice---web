/**
 * Configuracion global del sitio.
 *
 * ─────────────────────────────────────────────────────────────────
 *  EL NUMERO DE WHATSAPP SE CAMBIA UNICAMENTE ACA.
 *  Formato: codigo de pais + numero, sin +, sin espacios, sin guiones.
 *  Todos los CTA del sitio (landing y las 4 demos) salen de esta constante.
 * ─────────────────────────────────────────────────────────────────
 */
export const WHATSAPP_NUMBER = '59899492918';

/** Como se muestra el numero en pantalla (footer, tarjeta de contacto). */
export const WHATSAPP_DISPLAY = '099 492 918';

export const SITE_URL = 'https://vertice-uy.netlify.app';
export const SITE_NAME = 'Vértice';
export const SITE_LOCATION = 'Melo, Cerro Largo · Uruguay';

/**
 * Arma un link de WhatsApp con el mensaje ya escrito.
 * Nunca hardcodear un wa.me en un componente: usar siempre este helper.
 */
export function wa(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
