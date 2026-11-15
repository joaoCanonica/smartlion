export function podeAvancarAutomaticamente(estado: { pausado: boolean; reduzido: boolean; hover: boolean; foco: boolean; oculto: boolean; visivel: boolean }): boolean {
  return !estado.pausado && !estado.reduzido && !estado.hover && !estado.foco && !estado.oculto && estado.visivel;
}
