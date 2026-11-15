# P0 · Decisão tipográfica

Estudo em `/_estudo-premium` (noindex, fora do sitemap). Capturas:
[1440 px](estudo-tipografico-1440.jpg) · [390 px](estudo-tipografico-390.jpg).

Três provas com o mesmo texto, tamanho e cor: hero ("Tecnologia com procedência."), número grande ("5,0" e "766", lidos de `src/data/avaliacoes.json`) e parágrafo longo (texto já confirmado do site + descrição do IRP).

## Decisão

| Papel | Escolha | Arquivo (latin) | Token |
|---|---|---|---|
| Títulos | **Sora** 600 (e 400 nos estilos antigos) | 15,0 KB + 14,7 KB | `--fonte-titulo` |
| Texto | **Inter Tight** 400 (600 só se houver texto em negrito) | 22,0 KB (+ 22,7 KB) | `--fonte-texto` |
| Rótulos e números técnicos | **Michroma** (400, só caixa alta pequena e números grandes) | 17,9 KB | `--fonte-rotulo` |

## Por quê

- **Sora × Geist × Outfit (títulos).** A Sora tem as formas mais geométricas e abertas das três: o "a" e o "g" de um andar e os terminais retos conversam com as letras quadradas do "SMART LION" do logo sem copiar a Michroma. A Geist é neutra demais (lê como interface de produto de software, não como marca) e é a que mais aparece em sites de startup. A Outfit é arredondada e macia; no "5,0" e no "766" ela parece amigável, não precisa. Com tracking −0,035em a Sora fecha bem em 2 linhas em 390 px.
- **Inter Tight × Geist (texto).** No parágrafo de 17 px a Inter Tight cabe em 10 linhas em 390 px contra 12 da Geist, com o mesmo conforto de leitura; isso importa no celular, onde está a maioria das visitas. O contraste de família (Sora geométrica + Inter Tight grotesca estreita) separa melhor título e texto do que Geist + Geist.
- **Michroma.** Confirmada para rótulos (11–12 px, caixa alta, tracking 0,14em) e para o número gigante da nota (diagnóstico §7.8). Não usar em frases nem em minúsculas.

## Aplicação

- Na P0 a escolha entrou **só nos tokens** (`src/styles/tokens.css`). Na P1 (pele global) os apelidos antigos passaram a apontar para as fontes novas: o site inteiro já usa Sora + Inter Tight + Michroma; os `@font-face` da DM Serif Display e da DM Sans continuam declarados, mas sem uso (nada é baixado), e saem na P6.
- `@font-face` declarado sem uso não baixa arquivo; o peso atual das páginas não muda.
- Geist e Outfit são carregadas só no estudo. Na P6: remover `@fontsource-variable/geist`, `@fontsource/outfit`, `@fontsource/dm-serif-display`, `@fontsource/dm-sans`, `@fontsource/young-serif` e a página de estudo.
- **Atualização P1:** a pendência de orçamento virou medida. Com as variáveis (Sora 33,6 KB + Inter Tight 44,9 KB + Michroma 17,9 KB) a home foi a 2179 ms de LCP no 4G simulado, porque as fontes disputam banda com a foto do hero. Trocamos por arquivos estáticos (69 KB por página), sem `preload`, e criamos fallbacks métricos (Arial/Liberation ajustada com `size-adjust` e `ascent/descent-override`, calculados com fontTools) para a troca de fonte não mover o layout. Resultado: home 1808–1885 ms. Pacotes `@fontsource-variable/sora` e `@fontsource-variable/inter-tight` saíram.
