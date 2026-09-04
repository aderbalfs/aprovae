import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape' && menuAberto) setMenuAberto(false);
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [menuAberto]);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="sticky top-0 z-50 bg-white/86 backdrop-blur-[14px] border-b border-line">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,4vw,32px)] min-h-[74px] flex items-center gap-[clamp(16px,3vw,40px)] relative">
        <a href="#top" className="aa-check-pop [animation-delay:.15s] flex items-center shrink-0">
          <img src="/logo-aprova-ae.png" alt="Aprova Aê" className="h-9 w-auto" />
        </a>

        <nav className="hidden min-[841px]:flex flex-wrap gap-[clamp(14px,2vw,28px)] ml-auto text-[15px] font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-nav-gray transition-colors duration-[180ms] hover:text-indigo">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden min-[841px]:inline-block shrink-0 bg-indigo text-white font-display font-bold text-[15px] px-5 py-[11px] rounded-[11px] shadow-[0_6px_18px_-8px_rgba(0,20,237,.7)] transition-all duration-[180ms] hover:bg-navy hover:-translate-y-px hover:shadow-[0_12px_26px_-10px_rgba(0,20,237,.75)] active:scale-[0.96]"
        >
          Começar agora
        </a>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-controls="aa-mobile-menu"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          className="max-[840px]:flex hidden ml-auto w-10 h-10 border border-line rounded-lg bg-white items-center justify-center cursor-pointer p-0 shrink-0 transition-all duration-[180ms] hover:bg-mist active:scale-[0.92]"
        >
          <span className="flex flex-col items-center justify-center w-5 h-3.5 relative">
            <span
              className="block absolute top-0 w-5 h-0.5 bg-navy transition-transform duration-[250ms]"
              style={menuAberto ? { transform: 'translateY(6px) rotate(45deg)' } : undefined}
            />
            <span
              className="block absolute top-1.5 w-5 h-0.5 bg-navy transition-opacity duration-200"
              style={menuAberto ? { opacity: 0 } : undefined}
            />
            <span
              className="block absolute top-3 w-5 h-0.5 bg-navy transition-transform duration-[250ms]"
              style={menuAberto ? { transform: 'translateY(-6px) rotate(-45deg)' } : undefined}
            />
          </span>
        </button>

        {menuAberto && (
          <nav
            id="aa-mobile-menu"
            aria-label="Menu principal"
            className="absolute top-full left-[clamp(20px,4vw,32px)] right-[clamp(20px,4vw,32px)] mt-2.5 bg-white border border-line rounded-2xl shadow-[0_24px_44px_-26px_rgba(0,3,102,.4)] p-2 flex flex-col [animation:aa-menu-in_.22s_cubic-bezier(.16,1,.3,1)_both]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={fecharMenu}
                className="px-3 py-3.5 text-[16px] font-medium text-nav-gray border-b border-footer-divider transition-colors duration-[180ms] hover:text-indigo"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={fecharMenu}
              className="block text-center mt-2.5 mx-1 mb-1 bg-indigo text-white font-display font-bold text-[16px] p-3.5 rounded-xl transition-all duration-[180ms] hover:bg-navy active:scale-[0.97]"
            >
              Começar agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
