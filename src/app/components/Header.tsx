import { ArrowRight } from 'lucide-react';
import logoImage from '../image/itros_icon.svg';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#131415]/88 backdrop-blur-md">
      <nav className="mx-auto max-w-[1320px] px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="ITRos" className="h-9 sm:h-10 md:h-12 w-auto" />
            <span className="text-sm sm:text-lg md:text-xl font-semibold tracking-[0.1em] sm:tracking-[0.12em] text-white">
              ITRos
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <a href="#services" className="text-sm text-white/75 hover:text-white transition-colors">
              Qu&eacute; hacemos
            </a>
            <a href="#portal-inteligente" className="text-sm text-white/75 hover:text-white transition-colors">
              Portal Inteligente
            </a>
            <a href="#soluciones-ia" className="text-sm text-white/75 hover:text-white transition-colors">
              Soluciones con IA
            </a>
            <a href="#why-itros" className="text-sm text-white/75 hover:text-white transition-colors">
              Por qu&eacute; ITRos
            </a>
          </div>

          <a
            href="#contacto"
            className="flex items-center gap-2 bg-[#0251FF] hover:bg-[#2794F6] text-white text-xs sm:text-base px-3 sm:px-7 py-2 sm:py-2.5 rounded-lg transition-colors shrink-0"
          >
            <span className="sm:hidden">Contacto</span>
            <span className="hidden sm:inline">Agendar reuni&oacute;n</span>
            <ArrowRight className="hidden sm:block w-4 h-4" />
          </a>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:hidden">
          <a href="#services" className="text-xs text-white/75 hover:text-white transition-colors">
            Qu&eacute; hacemos
          </a>
          <a href="#portal-inteligente" className="text-xs text-white/75 hover:text-white transition-colors">
            Portal
          </a>
          <a href="#soluciones-ia" className="text-xs text-white/75 hover:text-white transition-colors">
            IA
          </a>
          <a href="#why-itros" className="text-xs text-white/75 hover:text-white transition-colors">
            Por qu&eacute; ITRos
          </a>
        </div>
      </nav>
    </header>
  );
}
