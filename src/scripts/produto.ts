import { consultaProduto, resolverEscolhas, urlProduto, type DadosConsulta, type Escolhas } from '../lib/catalogo';
export function iniciarProduto(raiz: HTMLElement, aoAlterar?: (escolhas: Escolhas)=>void) {
 const p: DadosConsulta=JSON.parse(raiz.dataset.produto!);
 const origem=raiz.dataset.origem!;
 const inputs=[...raiz.querySelectorAll<HTMLInputElement>('[data-escolha]')];
 const consulta=raiz.querySelector<HTMLAnchorElement>('[data-consulta-produto]')!;
 const feedback=raiz.querySelector<HTMLElement>('[data-feedback-produto]')!;
 const campoLink=raiz.querySelector<HTMLInputElement>('[data-link-copia]')!;
 const compartilhar=raiz.querySelector<HTMLButtonElement>('[data-compartilhar]')!;
 let escolhas: Escolhas={versao:'',cor:''};
 function desenhar(){
  const versao=p.versoes.find(v=>v.id===escolhas.versao), cor=p.cores.find(c=>c.id===escolhas.cor);
  inputs.forEach(i=>i.checked=i.value===escolhas[i.dataset.escolha as keyof Escolhas]);
  raiz.querySelector('[data-resumo-versao]')!.textContent=versao?.rotulo ?? (p.versoes.length ? 'A escolher' : 'Consultar a equipe');
  raiz.querySelector('[data-resumo-cor]')!.textContent=cor?.rotulo ?? (p.cores.length ? 'A escolher' : 'Consultar a equipe');
  consulta.href=consultaProduto(p,origem,escolhas);
  campoLink.value=urlProduto(p.slug,origem,escolhas);
 }
 function aplicarURL(){
  const params=new URLSearchParams(location.search);
  escolhas=resolverEscolhas(p,params);desenhar();
  const invalida=(params.has('versao')&&!escolhas.versao)||(params.has('cor')&&!escolhas.cor);
  if(invalida)feedback.textContent='Uma opção do link não está cadastrada. Escolha novamente ou consulte a equipe.';
  else feedback.textContent=p.disponibilidade==='esgotado'?'Peça à equipe para avisar quando chegar.':escolhas.versao&&escolhas.cor?'Opções selecionadas. Confirme disponibilidade com a equipe.':'Selecione versão e cor para incluir na consulta.';
 }
 function mudar(){
  const params=new URLSearchParams();
  inputs.filter(i=>i.checked).forEach(i=>params.set(i.dataset.escolha!,i.value));
  escolhas=resolverEscolhas(p,params);desenhar();aoAlterar?.(escolhas);
  feedback.textContent=p.disponibilidade==='esgotado'?'Peça à equipe para avisar quando chegar.':escolhas.versao&&escolhas.cor?'Opções selecionadas. Confirme disponibilidade com a equipe.':'Você pode consultar agora ou selecionar versão e cor.';
 }
 async function partilhar(){
  const url=campoLink.value;
  if(navigator.share){
   try{await navigator.share({title:p.nome,url});return;}catch(error){if(error instanceof Error && error.name==='AbortError')return;}
  }
  try{await navigator.clipboard.writeText(url);feedback.textContent='Link copiado.';}
  catch{raiz.querySelector<HTMLDetailsElement>('[data-copia]')!.open=true;campoLink.focus();campoLink.select();feedback.textContent='Copie o link selecionado.';}
 }
 inputs.forEach(i=>i.addEventListener('change',mudar));
 compartilhar.hidden=false;compartilhar.addEventListener('click',partilhar);aplicarURL();
 return {aplicarURL,destruir:()=>{inputs.forEach(i=>i.removeEventListener('change',mudar));compartilhar.removeEventListener('click',partilhar)}};
}
