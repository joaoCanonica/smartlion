import { iniciarProduto } from './produto';
import { caminhoProduto } from '../lib/catalogo';
const dialog=document.querySelector<HTMLDialogElement>('#modal-produto');
if(dialog && typeof dialog.showModal === 'function'){
 const conteudo=dialog.querySelector<HTMLElement>('[data-modal-conteudo]')!;
 const feedback=document.querySelector<HTMLElement>('[data-modal-feedback]')!;
 const tituloOriginal=document.title;
 let inicio: HTMLElement | null=null;
 let sessao: ReturnType<typeof iniciarProduto> | undefined;
 let pedido: AbortController | undefined;
 let sequencia=0;
 const cache=new Map<string,HTMLElement>();
 function fechar(){
  pedido?.abort();sequencia++;
  if(history.state?.smartlionModal)history.back();
  else limpar();
 }
 function limpar(){
  sessao?.destruir();sessao=undefined;
  if(dialog!.open)dialog!.close();
  document.title=tituloOriginal;conteudo.replaceChildren();inicio?.focus({preventScroll:true});
 }
 async function abrir(href:string, registrar:boolean){
  const url=new URL(href,location.origin);
  if(url.origin!==location.origin)return;
  pedido?.abort();pedido=new AbortController();const atual=++sequencia;
  feedback.textContent='Carregando opções do produto.';
  try{
   let detalhe=cache.get(url.pathname)?.cloneNode(true) as HTMLElement | undefined;
   if(!detalhe){
    const resposta=await fetch(url.pathname,{signal:pedido.signal});
    if(!resposta.ok)throw new Error('Produto indisponível.');
    const doc=new DOMParser().parseFromString(await resposta.text(),'text/html');
    detalhe=doc.querySelector<HTMLElement>('[data-produto-detalhes]') ?? undefined;
    if(!detalhe)throw new Error('Página sem produto.');
    cache.set(url.pathname,detalhe.cloneNode(true) as HTMLElement);
   }
   if(atual!==sequencia)return;
   sessao?.destruir();
   const h1=detalhe.querySelector<HTMLElement>('[data-titulo-produto]')!;
   const h2=document.createElement('h2');h2.textContent=h1.textContent;h2.id='modal-titulo';h1.replaceWith(h2);
   conteudo.replaceChildren(detalhe);
   if(registrar)history.pushState({smartlionModal:true},'',url.pathname+url.search);
   document.title=`${h2.textContent} | Smart Lion`;
   sessao=iniciarProduto(detalhe,escolhas=>history.replaceState(history.state,'',caminhoProduto(JSON.parse(detalhe!.dataset.produto!).slug,escolhas)));
   if(!dialog!.open)dialog!.showModal();
   dialog!.querySelector<HTMLButtonElement>('[data-fechar-modal]')!.focus();
   feedback.textContent='';
  }catch(error){
   if(error instanceof Error && error.name==='AbortError')return;
   feedback.textContent='Não foi possível abrir as opções aqui. Abrindo a página do produto.';
   location.assign(url.href);
  }
 }
 document.addEventListener('click',event=>{
  const alvo=(event.target as Element).closest<HTMLAnchorElement>('a[data-abrir-produto]');
  if(!alvo || event.button!==0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || alvo.target==='_blank')return;
  event.preventDefault();inicio=alvo;void abrir(alvo.href,true);
 });
 dialog.querySelector('[data-fechar-modal]')!.addEventListener('click',fechar);
 dialog.addEventListener('cancel',event=>{event.preventDefault();fechar()});
 window.addEventListener('popstate',()=>{
  pedido?.abort();sequencia++;
  if(history.state?.smartlionModal)void abrir(location.href,false);
  else limpar();
 });
}
