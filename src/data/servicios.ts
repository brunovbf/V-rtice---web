/**
 * Contenido de los 5 servicios. Bruno puede editar precios y textos aca sin
 * tocar markup.
 *   01       servicio estrella (tarjeta grande)
 *   02-03    servicios secundarios (tarjeta + modal de detalle)
 *   04-05    packs de planillas
 */
import { wa } from '../config/site';

import capturaEstrella from '../assets/captura-estrella.webp';
import capturaJuridico from '../assets/captura-juridico.webp';
import panelMantenimiento from '../assets/panel-mantenimiento.jpg';

export interface ServicioEstrella {
  num: string;
  eyebrow: string;
  titulo: string;
  badge: string;
  price: string;
  usd: string;
  desc: string;
  items: string[];
  cta: string;
  wa: string;
  mockup: ImageMetadata;
  mockupAlt: string;
}

export interface ServicioSecundario {
  num: string;
  title: string;
  desc: string;
  price: string;
  usd: string;
  /** Detalle que se muestra en el modal. */
  lead: string;
  items: string[];
  cta: string;
  wa: string;
  url: string;
  src: ImageMetadata;
  alt: string;
}

export interface Pack {
  n: string;
  title: string;
  sub: string;
  price: string;
  usd: string;
  items: string[];
  star: boolean;
  wa: string;
}

export const estrella: ServicioEstrella = {
  num: '01',
  eyebrow: 'El servicio estrella',
  titulo: 'Tu landing lista para captar clientes, en 7 días',
  // "MAS ELEGIDO" era una afirmacion sobre otros clientes, y todavia no hay
  // ninguno. Esto dirige igual la mirada pero sin inventar prueba social: le
  // dice por donde arrancar al que no sabe que pedir.
  badge: 'EMPEZÁ POR ACÁ',
  price: '$7.200',
  usd: 'pago único · USD 180',
  desc: 'Tu negocio visible en internet con una página profesional, rápida y pensada para captar clientes desde el celular. Incluye dominio el primer año.',
  items: [
    'Diseño personalizado',
    'Optimizada para celular',
    'Botón directo a WhatsApp',
    'Entrega en 7 días hábiles',
  ],
  cta: 'Quiero mi landing',
  wa: wa('Hola Bruno, me interesa una landing page para mi negocio'),
  mockup: capturaEstrella,
  mockupAlt: 'Captura de la sección de servicios de la landing de ejemplo',
};

export const secundarios: ServicioSecundario[] = [
  {
    num: '02',
    title: 'Sitio institucional',
    desc: 'Hasta 5 secciones, galería y formulario de contacto. Incluye dominio 1er año.',
    price: '$12.000',
    usd: 'USD 300',
    lead: 'Para empresas y profesionales que necesitan más que una página: secciones separadas por servicio, equipo, galería de trabajos y un formulario que te llega al mail.',
    items: [
      'Hasta 5 secciones a medida',
      'Galería de trabajos o productos',
      'Formulario de contacto al mail',
      'Textos y fotos cargados por mí',
      'Dominio propio el primer año',
      'Optimizado para Google y celular',
    ],
    cta: 'Quiero mi sitio institucional',
    wa: wa('Hola Bruno, me interesa un sitio institucional para mi empresa'),
    url: 'vertice-uy.netlify.app/demos/juridico',
    src: capturaJuridico,
    alt: 'Captura del sitio institucional de ejemplo: estudio jurídico',
  },
  {
    num: '03',
    title: 'Mantenimiento web',
    desc: 'Cambios, soporte prioritario y tu sitio siempre al día. Sin permanencia.',
    price: '$800/mes',
    usd: 'USD 20/mes',
    lead: 'Tu sitio no se queda quieto: cambiás precios, sumás fotos, actualizás horarios. Yo me ocupo para que no tengas que tocar nada.',
    items: [
      'Cambios de textos, precios y fotos',
      'Respuesta prioritaria en el día',
      'Copias de seguridad mensuales',
      'Renovación de dominio y hosting',
      'Reporte de visitas cada mes',
      'Sin permanencia: cancelás cuando quieras',
    ],
    cta: 'Quiero el mantenimiento',
    wa: wa('Hola Bruno, quiero saber más sobre el mantenimiento web mensual'),
    url: 'soporte mensual · Vértice',
    src: panelMantenimiento,
    alt: 'Pantalla de código representando el mantenimiento del sitio',
  },
];

export const packs: Pack[] = [
  {
    n: '04',
    title: 'Pack Básico',
    sub: '3 planillas de Excel esenciales',
    price: '$3.600',
    usd: 'USD 90',
    items: [
      'Control de caja diaria',
      'Control de stock',
      'Control de gastos',
      'Adaptado a tu rubro',
      'Puesta en marcha incluida',
    ],
    star: false,
    wa: wa('Hola Bruno, me interesa el Pack Básico de planillas'),
  },
  {
    n: '05',
    title: 'Pack Completo',
    sub: '5 planillas de Excel · gestión integral',
    price: '$5.600',
    usd: 'USD 140',
    items: [
      'Todo lo del Pack Básico',
      '+ Facturación / ventas',
      '+ Reporte mensual automático',
      'Adaptado a tu rubro',
      'Puesta en marcha incluida',
    ],
    star: true,
    wa: wa('Hola Bruno, me interesa el Pack Completo de planillas'),
  },
];

export const rubrosPacks = [
  'Almacén',
  'Ferretería',
  'Panadería',
  'Barbería',
  'Veterinaria',
  '+ tu rubro',
];

/**
 * ─────────────────────────────────────────────────────────────────
 *  INTERRUPTOR DEL EJEMPLO "BB STUDIO"
 *
 *  Esta en `false` porque las capturas todavia no existen en el proyecto.
 *  Mismo criterio que `mostrarFotoBruno` en data/landing.ts: un recuadro
 *  vacio le anuncia al visitante que falta algo, y este es justo el bloque
 *  que existe para probar que la planilla es real. Apagado no se renderiza.
 *
 *  En `npm run dev` SI se ven recuadros numerados aunque esto siga en
 *  `false`, para poder acomodar el layout sin tener las capturas. En el
 *  build de produccion no se muestra nada hasta que esto pase a `true`.
 *
 *  PARA PUBLICARLO (2 pasos):
 *    1. Guardar las capturas en `public/img/packs/` con estos nombres
 *       exactos (la carpeta hay que crearla, todavia no existe):
 *         bbstudio-1.webp
 *         bbstudio-2.webp
 *         bbstudio-3.webp
 *       Se abren ampliadas al hacer clic, asi que conviene ~1600px de ancho.
 *       El recorte de la miniatura es 3/2 desde arriba a la izquierda.
 *       Para una cuarta captura: agregarla al array de abajo (hasta 4).
 *    2. Poner esto en `true`.
 *
 *  OJO: solo capturas. Sin datos del cliente a la vista y sin explicar como
 *  funciona la planilla — eso se muestra en la videollamada, que es a donde
 *  lleva el boton del bloque.
 * ─────────────────────────────────────────────────────────────────
 */
export const mostrarEjemploBBStudio = false;

/** El orden del array es el orden en que se ven y se recorren en el visor. */
export const capturasBBStudio = [
  { src: '/img/packs/bbstudio-1.webp', alt: 'Captura 1 de la planilla de BB Studio' },
  { src: '/img/packs/bbstudio-2.webp', alt: 'Captura 2 de la planilla de BB Studio' },
  { src: '/img/packs/bbstudio-3.webp', alt: 'Captura 3 de la planilla de BB Studio' },
];
