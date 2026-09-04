# Handoff — Aprova Aê

Resumo do que foi feito nesta sessão, para continuar em outro chat do Claude Code.
Data: 2026-09-04.

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

Estrutura completa e "onde editar o quê" já documentados em [README.md](README.md) —
consulte lá para detalhes de arquivos. Design system (cores, tipografia, componentes,
regras de uso) documentado em [DESIGN.md](DESIGN.md); contexto de produto/audiência em
[PRODUCT.md](PRODUCT.md).

## O que foi feito, em ordem

1. **Organização inicial.** O projeto começou como um único `index.html` estático
   rodando num runtime "DC" customizado (não editável à mão). Foi analisado, testado
   localmente e confirmado funcionando — nenhuma alteração de conteúdo/design nessa
   etapa.

2. **Responsividade (`/impeccable adapt`).** Corrigido um bug real: os dois badges
   flutuantes do card do hero ("Meta da semana" e "Revisão concluída") sobrepunham
   dados do card (anel de progresso, estatística "+14%") em telas ≤1024px. Corrigido
   reancorando os badges para fora do card nesse breakpoint.

3. **Microinterações (`/impeccable animate`).** Consertado um bug de motion mais sério:
   o "boot sequence" do hero (anel de progresso, células do calendário, contadores,
   badges) tocava a animação assim que a página carregava, não quando o usuário
   rolava até o card — então em qualquer viewport onde o card não estivesse
   imediatamente visível, a animação já tinha terminado antes de ser vista. Corrigido
   pausando as animações via CSS e retomando-as via JS exatamente no momento do
   reveal. Também adicionado leve stagger em grupos de cards (personas, recursos,
   depoimentos, benefícios) e stagger no crescimento das barras do gráfico.

4. **Conversão para React + Vite + Tailwind.** Reescrita completa do site em
   componentes React (`src/components/*.jsx`), preservando 100% do texto, cores,
   layout e comportamento. Todo o conteúdo dinâmico centralizado em
   `src/data/content.js`. A animação de reveal-on-scroll e o "boot sequence" viraram
   o hook `src/hooks/useReveal.js` (usa um único `IntersectionObserver` compartilhado
   + stagger por grupo de irmãos). A versão HTML antiga foi preservada em
   `legacy-static/` só como referência histórica (não é servida).

   **Bug real encontrado e corrigido durante a conversão:** uma regra CSS global
   `a { color: ... }` estava fora de `@layer`, e CSS não-camadado sempre vence sobre
   `@layer utilities` do Tailwind — isso fazia `text-white` não funcionar em nenhum
   link/botão (texto do CTA ficava invisível, mesma cor do fundo). Corrigido
   envolvendo os estilos base em `@layer base` no `src/index.css`.

5. **Hero: layout lado a lado.** A pedido do usuário, a partir de 1024px (`lg:`) o
   texto ficou alinhado à esquerda com o card flutuante ao lado direito, e o conjunto
   inteiro centralizado horizontalmente na seção. Abaixo de 1024px continua empilhado
   e centralizado como antes.

6. **[QUADRO.md](QUADRO.md).** Backup do código do card flutuante do hero (JSX +
   dados `heroDias` + classes CSS envolvidas + passo a passo de restauração), a
   pedido do usuário, "para não perder" esse bloco.

7. **`/impeccable overdrive` no Hero — profundidade com parallax.** Apresentei 3
   direções, o usuário escolheu "Instrumento com Profundidade": no desktop
   (`hover:hover` + `pointer:fine`), o card do hero segue o cursor com uma leve
   inclinação 3D (`useTiltParallax.js`) + um brilho direcional sutil simulando luz
   num vidro de instrumento; os dois badges flutuantes se deslocam numa profundidade
   levemente diferente do card (via propriedade `translate`, independente de
   `transform`, pra não conflitar com as animações que já existiam neles). Em touch
   ou com `prefers-reduced-motion: reduce`, só um assentamento 3D único na entrada,
   sem parallax contínuo. Tudo compositor-only (transform/translate/opacity).

