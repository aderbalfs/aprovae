import { heroDias } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { useTiltParallax } from '../hooks/useTiltParallax';

export default function Hero() {
  const textRef = useReveal();
  const bootRef = useReveal();
  useTiltParallax(bootRef);

  return (
    <section id="top" className="relative bg-mist border-b border-line overflow-hidden">
      <div className="absolute -top-40 -right-30 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,20,237,.12),rgba(0,20,237,0)_68%)]" />
      <div className="absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(0,3,102,.10),rgba(0,3,102,0)_68%)]" />
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)] pt-[100px] pb-[120px] relative flex flex-col lg:flex-row items-center justify-center gap-[clamp(48px,6vw,72px)] lg:gap-14">
        <div ref={textRef} data-reveal className="max-w-[820px] lg:max-w-[480px] text-center lg:text-left flex flex-col items-center lg:items-start shrink-0">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#DDE2F7] rounded-full pl-2.5 pr-3.5 py-1.5 text-[13px] font-medium text-navy mb-6.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Concursos · Vestibular · ENEM · Medicina · OAB
          </div>
          <h1 className="font-display font-extrabold text-[clamp(38px,5.6vw,66px)] leading-[1.05] tracking-[-0.04em] text-navy mb-5.5">
            Seu objetivo é a aprovação.
            <br />
            <span className="text-indigo">Seu caminho é o Aprova Aê.</span>
          </h1>
          <p className="text-[clamp(17px,1.7vw,20px)] leading-[1.6] text-lead mb-8.5 max-w-[580px]">
            Organize sua rotina de estudos, acompanhe seu desempenho e transforme sua preparação em uma jornada mais estratégica.
          </p>
          <div className="flex flex-wrap gap-3.5 items-center justify-center lg:justify-start">
            <a
              href="#cta"
              className="bg-indigo text-white font-display font-bold text-[17px] px-[30px] py-4 rounded-[13px] shadow-[0_14px_30px_-12px_rgba(0,20,237,.75)] transition-all duration-[180ms] hover:bg-navy hover:-translate-y-0.5 active:scale-[0.96]"
            >
              Começar agora
            </a>
            <a
              href="#funcionalidades"
              className="bg-white text-navy border border-outline font-display font-semibold text-[17px] px-6.5 py-[15px] rounded-[13px] transition-all duration-[180ms] hover:border-indigo hover:text-indigo active:scale-[0.97]"
            >
              Conhecer o Aprova Aê
            </a>
          </div>
          <p className="text-[14px] text-body-accessible mt-5.5">Comece pelo plano gratuito. Sem cartão de crédito.</p>
        </div>

        <div ref={bootRef} data-reveal data-hero-boot className="relative w-full max-w-[660px] lg:max-w-[560px] mx-auto lg:mx-0 shrink-0">
          <div className="aa-tilt-card relative z-0 bg-white border border-line-light rounded-[22px] p-6 shadow-[0_40px_80px_-40px_rgba(0,3,102,.35)] overflow-hidden">
            <span className="aa-graticule" aria-hidden="true" />
            <span className="aa-sheen" aria-hidden="true" />
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

          <div className="aa-float aa-tilt-layer bg-white border border-line-light rounded-2xl px-4.5 py-3.5 shadow-[0_24px_44px_-26px_rgba(0,3,102,.4)] flex items-center gap-3 [animation:aa-float_6s_ease-in-out_infinite] max-w-[calc(100%-32px)]">
            <span className="aa-check-pop [animation-delay:1.65s] w-8.5 h-8.5 rounded-[10px] bg-green-bg grid place-items-center">
              <span className="block w-[11px] h-[6px] border-l-[2.4px] border-b-[2.4px] border-green [transform:rotate(-45deg)_translate(1px,-2px)]" />
            </span>
            <div>
              <div className="font-display font-bold text-[14px] text-graphite">Revisão concluída</div>
              <div className="text-[12px] text-body-accessible">Direito Constitucional</div>
            </div>
          </div>

          <div className="aa-boot-badge aa-tilt-layer bg-navy text-white rounded-[14px] px-4 py-3 shadow-[0_24px_44px_-24px_rgba(0,3,102,.6)] max-w-[calc(100%-32px)]">
            <div className="text-[11px] tracking-[0.12em] uppercase opacity-60">Meta da semana</div>
            <div className="font-display font-bold text-[15px] tabular-nums mt-0.5">18h de 22h</div>
          </div>
        </div>
      </div>
    </section>
  );
}
