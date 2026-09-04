# QUADRO — card flutuante do Hero

Backup do "quadro" (card do dashboard + os dois badges flutuantes) que fica ao lado
do texto na Hero section. Guardado aqui para não perder caso ele seja removido ou
alterado sem querer em [src/components/Hero.jsx](src/components/Hero.jsx).

## Onde ele vive hoje

Dentro de `Hero.jsx`, é a `<div ref={bootRef} data-reveal data-hero-boot>` — o segundo
filho do container flex da hero (o primeiro é o bloco de texto). Depende de:

- `heroDias` — importado de [src/data/content.js](src/data/content.js) (os 7 dias da semana do mini-calendário).
- `useReveal` — hook de [src/hooks/useReveal.js](src/hooks/useReveal.js) (anima a entrada e dispara o "boot sequence": anel, células, contadores e badges).
- Classes CSS `.aa-graticule`, `.aa-ring`, `.aa-boot-cell`, `.aa-boot-stat`,
  `.aa-boot-badge`, `.aa-float`, `.aa-check-pop` — definidas em [src/index.css](src/index.css).
- Os contadores (`36h`, `1.240`, `+14%`) usam os atributos `data-count-to` /
  `data-count-prefix` / `data-count-suffix` / `data-count-delay` / `data-count-grouped`,
  lidos pelo `useReveal.js` para animar a contagem quando o card entra na tela.

## Código completo do bloco

```jsx
<div ref={bootRef} data-reveal data-hero-boot className="relative w-full max-w-[660px] lg:max-w-[560px] mx-auto lg:mx-0 shrink-0">
  <div className="relative z-0 bg-white border border-line-light rounded-[22px] p-6 shadow-[0_40px_80px_-40px_rgba(0,3,102,.35)] overflow-hidden">
    <span className="aa-graticule" aria-hidden="true" />
    <div className="flex items-center justify-between mb-5">
      <div>
        <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-body-accessible">Meu objetivo</div>
        <div className="font-display font-bold text-[19px] text-navy mt-1">Concurso · Prova em 148 dias</div>
      </div>
      <div
        className="aa-ring w-16 h-16 rounded-full grid place-items-center shrink-0"
        style={{ '--aa-progress': '0.68turn', background: 'conic-gradient(#0014ED var(--aa-progress), #E8EAF6 var(--aa-progress) 1turn)' }}
      >
        <span className="w-12 h-12 rounded-full bg-white grid place-items-center font-display font-bold text-[15px] tabular-nums text-navy">68%</span>
      </div>
    </div>

    <div className="grid grid-cols-7 gap-1.5 mb-5.5">
      {heroDias.map((dia, i) => (
        <div key={i} className="text-center">
          <div className="text-[11px] text-body-accessible mb-1.5">{dia.label}</div>
          <div
            className="aa-boot-cell h-11 rounded-lg grid place-items-end justify-items-center pb-1.5 text-[11px] font-semibold tabular-nums"
            style={{ background: dia.bg, color: dia.fg, animationDelay: dia.delay }}
          >
            {dia.h}
          </div>
        </div>
      ))}
    </div>

    <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(96px, 100%), 1fr))' }}>
      <div className="aa-boot-stat bg-mist rounded-[13px] p-3.5" style={{ animationDelay: '1s' }}>
        <div data-count-to="36" data-count-suffix="h" data-count-delay="1" className="font-display font-bold text-[21px] tabular-nums text-navy">36h</div>
        <div className="text-[12px] text-body-accessible mt-0.5">estudadas</div>
      </div>
      <div className="aa-boot-stat bg-mist rounded-[13px] p-3.5" style={{ animationDelay: '1.12s' }}>
        <div data-count-to="1240" data-count-grouped="true" data-count-delay="1.12" className="font-display font-bold text-[21px] tabular-nums text-navy">1.240</div>
        <div className="text-[12px] text-body-accessible mt-0.5">questões</div>
      </div>
      <div className="aa-boot-stat bg-mist rounded-[13px] p-3.5" style={{ animationDelay: '1.24s' }}>
        <div data-count-to="14" data-count-prefix="+" data-count-suffix="%" data-count-delay="1.24" className="font-display font-bold text-[21px] tabular-nums text-green">+14%</div>
        <div className="text-[12px] text-body-accessible mt-0.5">acertos</div>
      </div>
    </div>
  </div>

  <div className="aa-float bg-white border border-line-light rounded-2xl px-4.5 py-3.5 shadow-[0_24px_44px_-26px_rgba(0,3,102,.4)] flex items-center gap-3 [animation:aa-float_6s_ease-in-out_infinite] max-w-[calc(100%-32px)]">
    <span className="aa-check-pop [animation-delay:1.65s] w-8.5 h-8.5 rounded-[10px] bg-green-bg grid place-items-center">
      <span className="block w-[11px] h-[6px] border-l-[2.4px] border-b-[2.4px] border-green [transform:rotate(-45deg)_translate(1px,-2px)]" />
    </span>
    <div>
      <div className="font-display font-bold text-[14px] text-graphite">Revisão concluída</div>
      <div className="text-[12px] text-body-accessible">Direito Constitucional</div>
    </div>
  </div>

  <div className="aa-boot-badge bg-navy text-white rounded-[14px] px-4 py-3 shadow-[0_24px_44px_-24px_rgba(0,3,102,.6)] max-w-[calc(100%-32px)]">
    <div className="text-[11px] tracking-[0.12em] uppercase opacity-60">Meta da semana</div>
    <div className="font-display font-bold text-[15px] tabular-nums mt-0.5">18h de 22h</div>
  </div>
</div>
```

## Dados de que ele depende (`heroDias`)

```js
export const heroDias = [
  { label: 'S', h: '2h', bg: '#EEF1FF', fg: '#0014ED', delay: '.6s' },
  { label: 'T', h: '3h', bg: '#DDE3FF', fg: '#0014ED', delay: '.66s' },
  { label: 'Q', h: '2h', bg: '#EEF1FF', fg: '#0014ED', delay: '.72s' },
  { label: 'Q', h: '4h', bg: '#0014ED', fg: '#FFFFFF', delay: '.78s' },
  { label: 'S', h: '1h', bg: '#F2F4FB', fg: '#5E6D93', delay: '.84s' },
  { label: 'S', h: '5h', bg: '#000366', fg: '#FFFFFF', delay: '.9s' },
  { label: 'D', h: '—', bg: '#F7F8FC', fg: '#5E6D93', delay: '.96s' },
];
```

## Como restaurar se for perdido

1. Em `Hero.jsx`, garanta que `heroDias` está importado de `../data/content` e que
   existe um `const bootRef = useReveal();`.
2. Cole o JSX da seção "Código completo do bloco" acima no lugar onde o quadro deve
   aparecer.
3. Confirme que `src/index.css` ainda tem as classes `.aa-graticule`, `.aa-ring`,
   `.aa-boot-cell`, `.aa-boot-stat`, `.aa-boot-badge`, `.aa-float`, `.aa-check-pop`
   (incluindo o bloco `@media (max-width: 1024px)` que reposiciona os dois badges
   para não sobrepor o card em telas menores, e o `[data-hero-boot]{margin-top:70px!important}`
   que abre espaço para o badge "Meta da semana" nesse mesmo breakpoint).
4. Rode `npm run dev` e confira visualmente: anel de progresso preenchendo, células
   do calendário aparecendo em sequência, contadores subindo (36h / 1.240 / +14%) e
   os dois badges flutuantes sem sobrepor o conteúdo do card.
