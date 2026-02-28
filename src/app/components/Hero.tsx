import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/7c856a28c1ca2105ace97221d7f416a084ad4ee3.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.2fr_1.6fr] gap-8 lg:gap-6 items-center">
          <div className="order-1 space-y-7 max-w-[46rem] relative z-20 pb-0 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-2 bg-white/5 border border-[#0251FF]/30 rounded-full">
              <span className="text-sm text-white/80">Software empresarial, infraestructura e IA aplicada</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-medium text-white leading-tight">
              Ingenieria digital para empresas que necesitan control, trazabilidad e inteligencia operativa.
            </h1>

            <p className="text-[0.95rem] sm:text-base md:text-[1.05rem] text-white/90 lg:text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 py-1 rounded-md bg-black/35 lg:bg-transparent backdrop-blur-[1px] lg:backdrop-blur-0">
              En ITROS diseniamos y construimos ecosistemas tecnologicos a medida: software empresarial, infraestructura escalable e inteligencia artificial aplicada para automatizar procesos, mejorar decisiones y operar con mayor precision.
            </p>

            <div className="hidden lg:flex flex-wrap gap-4 pt-2">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#131415] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
                Explorar capacidades
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#contacto" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
                Hablar con ITROS
              </a>
            </div>
          </div>

          <div className="order-2 -mt-48 sm:-mt-56 lg:mt-0 relative z-0 flex items-center justify-center lg:justify-end lg:-mr-8 xl:-mr-14 pointer-events-none">
            <img
              src={heroImage}
              alt="ITROS intelligent digital ecosystem"
              className="w-full max-w-[920px] lg:max-w-[1280px] xl:max-w-[1450px] h-auto opacity-55 sm:opacity-72 lg:opacity-95 lg:scale-112 xl:scale-118 origin-center mx-auto lg:translate-x-4 xl:translate-x-8"
            />
          </div>

          <div className="order-3 lg:hidden flex flex-wrap gap-4 relative z-20 w-full max-w-md mx-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#131415] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
              Explorar capacidades
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#contacto" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
              Hablar con ITROS
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0251FF]/10 via-[#0251FF]/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(2,81,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2,81,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 350px'
          }}
        />
      </div>
    </section>
  );
}

