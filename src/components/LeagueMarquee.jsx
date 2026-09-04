import { ligas } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function LeagueMarquee() {
  const ref = useReveal();
  const trilha = [...ligas, ...ligas];

  return (
    <section className="relative bg-graphite overflow-hidden py-[48px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,32px)] relative">
        <div ref={ref} data-reveal className="text-center mb-[clamp(32px,4.5vw,48px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-white/55 mb-3">
            Gamificação
          </div>
          <h3 className="font-display font-bold text-[clamp(22px,2.6vw,30px)] leading-[1.25] tracking-[-0.02em] text-white">
            Suba de liga a cada meta batida.
          </h3>
          <p className="text-[15px] leading-[1.6] text-white/60 mt-3 max-w-[480px] mx-auto">
            Do Bronze I até a Lenda: seu XP mensal define sua liga e o quanto você já evoluiu.
          </p>
        </div>
      </div>

      <div className="aa-marquee-viewport">
        <div className="aa-marquee-track">
          {trilha.map((liga, i) => (
            <div
              key={i}
              aria-hidden={i >= ligas.length}
              className="flex flex-col items-center gap-3 px-[clamp(22px,3vw,38px)] shrink-0"
            >
              <img
                src={liga.arquivo}
                alt={i < ligas.length ? `Medalha da liga ${liga.nome}` : ''}
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                loading="lazy"
              />
              <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-white/50">{liga.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
