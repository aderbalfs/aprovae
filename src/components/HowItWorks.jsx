import { passos } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function Passo({ s }) {
  const ref = useReveal();
  return (
    <div ref={ref} data-reveal className="relative pt-8.5 border-t-2 border-[#DDE2F7]">
      <span className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-indigo shadow-[0_0_0_4px_#F7F8FC]" />
      <div className="font-display font-extrabold text-[15px] tracking-[0.08em] text-indigo mb-3">{s.n}</div>
      <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] text-navy mb-2.5">{s.titulo}</h3>
      <p className="text-[15px] leading-[1.6] text-lead">{s.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  const introRef = useReveal();

  return (
    <section id="como-funciona" className="bg-mist border-t border-b border-line py-[48px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="max-w-[640px] mb-[clamp(44px,6vw,68px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Como funciona</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy">
            Quatro passos até uma rotina que se sustenta.
          </h2>
        </div>
        <div className="grid gap-[clamp(20px,3vw,28px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))' }}>
          {passos.map((s) => (
            <Passo key={s.n} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
