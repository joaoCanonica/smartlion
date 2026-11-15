# P0 · Decisão tipográfica

Estudo em `/_estudo-premium` (noindex, fora do sitemap). Capturas:
[1440 px](estudo-tipografico-1440.jpg) · [390 px](estudo-tipografico-390.jpg).

Três provas com o mesmo texto, tamanho e cor: hero ("Tecnologia com procedência."), número grande ("5,0" e "766", lidos de `src/data/avaliacoes.json`) e parágrafo longo (texto já confirmado do site + descrição do IRP).

## Decisão

| Papel | Escolha | Arquivo (latin) | Token |
|---|---|---|---|
| Títulos | **Sora** (variável, 600) | 33,6 KB | `--fonte-titulo` |
| Texto | **Inter Tight** (variável, 400) | 44,9 KB | `--fonte-texto` |
| Rótulos e números técnicos | **Michroma** (400, só caixa alta pequena e números grandes) | 17,9 KB | `--fonte-rotulo` |

## Por quê

- **Sora × Geist × Outfit (títulos).** A Sora tem as formas mais geométricas e abertas das três: o "a" e o "g" de um andar e os terminais retos conversam com as letras quadradas do "SMART LION" do logo sem copiar a Michroma. A Geist é neutra demais (lê como interface de produto de software, não como marca) e é a que mais aparece em sites de startup. A Outfit é arredondada e macia; no "5,0" e no "766" ela parece amigável, não precisa. Com tracking −0,035em a Sora fecha bem em 2 linhas em 390 px.
- **Inter Tight × Geist (texto).** No parágrafo de 17 px a Inter Tight cabe em 10 linhas em 390 px contra 12 da Geist, com o mesmo conforto de leitura; isso importa no celular, onde está a maioria das visitas. O contraste de família (Sora geométrica + Inter Tight grotesca estreita) separa melhor título e texto do que Geist + Geist.
- **Michroma.** Confirmada para rótulos (11–12 px, caixa alta, tracking 0,14em) e para o número gigante da nota (diagnóstico §7.8). Não usar em frases nem em minúsculas.

## Aplicação

- Na P0 a escolha entra **só nos tokens** (`src/styles/tokens.css`). As páginas continuam com DM Serif Display + DM Sans, pelos apelidos temporários, até a P6.
- `@font-face` declarado sem uso não baixa arquivo; o peso atual das páginas não muda.
- Geist e Outfit são carregadas só no estudo. Na P6: remover `@fontsource-variable/geist`, `@fontsource/outfit`, `@fontsource/dm-serif-display`, `@fontsource/dm-sans`, `@fontsource/young-serif` e a página de estudo.
- Pendência de orçamento para a P6: avaliar trocar a Inter Tight variável (44,9 KB) por dois estáticos (400 e 600) se o total de fontes da primeira dobra passar de ~80 KB; pré-carregar só a Sora.
