/** Las 4 demos de rubro, tal como se listan en la seccion #casos. */
import capturaVeterinaria from '../assets/captura-veterinaria.webp';
import capturaDental from '../assets/captura-dental.webp';
import capturaJuridico from '../assets/captura-juridico.webp';
import capturaFisioterapia from '../assets/captura-fisioterapia.webp';

export interface Demo {
  rubro: string;
  title: string;
  link: string;
  url: string;
  src: ImageMetadata;
  alt: string;
}

export const demoMain: Demo & { desc: string } = {
  rubro: 'Salud animal',
  title: 'Clínica veterinaria',
  desc: 'Estilo cálido y redondeado, con turnos online y una sección destacada para urgencias. Así se ve una landing pensada para que el cliente reserve sin llamar.',
  link: '/demos/veterinaria',
  url: 'vertice-uy.netlify.app/demos/veterinaria',
  src: capturaVeterinaria,
  alt: 'Captura de la demo de clínica veterinaria Patitas',
};

export const demosRest: Demo[] = [
  {
    rubro: 'Salud',
    title: 'Consultorio dental',
    link: '/demos/dental',
    url: 'vertice-uy.netlify.app/demos/dental',
    src: capturaDental,
    alt: 'Captura de la demo de consultorio dental Bianchi',
  },
  {
    rubro: 'Legal',
    title: 'Estudio jurídico',
    link: '/demos/juridico',
    url: 'vertice-uy.netlify.app/demos/juridico',
    src: capturaJuridico,
    alt: 'Captura de la demo del estudio jurídico Méndez & Asociados',
  },
  {
    rubro: 'Salud y bienestar',
    title: 'Centro de fisioterapia',
    link: '/demos/fisioterapia',
    url: 'vertice-uy.netlify.app/demos/fisioterapia',
    src: capturaFisioterapia,
    alt: 'Captura de la demo del centro de fisioterapia Kinesis',
  },
];
