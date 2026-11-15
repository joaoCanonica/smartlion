import { salvarConsentimento } from '../lib/consentimento';
for (const root of document.querySelectorAll<HTMLElement>('[data-mapa]')) {
 const botoes=root.querySelector<HTMLElement>('.consentimento')!;
 const aceitar=root.querySelector<HTMLButtonElement>('[data-aceitar-mapa]')!;
 const status=root.querySelector<HTMLElement>('.status-mapa')!;
 const conteudo=root.querySelector<HTMLElement>('.mapa-conteudo')!;
 botoes.hidden=false;
 aceitar.addEventListener('click',()=>{
  salvarConsentimento('aceito');
  if(conteudo.querySelector('iframe'))return;
  const frame=document.createElement('iframe');
  frame.title='Localização da Smart Lion no Google Maps';
  frame.src=root.dataset.mapa!;frame.loading='lazy';frame.referrerPolicy='no-referrer';
  conteudo.append(frame);aceitar.disabled=true;
  status.textContent='Mapa solicitado ao Google. Se não aparecer, use os links de rota.';
 });
 const recusar=()=>{
  conteudo.replaceChildren();aceitar.disabled=false;
  status.textContent='Mapa desativado. O endereço e os links de rota continuam disponíveis.';
 };
 root.querySelector('[data-recusar-mapa]')!.addEventListener('click',()=>salvarConsentimento('recusado'));
 window.addEventListener('smartlion:consentimento',e=>{if((e as CustomEvent).detail==='recusado')recusar();});
}
