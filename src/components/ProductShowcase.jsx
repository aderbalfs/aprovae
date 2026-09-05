import { vitrine } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function Showcase({ item, reverse }) {
  const textRef = useReveal();
  const mockRef = useReveal();

  return (
    <div
      className={`grid grid-cols-1 items-center gap-[clamp(44px,6vw,72px)] ${reverse ? 'lg:grid-cols-[320px_1fr]' : 'lg:grid-cols-[1fr_320px]'}`}
    >
      <div
        ref={mockRef}
        data-reveal
        className={`relative min-w-0 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div
          className="absolute -inset-6 rounded-[32px] opacity-70 blur-3xl -z-10"
          style={{ backgroundImage: 'radial-gradient(60% 60% at 50% 40%, rgba(0,20,237,.35), rgba(0,3,102,0) 72%)' }}
        />
        <div className="rounded-[18px] border border-white/10 bg-[#12141c] shadow-[0_60px_120px_-40px_rgba(0,20,237,.45)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="flex-1 flex justify-center">
              <span className="text-[12px] text-white/40 bg-white/6 rounded-full px-3.5 py-1">{item.url}</span>
            </div>
          </div>
          <img
            src={item.imagem}
            alt={item.alt}
            width="1122"
            height="632"
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div ref={textRef} data-reveal className={`min-w-0 lg:w-[320px] text-center lg:text-left ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-white/55 mb-4">
          {item.kicker}
        </div>
        <h2 className="font-display font-bold text-[clamp(26px,3.4vw,38px)] leading-[1.15] tracking-[-0.03em] text-white mb-4.5">
          {item.titulo}
        </h2>
        <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-white/70 mb-7.5 max-w-[460px] mx-auto lg:mx-0">
          {item.desc}
        </p>
        {item.ctaLabel && (
          <a
            href={item.ctaHref}
            className="inline-flex items-center gap-2 border border-white/25 text-white font-display font-semibold text-[16px] px-6.5 py-3.5 rounded-[13px] transition-all duration-[180ms] hover:bg-white/10 hover:border-white/40 active:scale-[0.97]"
          >
            {item.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative bg-graphite overflow-hidden pt-[100px] pb-[120px]">
      <div className="absolute -top-40 -right-20 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,20,237,.22),rgba(0,20,237,0)_68%)]" />
      <div className="absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(0,3,102,.28),rgba(0,3,102,0)_68%)]" />
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,32px)] relative flex flex-col gap-[clamp(84px,11vw,140px)]">
        {vitrine.map((item, i) => (
          <Showcase key={item.titulo} item={item} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
