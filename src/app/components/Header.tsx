import { ArrowRight } from 'lucide-react';
import logoImage from '../image/itros_icon.svg';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#131415]/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-[1320px] px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoImage} alt="ITROS" className="h-9 sm:h-10 md:h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
              Que hacemos
            </a>
            <a href="#portal-inteligente" className="text-sm text-white/70 hover:text-white transition-colors">
              Portal Inteligente
            </a>
            <a href="#soluciones-ia" className="text-sm text-white/70 hover:text-white transition-colors">
              Soluciones con IA
            </a>
            <a href="#why-itros" className="text-sm text-white/70 hover:text-white transition-colors">
              Por que ITROS
            </a>
          </div>

          <a
            href="#contacto"
            className="flex items-center gap-2 bg-[#0251FF] hover:bg-[#2794F6] text-white text-sm sm:text-base px-4 sm:px-7 py-2 sm:py-2.5 rounded-lg transition-colors"
          >
            Contacto
            <ArrowRight className="hidden sm:block w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
