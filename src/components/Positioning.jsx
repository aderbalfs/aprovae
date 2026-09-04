import { caminhoBom, caminhoRuim } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Positioning() {
  const introRef = useReveal();
  const badRef = useReveal();
  const goodRef = useReveal();

  return (
    <section className="py-[48px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div ref={introRef} data-reveal className="max-w-[720px] mb-[clamp(44px,6vw,68px)]">
          <div className="font-display font-semibold text-[13px] tracking-[0.14em] uppercase text-indigo mb-4">Posicionamento</div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-0.035em] text-navy mb-4.5">
            Estudar muito não significa necessariamente estudar bem.
          </h2>
          <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.65] text-lead">
            A diferença entre esforço e preparação está na estrutura. Veja os dois caminhos possíveis para a mesma quantidade de horas de estudo.
          </p>
        </div>

        <div className="grid gap-[clamp(18px,2.5vw,26px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))' }}>
          <div ref={badRef} data-reveal className="bg-mist border border-line rounded-[20px] p-[clamp(24px,3vw,34px)]">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-body-accessible mb-6.5">
              <span className="w-2 h-2 rounded-full bg-neutral-gray" /> Sem estrutura
            </div>
            <div className="flex flex-col gap-0.5">
              {caminhoRuim.map((etapa) => (
                <div key={etapa.n} className="flex items-center gap-3.5 py-3.5 border-b border-dashed border-line-dashed">
                  <span className="font-display font-bold text-[13px] text-body-accessible w-5.5">{etapa.n}</span>
                  <span className="text-[16px] text-lead">{etapa.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={goodRef} data-reveal className="bg-linear-[160deg] from-navy to-indigo rounded-[20px] p-[clamp(24px,3vw,34px)] text-white shadow-[0_40px_70px_-40px_rgba(0,3,102,.6)]">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/72 mb-6.5">
              <span className="w-2 h-2 rounded-full bg-green-light" /> Com o Aprova Aê
            </div>
            <div className="flex flex-col gap-0.5">
              {caminhoBom.map((etapa) => (
                <div key={etapa.n} className="flex items-center gap-3.5 py-3.5 border-b border-white/14">
                  <span className="font-display font-bold text-[13px] text-white/50 w-5.5">{etapa.n}</span>
                  <span className="text-[16px] font-medium">{etapa.t}</span>
                </div>
              ))}
            </div>
            <p className="font-display font-bold text-[clamp(19px,2.2vw,24px)] leading-[1.3] tracking-[-0.02em] mt-7.5">
              O Aprova Aê coloca sua preparação no caminho certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
