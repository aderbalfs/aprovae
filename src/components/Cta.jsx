import { useReveal } from '../hooks/useReveal';

export default function Cta() {
  const ref = useReveal();

  return (
    <section id="cta" className="px-[clamp(20px,4vw,32px)] pb-[48px]">
      <div
        ref={ref}
        data-reveal
        className="max-w-[1180px] mx-auto rounded-[28px] px-[clamp(26px,5vw,72px)] py-[clamp(48px,7vw,96px)] text-white text-center relative overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(150deg, #0014ED 0%, #000366 78%)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_15%_100%,rgba(255,255,255,.14),rgba(255,255,255,0)_70%)]" />
        <div className="relative">
          <h2 className="font-display font-extrabold text-[clamp(32px,5vw,60px)] leading-[1.06] tracking-[-0.04em] mb-5">
            Seu próximo passo começa agora.
          </h2>
          <p className="text-[clamp(16px,1.8vw,20px)] leading-[1.6] text-white/80 mx-auto mb-9.5 max-w-[520px]">
            Organize sua preparação. Acompanhe sua evolução. Continue avançando.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#planos"
              className="bg-white text-navy font-display font-bold text-[17px] px-8.5 py-4.25 rounded-[13px] transition-all duration-[180ms] hover:text-indigo hover:-translate-y-0.5 active:scale-[0.96]"
            >
              Começar agora
            </a>
            <a
              href="#planos"
              className="border border-white/35 text-white font-display font-semibold text-[17px] px-7.5 py-4 rounded-[13px] transition-all duration-[180ms] hover:bg-white/12 active:scale-[0.97]"
            >
              Ver planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
