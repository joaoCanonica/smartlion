import { buscar, type ItemBusca } from '../lib/catalogo';
const raiz=document.querySelector<HTMLElement>('[data-catalogo]');
if(raiz){
 const form=raiz.querySelector<HTMLFormElement>('[data-busca-catalogo]')!;
 const input=form.querySelector<HTMLInputElement>('[name=q]')!;
 const select=form.querySelector<HTMLSelectElement>('[name=condicao]')!;
 const limpar=form.querySelector<HTMLButtonElement>('[data-limpar]')!;
 const contagem=raiz.querySelector<HTMLElement>('[data-contagem]')!;
 const vazio=raiz.querySelector<HTMLElement>('[data-catalogo-vazio]')!;
 const cards=[...raiz.querySelectorAll<HTMLElement>('[data-card-produto]')];
 const chips=[...document.querySelectorAll<HTMLAnchorElement>('[data-filtro-categoria]')];
 const categoriaBase=raiz.dataset.categoriaBase!;
 let categoria=categoriaBase, indice: ItemBusca[] | null=null;
 function carregarURL(){
  const params=new URLSearchParams(location.search);
  input.value=params.get('q')??'';
  select.value=['novo','seminovo'].includes(params.get('condicao')??'')?params.get('condicao')!:'';
  const filtro=params.get('categoria')??'';
  categoria=categoriaBase || (chips.some(c=>c.dataset.filtroCategoria===filtro)?filtro:'');
 }
 function filtrar(atualizarURL=true){
  if(!indice)return;
  const resultado=buscar(indice,input.value,categoria,select.value);
  const slugs=new Set(resultado.map(p=>p.slug));let visiveis=0;
  cards.forEach(card=>{card.hidden=!slugs.has(card.dataset.cardProduto!);if(!card.hidden)visiveis++});
  vazio.hidden=visiveis>0;
  contagem.textContent=`${visiveis} ${visiveis===1?'modelo encontrado':'modelos encontrados'}`;
  limpar.hidden=!(input.value || select.value || (!categoriaBase&&categoria));
  chips.forEach(c=>{if(c.dataset.filtroCategoria===categoria)c.setAttribute('aria-current','page');else c.removeAttribute('aria-current')});
  if(atualizarURL){
   const params=new URLSearchParams();
   if(input.value.trim())params.set('q',input.value.trim());
   if(select.value)params.set('condicao',select.value);
   if(categoria && !categoriaBase)params.set('categoria',categoria);
   history.replaceState(history.state,'',`${raiz!.dataset.rotaCatalogo}${params.size?`?${params}`:''}`);
  }
 }
 form.addEventListener('submit',event=>{event.preventDefault();filtrar()});
 input.addEventListener('input',()=>filtrar());select.addEventListener('change',()=>filtrar());
 limpar.addEventListener('click',()=>{input.value='';select.value='';categoria=categoriaBase;filtrar();input.focus()});
 if(!categoriaBase)chips.forEach(chip=>chip.addEventListener('click',event=>{
  if(!indice||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();categoria=chip.dataset.filtroCategoria!;filtrar();
 }));
 window.addEventListener('popstate',()=>{if(location.pathname===raiz!.dataset.rotaCatalogo){carregarURL();filtrar(false)}});
 carregarURL();
 fetch('/busca.json').then(r=>{if(!r.ok)throw new Error('Índice indisponível');return r.json()}).then((dados: ItemBusca[])=>{indice=dados;filtrar(false)}).catch(()=>{contagem.textContent='A busca não carregou. Navegue pelas categorias ou consulte a equipe.'});
}
