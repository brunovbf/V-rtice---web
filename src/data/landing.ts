/** Textos sueltos de la landing: promesas, rubros, pasos, sobre mi, testimonios. */

export const trust = [
  'Entrega en ~7 días',
  'Precio fijo, sin sorpresas',
  'Sin suscripciones mensuales',
];

export const rubros = ['Comercios', 'Profesionales', 'Emprendimientos', 'Servicios'];

export const pasos = [
  {
    n: '1',
    title: 'Consulta gratis',
    desc: 'Hablamos por WhatsApp y entiendo qué necesitás resolver. Sin compromiso.',
  },
  {
    n: '2',
    title: 'Propuesta y acuerdo',
    desc: 'Precio fijo, tiempos claros y qué vas a recibir. Sin sorpresas.',
  },
  {
    n: '3',
    title: 'Entrega y soporte',
    desc: 'Recibís todo funcionando, con capacitación y soporte después.',
  },
];

export const sobreMi = [
  'Melo, Cerro Largo',
  'Trato directo, sin intermediarios',
  'Precio fijo desde el arranque',
];

/**
 * ─────────────────────────────────────────────────────────────────
 *  INTERRUPTOR DE LA SECCION DE TESTIMONIOS
 *
 *  Esta en `false` porque los tres testimonios de abajo son FICTICIOS:
 *  vienen del diseño y esos clientes no existen.
 *
 *  Para publicarla: reemplazar los tres por reales (con permiso) y poner
 *  esto en `true`. No hace falta tocar nada mas — la seccion entera ya esta
 *  escrita y andando, solo no se renderiza.
 * ─────────────────────────────────────────────────────────────────
 */
export const mostrarTestimonios = false;

/** OJO: ficticios. Ver `mostrarTestimonios` arriba. */
export const testimonios = [
  {
    text: 'Quedó tal cual lo que imaginaba y en una semana ya estaba online. Ahora los clientes me encuentran solos.',
    initial: 'M',
    name: 'Marcela Duarte',
    role: 'Peluquería · Melo',
  },
  {
    text: 'La planilla me ordenó todo el stock. Antes anotaba en un cuaderno y perdía plata sin darme cuenta.',
    initial: 'L',
    name: 'Leonardo Sosa',
    role: 'Ferretería · Río Branco',
  },
  {
    text: 'Precio claro desde el arranque y respondió cada duda al toque. Súper recomendable.',
    initial: 'R',
    name: 'Rosana Techera',
    role: 'Estudio contable · Treinta y Tres',
  },
];

/** Opciones del select del formulario de contacto. */
export const necesidades = [
  'Una landing page',
  'Un sitio institucional',
  'Un pack de planillas',
  'Un reporte automatizado',
  'Mantenimiento web',
  'No estoy seguro, quiero asesoría',
];
