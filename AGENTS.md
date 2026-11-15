CONTEXTO DA REMODELAGEM PREMIUM — Smart Lion (Lages/SC)
Idioma de tudo: português do Brasil.

1. SITUAÇÃO
- O site da Smart Lion já existe neste repositório (Astro 7 estático, TS strict) e está funcionalmente pronto: home institucional, A Loja, Nossa História, Produtos (categorias + página de produto), Seminovos, Assistência (6 serviços), Curso, Avaliações, Visite-nos, FAQ, Dicas, Privacidade, 404, redirecionamentos 301, config única (src/config/loja.ts), linkWhatsApp() com 12 mensagens testadas, motor de horário, 56 avaliações, SEO/JSON-LD, consentimento LGPD.
- O cliente quer o site mais premium, profissional e institucional: entrada (abertura), hero de impacto, 3D, mais animação, cores e fotos melhores.
- Leia SMARTLION_DIAGNOSTICO_E_DIRECAO_PREMIUM.md (raiz) inteiro antes de qualquer sessão. É a especificação. Discordou? Justifique e proponha; não mude sozinho.
  (Desde a P0 o arquivo está em docs/PREMIUM_DIAGNOSTICO.md.)

2. O QUE NÃO MUDA (preservar sempre)
- Rotas, redirecionamentos, conteúdo confirmado, config, linkWhatsApp() e mensagens, motor de horário, avaliações, schemas, testes existentes, regras de texto (IRP descrito como "Assistência técnica participante do programa Independent Repair Provider (IRP) da Apple"; nunca "autorizada Apple"; sem preço; sem superlativos na voz da loja; avaliações literais com nome + inicial; sem AggregateRating; nada inventado).
- Testes atuais continuam verdes a cada commit. Nada é removido sem listar antes.

3. IDENTIDADE NOVA: "LEÃO DE AÇO"
- Marca: smartlion-logo.svg (grupos #anel, #nome, #leao; currentColor) e smartlion-leao.svg (só o leão). Substituem src/assets/logo.png e o favicon.
  (Desde a P0 os dois SVGs estão em src/assets/marca/.)
- Paleta (tokens; validar AA por script):
  Preto Leão ≈ #0B0B0C (fundo principal) · Grafite ≈ #17181B (superfícies) · Grafite 2 ≈ #222429 (bordas/realces) · Aço ≈ #9A9EA6 (texto secundário, linhas) · Branco Gelo ≈ #F5F6F7 (texto e capítulos claros) · Âmbar ≈ #E3A857 (acento mínimo: números, foco, linha ativa, varredura de luz) · verde WhatsApp só no botão de WhatsApp.
  SAEM: creme #f5f3ef, madeira #8a6a4f, magenta #e0157a e derivados.
- Tipografia (testar e decidir na P0; self-host via @fontsource; subset latino):
  Títulos: Sora × Geist (Outfit como 3ª opção). Rótulos/números técnicos: Michroma (só caixa alta pequena; eco das letras do logo). Texto: Inter Tight × Geist. SAI a DM Serif Display (e Young Serif, se não for usada).
- Materiais: vidro escuro (painéis com backdrop-filter leve + borda 1px Aço com 30% de opacidade), varredura de luz (gradiente linear âmbar→branco animado uma vez por elemento), grão sutil no preto (SVG noise, opacidade ≤ 4%).
- Fotografia real; produto em fundo escuro com luz lateral quente. Nunca a mesma foto duas vezes na mesma página.
- PROIBIDO: maçã ou logos de marcas como enfeite; mockups de iPhone de banco/IA; neon colorido; gradiente roxo/azul; cards brancos arredondados iguais; ícones em círculo; ícones de biblioteca como ilustração; serifas editoriais.

4. MOVIMENTO
- CSS + IntersectionObserver + Web Animations API. View Transitions e scroll-driven só como melhoria progressiva (@supports). Sem GSAP, Lenis, Motion, Swiper. Nunca sequestrar a rolagem.
- 3D: Three.js (versão estável atual, fixada) numa ilha carregada SÓ depois do LCP e só quando visível (client:visible + requestIdleCallback). Sem React Three Fiber. Fallback sempre (SVG/AVIF + CSS).
- prefers-reduced-motion: estados finais, sem 3D animado (imagem estática), sem varreduras.

5. ORÇAMENTO (medir de verdade)
- JS inicial ≤ 40 KB gzip por página (sem a ilha 3D). Ilha 3D ≤ 170 KB gzip. Nada de GLB pesado: leão 3D gerado do SVG em tempo real (SVGLoader + ExtrudeGeometry) e celular do reparo procedural.
- LCP < 2,0 s em 4G mobile MEDIDO com a abertura ativa; CLS < 0,05; INP < 200 ms; Lighthouse mobile ≥ 95 (Performance/BP/SEO) e 100 (Acessibilidade) em todas as rotas; axe sem violações.

6. CONDUTA
- Uma sessão = um commit em português na branch premium.
- Plano curto antes; capturas 390 e 1440 px (e reduced-motion) depois; números medidos no relatório. Se não conseguir medir, diga e deixe o comando.
- Relatório: o que mudou · arquivos · o que falhou · pendências · números.
