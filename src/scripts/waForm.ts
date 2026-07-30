/**
 * Formularios que abren WhatsApp.
 *
 * En vez de dejar el formulario muerto, el submit arma el mensaje con lo que
 * el visitante escribio y abre wa.me. Despues muestra la confirmacion (el
 * estado `sent` del handoff). No hay backend ni validacion server-side.
 *
 * El form necesita: data-wa-form, data-wa-number y un data-wa-sent con el
 * cartel de confirmacion. Los campos aportan data-wa-label.
 */
export function initWaForm(): void {
  document.querySelectorAll<HTMLFormElement>('[data-wa-form]').forEach((form) => {
    const numero = form.dataset.waNumber;
    if (!numero) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const partes: string[] = [form.dataset.waIntro || 'Hola, te escribo desde la web.'];

      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        '[data-wa-label]'
      ).forEach((field) => {
        const valor = field.value.trim();
        // Los placeholder de los <select> quedan afuera.
        if (!valor || valor === field.dataset.waSkip) return;
        partes.push(`${field.dataset.waLabel}: ${valor}`);
      });

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(partes.join('\n'))}`;
      window.open(url, '_blank', 'noopener');

      // Estado `sent`: se oculta el form y se muestra la confirmacion.
      const sent = form.parentElement?.querySelector<HTMLElement>('[data-wa-sent]');
      if (sent) {
        form.hidden = true;
        sent.hidden = false;
      }
    });
  });
}
