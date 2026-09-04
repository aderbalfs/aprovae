import { beneficios, espectro } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function Beneficio({ b, cor }) {
  const ref = useReveal();
  return (
    <div ref={ref} data-reveal className="flex items-center gap-3 bg-mist border border-line rounded-[14px] px-4.5 py-4">
      <span className="shrink-0 block w-2.5 h-2.5 rounded-full" style={{ background: cor }} />
      <span className="font-display font-semibold text-[15px] text-graphite">{b}</span>
    </div>
  );
}

export default function Benefits() {
  const textRef = useReveal();

  return (
    <section className="py-[48px]">
      <div
        className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)] grid gap-[clamp(40px,5vw,72px)] items-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(330px, 100%), 1fr))' }}
      >
        <div ref={textRef} data-reveal>
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Benefícios</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Você não precisa estudar no escuro.
          </h2>
          <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-lead mb-7.5">
            Saiba onde você está, entenda sua evolução e tenha clareza sobre o próximo passo.
          </p>
          <a
            href="#cta"
            className="inline-block bg-indigo text-white font-display font-bold text-[16px] px-6.5 py-3.5 rounded-xl transition-all duration-[180ms] hover:bg-navy hover:-translate-y-0.5 active:scale-[0.96]"
          >
            Começar agora
          </a>
        </div>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))' }}>
          {beneficios.map((b, i) => (
            <Beneficio key={b} b={b} cor={espectro[i % espectro.length].cor} />
          ))}
        </div>
      </div>
    </section>
  );
}