8. **Fundo do Hero.** Apresentei 3 opções, usuário escolheu a mais simples: um
   segundo brilho radial em Tinta Navy no canto inferior-esquerdo, formando o mesmo
   eixo diagonal índigo→navy já usado em outros cards do site (Posicionamento, CTA,
   plano Premium). Estático, sem animação.

9. **Instalação de plugin.** `claude plugin install frontend-design@claude-plugins-official`
   instalado (escopo: user). Sessão reiniciada para carregá-lo.

10. **Crítica de design (`/impeccable critique`) — cancelada.** Dois sub-agentes
    (revisão de design + detector/evidência de browser) foram disparados em paralelo
    mas **cancelados pelo usuário antes de terminar** — nenhum relatório foi gerado.
    Se quiser rodar de novo, é só pedir `/impeccable critique`.

11. **Logo oficial.** Usuário anexou a logo real do app (`aprovaê`, wordmark azul com
    checkmark). Removido o fundo branco (script Python/Pillow com transparência
    progressiva, sem halo) e salvo em `public/logo-aprova-ae.png`. Aplicada no
    **Header** e no **Footer**, substituindo o ícone+texto que tinha sido construído
    do zero. Decisão deliberada de **não** colocar no Hero, pra não competir com o
    H1 por atenção.

12. **Mais cores nas personas.** Apresentei 3 escopos, usuário escolheu o mais
    contido: as 6 personas da seção "Para quem é" (Concursos Públicos, Vestibular &
    ENEM, Medicina, OAB, Certificações, Provas acadêmicas) ganharam cada uma sua
    própria cor de destaque no ícone (teal, violeta, rosa, âmbar, azul-céu,
    terracota — nenhuma reaproveitando índigo/navy, pra nenhuma categoria parecer
    "mais importante" que as outras, conforme o PRODUCT.md já pede). Resto do site
    (CTAs, títulos, hero) continua só em índigo/navy. Cores em `src/data/content.js`
    (campos `cor`/`fundo` no array `publicos`), aplicadas em `Audience.jsx`.

## Padrões e decisões que valem lembrar

- **Antes de mudanças visuais amplas ou arriscadas**, o padrão desta sessão foi
  apresentar 2-3 direções com prós/contras e deixar o usuário escolher (via pergunta
  estruturada), não implementar direto. Isso funcionou bem e o usuário se acostumou
  com esse fluxo.
- **DESIGN.md tem regras nomeadas que devem ser respeitadas** ao adicionar qualquer
  coisa nova: "The Tinted Shadow Rule" (sombras sempre tingidas de navy/índigo, nunca
  preto neutro), "The Rare Green Rule" (verde só pra sucesso/confirmação), "The
  Kicker Rule" (todo título de seção abre com rótulo pequeno uppercase em índigo).
- **`/impeccable` hook de design** roda automaticamente após editar arquivos de UI e
  aponta ~6 achados recorrentes de `font-size` fora do type ramp documentado (17px,
  14px, 11px em botões/legendas). São **pré-existentes desde a página original**,
  não foram introduzidos por nenhuma mudança desta sessão — o usuário já decidiu
  deixá-los como estão (não rodar `/impeccable audit` neles por enquanto).
- Este projeto **não é um repositório git** — não há como desfazer com `git revert`.
  Qualquer limpeza/remoção deve ser feita com cautela.
- A ferramenta de browser deste ambiente teve instabilidade recorrente com
  screenshots (retornando frames antigos/em branco) durante toda a sessão — quando
  isso acontecer, prefira inspecionar o DOM via JS (`getComputedStyle`, etc.) em vez
  de insistir em screenshots.

## Possíveis próximos passos (não pedidos ainda, só ideias que surgiram)

- Rodar `/impeccable audit` para revisar os achados de font-size fora do ramp, se o
  usuário quiser.
- Rodar `/impeccable critique` de novo (foi cancelado antes de terminar).
- Nenhum backend/autenticação existe — os CTAs "Começar agora" não levam a lugar
  nenhum além de âncoras internas; isso é uma decisão de escopo conhecida, não um bug.
