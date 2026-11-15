import { lerConsentimento,salvarConsentimento,escolhaValida } from '../lib/consentimento';
const painel=document.querySelector<HTMLElement>('[data-consentimento]');
if(painel){
 painel.hidden=lerConsentimento()!==null;
 for(const b of painel.querySelectorAll<HTMLButtonElement>('[data-consentir]'))b.addEventListener('click',()=>{if(escolhaValida(b.dataset.consentir))salvarConsentimento(b.dataset.consentir);});
 const preferencias=document.querySelector<HTMLButtonElement>('[data-preferencias]');
 if(preferencias){preferencias.hidden=false;preferencias.addEventListener('click',()=>{painel.hidden=false;painel.querySelector('button')?.focus();});}
 window.addEventListener('smartlion:consentimento',()=>{const foco=painel.contains(document.activeElement);painel.hidden=true;if(foco)preferencias?.focus();});
}
