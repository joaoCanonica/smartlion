/**
 * Script síncrono do <head> (LayoutBase): marca <html class="js"> antes da primeira pintura,
 * para o CSS já desenhar o estado "com JS" (ex.: abas do reparo e um só painel) sem
 * deslocamento de layout quando os módulos rodarem. O hash deste texto entra na CSP
 * (astro.config.mjs), como o da abertura.
 */
export const scriptMarcarJs = "document.documentElement.classList.add('js')";
