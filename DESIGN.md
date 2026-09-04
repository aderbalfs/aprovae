---
name: Aprova Aê
description: Landing page indígo-e-navy para uma plataforma de organização e acompanhamento de estudos rumo a uma prova
colors:
  indigo-eletrico: "#0014ED"
  tinta-navy: "#000366"
  verde-sinal: "#0E9F6E"
  verde-sinal-claro: "#4ADE80"
  papel: "#FFFFFF"
  neblina: "#F7F8FC"
  grafite: "#0B1020"
  chumbo: "#667085"
  cinza-acessivel: "#5E6D93"
  cinza-medio: "#8A93A8"
  cinza-nav: "#3D4661"
  cinza-rotulo: "#98A1B5"
  cinza-apagado: "#B4BCCF"
  cinza-neutro: "#C6CCDC"
  linha: "#E8EAF6"
  linha-clara: "#E4E8F8"
  linha-tracejada: "#DFE3F1"
  contorno-branco: "#D5DAF0"
  contorno-hover: "#CDD5F5"
  indigo-tinta-clara: "#EEF1FF"
  indigo-celula: "#DDE3FF"
  indigo-barra-clara: "#C9D2FA"
  indigo-barra-media: "#8496F5"
  verde-fundo-claro: "#E9FBF3"
  neutro-celula-vazia: "#F2F4FB"
  skeleton-linha: "#EDEFF7"
  skeleton-linha-clara: "#F3F5FB"
  divisor-footer: "#F0F2F9"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(38px, 5.6vw, 66px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  display-emphasis:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(32px, 5vw, 60px)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(30px, 4.2vw, 52px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "clamp(16px, 1.6vw, 18px)"
    fontWeight: 400
    lineHeight: 1.65
  body-card:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
  caption:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
  stat:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    fontFeature: "tabular-nums"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "22px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-y: "clamp(72px, 10vw, 124px)"
  container-x: "clamp(20px, 4vw, 32px)"
  container-max: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.indigo-eletrico}"
    textColor: "{colors.papel}"
    rounded: "{rounded.md}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.tinta-navy}"
  button-secondary:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-navy}"
    rounded: "{rounded.md}"
    padding: "15px 26px"
  button-secondary-hover:
    textColor: "{colors.indigo-eletrico}"
  card:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.xl}"
    padding: "26px"
  card-dark:
    backgroundColor: "{colors.tinta-navy}"
    textColor: "{colors.papel}"
    rounded: "{rounded.xxl}"
  pill-toggle-active:
    backgroundColor: "{colors.indigo-eletrico}"
    textColor: "{colors.papel}"
    rounded: "{rounded.pill}"
    padding: "9px 20px"
  pill-toggle-inactive:
    textColor: "{colors.chumbo}"
    rounded: "{rounded.pill}"
    padding: "9px 20px"
---

# Design System: Aprova Aê

## Overview

**Creative North Star: "The Bright Path"**

Aprova Aê se apresenta como uma trilha clara em direção a um objetivo definido — o próprio tagline da página, "seu caminho é o Aprova Aê", é o eixo do sistema visual. Índigo elétrico e tinta navy formam uma dupla enérgica e motivadora sobre fundos quase brancos, criando contraste alto sem pesar: a cor de marca é usada para apontar caminho (CTAs, links, acentos de progresso), nunca para preencher a página inteira. O movimento é parte da linguagem, não decoração — cards nascem com fade-and-rise ao rolar a tela (`data-reveal`), um badge flutua suavemente em loop, barras de gráfico crescem de baixo para cima ao entrar em cena. Nada disso é sutil ou hesitante: é uma página que quer transmitir progresso acontecendo diante dos olhos.

O sistema evita duas armadilhas: parecer um SaaS corporativo genérico (por isso sombras sempre tingidas de marca, nunca cinza neutro, e cantos generosamente arredondados em vez de retos) e parecer institucional/burocrático (por isso o excesso de animação de entrada, os cards flutuantes com leve rotação de profundidade, e um único acento verde reservado só para celebrar acerto). Densidade é média-baixa: respiro generoso entre seções (`clamp(72px,10vw,124px)` de padding vertical), texto centrado e limitado em largura para leitura confortável, mas os blocos de dado (barras, calendário semanal, chips de métricas) são compactos e informativos, como um painel real.

