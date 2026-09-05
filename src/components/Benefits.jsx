import { useCountUp, useInView } from '../hooks/useInView';

const CARD = 'rounded-[14px] border border-line bg-paper p-4';
const LABEL = 'font-display text-[10px] font-semibold uppercase tracking-[0.07em] text-label-gray';
const NUM = 'font-display font-extrabold tabular-nums';
const TRACK = 'overflow-hidden rounded-sm bg-line';
const GRID_LINE = 'rgba(0,3,102,0.07)';

const tags = [
  { label: 'Organização', cor: '#0014ED' },
  { label: 'Clareza', cor: '#7C3AED' },
  { label: 'Consistência', cor: '#B45309' },
  { label: 'Controle', cor: '#0E9F6E' },
  { label: 'Estratégia', cor: '#0014ED' },
  { label: 'Evolução', cor: '#7C3AED' },
  { label: 'Menos improviso', cor: '#0E9F6E' },
];

function CalendarWidget({ active }) {
  const slots = [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1];
  const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className={`${CARD} col-span-3 sm:col-span-2`}>
      <div className="mb-3 flex items-center justify-between">
        <span className={LABEL}>Setembro 2025</span>
        <span className={`${NUM} text-[10px] text-indigo`}>Hoje: 18</span>
      </div>
      <div className="grid grid-cols-7 gap-[3px]">
        {dias.map((d, i) => (
          <div key={i} className="pb-[3px] text-center text-[9px] text-dim-gray">{d}</div>
        ))}
        {slots.map((on, i) => (
          <div
            key={i}
            data-in={active || undefined}
            className={`${NUM} flex h-5 scale-75 items-center justify-center rounded border text-[9px] opacity-0 transition-[opacity,transform] duration-300 data-in:scale-100 data-in:opacity-100 ${
              on ? 'border-indigo/30 bg-indigo/12 text-navy' : 'border-line bg-empty-cell text-dim-gray'
            }`}
            style={{ transitionDelay: `${0.05 + i * 0.015}s` }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function StreakWidget({ active }) {
  const streak = useCountUp(23, active, 400);

  return (
    <div className={`${CARD} col-span-3 flex flex-col items-center justify-center text-center sm:col-span-1`}>
      <div
        data-in={active || undefined}
        className={`${NUM} text-[36px] leading-none text-amber opacity-0 transition-opacity duration-500 data-in:opacity-100`}
        style={{ transitionDelay: '0.3s' }}
      >
        {streak}
      </div>
      <div
        data-in={active || undefined}
        className="mt-1 text-[11px] text-lead opacity-0 transition-opacity duration-500 data-in:opacity-100"
        style={{ transitionDelay: '0.5s' }}
      >
        dias seguidos
      </div>
      <div
        data-in={active || undefined}
        className="mt-2.5 flex gap-[3px] opacity-0 transition-opacity duration-500 data-in:opacity-100"
        style={{ transitionDelay: '0.6s' }}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`size-2 rounded-sm ${i < 6 ? 'bg-amber' : 'bg-line'}`} />
        ))}
      </div>
      <div
        data-in={active || undefined}
        className="mt-1.5 font-display text-[9px] font-semibold text-amber opacity-0 transition-opacity duration-500 data-in:opacity-100"
        style={{ transitionDelay: '0.7s' }}
      >
        Consistência
      </div>
    </div>
  );
}

function DisciplineWidget({ active }) {
  const discs = [
    { nome: 'Português', pct: 88, cor: '#0014ED' },
    { nome: 'Dir. Constitucional', pct: 74, cor: '#7C3AED' },
    { nome: 'Matemática', pct: 66, cor: '#0E9F6E' },
    { nome: 'Dir. Administrativo', pct: 52, cor: '#B45309' },
  ];

  return (
    <div className={`${CARD} col-span-3`}>
      <div className="mb-3 flex justify-between">
        <span className={LABEL}>Desempenho por disciplina</span>
        <span className="text-[10px] text-dim-gray">Este mês</span>
      </div>
      {discs.map((d, i) => (
        <div
          key={d.nome}
          data-in={active || undefined}
          className={`opacity-0 transition-opacity duration-[400ms] data-in:opacity-100 ${i < discs.length - 1 ? 'mb-2.5' : ''}`}
          style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
        >
          <div className="mb-1 flex justify-between">
            <span className="text-[10px] text-body-muted">{d.nome}</span>
            <span className={`${NUM} text-[10px]`} style={{ color: d.cor }}>{d.pct}%</span>
          </div>
          <div className={`h-[3px] ${TRACK}`}>
            <div
              className="h-full rounded-sm transition-[width] duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)]"
              style={{ background: d.cor, width: active ? `${d.pct}%` : '0%', transitionDelay: `${0.3 + i * 0.1}s` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniChartWidget({ active }) {
  const pontos = [[0, 60], [20, 52], [40, 45], [60, 38], [80, 25], [100, 18], [120, 10]];
  const linha = pontos.map(([x, y]) => `${x},${y}`).join(' ');

  return (
    <div className={`${CARD} col-span-3 sm:col-span-1`}>
      <div className="mb-2.5 flex items-start justify-between">
        <span className={LABEL}>Curva de acerto</span>
        <span className={`${NUM} text-[10px] text-green`}>↑ 18%</span>
      </div>
      <svg viewBox="0 0 120 65" className="h-[50px] w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="aa-ben-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E9F6E" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0E9F6E" stopOpacity="0" />
          </linearGradient>
          <clipPath id="aa-ben-clip">
            <rect
              x="0"
              y="0"
              width="120"
              height="65"
              style={{
                transform: active ? 'none' : 'translateX(-120px)',
                transition: 'transform 1s cubic-bezier(.4,0,.2,1) .3s',
              }}
            />
          </clipPath>
        </defs>
        {[20, 40, 60].map((y) => (
          <line key={y} x1="0" y1={y} x2="120" y2={y} stroke={GRID_LINE} strokeWidth="1" />
        ))}
        <polygon points={`0,65 ${linha} 120,65`} fill="url(#aa-ben-grad)" clipPath="url(#aa-ben-clip)" />
        <polyline points={linha} fill="none" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#aa-ben-clip)" />
      </svg>
    </div>
  );
}

function TasksWidget({ active }) {
  const tarefas = [
    { label: 'Revisão: Direito Penal', feito: true },
    { label: '30 questões de Matemática', feito: true },
    { label: 'Simulado semestral', feito: false, tag: 'Hoje' },
    { label: 'Redação ENEM', feito: false },
  ];

  return (
    <div className={`${CARD} col-span-3 sm:col-span-2`}>
      <span className={`${LABEL} mb-2.5 block`}>Próximas atividades</span>
      {tarefas.map((t, i) => (
        <div
          key={i}
          data-in={active || undefined}
          className={`flex -translate-x-2 items-center gap-2 py-[7px] opacity-0 transition-[opacity,transform] duration-[350ms] data-in:translate-x-0 data-in:opacity-100 ${i < tarefas.length - 1 ? 'border-b border-hairline' : ''}`}
          style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
        >
          <span
            className={`flex size-3.5 shrink-0 items-center justify-center rounded border ${t.feito ? 'border-green bg-green/15' : 'border-outline'}`}
          >
            {t.feito && (
              <svg viewBox="0 0 10 10" className="size-2 text-green" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M1.5 5.2 4 7.5 8.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span className={`flex-1 text-[10px] ${t.feito ? 'text-dim-gray line-through' : 'text-body-muted'}`}>{t.label}</span>
          {t.tag && (
            <span className="font-display rounded-full bg-indigo-tint px-1.5 py-0.5 text-[9px] font-semibold text-indigo">{t.tag}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function NotifWidget({ active }) {
  return (
    <div className={`${CARD} col-span-3 flex items-start gap-2.5`}>
      <span
        data-in={active || undefined}
        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-violet/25 bg-violet/10 opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
        style={{ transitionDelay: '0.5s' }}
      >
        <svg viewBox="0 0 16 16" className="size-3.5 text-violet" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 1.5v1.2M2.8 3.3l.9.9M13.2 3.3l-.9.9M8 10.5V13m-2 1.2h4" strokeLinecap="round" />
          <circle cx="8" cy="7" r="3.2" />
        </svg>
      </span>
      <div
        data-in={active || undefined}
        className="opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
        style={{ transitionDelay: '0.6s' }}
      >
        <div className="mb-[3px] font-display text-[11px] font-semibold text-navy">Sugestão do sistema</div>
        <div className="text-[10px] leading-[1.5] text-lead">
          Você tem <span className="font-display font-semibold text-violet">3 revisões atrasadas</span> em Dir. Constitucional. Ajuste sua rotina para cobrir antes da prova.
        </div>
      </div>
    </div>
  );
}

export default function Benefits() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[linear-gradient(180deg,#F6F8FF_0%,#ECF0FC_35%,#F6F8FF_70%,#ECF0FC_100%)] pt-[100px] pb-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <div
              data-in={inView || undefined}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/8 px-3 py-[5px] opacity-0 transition-opacity duration-500 data-in:opacity-100"
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="size-[5px] rounded-full bg-violet" />
              <span className="font-display text-[13px] font-semibold tracking-[0.08em] uppercase text-violet">Benefícios</span>
            </div>

            <h2
              data-in={inView || undefined}
              className="mb-6 font-display text-[clamp(30px,4.2vw,52px)] leading-[1.06] font-bold tracking-[-0.035em] text-navy opacity-0 translate-y-5 transition-[opacity,transform] duration-[600ms] data-in:translate-y-0 data-in:opacity-100"
              style={{ transitionDelay: '0.2s' }}
            >
              Você não precisa
              <br />
              <span className="text-neutral-gray">estudar no escuro.</span>
            </h2>

            <p
              data-in={inView || undefined}
              className="mb-4 max-w-[400px] text-[clamp(16px,1.6vw,18px)] leading-[1.7] text-lead opacity-0 translate-y-4 transition-[opacity,transform] duration-[600ms] data-in:translate-y-0 data-in:opacity-100"
              style={{ transitionDelay: '0.35s' }}
            >
              Saiba onde você está, entenda sua evolução e tenha clareza sobre o próximo passo.
            </p>

            <div className="mb-9 flex flex-wrap gap-2">
              {tags.map((b, i) => (
                <span
                  key={b.label}
                  data-in={inView || undefined}
                  className="translate-y-2 rounded-full bg-paper px-3 py-[5px] text-[13px] text-body-muted opacity-0 transition-[opacity,transform] duration-[400ms] data-in:translate-y-0 data-in:opacity-100"
                  style={{
                    border: `1px solid ${b.cor}33`,
                    transitionDelay: `${0.5 + i * 0.05}s`,
                  }}
                >
                  <span className="mr-1 font-display font-bold" style={{ color: b.cor }}>+</span>
                  {b.label}
                </span>
              ))}
            </div>

            <a
              href="#cta"
              data-in={inView || undefined}
              className="inline-block translate-y-3 rounded-xl bg-indigo px-6.5 py-3.5 font-display text-[16px] font-bold text-white opacity-0 shadow-[0_4px_24px_rgba(0,20,237,0.25)] transition-all duration-500 hover:bg-navy hover:shadow-[0_8px_32px_rgba(0,20,237,0.35)] active:scale-[0.96] data-in:translate-y-0 data-in:opacity-100"
              style={{ transitionDelay: '0.7s' }}
            >
              Começar agora
            </a>
          </div>

          <div
            data-in={inView || undefined}
            className="grid translate-y-7 grid-cols-3 gap-2.5 opacity-0 transition-[opacity,transform] duration-700 data-in:translate-y-0 data-in:opacity-100"
            style={{ transitionDelay: '0.3s' }}
          >
            <CalendarWidget active={inView} />
            <StreakWidget active={inView} />
            <DisciplineWidget active={inView} />
            <MiniChartWidget active={inView} />
            <TasksWidget active={inView} />
            <NotifWidget active={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
