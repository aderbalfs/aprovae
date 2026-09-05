import { useState } from 'react';
import { planoFree, planoBase, planoPro } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function CheckIcon({ tone = 'indigo' }) {
  const bg = tone === 'white' ? 'bg-white/16' : 'bg-indigo-tint';
  const stroke = tone === 'white' ? 'border-white' : 'border-indigo';
  return (
    <span className={`shrink-0 w-5 h-5 rounded-full grid place-items-center ${bg}`}>
      <span className={`block w-2.5 h-1.5 border-l-[2px] border-b-[2px] ${stroke} -translate-y-px [transform:rotate(-45deg)_translate(1px,-2px)]`} />
    </span>
  );
}

function PlanCard({ info, featured, cardRef }) {
  if (featured) {
    return (
      <div
        ref={cardRef}
        data-reveal
        className="relative z-0 flex flex-col bg-linear-[165deg] from-indigo to-navy text-white rounded-[22px] p-[clamp(26px,3vw,34px)] shadow-[0_44px_80px_-44px_rgba(0,20,237,.75)] overflow-hidden"
      >
        <span className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-white/10 via-white to-white/10" aria-hidden="true" />
        <span className="aa-tick aa-tick--white aa-tick--lg" aria-hidden="true" />
        <span className="absolute top-[clamp(26px,3vw,34px)] right-[clamp(26px,3vw,34px)] bg-white/14 border border-white/22 rounded-full px-3 py-1.5 font-display font-bold text-[12px] tracking-[0.06em]">
          MAIS ESCOLHIDO
        </span>

        <h3 className="font-display font-bold text-[20px] mb-2">{info.nome}</h3>
        <p className="text-[15px] leading-[1.55] text-white/75 mb-6 min-h-[46px]">{info.desc}</p>

        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-display font-extrabold text-[44px] tracking-[-0.04em] tabular-nums">{info.preco}</span>
          <span className="text-[15px] text-white/65">{info.precoNota}</span>
        </div>
        <p className="text-[13px] text-white/60 mb-6.5 min-h-[18px]">{info.notaExtra}</p>

        <a
          href="#cta"
          className="flex items-center justify-center gap-2 text-center bg-white text-navy font-display font-bold text-[16px] p-3.5 rounded-xl mb-6.5 transition-transform duration-[180ms] hover:text-indigo hover:-translate-y-0.5 active:scale-[0.96]"
        >
          {info.cta}
          <span aria-hidden="true">→</span>
        </a>

        <div className="mb-6 h-px w-full bg-white/12" />

        <ul className="flex flex-col gap-3.5">
          {info.features.map((f) => (
            <li key={f} className="flex gap-3 items-start">
              <CheckIcon tone="white" />
              <span className="text-[15px] leading-[1.5] text-white/90">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      data-reveal
      className="relative z-0 flex flex-col bg-white border border-line rounded-[22px] p-[clamp(26px,3vw,34px)] transition-colors duration-200 hover:border-outline-hover"
    >
      <span className="aa-tick" aria-hidden="true" />
      <h3 className="font-display font-bold text-[20px] text-navy mb-2">{info.nome}</h3>
      <p className="text-[15px] leading-[1.55] text-lead mb-6 min-h-[46px]">{info.desc}</p>

      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="font-display font-extrabold text-[44px] tracking-[-0.04em] tabular-nums text-graphite">{info.preco}</span>
        <span className="text-[15px] text-body-accessible">{info.precoNota}</span>
      </div>
      <p className="text-[13px] text-body-accessible mb-6.5 min-h-[18px]">{info.notaExtra}</p>

      <a
        href="#cta"
        className="block text-center bg-mist border border-outline text-navy font-display font-bold text-[16px] p-3.5 rounded-xl mb-6.5 transition-all duration-[180ms] hover:border-indigo hover:text-indigo active:scale-[0.97]"
      >
        {info.cta}
      </a>

      <div className="mb-6 h-px w-full bg-line" />

      <ul className="flex flex-col gap-3.5">
        {info.features.map((f) => (
          <li key={f} className="flex gap-3 items-start">
            <CheckIcon tone="indigo" />
            <span className="text-[15px] leading-[1.5] text-body-muted">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const [anual, setAnual] = useState(true);
  const introRef = useReveal();
  const freeRef = useReveal();
  const baseRef = useReveal();
  const proRef = useReveal();

  const precoBase = anual ? 'R$ 22,79' : 'R$ 29,90';
  const precoPro = anual ? 'R$ 28,91' : 'R$ 39,90';
  const notaBase = anual ? '12x no cartão · ou R$ 219,90 à vista' : 'Cobrado mensalmente';
  const notaPro = anual ? '12x no cartão · ou R$ 279,90 à vista' : 'Cobrado mensalmente';

  const planos = [
    {
      key: 'free',
      nome: 'Free',
      desc: 'Para conhecer o Aprova Aê e começar a organizar seus estudos.',
      preco: 'R$ 0',
      precoNota: '/ sempre',
      notaExtra: '',
      cta: 'Criar conta gratuita',
      features: planoFree,
      ref: freeRef,
    },
    {
      key: 'base',
      nome: 'Base',
      desc: 'Para quem já tem rotina e quer acompanhar tudo sem limites.',
      preco: precoBase,
      precoNota: '/ mês',
      notaExtra: notaBase,
      cta: 'Assinar Base',
      features: planoBase,
      ref: baseRef,
    },
    {
      key: 'pro',
      nome: 'Pro',
      desc: 'Para quem quer utilizar todos os recursos da plataforma.',
      preco: precoPro,
      precoNota: '/ mês',
      notaExtra: notaPro,
      cta: 'Começar agora',
      features: planoPro,
      ref: proRef,
    },
  ];

  return (
    <section id="planos" className="pt-[100px] pb-[120px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="text-center max-w-[620px] mx-auto mb-[clamp(40px,5vw,56px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Planos</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Escolha o plano para sua preparação.
          </h2>
          <p className="text-[16px] leading-[1.65] text-lead mb-8">
            No plano anual, o valor é parcelado em 12x no cartão — ou à vista, com desconto.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-[13px] font-medium ${!anual ? 'text-navy' : 'text-body-accessible'}`}>Mensal</span>
            <button
              type="button"
              onClick={() => setAnual(!anual)}
              aria-label="Alternar entre cobrança mensal e anual"
              className={`relative flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 cursor-pointer ${anual ? 'bg-indigo' : 'bg-line'}`}
            >
              <span
                className={`absolute h-4 w-4 rounded-full bg-white shadow-[0_2px_6px_rgba(0,3,102,.35)] transition-transform duration-200 ease-in-out ${
                  anual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`flex items-center gap-2 text-[13px] font-medium ${anual ? 'text-navy' : 'text-body-accessible'}`}>
              Anual
              <span className="rounded-full bg-indigo-tint text-indigo px-2 py-0.5 font-display font-bold text-[12px] uppercase tracking-widest">
                Economize até 28%
              </span>
            </span>
          </div>
        </div>

        <div
          className="grid gap-[clamp(16px,2.4vw,24px)] max-w-[1080px] mx-auto items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
        >
          {planos.map((info) => (
            <PlanCard key={info.key} info={info} featured={info.key === 'pro'} cardRef={info.ref} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[13px] text-body-accessible">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-gray" />
          Pode cancelar quando quiser, direto pela plataforma — sem burocracia.
        </div>
      </div>
    </section>
  );
}