**Key Characteristics:**
- Contraste alto índigo/navy sobre branco e neblina clara, com cor de marca usada com propósito (CTA, link, progresso) e nunca como preenchimento de fundo em massa.
- Sombras sempre tingidas de navy ou índigo (nunca preto puro), grandes e difusas — dão a sensação de cards "flutuando" sobre a página.
- Movimento constante e intencional: reveal ao rolar, float contínuo em badges, crescimento de barras — a página se sente viva, nunca estática.
- Cantos generosamente arredondados em quase tudo (12–22px em cards, pill em toggles e badges) — nenhuma superfície com canto reto.
- Verde é raro e sempre significa "isso deu certo" — nunca é usado como cor decorativa alternativa.

## Colors

A paleta é dominada por dois azuis de marca sobre uma base neutra quase branca; cor entra pontualmente, nunca como fundo de seção inteira (exceto os poucos blocos escuros deliberados).

### Primary
- **Índigo Elétrico** (`#0014ED`): a cor de ação. CTAs primários, links, ícones de destaque, o botão ativo do toggle de planos, o "68%" do anel de progresso do hero. Em qualquer tela, é a cor que diz "clique aqui" ou "isto é o resultado".
- **Tinta Navy** (`#000366`): a cor de autoridade. Títulos (`h1`/`h2`), o texto da wordmark, fundos escuros deliberados (seção "Nosso conceito", CTA final, metade do gradiente do logotipo e dos cards escuros do bento grid). É Índigo Elétrico em repouso — mais grave, usada para ancorar em vez de convidar ao clique.

### Secondary
- **Verde Sinal** (`#0E9F6E`) / **Verde Sinal Claro** (`#4ADE80`): reservado a sinais positivos pontuais — o dot "ao vivo" do badge do header, o ícone de "revisão concluída", o "+14%" de acertos no hero, os checks da lista do plano Premium. Hoje aparece só nesses contextos de confirmação/progresso; não há regra rígida que proíba outro uso futuro, mas nenhuma tela atual o usa decorativamente.

### Tertiary — Espectro de Assuntos
Seis cores reservadas a **itens paralelos e não-sequenciais** que precisam de identidade própria sem competir com a cor de marca — inspiradas na própria plataforma, que já codifica cada disciplina de estudo com uma cor no registro de estudos. Definido em `espectro` (`content.js`) e reaproveitado em três lugares: os 6 públicos de "Para quem é" (cor original), os 4 ícones de card em "Funcionalidades" e os 4 selos de categoria em "Depoimentos" — mesma categoria, mesma cor, nos dois blocos onde ela aparece.
- **Teal** (`#0E7490`), **Violeta** (`#7C3AED`), **Rosa** (`#DB2777`), **Âmbar** (`#B45309`), **Azul-Céu** (`#0284C7`), **Terracota** (`#C2410C`) — cada uma com um tom de fundo claro companheiro (`fundo` no array) para chips e ícones de baixo contraste.

### Neutral
- **Papel** (`#FFFFFF`): fundo padrão da maior parte das seções e dos cards.
- **Neblina** (`#F7F8FC`): fundo alternado de seção (hero, "para quem é", "como funciona", depoimentos, footer) e fundo de blocos de dado dentro de cards claros (chips de métrica, itens de benefício).
- **Grafite** (`#0B1020`): cor de texto padrão do `body` (raramente visível como tal, pois a maioria do texto usa Chumbo ou Tinta Navy).
- **Chumbo** (`#667085`): texto de parágrafo/descrição em todo o site — a cor de "corpo de texto" de fato.
- **Cinza Acessível** (`#5E6D93`): texto terciário/legendas curtas que carregam informação real (rótulos de card, "/ sempre", "/ mês", iniciais de dia da semana, números do "caminho sem estrutura", legenda do rodapé) — escurecida a partir de Cinza Médio/Cinza Rótulo/Cinza Apagado/Cinza Neutro em 2026-09 para atingir 4,5:1 (WCAG AA) contra Papel, Neblina e Índigo Tinta Clara, os três fundos onde esse texto aparece.
- **Cinza Médio** (`#8A93A8`), **Cinza Rótulo** (`#98A1B5`), **Cinza Apagado** (`#B4BCCF`) e **Cinza Neutro** (`#C6CCDC`): tons cada vez mais claros reservados a elementos puramente decorativos que não são texto (dot de status "Sem estrutura", traço do ícone de bullet do plano gratuito) — nunca usar em texto real; para isso, usar Cinza Acessível.
- **Linha** (`#E8EAF6`) e **Linha Clara** (`#E4E8F8`): borda padrão de cards e divisores de seção.
- **Índigo Tinta Clara** (`#EEF1FF`): fundo de chips e badges de baixo contraste sobre cor de marca (fundo de ícone de recurso quando não usa o Espectro de Assuntos).

