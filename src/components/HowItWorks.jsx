import { passos } from '../data/content';
import { useCountUp, useInView } from '../hooks/useInView';

const CARD = 'w-full rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md';
const LABEL = 'font-display text-[11px] font-semibold uppercase tracking-[0.02em] text-white/40';
const RISE = 'opacity-0 translate-y-2 transition-[opacity,transform] duration-[400ms] data-in:opacity-100 data-in:translate-y-0';
const NUM = 'font-display font-extrabold tabular-nums';

const ACCENTS = ['#0014ED', '#7C3AED', '#0E9F6E', '#B45309'];

function GoalMockup({ active }) {
  const objetivos = [
    { label: 'ENEM', cor: '#7C3AED' },
    { label: 'Concurso', cor: '#0014ED', ativo: true },
    { label: 'OAB', cor: '#0E9F6E' },
    { label: 'Residência', cor: '#B45309' },
  ];

  return (
    <div className={CARD}>
      <p className={`${LABEL} mb-0.5`}>Qual é seu objetivo?</p>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        {objetivos.map((g, i) => (
          <div
            key={g.label}
            data-in={active || undefined}
            className={`${RISE} flex items-center gap-[5px] rounded-lg px-2.5 py-2 text-[11px]`}
            style={{
              border: `1px solid ${g.ativo ? g.cor : 'rgba(255,255,255,0.08)'}`,
              background: g.ativo ? `${g.cor}22` : 'rgba(255,255,255,0.03)',
              color: g.ativo ? '#fff' : 'rgba(255,255,255,0.45)',
              fontWeight: g.ativo ? 600 : 400,
              transitionDelay: `${0.15 + i * 0.09}s`,
            }}
          >
            {g.ativo && <span className="size-1.5 shrink-0 rounded-full" style={{ background: g.cor }} />}
            {g.label}
          </div>
        ))}
      </div>
      <div
        data-in={active || undefined}
        className={`${RISE} mt-2.5 flex items-center justify-between rounded-lg border border-indigo/25 bg-indigo/10 px-3 py-2`}
        style={{ transitionDelay: '0.55s' }}
      >
        <span className="text-[10px] text-white/50">Prova estimada</span>
        <span className={`${NUM} text-[11px] text-indigo`}>Nov 2025</span>
      </div>
    </div>
  );
}

