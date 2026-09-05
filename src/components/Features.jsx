import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Brand palette
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  navy: '#000366',
  indigo: '#0014ED',
  violet: '#7C3AED',
  green: '#0E9F6E',
  amber: '#B45309',
};

// ─────────────────────────────────────────────────────────────────────────────
// Hooks
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCountUp(target, duration, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    let raf;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

// ─────────────────────────────────────────────────────────────────────────────
// Tiny shared primitives
// ─────────────────────────────────────────────────────────────────────────────
function LiveDot({ color = C.green }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{ background: color, animation: 'pulseGreen 1.8s ease-in-out infinite' }}
    />
  );
}

function Tag({ children, color, bg }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
      style={{ color, background: bg }}
    >
      {children}
    </span>
  );
}

function Checkmark({ done, delay = 0 }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle
        cx="8" cy="8" r="7"
        fill={done ? `${C.green}22` : 'rgba(255,255,255,0.06)'}
        stroke={done ? C.green : 'rgba(255,255,255,0.15)'}
        strokeWidth="1"
        style={{ transition: 'fill 0.3s, stroke 0.3s' }}
      />
      {done && (
        <path
          d="M5 8l2 2 4-4"
          stroke={C.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{
            animation: `tickAppear 0.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms forwards`,
          }}
        />
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero card — Planejamento de Estudos
// ─────────────────────────────────────────────────────────────────────────────
function PlanejamentoCard({ active }) {
  const pct = useCountUp(82, 1600, active);

  const schedule = [
    { day: 'SEG', subject: 'Matemática', duration: '1h30', done: true, color: C.violet },
    { day: 'TER', subject: 'Português', duration: '2h00', done: true, color: C.green },
    { day: 'QUA', subject: 'Constitucional', duration: '1h30', done: false, color: C.amber, current: true },
    { day: 'QUI', subject: 'RLM', duration: '2h00', done: false, color: C.indigo },
    { day: 'SEX', subject: 'Administrativo', duration: '1h30', done: false, color: C.violet },
  ];

  const restingShadow = active
    ? '0 0 0 1px rgba(0,20,237,0.15), 0 32px 64px rgba(0,3,102,0.5)'
    : 'none';

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: `linear-gradient(150deg, ${C.navy} 0%, #010a5c 55%, #000d4a 100%)`,
        border: '1px solid rgba(0,20,237,0.2)',
        boxShadow: restingShadow,
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(0,20,237,0.3), 0 40px 80px rgba(0,20,237,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = restingShadow;
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Indigo glow top-right */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.indigo}, transparent 68%)`, animation: 'floatSlow 6s ease-in-out infinite' }}
      />

      <div className="relative z-10 p-7 flex flex-col gap-5 h-full">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LiveDot />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: C.green }}>Ao vivo</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
              Planejamento de estudos
            </h3>
          </div>
          <div
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Semana 06
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 340 }}>
          Monte um plano que caiba na sua semana real: disciplinas, metas e disponibilidade em um único lugar.
        </p>

        {/* Schedule rows */}
        <div className="flex flex-col gap-2">
          {schedule.map((row, i) => (
            <div
              key={row.day}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
              style={{
                background: row.current
                  ? 'rgba(0,20,237,0.18)'
                  : 'rgba(255,255,255,0.04)',
                border: row.current
                  ? '1px solid rgba(0,20,237,0.35)'
                  : '1px solid rgba(255,255,255,0.05)',
                opacity: active ? 1 : 0,
                transform: active ? 'translateX(0)' : 'translateX(-10px)',
                transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 80 + 200}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 80 + 200}ms`,
              }}
            >
              <span className="text-[10px] font-bold w-7 shrink-0" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono,monospace' }}>{row.day}</span>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: row.color }} />
              <span className="flex-1 text-sm font-medium text-white">{row.subject}</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono,monospace' }}>{row.duration}</span>
              {row.current ? (
                <span className="text-xs font-semibold" style={{ color: C.amber }}>→</span>
              ) : (
                <Checkmark done={row.done} delay={i * 100 + 400} />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Meta semanal · 22h</span>
            <span className="text-sm font-bold" style={{ color: C.green, fontFamily: 'JetBrains Mono,monospace' }}>
              {pct}%
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: active ? `${pct}%` : '0%',
                background: `linear-gradient(90deg, ${C.indigo}, ${C.green})`,
                transition: 'width 1.6s cubic-bezier(0.22,1,0.36,1) 0.3s',
                backgroundSize: '200% 100%',
                animation: active ? 'shimmerBar 3s linear infinite' : 'none',
              }}
            />
          </div>
          <div className="flex justify-between mt-1">
            {[0, 20, 40, 60, 80, 100].map((v) => (
              <span key={v} className="text-[9px]" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'JetBrains Mono,monospace' }}>{v}%</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Desempenho card
// ─────────────────────────────────────────────────────────────────────────────
function DesempenhoCard({ active }) {
  const acertos = useCountUp(74, 1400, active);

  const bars = [
    { h: 32, label: 'S1', v: '52%' },
    { h: 42, label: 'S2', v: '58%' },
    { h: 50, label: 'S3', v: '61%' },
    { h: 58, label: 'S4', v: '63%' },
    { h: 64, label: 'S5', v: '68%' },
    { h: 76, label: 'S6', v: '71%' },
    { h: 85, label: 'S7', v: '74%' },
    { h: 95, label: 'S8', v: '74%' },
  ];

  const metrics = [
    { label: 'Questões', value: '1.240', delta: '+48', up: true },
    { label: 'Acertos', value: `${acertos}%`, delta: '+3%', up: true },
    { label: 'Streak', value: '14 dias', delta: '🔥', up: true },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(160deg,#F8F9FF 0%,#EEF0FB 100%)',
        border: '1px solid rgba(0,3,102,0.09)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,20,237,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="p-6 flex flex-col gap-4 h-full">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-bold" style={{ color: C.navy, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
              Acompanhamento de desempenho
            </h3>
            <Tag color={C.green} bg={`${C.green}18`}>↑ +12%</Tag>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,3,102,0.45)' }}>
            Horas estudadas, questões resolvidas e acertos evoluindo semana a semana.
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(0,3,102,0.07)',
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(6px)',
                transition: `opacity 0.5s ease ${i * 100 + 200}ms, transform 0.5s ease ${i * 100 + 200}ms`,
              }}
            >
              <div className="text-lg font-bold" style={{ color: C.navy, fontFamily: 'JetBrains Mono,monospace' }}>{m.value}</div>
              <div className="text-[10px]" style={{ color: 'rgba(0,3,102,0.4)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="flex-1 flex items-end gap-1.5 pt-2">
          {bars.map((b, i) => (
            <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full relative flex items-end" style={{ height: 80 }}>
                <div
                  className="w-full rounded-t-md"
                  style={{
                    height: `${b.h}%`,
                    background: i === bars.length - 1
                      ? `linear-gradient(180deg, ${C.indigo}, ${C.navy})`
                      : i >= bars.length - 3
                        ? `rgba(0,20,237,${0.35 + i * 0.06})`
                        : `rgba(0,3,102,${0.12 + i * 0.04})`,
                    transformOrigin: 'bottom',
                    transform: active ? 'scaleY(1)' : 'scaleY(0)',
                    transition: `transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${i * 70 + 150}ms`,
                  }}
                />
              </div>
              <span className="text-[9px]" style={{ color: 'rgba(0,3,102,0.3)', fontFamily: 'JetBrains Mono,monospace' }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Metas e Rotina card
// ─────────────────────────────────────────────────────────────────────────────
function MetasCard({ active }) {
  const total = useCountUp(18, 1200, active);

  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const filled = [true, true, true, true, true, false, false];

  const goals = [
    { label: 'Direito Constitucional', pct: 88, color: C.violet },
    { label: 'Matemática', pct: 65, color: C.indigo },
    { label: 'Português', pct: 50, color: C.green },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(160deg, #03013a 0%, #060240 100%)',
        border: '1px solid rgba(124,58,237,0.2)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(124,58,237,0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Violet glow */}
      <div
        className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.violet}, transparent)`, animation: 'float 5s ease-in-out infinite' }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-4 h-full">
        <div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
            style={{ background: `${C.violet}22`, border: `1px solid ${C.violet}40` }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="3" width="12" height="11" rx="2" stroke={C.violet} strokeWidth="1.2" />
              <path d="M5 1v4M11 1v4M2 7h12" stroke={C.violet} strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
            Metas e rotina
          </h4>
          <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Defina metas de horas e conteúdo e veja se a semana fechou como você planejou.
          </p>
        </div>

        {/* Streak calendar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>Sequência atual</span>
            <span className="text-xs font-bold" style={{ color: C.amber }}>🔥 5 dias</span>
          </div>
          <div className="flex gap-1.5">
            {days.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full h-6 rounded-md flex items-center justify-center"
                  style={{
                    background: filled[i] ? `${C.violet}35` : 'rgba(255,255,255,0.05)',
                    border: filled[i] ? `1px solid ${C.violet}60` : '1px solid rgba(255,255,255,0.07)',
                    opacity: active ? 1 : 0,
                    transform: active ? 'scale(1)' : 'scale(0.85)',
                    transition: `opacity 0.4s ease ${i * 60 + 200}ms, transform 0.4s ease ${i * 60 + 200}ms`,
                  }}
                >
                  {filled[i] && <span style={{ color: C.violet, fontSize: 10 }}>✓</span>}
                </div>
                <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goal bars */}
        <div className="flex flex-col gap-2.5 mt-auto">
          <div className="flex justify-between">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Progresso por disciplina</span>
            <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'JetBrains Mono,monospace' }}>{total}h / 22h</span>
          </div>
          {goals.map((g, i) => (
            <div key={g.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{g.label}</span>
                <span className="text-[10px] font-semibold" style={{ color: g.color, fontFamily: 'JetBrains Mono,monospace' }}>{g.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: active ? `${g.pct}%` : '0%',
                    background: g.color,
                    transition: `width 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 120 + 350}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Controle de Questões card
// ─────────────────────────────────────────────────────────────────────────────
function QuestoesCard({ active }) {
  const acertos = useCountUp(74, 1400, active);
  const total = useCountUp(48, 1200, active);

  const breakdown = [
    { label: 'Direito Const.', correct: 18, wrong: 4, color: C.violet },
    { label: 'Matemática', correct: 14, wrong: 6, color: C.indigo },
    { label: 'Port. / Redação', correct: 12, wrong: 8, color: C.green },
    { label: 'RLM', correct: 10, wrong: 10, color: C.amber },
  ];

  const circumference = 2 * Math.PI * 22;
  const dashoffset = active
    ? circumference * (1 - 0.74)
    : circumference;

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(160deg,#F8F9FF 0%,#EEF0FB 100%)',
        border: '1px solid rgba(0,3,102,0.09)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(124,58,237,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="p-5 flex flex-col gap-4 h-full">
        <div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
            style={{ background: `${C.violet}15`, border: `1px solid ${C.violet}30` }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 4h10M3 8h6M3 12h8" stroke={C.violet} strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="12" cy="11" r="2.5" stroke={C.green} strokeWidth="1.2" />
              <path d="M11 11l.8.8 1.4-1.4" stroke={C.green} strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="text-sm font-bold mb-1" style={{ color: C.navy, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
            Controle de questões
          </h4>
          <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(0,3,102,0.45)' }}>
            Registre acertos e erros por disciplina e descubra onde vale investir mais tempo.
          </p>
        </div>

        {/* Donut + stats */}
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(0,3,102,0.08)" strokeWidth="7" />
              <circle
                cx="30" cy="30" r="22"
                fill="none"
                stroke={C.green}
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                transform="rotate(-90 30 30)"
                style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold" style={{ color: C.navy, fontFamily: 'JetBrains Mono,monospace' }}>{acertos}%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <span className="text-xl font-bold" style={{ color: C.navy, fontFamily: 'JetBrains Mono,monospace' }}>{total}</span>
              <span className="text-xs ml-1" style={{ color: 'rgba(0,3,102,0.4)' }}>questões hoje</span>
            </div>
            <div className="flex gap-3">
              <span className="text-xs font-semibold" style={{ color: C.green }}>✓ {Math.round(total * 0.74)} acertos</span>
              <span className="text-xs font-semibold" style={{ color: '#EF4444' }}>✗ {Math.round(total * 0.26)} erros</span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="flex flex-col gap-2 mt-auto">
          {breakdown.map((b, i) => {
            const pct = Math.round((b.correct / (b.correct + b.wrong)) * 100);
            return (
              <div key={b.label}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px]" style={{ color: 'rgba(0,3,102,0.5)' }}>{b.label}</span>
                  <span className="text-[10px] font-bold" style={{ color: b.color, fontFamily: 'JetBrains Mono,monospace' }}>{pct}%</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,3,102,0.07)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: active ? `${pct}%` : '0%',
                      background: b.color,
                      transition: `width 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 100 + 400}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Revisões card
// ─────────────────────────────────────────────────────────────────────────────
function RevisoesCard({ active }) {
  const revisoes = [
    { subject: 'Direito Constitucional', topic: 'Princípios Fundamentais', date: 'Hoje', status: 'due', color: C.amber },
    { subject: 'Matemática', topic: 'Proporção e Porcentagem', date: 'Amanhã', status: 'soon', color: C.violet },
    { subject: 'Português', topic: 'Concordância Verbal', date: 'Sex', status: 'ok', color: C.green },
    { subject: 'RLM', topic: 'Sequências Lógicas', date: 'Sáb', status: 'ok', color: C.indigo },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(160deg, #020133 0%, #030245 100%)',
        border: '1px solid rgba(14,159,110,0.15)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(14,159,110,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Green glow bottom */}
      <div
        className="absolute -bottom-8 right-4 w-28 h-28 rounded-full opacity-15 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.green}, transparent)` }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-4 h-full">
        <div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
            style={{ background: `${C.green}20`, border: `1px solid ${C.green}35` }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M8 3v5l3 3" stroke={C.green} strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="8" cy="8" r="5.5" stroke={C.green} strokeWidth="1.2" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
            Revisões
          </h4>
          <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Nada do que você estudou fica solto: revisões entram no seu calendário automaticamente.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-2 flex-1">
          {revisoes.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-xl"
              style={{
                background: r.status === 'due'
                  ? 'rgba(180,83,9,0.15)'
                  : 'rgba(255,255,255,0.04)',
                border: r.status === 'due'
                  ? '1px solid rgba(180,83,9,0.3)'
                  : '1px solid rgba(255,255,255,0.05)',
                opacity: active ? 1 : 0,
                transform: active ? 'translateX(0)' : 'translateX(8px)',
                transition: `opacity 0.5s ease ${i * 90 + 200}ms, transform 0.5s ease ${i * 90 + 200}ms`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-white truncate">{r.subject}</div>
                <div className="text-[9px] truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>{r.topic}</div>
              </div>
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-md shrink-0"
                style={{
                  color: r.status === 'due' ? C.amber : r.status === 'soon' ? C.violet : 'rgba(255,255,255,0.35)',
                  background: r.status === 'due' ? `${C.amber}20` : r.status === 'soon' ? `${C.violet}20` : 'transparent',
                }}
              >
                {r.date}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>12 revisões agendadas</span>
          <Tag color={C.green} bg={`${C.green}18`}>Espaçamento inteligente</Tag>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Histórico e Progresso — full-width
// ─────────────────────────────────────────────────────────────────────────────
function HistoricoCard({ active }) {
  const months = ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'];
  const values = [38, 45, 52, 58, 63, 71, 80];

  const w = 460, h = 90, pad = 20;
  const xStep = (w - pad * 2) / (values.length - 1);
  const maxV = 100;

  const points = values.map((v, i) => ({
    x: pad + i * xStep,
    y: h - pad - ((v / maxV) * (h - pad * 1.5)),
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');
  const area = `M${points[0].x},${h} ${points.map((p) => `L${p.x},${p.y}`).join(' ')} L${points[points.length - 1].x},${h} Z`;

  const pathLength = 400;

  const totalHoras = useCountUp(186, 1600, active);
  const evolucao = useCountUp(80, 1400, active);

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg,#F8F9FF 0%,#EEF0FB 100%)',
        border: '1px solid rgba(0,3,102,0.09)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(180,83,9,0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="p-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-center">
        {/* Left: info */}
        <div className="flex flex-col gap-3 min-w-[180px]">
          <div>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ background: `${C.amber}15`, border: `1px solid ${C.amber}30` }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M2 12l4-4 3 3 5-6" stroke={C.amber} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="5" r="1.5" fill={C.amber} />
              </svg>
            </div>
            <h4 className="text-base font-bold mb-1" style={{ color: C.navy, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
              Histórico e progresso
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,3,102,0.45)', maxWidth: 180 }}>
              Um registro contínuo da sua preparação para você enxergar a evolução ao longo dos meses.
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="text-2xl font-bold" style={{ color: C.navy, fontFamily: 'JetBrains Mono,monospace' }}>{totalHoras}h</div>
              <div className="text-[10px]" style={{ color: 'rgba(0,3,102,0.4)' }}>Total estudado</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: C.amber, fontFamily: 'JetBrains Mono,monospace' }}>{evolucao}%</div>
              <div className="text-[10px]" style={{ color: 'rgba(0,3,102,0.4)' }}>Evolução geral</div>
            </div>
          </div>
        </div>

        {/* Right: line chart */}
        <div className="relative">
          <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" overflow="visible">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.amber} stopOpacity="0.2" />
                <stop offset="100%" stopColor={C.amber} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d={area}
              fill="url(#chartFill)"
              style={{
                opacity: active ? 1 : 0,
                transition: 'opacity 0.6s ease 0.5s',
              }}
            />

            {/* Line */}
            <polyline
              points={polyline}
              fill="none"
              stroke={C.amber}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={active ? 0 : pathLength}
              style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) 0.2s' }}
            />

            {/* Dots */}
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x} cy={p.y} r="3.5"
                fill="white"
                stroke={C.amber}
                strokeWidth="2"
                style={{
                  opacity: active ? 1 : 0,
                  transition: `opacity 0.3s ease ${i * 100 + 800}ms`,
                }}
              />
            ))}

            {/* Month labels */}
            {months.map((m, i) => (
              <text
                key={m}
                x={pad + i * xStep}
                y={h + 4}
                textAnchor="middle"
                fontSize="9"
                fill="rgba(0,3,102,0.3)"
                fontFamily="JetBrains Mono,monospace"
              >
                {m}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section header
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeader({ visible }) {
  return (
    <div className={`aa-fx-reveal aa-fx-d0 ${visible ? 'in' : ''} mb-14`}>
      <div className="flex items-center gap-2.5 mb-4">
        <div className="h-px w-8" style={{ background: C.indigo, opacity: 0.5 }} />
        <span
          className="text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: C.indigo, fontFamily: 'Inter,sans-serif' }}
        >
          Funcionalidades
        </span>
      </div>
      <h2
        className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-5 max-w-lg"
        style={{ color: C.navy, fontFamily: 'Plus Jakarta Sans,sans-serif' }}
      >
        Tudo para colocar seus estudos nos trilhos.
      </h2>
      <p className="text-base leading-relaxed max-w-md" style={{ color: 'rgba(0,3,102,0.5)' }}>
        Planejar, executar e medir. Cada recurso existe para responder uma pergunta prática da sua rotina.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root
// ─────────────────────────────────────────────────────────────────────────────
export default function Features() {
  const { ref: headerRef, visible: headerIn } = useInView(0.1);
  const { ref: topRowRef, visible: topRowIn } = useInView(0.1);
  const { ref: midRowRef, visible: midRowIn } = useInView(0.1);
  const { ref: lastRowRef, visible: lastRowIn } = useInView(0.1);

  return (
    <div
      className="w-full"
      style={{
        background: 'linear-gradient(180deg,#F6F8FF 0%,#ECF0FC 35%,#F6F8FF 70%,#ECF0FC 100%)',
        fontFamily: 'Inter,sans-serif',
      }}
    >
      <section id="funcionalidades" className="max-w-6xl mx-auto px-5 pt-[100px] pb-[120px]">

        {/* Header */}
        <div ref={headerRef}>
          <SectionHeader visible={headerIn} />
        </div>

        {/* ── Row 1: hero + desempenho ── */}
        <div ref={topRowRef} className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 mb-4">
          <div className={`aa-fx-reveal aa-fx-d1 ${topRowIn ? 'in' : ''}`} style={{ minHeight: 460 }}>
            <PlanejamentoCard active={topRowIn} />
          </div>
          <div className={`aa-fx-reveal aa-fx-d2 ${topRowIn ? 'in' : ''}`}>
            <DesempenhoCard active={topRowIn} />
          </div>
        </div>

        {/* ── Row 2: 3 equal cards ── */}
        <div ref={midRowRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className={`aa-fx-reveal aa-fx-d1 ${midRowIn ? 'in' : ''}`} style={{ minHeight: 340 }}>
            <MetasCard active={midRowIn} />
          </div>
          <div className={`aa-fx-reveal aa-fx-d2 ${midRowIn ? 'in' : ''}`}>
            <QuestoesCard active={midRowIn} />
          </div>
          <div className={`aa-fx-reveal aa-fx-d3 ${midRowIn ? 'in' : ''}`}>
            <RevisoesCard active={midRowIn} />
          </div>
        </div>

        {/* ── Row 3: histórico full-width ── */}
        <div ref={lastRowRef} className={`aa-fx-reveal aa-fx-d1 ${lastRowIn ? 'in' : ''}`}>
          <HistoricoCard active={lastRowIn} />
        </div>

      </section>
    </div>
  );
}