### Named Rules
**The Tinted Shadow Rule.** Nenhuma sombra do sistema usa preto neutro; toda sombra é `rgba(0,3,102,..)` (tingida de Tinta Navy) ou `rgba(0,20,237,..)` (tingida de Índigo Elétrico). É o padrão observado em todo o site hoje — trate como convenção forte a seguir, não como proibição absoluta contra uma sombra neutra em um componente futuro muito diferente.

**The Rare Green Rule.** Verde aparece apenas quando algo deu certo: confirmação, conclusão, taxa de acerto positiva, benefício exclusivo do plano pago. É o uso observado consistentemente hoje; documentar e preservar esse padrão, sem tratá-lo como proibição rígida contra qualquer outro uso.

**The Subject Spectrum Rule.** As 6 cores do Espectro de Assuntos existem só para diferenciar itens paralelos e não-sequenciais (públicos, cards de recurso, categorias de depoimento) — nunca para uma sequência numerada (os 4 passos de "Como funciona" continuam só em Índigo, porque ali a ordem é o que importa) nem para CTA, link ou título, que continuam exclusivos de Índigo/Tinta Navy.

**The Text Needs Contrast Rule.** Cinza Médio, Cinza Rótulo, Cinza Apagado e Cinza Neutro nunca carregam texto real — são claros demais para atingir 4,5:1 nos fundos onde a página os usa. Qualquer texto que hoje pareceria "de menor ênfase" usa Cinza Acessível (`#5E6D93`); os quatro tons mais claros ficam restritos a elementos não-textuais (dots, traços de ícone).

## Typography

**Display Font:** 'Plus Jakarta Sans' (com fallback `system-ui, sans-serif`)
**Body Font:** 'DM Sans' (com fallback `system-ui, sans-serif`)

**Character:** Plus Jakarta Sans carrega toda a autoridade e energia do sistema — pesos 700/800, letter-spacing negativo fechado (-0.02em a -0.04em) em títulos, o que dá uma sensação compacta e confiante. DM Sans faz o trabalho de leitura tranquila no corpo, com peso 400 e `line-height` generoso (1.6–1.65), equilibrando a densidade dos títulos.

### Hierarchy
- **Display** (800, `clamp(38px,5.6vw,66px)`, 1.05): o H1 do hero — a única ocorrência desse tamanho. `line-height` 1.05 (não 1.02) dá espaço para os acentos do português (ç, ã, é) em peso 800 e para o título quebrar em 3–4 linhas sem colidir em telas estreitas.
- **Display Emphasis** (800, `clamp(32px,5vw,60px)`, 1.06): reservado aos dois momentos de virada da página — o H2 de "Nosso conceito" e o H2 da faixa de CTA final — deliberadamente maior que um Headline padrão, marcando esses dois pontos como picos emocionais (abertura de tese e fechamento), não apenas mais uma seção.
- **Headline** (700, `clamp(30px,4.2vw,52px)`, 1.06): título de toda seção principal padrão (Funcionalidades, Como funciona, Planos, FAQ, etc.).
- **Title** (700, 20px, 1.25, -0.02em): título de card — feature card, persona, plano, "Acompanhamento de desempenho", passo de "Como funciona". Valor único (não mais uma faixa 19–21px): os quatro papéis fazem o mesmo trabalho e agora usam o mesmo tamanho.
- **Body** (400, `clamp(16px,1.6vw,18px)`, 1.65): parágrafo de introdução de seção; limitado a ~580–720px de largura máxima por bloco.
- **Body Card** (400, 15px, 1.6): parágrafo de descrição dentro de card (feature, persona, plano, passo).
- **Label** (600, 13px, letter-spacing 0.14em, uppercase): o "kicker" que abre cada seção, sempre em Índigo Elétrico.
- **Caption** (500, 12px): rótulos secundários curtos — "Meu objetivo", legendas de estatística ("estudadas", "questões"), texto sob o título de depoimento.
- **Stat** (700, 21px, `font-variant-numeric: tabular-nums`): leituras numéricas — horas estudadas, questões, taxa de acerto. Números que podem ser comparados lado a lado usam algarismos tabulares para não desalinhar.

### Named Rules
**The Kicker Rule.** Toda seção principal abre com um rótulo pequeno, uppercase, com tracking largo (0.14em) e cor Índigo Elétrico, antes do título grande — é o único lugar do corpo de texto onde a cor de marca aparece como cor de texto corrida.

