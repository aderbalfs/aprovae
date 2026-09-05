import { publicos } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function PersonaCard({ p }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-reveal
      className="grid grid-cols-[38%_minmax(0,1fr)] items-center gap-5 rounded-[22px] p-4 text-left transition-transform duration-[220ms] hover:-translate-y-1 sm:flex sm:flex-col sm:items-center sm:gap-0 sm:rounded-[32px] sm:p-1.5 sm:pb-6 sm:text-center"
      style={{ background: p.cor }}
    >
      <div className="w-full aspect-[2/3] rounded-[14px] overflow-hidden sm:aspect-[8/15] sm:rounded-t-full sm:rounded-b-2xl sm:mb-4">
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
      <div className="min-w-0 flex flex-col gap-2.5 sm:contents">
        <h3 className="font-display font-bold text-[21px] tracking-[-0.02em] text-white sm:mb-2">{p.titulo}</h3>
        <p className="text-[15px] leading-[1.55] text-white/85 sm:mb-5 sm:px-2 sm:min-h-[58px]">{p.desc}</p>
        <a
          href="#cta"
          className="font-display font-bold text-[15px] text-white inline-flex items-center gap-1 self-start mt-0.5 transition-opacity duration-[180ms] hover:opacity-75 sm:self-auto sm:mt-0"
        >
          Começar <span aria-hidden="true">+</span>
        </a>
      </div>
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
