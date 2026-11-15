import { linkWhatsApp } from '../config/whatsapp';
import { mensagemOrcamento } from '../lib/orcamento';
for(const root of document.querySelectorAll<HTMLElement>('[data-orcamento]')){
 const form=root.querySelector<HTMLFormElement>('form')!;
 const modelo=root.querySelector<HTMLInputElement>('input')!;
 const problema=root.querySelector<HTMLTextAreaElement>('textarea')!;
 form.hidden=false;root.querySelector<HTMLElement>('[data-fallback]')!.hidden=true;
 form.addEventListener('submit',event=>{
  event.preventDefault();
  // Não há fetch, armazenamento ou envio automático: apenas navegação iniciada pelo usuário.
  location.assign(linkWhatsApp(mensagemOrcamento(modelo.value,problema.value,root.dataset.servico)));
 });
}
