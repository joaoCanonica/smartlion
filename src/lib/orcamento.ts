import { mensagensWhatsApp } from '../config/whatsapp';
/** Preserva o texto literal da §10 e só usa dados digitados pelo visitante. */
export function mensagemOrcamento(modelo:string,problema:string,servico=''):string {
 if(servico && modelo.trim() && !problema.trim()) return mensagensWhatsApp.servico(servico,modelo);
 return mensagensWhatsApp.assistencia(modelo,problema);
}
