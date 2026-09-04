import { footerCols, redes } from '../data/content';

export default function Footer() {
  return (
    <footer id="footer" className="bg-mist border-t border-line pt-[48px] pb-[48px]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)]">
        <div
          className="grid gap-[clamp(28px,4vw,48px)] pb-[clamp(32px,4vw,48px)] border-b border-hairline"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}
        >
          <div className="max-w-[300px]">
            <div className="mb-3.5">
              <img src="/logo-aprova-ae.png" alt="Aprova Aê" className="h-8 w-auto" />
            </div>
            <p className="text-[14px] leading-[1.65] text-lead mb-4.5">
              Plataforma para organizar e acompanhar sua preparação — do primeiro dia de estudo até a prova.
            </p>
            <div className="flex gap-2">
              {redes.map((r) => (
                <a
                  key={r}
                  href="#footer"
                  className="w-8.5 h-8.5 rounded-[10px] border border-hairline bg-white grid place-items-center font-display font-bold text-[12px] text-lead transition-all duration-[180ms] hover:border-indigo hover:text-indigo hover:-translate-y-0.5"
                >
                  {r}
                </a>
              ))}
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.titulo}>
              <div className="font-display font-bold text-[14px] text-navy mb-4">{col.titulo}</div>
              <div className="flex flex-col gap-2.75">
                {col.itens.map((item) => (
                  <a key={item} href="#footer" className="text-[14px] text-lead transition-colors duration-[180ms] hover:text-indigo">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-wrap gap-3 justify-between text-[13px] text-body-accessible">
          <span>© 2026 Aprova Aê. Todos os direitos reservados.</span>
          <span>Feito para quem tem um objetivo.</span>
        </div>
      </div>
    </footer>
  );
}