**The Tabular Reading Rule.** Todo número que representa uma leitura de progresso ou pode mudar dinamicamente (estatísticas do hero, anel de progresso, preço que alterna Mensal/Anual, "Xh de Yh") usa `font-variant-numeric: tabular-nums` — evita que os dígitos se desalinhem ou o layout pule ao trocar de valor.

## Layout

Container central com `max-width: 1180px` e padding horizontal responsivo `clamp(20px,4vw,32px)` — mesma régua em toda a página, do header ao footer. Ritmo vertical entre seções também é fluido: `clamp(72px,10vw,124px)` de padding top/bottom por seção, com seções alternando fundo Papel/Neblina para marcar transição sem precisar de borda pesada (quando há transição, é uma linha de 1px em `#E8EAF6`).

Grids usam `repeat(auto-fit, minmax(Npx, 1fr))` quase universalmente — o layout não tem breakpoints fixos declarados; ele flui de coluna única (mobile) até 2–4 colunas conforme o espaço disponível, sem media queries explícitas. O bloco de Funcionalidades usa um "bento grid": o primeiro card ocupa `grid-column: span 2` (double-width) e os demais são células simples — cria hierarquia visual sem precisar de tamanhos de fonte diferentes.

Cards internos usam gap típico de 10–20px entre irmãos; conteúdo interno usa 12–34px de padding dependendo do tamanho do card (chips pequenos ~13px, cards grandes de plano ~34px).

## Elevation & Depth

O sistema é de cards elevados sobre fundo plano — não há camadas tonais (tonal surfaces); a profundidade vem inteiramente de `box-shadow` grandes, difusas e sempre tingidas de marca (nunca preto neutro). É um padrão consistente hoje, tratado como convenção forte, não como regra travada (ver **The Tinted Shadow Rule** em Colors).

### Shadow Vocabulary
- **Card flutuante do hero** (`box-shadow: 0 40px 80px -40px rgba(0,3,102,.35)`): o card de dashboard mockup no hero — sombra ampla e muito suave, para parecer suspenso sobre o fundo.
- **Badge flutuante claro** (`box-shadow: 0 24px 44px -26px rgba(0,3,102,.4)`): o card "Revisão concluída" ancorado no canto do hero.
- **Badge flutuante escuro** (`box-shadow: 0 24px 44px -24px rgba(0,3,102,.6)`): o card "Meta da semana" (fundo Tinta Navy) — mesma receita, sombra um pouco mais forte por estar sobre fundo escuro.
- **CTA primário em repouso** (`box-shadow: 0 6px 18px -8px rgba(0,20,237,.7)` no header / `0 14px 30px -12px rgba(0,20,237,.75)` no hero): sombra tingida de Índigo Elétrico, curta e mais intensa — reforça "isto é clicável" mais do que "isto flutua".
- **Card em hover** (`box-shadow: 0 26px 50px -30px rgba(0,3,102,.35)`): cards de "para quem é" e feature cards ganham essa sombra ao passar o mouse, além de leve `translateY(-4px)`.
- **Card de plano Premium** (`box-shadow: 0 44px 80px -44px rgba(0,20,237,.75)`): a maior sombra do sistema, reservada ao card de maior prioridade comercial da página.

### Named Rules
**The Floating Card Rule.** Qualquer elemento pensado como "destacado" (hero mockup, badges de prova social, plano recomendado) recebe sombra grande e suave tingida de marca; elementos de suporte (chips, linhas de lista) ficam sem sombra e se apoiam só em borda de 1px.

## Shapes

Cantos generosamente arredondados em praticamente toda superfície — não existe canto reto deliberado no sistema. Escala aproximada: 8–14px em elementos pequenos (botões, ícones, chips), 16–22px em cards e blocos de seção, 999px (pill) em toggles, badges e tags, e círculo perfeito (50%) em avatares, dots de status e no anel de progresso do hero. Bordas, quando existem, são sempre 1px sólido em tom de Linha (`#E8EAF6`/`#E4E8F8`) — a única exceção é a lista "sem estrutura" (caminho ruim), que usa borda tracejada (`1px dashed #DFE3F1`) para marcar visualmente o lado "menos estruturado" da comparação antes/depois.

## Components

