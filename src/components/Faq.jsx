import { useState } from 'react';
import { faqs } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function FaqItem({ f, index, isOpen, onToggle }) {
  return (
    <div className="border border-line rounded-2xl bg-white overflow-hidden transition-colors duration-200 hover:border-outline-hover">
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 bg-none border-none px-5.5 py-4.75 text-left cursor-pointer font-display font-semibold text-[16px] text-navy transition-colors duration-[180ms] hover:bg-[#FAFBFF]"
      >
        <span>{f.q}</span>
        <span
          className={`shrink-0 w-6.5 h-6.5 rounded-lg grid place-items-center text-[17px] font-medium text-indigo transition-all duration-[220ms] ${isOpen ? 'rotate-45 bg-indigo-tint' : 'bg-mist'}`}
        >
          +
        </span>
      </button>
      <div className={`aa-faq-panel ${isOpen ? 'aa-faq-panel--open' : ''}`}>
        <div>
          <p className="m-0 px-5.5 pb-5.5 text-[15px] leading-[1.65] text-lead max-w-[620px]">{f.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [aberta, setAberta] = useState(null);
  const introRef = useReveal();
  const listRef = useReveal();

  const toggle = (i) => setAberta((s) => (s === i ? null : i));

  return (
    <section id="faq" className="pt-[100px] pb-[120px]">
      <div
        className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)] grid gap-[clamp(32px,5vw,64px)] items-start"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
      >
        <div ref={introRef} data-reveal>
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">FAQ</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Perguntas frequentes.
          </h2>
          <p className="text-[16px] leading-[1.65] text-lead">
            Ainda com dúvidas? Fale com o suporte pelo{' '}
            <a href="#footer" className="text-indigo font-medium">nosso canal de atendimento</a>.
          </p>
        </div>
        <div ref={listRef} data-reveal className="flex flex-col gap-2.5">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} f={f} index={i} isOpen={aberta === i} onToggle={toggle} />
          ))}
        </div>
      </div>
    </section>
  );
}
