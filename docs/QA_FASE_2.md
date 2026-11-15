# QA — Fase 2

## Resultados

- `pnpm test`: 95 testes aprovados; 45 de horário e 50 de WhatsApp.
- WhatsApp: comparação literal dos 12 textos, contrato com a tabela da especificação, encode/decode dos links, campos obrigatórios, fallback de parcelamento, bloqueio de troca não confirmada e rejeição de condição encomenda.
- Horário: fronteiras de minuto/segundo, almoço, sábado, domingo, UTC e outros offsets, virada de ano, fevereiro bissexto, feriados sintéticos, exceções especiais e configurações inválidas. Datas excepcionais dos testes não são dados da loja.
- `pnpm check`: 18 arquivos, 0 erros, 0 avisos, 0 sugestões.
- `pnpm build`: 2 páginas estáticas.
- JS gzip somando os scripts da página: home 1.781 bytes; 404 zero. Dados medidos nos arquivos, não numa transferência de rede.
- Build: 15 links WhatsApp (11 home + 4 na 404), todos com número correto e mensagem geral literal. Nenhuma mensagem enviada.
- Build: tabela e texto de fallback presentes; sem aviso DEV e sem frases proibidas.
- Navegador: status “Aberto agora · fecha às 18h30” observado; Enter em “Ver horário completo” levou a #contato.
- Não medidos nesta fase: Lighthouse, LCP, CLS, INP, axe, viewports exatos de 390/1440 e navegação completa sem JS. A inspeção do HTML comprova a presença do fallback, não substitui essa sessão de navegador.

## Rodar e conferir

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm dev
```

Em 390×844 e 1440×900: verificar se o status cabe, se não sobrepõe os botões e se o link de horário chega à tabela. Desativar JS e recarregar: deve aparecer “Confira os horários de atendimento abaixo.”, nunca um status gerado no build. A tabela deve manter manhã, almoço e tarde. Testar as funções com `pnpm test` para não alterar o relógio do computador.

Para Lighthouse, em um terminal:
```sh
pnpm build
pnpm preview --port 4321
```
Em outro terminal, com Chrome instalado:
```sh
pnpm dlx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.width=390 --screenEmulation.height=844 --output=html --output-path=./lighthouse-home.html --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:4321/404.html --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.width=390 --screenEmulation.height=844 --output=html --output-path=./lighthouse-404.html --chrome-flags="--headless"
```

O noindex de revisão é intencional. INP real não é comprovado por um Lighthouse de navegação. As métricas de aprovação serão coletadas na fase 9.
