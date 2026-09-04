# Aprova Aê — Landing Page

Landing page da plataforma Aprova Aê. React + Vite + Tailwind CSS.

## Estrutura

```
aprovae/
├─ index.html                 ← shell HTML (Vite injeta o bundle aqui)
├─ src/
│  ├─ main.jsx                ← ponto de entrada React
│  ├─ App.jsx                 ← composição da página (ordem das seções)
│  ├─ index.css               ← Tailwind + tokens de design + animações-assinatura
│  ├─ styles.js                ← classes utilitárias compartilhadas (container, spacing)
│  ├─ data/
│  │  └─ content.js           ← todo o conteúdo dinâmico (FAQ, planos, personas, etc.)
│  ├─ hooks/
│  │  └─ useReveal.js         ← animação de entrada ao rolar (IntersectionObserver)
│  └─ components/
│     ├─ Header.jsx           ← nav + menu mobile
│     ├─ Hero.jsx             ← hero + card "boot sequence" (anel, contadores, badges)
│     ├─ Positioning.jsx      ← comparação "sem estrutura" vs "com o Aprova Aê"
│     ├─ Audience.jsx         ← "Para quem é" (personas)
│     ├─ Features.jsx         ← bento grid de funcionalidades + gráfico de barras
│     ├─ HowItWorks.jsx       ← "Como funciona" (4 passos)
│     ├─ Benefits.jsx         ← lista de benefícios
│     ├─ Concept.jsx          ← seção escura "Nosso conceito"
│     ├─ Pricing.jsx          ← planos (toggle mensal/anual)
│     ├─ Testimonials.jsx     ← depoimentos (placeholder)
│     ├─ Faq.jsx              ← accordion de perguntas frequentes
│     ├─ Cta.jsx              ← CTA final
│     └─ Footer.jsx
├─ public/
│  └─ favicon.svg
├─ legacy-static/             ← versão HTML estática anterior, mantida como referência
├─ vite.config.js
├─ package.json
├─ DESIGN.md                  ← design system (cores, tipografia, componentes)
├─ PRODUCT.md                 ← contexto de produto
└─ README.md
```

## Como rodar localmente

Requer [Node.js](https://nodejs.org) (18+) instalado.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente <http://localhost:5173>).

Outros comandos:

```bash
npm run build      # gera a versão de produção em dist/
npm run preview    # serve a build de produção localmente, para conferir antes de publicar
npm run lint        # checa o código com oxlint
```

## Onde editar o quê

| Quero mudar…                                     | Onde                                      |
| -------------------------------------------------- | ------------------------------------------ |
| Textos de listas (FAQ, planos, público, passos)     | `src/data/content.js`                      |
| Layout, cores, espaçamentos de uma seção            | o componente correspondente em `src/components/` |
| Cores, fontes e tokens do design system             | `@theme` em `src/index.css`                |
| Comportamento (toggle mensal/anual, FAQ, menu)      | `useState`/handlers dentro do próprio componente |
| Animação de entrada ao rolar                        | `src/hooks/useReveal.js`                   |

## Design system

As cores, tipografia e regras de uso estão documentadas em [DESIGN.md](DESIGN.md) e
espelhadas nos tokens `@theme` de `src/index.css` (`bg-indigo`, `text-navy`, `bg-mist`,
etc.) — use essas classes utilitárias em vez de valores de cor soltos ao criar algo novo.

## Observações

- Os valores dos planos (`R$ 24` / `R$ 34`) são placeholders, conforme o próprio
  texto da seção indica.
- Não há backend: todos os CTAs são âncoras internas (`#cta`, `#planos`, `#top`).
- `legacy-static/` guarda a versão anterior (HTML único, sem build) apenas como
  referência histórica — não é servida nem importada pelo app React.