### Buttons
- **Shape:** raio 11–13px (não pill) — único grupo de botões retangular-arredondado do sistema, distinto do pill reservado a toggles/badges.
- **Primary:** fundo Índigo Elétrico, texto branco, `Plus Jakarta Sans` 700, padding `16px 30px` (hero) ou `11px 20px` (header); sombra tingida de Índigo Elétrico em repouso.
- **Hover:** fundo muda para Tinta Navy, sobe `-2px` (`translateY`), sombra cresce — transição `transform .18s, box-shadow .18s, background .18s`.
- **Secondary/Ghost:** fundo branco, borda 1px `#D5DAF0`, texto Tinta Navy; no hover a borda e o texto mudam para Índigo Elétrico, sem preencher o fundo.

### Pills (toggle e badges)
- **Style:** raio 999px; toggle mensal/anual usa fundo Índigo Elétrico + texto branco no estado ativo, transparente + texto Chumbo no inativo, dentro de um trilho `#F7F8FC` com borda `#E8EAF6`.
- **State:** badge "RECOMENDADO" usa fundo branco translúcido (`rgba(255,255,255,.14)`) sobre o card de plano escuro — a mesma forma pill, tratamento de cor adaptado ao fundo.

### Cards / Containers
- **Corner Style:** 18–22px de raio na maioria dos cards de conteúdo.
- **Background:** Papel (cards claros) ou gradiente Índigo Elétrico → Tinta Navy / só Tinta Navy (cards de destaque, ex. "com o Aprova Aê", plano Premium, bloco de Planejamento).
- **Shadow Strategy:** ver Elevation & Depth — cards de alta prioridade recebem sombra grande tingida de marca; cards de grade padrão ficam só com borda 1px em repouso e ganham sombra no hover.
- **Border:** 1px sólido `#E8EAF6`/`#E4E8F8` nos cards claros; cards escuros não usam borda, dependem do contraste de fundo.
- **Internal Padding:** escala com o tamanho do card via `clamp()` — de `13px` (chip de métrica pequeno) a `clamp(26px,3vw,34px)` (card de plano).

### Navigation
Header fixo (`position: sticky`) com fundo branco semitransparente e `backdrop-filter: blur(14px)`; links de navegação em Chumbo/Cinza-Nav (`#3D4661`) 500, mudando para Índigo Elétrico no hover, sem sublinhado. CTA do header é o único botão preenchido dentro do header, reforçando que é a única ação primária ali.

### Accordion (FAQ)
- **Style:** cada item é um card com borda 1px, cantos 16px; botão de pergunta ocupa a largura toda, ícone "+" em box 26×26px com fundo Neblina que gira 45° (virando "×") e ganha fundo Índigo Tinta Clara quando aberto.

### Hero Dashboard Mockup (signature component)
O elemento mais distintivo do sistema: um card branco simulando o painel real do produto — anel de progresso cônico em Índigo Elétrico, mini-calendário semanal em barras coloridas por intensidade de estudo, e dois badges "flutuantes" ancorados fora do card (um claro com float animado em loop, um escuro estático). É o único lugar da página que mistura dado fictício, cor de marca e movimento contínuo ao mesmo tempo — funciona como prova visual do produto sem precisar de screenshot real.

## Do's and Don'ts

### Do:
- **Do** usar Índigo Elétrico (`#0014ED`) só para ação/link/progresso e Tinta Navy (`#000366`) para títulos e âncoras escuras — nunca inverter os papéis.
- **Do** tingir toda sombra de navy ou índigo (`rgba(0,3,102,..)` / `rgba(0,20,237,..)`); nunca usar sombra preta neutra.
- **Do** abrir toda seção principal com o kicker uppercase em Índigo Elétrico antes do título grande (**The Kicker Rule**).
- **Do** arredondar generosamente — 8–14px em componentes pequenos, 16–22px em cards, pill em toggles/badges, círculo em avatares e dots.
- **Do** animar a entrada de blocos ao rolar (`data-reveal`, fade + `translateY(20px)→0`, `.7s cubic-bezier(.16,1,.3,1)`) — é parte da identidade, não um extra opcional.

### Don't:
- **Don't** usar verde fora de contexto de confirmação/sucesso — hoje ele só aparece em check de conclusão, taxa de acerto positiva e benefício exclusivo Premium.
- **Don't** preencher uma seção inteira com Índigo Elétrico puro — as únicas superfícies de cor sólida em toda a página são Tinta Navy (fundos escuros) ou gradientes Índigo→Navy; índigo puro fica reservado a texto, ícone e elementos pequenos.
- **Don't** usar borda tracejada fora do contexto "antes/estado sem estrutura" — é um sinal visual reservado para marcar o lado fraco de uma comparação.
- **Don't** misturar a família de botão retangular-arredondado (11–13px) com a família pill (999px) no mesmo tipo de componente — pill é exclusivo de toggle/badge/tag.
