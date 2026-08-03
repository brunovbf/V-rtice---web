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

    const sent = form.parentElement?.querySelector<HTMLElement>('[data-wa-sent]');
    const icono = sent?.querySelector<HTMLElement>('[data-wa-icon]');
    const titulo = sent?.querySelector<HTMLElement>('[data-wa-title]');
    const texto = sent?.querySelector<HTMLElement>('[data-wa-text]');
    const link = sent?.querySelector<HTMLAnchorElement>('[data-wa-open]');

    // Copy original: hay que poder restaurarlo si un envio posterior si abre.
    const tituloOk = titulo?.textContent?.trim() ?? '';
    const textoOk = texto?.textContent?.trim() ?? '';

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

      /*
       * Sin 'noopener' en la lista de features A PROPOSITO: con esa opcion
       * window.open devuelve null siempre, incluso cuando abrio bien, y no
       * quedaria forma de distinguir un bloqueo de un exito. La proteccion
       * contra reverse tabnabbing se mantiene anulando `opener` a mano.
       */
      const win = window.open(url, '_blank');
      if (win) {
        try {
          win.opener = null;
        } catch {
          /* ya navego a wa.me (cross-origin): no se puede tocar, y no hace falta */
        }
      }
      const bloqueado = !win;

      if (!sent) return;

      form.hidden = true;
      sent.hidden = false;

      /*
       * Antes el cartel decia "Te abri el chat" pasara lo que pasara. Si el
       * navegador bloqueaba el pop-up, el sitio afirmaba algo falso y el
       * visitante se quedaba sin mensaje y sin saberlo.
       */
      sent.classList.toggle('contact__sent--blocked', bloqueado);
      if (icono) icono.hidden = bloqueado;
      if (titulo) titulo.textContent = bloqueado ? 'No se abrió WhatsApp' : tituloOk;
      if (texto) {
        texto.textContent = bloqueado
          ? 'Tu navegador bloqueó la ventana. Tocá el botón y se abre el chat con tu mensaje ya escrito.'
          : textoOk;
      }
      if (link) {
        link.href = url;
        link.hidden = !bloqueado;
      }

      // El foco venia del boton de enviar, que acaba de quedar oculto.
      sent.focus();
    });

    /*
     * Vuelta al formulario. Antes no habia ninguna: enviado el mensaje, el
     * form quedaba oculto hasta recargar la pagina. Los dos casos reales son
     * que el navegador haya bloqueado el pop-up o que el visitante se haya
     * equivocado en un dato, y en los dos conviene NO limpiar los campos:
     * vuelven tal cual los dejo.
     */
    sent?.querySelector<HTMLButtonElement>('[data-wa-back]')?.addEventListener('click', () => {
      sent.hidden = true;
      form.hidden = false;
      form.querySelector<HTMLInputElement>('input, select, textarea')?.focus();
    });
  });
}
