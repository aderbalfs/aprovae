import { conceito } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Concept() {
  const ref = useReveal();

  return (
    <section className="bg-navy text-white py-[48px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_80%_10%,rgba(0,20,237,.5),rgba(0,3,102,0)_70%)]" />
      <div ref={ref} data-reveal className="max-w-[900px] mx-auto px-[clamp(20px,4vw,32px)] relative text-center">
        <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-white/55 mb-6">Nosso conceito</div>
        <h2 className="font-display font-extrabold text-[clamp(32px,5vw,60px)] leading-[1.06] tracking-[-0.04em] mb-10">
          Sua aprovação não começa no dia da prova.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-[clamp(10px,2vw,18px)]">
          {conceito.map((c) => (
            <div key={c.t} className="flex items-center gap-[clamp(10px,2vw,18px)]">
              <span className="font-display font-bold text-[clamp(16px,2vw,22px)] tracking-[-0.02em] bg-white/8 border border-white/16 rounded-full px-5.5 py-2.75">
                {c.t}
              </span>
              {c.seta && <span className="text-white/45 text-[20px]">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
