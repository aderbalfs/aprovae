import { depoimentos } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function Depoimento({ d }) {
  const ref = useReveal();
  return (
    <div ref={ref} data-reveal className="bg-white border border-line rounded-[20px] p-6.5 flex flex-col gap-5">
      <span
        className="self-start font-display font-bold text-[12px] tracking-[0.06em] uppercase rounded-full px-3 py-1.5"
        style={{ background: d.fundo, color: d.cor }}
      >
        {d.categoria}
      </span>
      <div className="flex flex-col gap-2.25">
        <span className="h-2.75 rounded-md bg-skeleton w-full" />
        <span className="h-2.75 rounded-md bg-skeleton w-[92%]" />
        <span className="h-2.75 rounded-md bg-skeleton w-[76%]" />
        <span className="h-2.75 rounded-md bg-skeleton-light w-[58%]" />
      </div>
      <div className="mt-auto flex items-center gap-3 pt-4.5 border-t border-footer-divider">
        <span className="w-10 h-10 rounded-full bg-indigo-tint grid place-items-center font-display font-bold text-[14px] text-body-accessible">?</span>
        <div>
          <div className="font-display font-bold text-[15px] text-graphite">Nome do usuário</div>
          <div className="text-[13px] text-body-accessible">{d.objetivo}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ show = true }) {
  const introRef = useReveal();
  if (!show) return null;

  return (
    <section className="bg-mist border-t border-b border-line pt-[100px] pb-[120px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="max-w-[620px] mb-[clamp(36px,5vw,52px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Depoimentos</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Quem está no caminho.
          </h2>
          <p className="text-[16px] leading-[1.65] text-lead">
            Espaço reservado para depoimentos reais de usuários. Os blocos abaixo são placeholders de conteúdo.
          </p>
        </div>
        <div className="grid gap-[clamp(14px,2vw,20px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))' }}>
          {depoimentos.map((d) => (
            <Depoimento key={d.categoria} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
