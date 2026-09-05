# Handoff — Aprova Aê

Resumo do que foi feito até agora, para continuar em outro chat do Claude Code.
Última atualização: 2026-09-05.

## Estado atual do projeto

Landing page da "Aprova Aê" (plataforma de organização de estudos para concursos,
vestibular, ENEM, Medicina, OAB, certificações). Stack: **React 19 + Vite + Tailwind
CSS v4**. Sem backend — todos os CTAs são âncoras internas (`#cta`, `#planos`, `#top`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve a build de produção
npm run lint      # oxlint (escopo: src/, config já filtra as pastas de tooling)
```

**Agora é um repositório git de verdade** (`git init` + primeiro commit já feitos por
fora desta sessão), com remoto no GitHub: `github.com/aderbalfs/aprovae`. Branch
`main`, 1 commit até agora (`first commit`). Isso muda a orientação de cautela do
handoff anterior — hoje dá pra usar `git diff`/`git revert` normalmente.

Estrutura completa e "onde editar o quê" documentados em [README.md](README.md).
Design system (cores, tipografia, componentes, regras de uso) em [DESIGN.md](DESIGN.md);
contexto de produto/audiência em [PRODUCT.md](PRODUCT.md). **Atenção:** depois da sessão
descrita abaixo, o site já não segue mais 100% o que o DESIGN.md documenta (ver
"Divergências do DESIGN.md" adiante) — os dois arquivos precisam de uma revisão de
sincronia se alguém for confiar neles cegamente.

### Ordem das seções (`src/App.jsx`)

```
Header → Hero → ProductShowcase → Positioning → LeagueMarquee → Audience
→ Features → HowItWorks → Benefits → Concept → Pricing → ScreensCarousel
→ Testimonials → Faq → Cta → Footer
```

## O que foi feito (sessão anterior, resumo)

Conversão do `index.html` estático original pra React + Vite + Tailwind, hero com
parallax/tilt no mockup, logo oficial aplicada em Header/Footer, e as 6 personas de
"Para quem é" ganhando cada uma sua cor (teal/violeta/rosa/âmbar/azul-céu/terracota).
Detalhes completos no histórico de commits/conversa anterior — não repetidos aqui.

## O que foi feito nesta sessão (longa), em ordem

1. **`ProductShowcase.jsx` (novo).** Seção "Seu painel de estudos" logo após o Hero:
   mockup do dashboard real (`public/screenshots/dashboard-inicio.jpeg`) dentro de uma
   janela estilo macOS (3 dots + barra de URL), fundo escuro (`bg-graphite`) com glows
   radiais índigo/navy. Passou por várias rodadas de ajuste de proporção (66% → 75% →
   80% de largura) até resolver um bug real de layout: `flex` com larguras em % nos
   dois filhos + `gap` por cima estourava o container e espremia a coluna de texto
   abaixo do valor definido. Trocado para `grid` com `grid-template-columns: [4fr 1fr]`
   (ou `[1fr 4fr]` no variant `reverse`) — o grid subtrai o gap corretamente, sem
   squeeze. Uma tentativa de "sangrar" o mockup pra fora da viewport
   (`margin-left: calc(50% - 50vw)`) foi **revertida a pedido do usuário** ("ficou pra
   fora da tela") — hoje o mockup fica 100% dentro da viewport, com a coluna de texto
   em largura fixa de `320px` (não mais `%`, pra nunca mais quebrar em linhas curtas).
   No mobile, ganhou padding extra (`pb-[100px]` no Hero / `pt-[80px]` aqui) só abaixo
   do breakpoint `lg`, porque o espaço padrão ficava apertado nessa transição.

2. **`LeagueMarquee.jsx` (novo).** Carrossel infinito (CSS puro, sem lib) com as 11
   medalhas de liga (`public/ligas/*.svg`, renomeadas de "bronze I.svg" etc. pra
   `bronze-1.svg` etc.) logo depois de "Posicionamento". Fundo escuro, fade nas bordas
   via `mask-image`, pausa no hover. Foi cogitado (e **só chegou a ser mostrado em
   preview**, nunca aplicado no código) dar um glow âmbar/dourado nessa seção pra ecoar
   o ouro das medalhas — ver item 6.

3. **`ScreensCarousel.jsx` (novo, substituiu um `ScreensGallery.jsx` que existiu por
   pouco tempo).** Vitrine tipo carousel com 5 telas do sistema (Cronômetro, Registro
   de estudo, Desempenho, Hábitos, Conquistas — screenshots em `public/screenshots/`),
   tela central maior (75% da viewport) com previews laterais cortados pela borda via
   `overflow: hidden`, navegação por setas/dots. Fundo `bg-mist` **edge-to-edge** (sai
   do container, cobre a tela toda) com glows radiais índigo/navy — reforçados a pedido
   do usuário ("tá muito morto") de opacidade `.16/.08` pra `.28/.14`.

4. **Reformulação completa de `Pricing.jsx`.** Voltou a ter **3 planos** (Free, Base,
   Pro — antes só tinha Gratuito/Premium). Toggle Mensal/Anual virou um switch
   deslizante (bolinha branca) em vez de pill buttons. Valores reais definidos pelo
   usuário:
   - **Base:** R$ 29,90/mês, ou anual em 12x de R$ 22,79 (ou R$ 219,90 à vista).
   - **Pro:** R$ 39,90/mês, ou anual em 12x de R$ 28,91 (ou R$ 279,90 à vista).
   - **Free:** R$ 0.
   Pro continua sempre com o destaque visual (gradiente índigo→navy + selo "MAIS
   ESCOLHIDO") — um toggle "Destacar Base/Pro" chegou a ser implementado e **foi
   removido** a pedido do usuário ("não faz sentido").

5. **Exploração de paleta de cores — o que ficou de verdade no código:**
   - `content.js` ganhou `export const espectro` (6 cores: teal `#0E7490`, violeta
     `#7C3AED`, rosa `#DB2777`, âmbar `#B45309`, azul-céu `#0284C7`, terracota
     `#C2410C` — as mesmas já usadas nas personas). **Isso está aplicado hoje** em:
     - `Features.jsx`: os 4 ícones de card usam uma cor do espectro cada.
     - `Benefits.jsx`: os 8 dots dos chips ciclam pelas 6 cores (antes eram todos
       verdes, o que já violava a própria "Rare Green Rule" do DESIGN.md).
     - `Testimonials.jsx`: os selos de categoria usam a mesma cor do público
       correspondente em "Para quem é" (Concurso Público = teal, Medicina = rosa, etc.).
   - **O que foi discutido/mostrado em preview mas NUNCA aplicado no código:**
     - Uma "paleta oficial de 5 cores" (Índigo, Navy, Violeta, Verde, Âmbar) pra
       substituir esse espectro de 6, com a lógica "Navy/Índigo = base, Violeta/Verde/
       Âmbar = apoio". Isso foi pedido pelo usuário, discutido, e eu cheguei a montar
       um **plano de recoloração** (reverter os ícones de Features pra só índigo,
       Benefits pra só verde, Testimonials pra só violeta, + glows de fundo em
       Posicionamento/Benefícios/Planos/Depoimentos) — mas isso ficou só numa prévia
       (artifact), a conversa pivotou pro padding antes de eu aplicar. **Se o usuário
       voltar a pedir isso, o plano já está pronto, é só implementar.**
     - Um acento âmbar no H1 do Hero (palavra "aprovação" em dourado) e no kicker da
       seção de Ligas — também só chegou a virar preview (artifact), nunca foi pro
       código.
   - Pesquisei o concorrente **estudei.com.br** (paleta: roxo `#6735BC` de ação, verde-
     menta `#00CDA0` de destaque de texto, fundo creme `#ECEAE2`) só como referência
     de estratégia (usar uma 2ª cor pra "acender" uma palavra no texto), não copiei as
     cores deles.

6. **Padding vertical de TODAS as seções do site foi padronizado.** Era um sistema
   responsivo (`clamp(72px,10vw,124px)` e variações por seção, documentado no
   DESIGN.md). A pedido explícito do usuário, virou um valor fixo de **`48px`**
   topo/base em toda seção (`Hero`, `Positioning`, `Audience`, `Features`,
   `HowItWorks`, `Benefits`, `Concept`, `Pricing`, `ScreensCarousel`, `LeagueMarquee`,
   `ProductShowcase`, `Testimonials`, `Faq`, `Cta`, `Footer`) — passou por 30px antes
   de virar 48px. **Isso é uma divergência real e intencional do DESIGN.md**, que
   ainda descreve o sistema responsivo antigo — ver seção abaixo.

7. **`Audience.jsx` ("Para quem é") — a parte mais instável da sessão, MUITO
   vai-e-volta.** Estado final, confirmado funcionando: **cards verticais em arco**
   (o mesmo formato desde a v12 da sessão anterior), só que agora com **fotos reais de
   pessoas** em vez do ícone com sigla:
   - 4 cards, `aspect-[8/15]` (proporção bem alta — subiu de `4/5` → `3/4` → `2/3` →
     `8/15` em pedidos sucessivos de "aumenta mais"), máscara em arco
     (`rounded-t-full rounded-b-2xl`), foto com `mask-image` fazendo um degradê pra
     transparente perto da base (`black 0%, black 55%, transparent 92%`) — a foto
     "dissolve" na cor do próprio card.
   - Fotos: Concurseiros → `public/pessoas/modelo1.png`, Universitários →
     `modelo3.png`, Residentes → `residente-final.png`, Vestibulandos →
     `vestibulanda-final.png`. Cores dos cards: Índigo, Violeta, Navy, Âmbar
     (`cor` no array `publicos` de `content.js`).
   - **Duas fotos precisaram de tratamento porque não tinham fundo transparente**
     (`médico.jpg` e `pessoa.png`, que na real eram arquivos **AVIF com extensão
     errada** — descoberto com `file` + PIL). Tentei instalar `rembg` (segmentação por
     ML) pra remover fundo direito — **a instalação falhou** (ambiente Python
     corrompido, `OSError` tentando escrever `lsm2bin.exe`). Sem ML, usei um script
     próprio de flood-fill (`Pillow` + `numpy`, sem `scipy`/`cv2` disponíveis) — script
     ficou salvo em
     `%TEMP%\claude\...\scratchpad\remove_bg.py` (não está no repo, é scratch).
     Problema real: o jaleco branco do médico tem a mesma cor do fundo, então
     flood-fill simples apagava o jaleco junto ("fantasma"). A solução que ficou foi o
     **degradê `mask-image`** citado acima — ele esconde a parte de baixo (onde o
     jaleco "fantasma" apareceria) atrás de um fade, em vez de tentar recortar o
     contorno certo.
   - **Duas tentativas de redesenho pra cards horizontais foram feitas e as DUAS
     foram rejeitadas** pelo usuário, que pediu pra reverter pro formato vertical em
     ambas as vezes (a segunda vez com bem mais frustração — "tudo errado dnv... você
     já está delirando"). A primeira tentativa usou classes Tailwind ad-hoc; a segunda
     seguiu um HTML/CSS bem detalhado que o próprio usuário colou (classes
     `study-areas`/`study-card__*`, breakpoints em 991px/680px/420px) — implementada
     fielmente, inclusive testada em 4 larguras, mas **também revertida**. O CSS
     `.study-areas` que cheguei a adicionar em `index.css` foi **removido de novo** na
     reversão. **Não tente reintroduzir cards horizontais nessa seção sem confirmar
     de novo com o usuário** — já foi tentado duas vezes e as duas vezes ele pediu
     pra desfazer.
   - Arquivos órfãos que sobraram em `public/pessoas/` (não usados por nenhum
     componente hoje, podem ser limpos com segurança se alguém quiser):
     `medico.png` (tem marca d'água da PNGTREE, nunca foi usável), `modelo2.png`
     (nunca chegou a ser escolhido pra nenhuma persona), `médico.jpg` e `pessoa.png`
     (os originais mal-nomeados em AVIF — as cópias corretas já são
     `residente-final.png`/`vestibulanda-final.png`, geradas a partir deles).

## Divergências do DESIGN.md (leia antes de confiar nele)

- **Espaçamento entre seções:** DESIGN.md documenta `clamp(72px,10vw,124px)`
  responsivo; o site hoje usa `48px` fixo em toda seção (ver item 6 acima). Isso foi
  um pedido explícito e repetido do usuário, não um acidente — mas o DESIGN.md não foi
  atualizado pra refletir isso.
- **Cores:** DESIGN.md provavelmente ainda descreve o "Espectro de Assuntos" de 6
  cores como o sistema vigente (é o que está de fato no código hoje). Se alguém rodar
  a "paleta oficial de 5 cores" que ficou só em preview (item 5), o DESIGN.md vai
  precisar de outra atualização.
- Os ~6 achados de `font-size` fora do type ramp que o hook `/impeccable` aponta
  continuam os mesmos de sempre (pré-existentes, o usuário já decidiu deixar como
  estão) — **mais** alguns novos que entraram durante essa sessão em componentes que
  eu criei/editei seguindo specs literais que o próprio usuário colou (ex.: os
  tamanhos de fonte do `.study-card` chegaram a ser registrados como exceção via
  `hook-admin.mjs ignore-value`, mas isso foi tudo revertido junto com o resto da
  seção horizontal — então essas ignore-values ficaram "penduradas" no
  `.impeccable/config.json` sem CSS correspondente. Inofensivo, mas é lixo residual
  se alguém for fazer limpeza).

## Padrões e decisões que valem lembrar

- **Antes de mudanças visuais amplas**, o padrão que funcionou bem nas sessões
  anteriores era apresentar 2-3 direções e deixar o usuário escolher. **Nesta sessão
  isso ficou mais arriscado**: o usuário aprovou previews (artifacts) várias vezes e
  depois, quando a implementação de fato não bateu 100% com o que ele tinha em mente
  (mesmo seguindo o preview), reverteu tudo com frustração real. Vale confirmar
  granularmente ("essa cor aqui, esse espaçamento ali") em vez de assumir que "aprovou
  o preview" = "aprovou cada detalhe de implementação".
- **Quando o usuário pede pra reverter, reverta literalmente** — não tente "melhorar"
  a versão anterior nem misturar ideias novas na hora da reversão. Nas duas reversões
  desta sessão, o pedido foi sempre "volta pro que estava antes", não "volta e ajusta".
- **Ferramenta de screenshot do browser deste ambiente segue instável** (frames em
  branco na maioria das tentativas) — o caminho confiável continua sendo inspecionar
  DOM/geometria via `javascript_exec` (`getComputedStyle`, `getBoundingClientRect`).
- Ao criar imagem transparente a partir de fundo branco liso, **cuidado com roupas
  brancas/claras** — flood-fill por cor não distingue "fundo" de "roupa da mesma cor
  encostando na borda da foto". Não há `rembg`/`scipy`/`cv2` disponíveis neste
  ambiente Python (tentativa de instalar `rembg` falhou); só `Pillow` + `numpy`.
- Arquivos de imagem podem estar com a **extensão errada** (ex.: um `.jpg`/`.png` que
  na real é AVIF) — checar com `file <arquivo>` antes de assumir o formato pelo nome.

## Possíveis próximos passos (não pedidos ainda)

- Nada pendente de aprovação no momento — a última ação foi reverter "Para quem é"
  pro estado vertical e o usuário pediu explicitamente pra não mexer em mais nada.
- Se/quando o usuário quiser retomar a paleta de 5 cores oficial ou o acento âmbar no
  Hero/Ligas, os planos já foram desenhados nesta sessão (ver item 5) — não precisa
  redesenhar do zero.
- Considerar sincronizar o DESIGN.md com o padding de 48px e com o estado real da
  paleta de cores, se o usuário confirmar que quer manter as coisas como estão hoje.
- Limpar os arquivos órfãos de `public/pessoas/` listados acima, se o usuário
  autorizar.