function ScheduleMockup({ active }) {
  const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  const linhas = [
    { nome: 'Port.', cor: '#0014ED', slots: [1, 0, 1, 0, 1] },
    { nome: 'Mat.', cor: '#7C3AED', slots: [0, 1, 0, 1, 0] },
    { nome: 'Hist.', cor: '#B45309', slots: [1, 0, 0, 1, 1] },
  ];

  return (
    <div className={CARD}>
      <p className={`${LABEL} mb-0.5`}>Rotina estruturada</p>
      <div className="mt-2.5 overflow-hidden">
        <div className="mb-1 flex gap-1 pl-[38px]">
          {dias.map((d) => (
            <div key={d} className="flex-1 text-center text-[9px] text-white/35">{d}</div>
          ))}
        </div>
        {linhas.map((linha, ri) => (
          <div key={linha.nome} className="mb-1 flex items-center gap-1">
            <div className="w-[34px] shrink-0 text-[9px] text-white/50">{linha.nome}</div>
            {linha.slots.map((on, ci) => (
              <div
                key={ci}
                data-in={active || undefined}
                className="h-5 flex-1 origin-bottom scale-y-[0.2] rounded opacity-0 transition-[opacity,transform] duration-300 data-in:scale-y-100 data-in:opacity-100"
                style={{
                  background: on ? `${linha.cor}35` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${on ? `${linha.cor}50` : 'rgba(255,255,255,0.06)'}`,
                  transitionDelay: `${0.1 + (ri * 5 + ci) * 0.035}s`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        data-in={active || undefined}
        className="mt-2 text-[10px] text-white/40 opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
        style={{ transitionDelay: '0.75s' }}
      >
        <span className={`${NUM} text-green`}>12h / semana</span> distribuídas automaticamente
      </div>
    </div>
  );
}

function StudyMockup({ active }) {
  const materias = [
    { nome: 'Português', pct: 85, cor: '#0014ED' },
    { nome: 'Matemática', pct: 72, cor: '#7C3AED' },
    { nome: 'Dir. Adm.', pct: 61, cor: '#B45309' },
  ];
  const questoes = useCountUp(24, active, 500);
  const revisoes = useCountUp(3, active, 700);

  return (
    <div className={CARD}>
      <div className="flex items-center justify-between">
        <p className={LABEL}>Hoje</p>
        <span className={`${NUM} flex items-center gap-1 text-[10px] text-green`}>
          <span className="size-1.5 animate-pulse rounded-full bg-green" />
          Ao vivo
        </span>
      </div>
      {materias.map((s, i) => (
        <div
          key={s.nome}
          data-in={active || undefined}
          className="mt-2.5 opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
          style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
        >
          <div className="mb-[5px] flex justify-between">
            <span className="text-[10px] text-white/55">{s.nome}</span>
            <span className={`${NUM} text-[10px] text-white`}>{s.pct}%</span>
          </div>
          <div className="h-1 overflow-hidden rounded-sm bg-white/[0.07]">
            <div
              className="h-full rounded-sm transition-[width] duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)]"
              style={{ background: s.cor, width: active ? `${s.pct}%` : '0%', transitionDelay: `${0.35 + i * 0.12}s` }}
            />
          </div>
        </div>
      ))}
      <div
        data-in={active || undefined}
        className="mt-3 flex gap-2 opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
        style={{ transitionDelay: '0.8s' }}
      >
        <div className="flex-1 rounded-lg border border-green/20 bg-green/10 p-2 text-center">
          <div className={`${NUM} text-[18px] text-green`}>{questoes}</div>
          <div className="mt-0.5 text-[9px] text-white/35">questões</div>
        </div>
        <div className="flex-1 rounded-lg border border-indigo/20 bg-indigo/10 p-2 text-center">
          <div className={`${NUM} text-[18px] text-indigo`}>{revisoes}/4</div>
          <div className="mt-0.5 text-[9px] text-white/35">revisões</div>
        </div>
      </div>
    </div>
  );
}

function GrowthMockup({ active }) {
  const pct = useCountUp(18, active, 600);
  const W = 136;
  const H = 60;
  const pontos = [[0, 52], [22, 48], [45, 38], [68, 28], [90, 18], [113, 12], [136, 5]];
  const linha = pontos.map(([x, y]) => `${x},${y}`).join(' ');
  const area = `0,${H} ${linha} ${W},${H}`;
  const [ultimoX, ultimoY] = pontos[pontos.length - 1];

  return (
    <div className={CARD}>
      <div className="flex items-start justify-between">
        <p className={LABEL}>Sua evolução</p>
        <div
          data-in={active || undefined}
          className={`${NUM} rounded-full border border-green/30 bg-green/15 px-2 py-[3px] text-[11px] text-green opacity-0 transition-opacity duration-[400ms] data-in:opacity-100`}
          style={{ transitionDelay: '0.9s' }}
        >
          +{pct}%
        </div>
      </div>
      <div className="relative mt-2.5">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[60px] w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="aa-hiw-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0014ED" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0014ED" stopOpacity="0" />
            </linearGradient>
            <clipPath id="aa-hiw-clip">
              <rect
                x="0"
                y="0"
                width={W}
                height={H}
                style={{
                  transform: active ? 'none' : `translateX(-${W}px)`,
                  transition: 'transform 1.2s cubic-bezier(.4,0,.2,1) .3s',
                }}
              />
            </clipPath>
          </defs>
          {[15, 35, 55].map((y) => (
            <line key={y} x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          <polygon points={area} fill="url(#aa-hiw-grad)" clipPath="url(#aa-hiw-clip)" />
          <polyline
            points={linha}
            fill="none"
            stroke="#0014ED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#aa-hiw-clip)"
          />
          <circle
            cx={ultimoX}
            cy={ultimoY}
            r="3"
            fill="#0014ED"
            style={{ opacity: active ? 1 : 0, transition: 'opacity .4s 1.5s' }}
          />
        </svg>
      </div>
      <div
        data-in={active || undefined}
        className="mt-2 rounded-lg border border-indigo/20 bg-indigo/[0.08] px-2.5 py-[7px] text-[10px] text-white/55 opacity-0 transition-opacity duration-[400ms] data-in:opacity-100"
        style={{ transitionDelay: '1.2s' }}
      >
        Próximo foco: <span className="font-display font-semibold text-indigo">Direito Constitucional</span>
      </div>
    </div>
  );
}

const MOCKUPS = [GoalMockup, ScheduleMockup, StudyMockup, GrowthMockup];

export default function HowItWorks() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="overflow-hidden bg-deep pt-[100px] pb-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)]">
        <div className="mb-[clamp(48px,6vw,72px)]">
          <div
            data-in={inView || undefined}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo/35 bg-indigo/[0.08] px-3 py-[5px] opacity-0 transition-opacity duration-500 data-in:opacity-100"
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="size-[5px] rounded-full bg-indigo" />
            <span className="font-display text-[13px] font-semibold tracking-[0.08em] uppercase text-indigo">Como funciona</span>
          </div>
          <h2
            data-in={inView || undefined}
            className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.06] font-bold tracking-[-0.035em] text-white opacity-0 translate-y-5 transition-[opacity,transform] duration-[600ms] data-in:translate-y-0 data-in:opacity-100"
            style={{ transitionDelay: '0.2s' }}
          >
            Quatro passos até uma
            <br />
            <span className="text-indigo">rotina que se sustenta.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-[108px] right-[12.5%] left-[12.5%] hidden h-px bg-white/[0.07] lg:block" />
          <div
            className="absolute top-[108px] left-[12.5%] hidden h-px bg-linear-to-r from-indigo via-violet to-amber transition-[width] duration-[1400ms] ease-[cubic-bezier(.4,0,.2,1)] lg:block"
            style={{ width: inView ? '75%' : '0%', transitionDelay: '0.6s' }}
          />

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {passos.map((passo, i) => {
              const Mockup = MOCKUPS[i];
              return (
                <div
                  key={passo.n}
                  data-in={inView || undefined}
                  className="px-4 opacity-0 translate-y-7 transition-[opacity,transform] duration-[600ms] data-in:translate-y-0 data-in:opacity-100"
                  style={{ transitionDelay: `${0.35 + i * 0.15}s` }}
                >
                  <div className="mb-7 flex justify-center">
                    <div
                      className="relative z-2 flex size-9 items-center justify-center rounded-full"
                      style={{ background: ACCENTS[i], boxShadow: `0 0 20px ${ACCENTS[i]}40` }}
                    >
                      <span className={`${NUM} text-[13px] text-white`}>{passo.n}</span>
                    </div>
                  </div>

                  <Mockup active={inView} />

                  <div className="mt-5">
                    <h3 className="mb-2 font-display text-[17px] font-bold tracking-[-0.01em] text-white">{passo.titulo}</h3>
                    <p className="text-[13px] leading-[1.6] text-white/45">{passo.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
