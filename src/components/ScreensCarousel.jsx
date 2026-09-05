import { useState } from 'react';
import { galeria } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function Frame({ item }) {
  return (
    <>
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-mist border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <img
        src={item.imagem}
        alt={item.alt}
        width="1122"
        height="632"
        className="w-full h-auto block"
        loading="lazy"
      />
    </>
  );
}

export default function ScreensCarousel() {
  const introRef = useReveal();
  const stageRef = useReveal();
  const [active, setActive] = useState(0);

  const total = galeria.length;
  const goTo = (i) => setActive(((i % total) + total) % total);
  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;
  const center = galeria[active];

  return (
    <section className="relative bg-mist border-y border-line pt-[100px] pb-[120px] overflow-hidden">
      <div className="absolute -top-36 -left-16 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,20,237,.28),rgba(0,20,237,0)_68%)]" />
      <div className="absolute -bottom-44 right-[-6%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(0,3,102,.28),rgba(0,3,102,0)_68%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,20,237,.14),rgba(0,20,237,0)_72%)]" />

      <div className="relative max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="max-w-[720px] mx-auto text-center mb-[clamp(44px,6vw,68px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">
            Por dentro da plataforma
          </div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Cada parte da sua rotina, dentro de um só app.
          </h2>
          <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-lead">
            Do cronômetro de estudo ao acompanhamento de desempenho e hábitos: veja algumas das telas que você vai usar todos os dias.
          </p>
        </div>
      </div>

      <div ref={stageRef} data-reveal className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center gap-[clamp(10px,2.6vw,32px)]">
          <button
            type="button"
            onClick={() => goTo(prevIndex)}
            aria-label={`Ver tela: ${galeria[prevIndex].titulo}`}
            className="hidden sm:block shrink-0 w-[min(30vw,420px)] scale-90 rounded-[18px] border border-line bg-white overflow-hidden shadow-[0_20px_40px_-30px_rgba(0,3,102,.3)] opacity-55 transition-opacity duration-200 hover:opacity-85 cursor-pointer"
          >
            <Frame item={galeria[prevIndex]} />
          </button>

          <div className="shrink-0 w-[min(75vw,1180px)] rounded-[20px] border border-line-light bg-white overflow-hidden shadow-[0_50px_100px_-40px_rgba(0,3,102,.5)]">
            <Frame item={center} />
          </div>

          <button
            type="button"
            onClick={() => goTo(nextIndex)}
            aria-label={`Ver tela: ${galeria[nextIndex].titulo}`}
            className="hidden sm:block shrink-0 w-[min(30vw,420px)] scale-90 rounded-[18px] border border-line bg-white overflow-hidden shadow-[0_20px_40px_-30px_rgba(0,3,102,.3)] opacity-55 transition-opacity duration-200 hover:opacity-85 cursor-pointer"
          >
            <Frame item={galeria[nextIndex]} />
          </button>
        </div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div className="mt-[clamp(28px,4vw,44px)] flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(prevIndex)}
            aria-label="Tela anterior"
            className="w-9 h-9 rounded-full border border-outline bg-white text-navy grid place-items-center transition-all duration-[180ms] hover:border-indigo hover:text-indigo active:scale-90"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex items-center gap-2">
            {galeria.map((item, i) => (
              <button
                key={item.titulo}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para: ${item.titulo}`}
                aria-current={i === active}
                className={`h-2.5 rounded-full transition-all duration-[220ms] cursor-pointer ${
                  i === active ? 'w-7 bg-indigo' : 'w-2.5 bg-line hover:bg-outline-hover'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(nextIndex)}
            aria-label="Próxima tela"
            className="w-9 h-9 rounded-full border border-outline bg-white text-navy grid place-items-center transition-all duration-[180ms] hover:border-indigo hover:text-indigo active:scale-90"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="text-center mt-7.5">
          <h3 className="font-display font-bold text-[19px] text-navy">{center.titulo}</h3>
          <p className="text-[15px] leading-[1.6] text-lead mt-1.5 max-w-[460px] mx-auto">{center.desc}</p>
        </div>
      </div>
    </section>
  );
}
