# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primario: emprendimientos arrancando.** Proyectos nuevos en Melo y el interior de
Cerro Largo que necesitan todo desde cero — presencia online, orden interno y los
primeros clientes. Llegan sin web, vendiendo por WhatsApp e Instagram, y muchas veces
sin saber qué es lo que necesitan pedir.

El sitio también le habla a comercios establecidos y profesionales independientes
(abogados, dentistas, fisioterapeutas, veterinarios — los cinco rubros que tienen demo),
pero hoy **no son el segmento que compra**. Esa es una decisión confirmada, no una
observación: futuras decisiones de producto se resuelven a favor del emprendimiento que
arranca cuando haya conflicto.

El canal de entrada y de conversación es WhatsApp, no email ni formulario.

## Product Purpose

Vértice le da a un negocio chico dos cosas que normalmente tiene que comprar por
separado: **que se vea bien y que funcione mejor**. Presencia web (landing o sitio
institucional) y orden operativo (planillas de gestión, reportes automatizados).

El éxito es que el cliente quede funcionando y capacitado: no recibe un archivo, recibe
algo andando que sabe usar.

## Positioning

**Trato directo con quien hace el trabajo.** El cliente habla con la persona que
programa — no con un vendedor, no con un project manager, no con un sistema de tickets.
No hay intermediarios entre lo que el cliente pide y quien lo ejecuta.

Esto es lo que un competidor no puede copiar honestamente. Precio fijo, entrega en ~7
días y "sin suscripciones" son promesas que cualquier agencia puede igualar en su copy;
la relación directa con el ejecutor se rompe apenas la agencia crece. **Es una ventaja
estructural de operar solo, no una promesa de servicio.**

## Operating Context

- **Todo pasa por WhatsApp.** Consulta, propuesta, acuerdo y soporte. El sitio no tiene
  backend: los formularios de la landing y de las cinco demos arman un mensaje
  prellenado y abren WhatsApp desde el cliente. No hay funciones serverless, base de
  datos, ni captura de leads. El número vive en un solo lugar (`src/config/site.ts`).
- **Proceso de tres pasos**, declarado en la landing: consulta gratis sin compromiso →
  propuesta con precio fijo y tiempos → entrega con capacitación y soporte.
- **Escala local.** Melo, Cerro Largo. La cercanía física es parte del contexto de
  evaluación del cliente, aunque no sea la ventaja principal.

## Capabilities and Constraints

Seis servicios con precio público en pesos uruguayos y dólares:

| # | Servicio | Precio |
|---|---|---|
| 01 | Landing page (servicio estrella, "MÁS ELEGIDO") | $7.200 · USD 180 pago único |
| 02 | Sitio institucional | $12.000 · USD 300 |
| 03 | Reportes automatizados | $4.800 · USD 120 |
| 04 | Mantenimiento web | $800/mes · USD 20/mes |
| 05 | Pack Básico — 3 planillas | $3.600 · USD 90 |
| 06 | Pack Completo — 5 planillas | $5.600 · USD 140 |

- **Tensión sin resolver:** la landing promete "Sin suscripciones mensuales" entre sus
  tres sellos de confianza, pero el servicio 04 es mensual. No inventar una resolución;
  es una decisión pendiente del dueño.
- **Restricción técnica:** sitio estático en Astro sobre Netlify. Cualquier
  funcionalidad que requiera servidor cambia el modelo de hosting y de costos.
- **Cinco demos por rubro** (barbería, dental, fisioterapia, jurídico, veterinaria) que
  funcionan como catálogo navegable, no como casos de clientes.

## Brand Commitments

- **Nombre:** Vértice. Ubicación declarada: Melo, Cerro Largo · Uruguay.
- **Mensaje de marca fijado:** "Que tu negocio se vea bien y funcione mejor". La
  dualidad ver/funcionar es la estructura del mensaje, no una frase suelta.
- **Identidad existente:** juego completo de logos en `public/assets/` — isotipo y
  horizontal, en versiones negro, blanco y claro, PNG y SVG.
- **Voz:** segunda persona del singular rioplatense (vos), directa, sin jerga técnica.
  Habla de resultados del negocio, no de tecnología.
- **Promesas operativas declaradas:** entrega en ~7 días, precio fijo sin sorpresas.

## Evidence on Hand

**Hoy no hay ninguna prueba social real.** Esto es lo más importante que este documento
registra, y la restricción que ningún trabajo futuro puede violar.

- **Los tres testimonios del código son ficticios** — vienen del diseño original y esos
  clientes no existen. Están correctamente desactivados con
  `mostrarTestimonios = false` en `src/data/landing.ts`, con la advertencia escrita en
  el propio archivo. **No reactivar la sección hasta tener testimonios reales con
  permiso.**
- **No hay clientes publicables.** Ni con nombre, ni anónimos, ni logos, ni métricas.
- **La única prueba disponible son las cinco demos por rubro** y las capturas en
  `src/assets/`. Son piezas construidas para mostrar capacidad, no trabajos vendidos.
  Presentarlas como clientes sería falso.
- **Prohibido fabricar:** testimonios, nombres de clientes, cantidad de proyectos
  entregados, años de experiencia, métricas de resultados, premios o certificaciones.
  Si una sección necesita prueba social para funcionar, la respuesta es rediseñar la
  sección, no inventar la prueba.
- Fotos de terceros (Unsplash) requieren atribución; el tipo `ServicioSecundario` ya
  tiene campos `credit` / `creditHref` para eso.

## Product Principles

1. **Honestidad sobre prueba social.** Es un negocio nuevo sin clientes publicables. El
   sitio tiene que convencer con demostración de capacidad, no con evidencia prestada.
   Cualquier patrón que dependa de prueba social se rediseña o se omite.
2. **El emprendimiento que arranca manda.** Ante un conflicto de audiencia, gana el
   proyecto nuevo que no sabe qué pedir, no el comercio establecido que ya sabe.
3. **WhatsApp es la conversión.** No hay otro embudo. Todo CTA termina en una
   conversación humana con mensaje prellenado, y esa fricción baja es el producto.
4. **La persona es la ventaja.** El diferencial es que el cliente habla con quien
   ejecuta. El sitio no debe sonar a agencia ni a equipo — sonar corporativo destruye
   justamente lo que lo hace distinto.
5. **Precio a la vista.** Los seis servicios muestran precio público. Ocultar precios
   detrás de "consultar" contradice la promesa de "sin sorpresas".
