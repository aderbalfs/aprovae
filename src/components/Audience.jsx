import { publicos } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function PersonaCard({ p }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-reveal
      className="flex flex-col items-center text-center rounded-[32px] p-1.5 pb-6 transition-transform duration-[220ms] hover:-translate-y-1"
      style={{ background: p.cor }}
    >
      <div className="w-full aspect-[8/15] rounded-t-full rounded-b-2xl overflow-hidden mb-4">
        <img
          src={p.foto}
          alt={p.alt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 92%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 92%)',
          }}
        />
      </div>
      <h3 className="font-display font-bold text-[21px] tracking-[-0.02em] text-white mb-2">{p.titulo}</h3>
      <p className="text-[15px] leading-[1.55] text-white/85 mb-5 px-2 min-h-[58px]">{p.desc}</p>
      <a
        href="#cta"
        className="font-display font-bold text-[15px] text-white inline-flex items-center gap-1 transition-opacity duration-[180ms] hover:opacity-75"
      >
        Começar <span aria-hidden="true">+</span>
      </a>
    </div>
  );
}

export default function Audience() {
  const introRef = useReveal();

  return (
    <section id="para-quem" className="bg-mist border-t border-b border-line pt-[100px] pb-[120px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div
          ref={introRef}
          data-reveal
          className="grid gap-7 items-end mb-[clamp(40px,5vw,60px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
        >
          <div>
            <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Para quem é</div>
            <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy">
              Um objetivo.
              <br />
              Diferentes caminhos.
            </h2>
          </div>
          <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-lead">
            Se existe uma prova no seu horizonte, existe um caminho a ser organizado. O Aprova Aê se adapta ao seu objetivo, não o contrário.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,22px)]">
          {publicos.map((p) => (
            <PersonaCard key={p.titulo} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
