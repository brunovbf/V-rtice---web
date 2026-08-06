/**
 * Contenido de los 6 servicios. Bruno puede editar precios y textos aca sin
 * tocar markup.
 *   01       servicio estrella (tarjeta grande)
 *   02-04    servicios secundarios (tarjeta + modal de detalle)
 *   05-06    packs de planillas
 */
import { wa } from '../config/site';

import capturaEstrella from '../assets/captura-estrella.webp';
import capturaJuridico from '../assets/captura-juridico.webp';
import panelReportes from '../assets/panel-reportes.jpg';
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
    title: 'Reportes que se actualizan solos',
    desc: 'Tus datos convertidos en gráficos claros, sin rearmar planillas. Capacitación incluida.',
    price: '$4.800',
    usd: 'USD 120',
    lead: 'Cargás los datos una vez y la planilla hace el resto: gráficos de ventas, gastos y stock que se actualizan solos cada vez que anotás algo nuevo.',
    items: [
      'Tablero con tus números clave',
      'Gráficos que se actualizan solos',
      'Alertas de stock bajo',
      'Adaptado a tu rubro',
      'Capacitación por videollamada',
      'Soporte los primeros 30 días',
    ],
    cta: 'Quiero mis reportes',
    wa: wa('Hola Bruno, quiero un reporte automatizado a medida'),
    url: 'planilla de gestión · Vértice',
    src: panelReportes,
    alt: 'Tablero de reportes con gráficos de ventas y gastos',
  },
  {
    num: '04',
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
    n: '05',
    title: 'Pack Básico',
    sub: '3 planillas esenciales',
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
    n: '06',
    title: 'Pack Completo',
    sub: '5 planillas · gestión integral',
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
