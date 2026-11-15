export type EscolhaMapa='aceito'|'recusado';
export const chaveConsentimento='smartlion-mapa-v1';
export function escolhaValida(v:unknown):v is EscolhaMapa{return v==='aceito'||v==='recusado';}
let memoria:EscolhaMapa|null=null;
export function lerConsentimento():EscolhaMapa|null{try{const v=sessionStorage.getItem(chaveConsentimento);return escolhaValida(v)?v:memoria;}catch{return memoria;}}
export function salvarConsentimento(v:EscolhaMapa){memoria=v;try{sessionStorage.setItem(chaveConsentimento,v);}catch{/* A escolha continua nesta página se o armazenamento estiver bloqueado. */}window.dispatchEvent(new CustomEvent('smartlion:consentimento',{detail:v}));}
