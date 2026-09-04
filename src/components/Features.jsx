import { barras, espectro, planoChips, recursos } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function RecursoCard({ r, cor }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-reveal
      className="relative z-0 bg-white border border-line rounded-[22px] p-[clamp(24px,3vw,30px)] transition-all duration-[220ms] hover:-translate-y-1 hover:border-outline-hover hover:shadow-[0_26px_50px_-34px_rgba(0,3,102,.35)]"
    >
      <span className="aa-tick" aria-hidden="true" />
      <div className="w-9.5 h-9.5 rounded-[11px] grid place-items-center mb-4.5" style={{ background: cor.fundo }}>
        <span className="block w-3.5 h-3.5 rounded border-r-transparent" style={{ border: `2.5px solid ${cor.cor}`, borderRightColor: 'transparent' }} />
      </div>
      <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] text-navy mb-2">{r.titulo}</h3>
      <p className="text-[15px] leading-[1.6] text-lead">{r.desc}</p>
    </div>
  );
}

export default function Features() {
  const introRef = useReveal();
  const leadRef = useReveal();
  const chartRef = useReveal();

  return (
    <section id="funcionalidades" className="py-[48px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="max-w-[700px] mb-[clamp(40px,5vw,60px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Funcionalidades</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Tudo para colocar seus estudos nos trilhos.
          </h2>
          <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-lead">
            Planejar, executar e medir. Cada recurso existe para responder uma pergunta prática da sua rotina.
          </p>
        </div>

        <div className="grid gap-[clamp(14px,2vw,20px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))' }}>
          <div
            ref={leadRef}
            data-reveal
            className="col-span-2 max-[520px]:col-span-1 relative z-0 bg-navy text-white rounded-[22px] p-[clamp(26px,3.4vw,40px)] flex flex-col gap-7 overflow-hidden"
          >
            <span className="aa-tick aa-tick--white" aria-hidden="true" />
            <div>
              <h3 className="font-display font-bold text-[clamp(22px,2.6vw,30px)] tracking-[-0.03em] mb-2.5">Planejamento de estudos</h3>
              <p className="text-[16px] leading-[1.6] text-white/72 max-w-[440px]">
                Monte um plano que caiba na sua semana real: disciplinas, metas e disponibilidade em um único lugar, com revisões distribuídas ao longo da preparação.
              </p>
            </div>
            <div className="mt-auto grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))' }}>
              {planoChips.map((c) => (
                <div key={c.label} className="bg-white/8 border border-white/14 rounded-xl p-3.5">
                  <div className="text-[12px] text-white/60 mb-1">{c.label}</div>
                  <div className="font-display font-bold text-[16px]">{c.valor}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={chartRef} data-reveal className="relative z-0 bg-indigo-tint rounded-[22px] p-[clamp(26px,3vw,34px)] flex flex-col">
            <span className="aa-tick" aria-hidden="true" />
            <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] text-navy mb-2.5">Acompanhamento de desempenho</h3>
            <p className="text-[15px] leading-[1.6] text-body-muted mb-6.5">
              Horas estudadas, questões resolvidas e percentual de acertos evoluindo semana a semana.
            </p>
            <div className="mt-auto flex items-end gap-2 h-30">
              {barras.map((b, i) => (
                <div
                  key={i}
                  className="aa-anim-grow flex-1 rounded-t-md rounded-b-[3px] origin-bottom"
                  style={{ background: b.cor, height: b.altura, animationDelay: b.delay }}
                />
              ))}
            </div>
          </div>

          {recursos.map((r, i) => (
            <RecursoCard key={r.titulo} r={r} cor={espectro[i % espectro.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
