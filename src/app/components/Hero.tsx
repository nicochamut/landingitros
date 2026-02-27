import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/7c856a28c1ca2105ace97221d7f416a084ad4ee3.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-24 lg:py-28 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.15fr_1.65fr] gap-10 lg:gap-4 items-center">
          <div className="space-y-8 max-w-3xl relative z-10 mx-auto lg:mx-0">
            <div className="inline-block px-4 py-2 bg-white/5 border border-[#0251FF]/30 rounded-full">
              <span className="text-sm text-white/80">Software empresarial, infraestructura e IA aplicada</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              Ingenieria digital para empresas que necesitan control, trazabilidad e inteligencia operativa.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              En ITROS diseniamos y construimos ecosistemas tecnologicos a medida: software empresarial, infraestructura escalable e inteligencia artificial aplicada para automatizar procesos, mejorar decisiones y operar con mayor precision.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#131415] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
                Explorar capacidades
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
                Hablar con ITROS
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end lg:-mr-12 xl:-mr-20">
            <img
              src={heroImage}
              alt="ITROS intelligent digital ecosystem"
              className="w-full max-w-[1020px] lg:max-w-[1460px] xl:max-w-[1660px] h-auto opacity-95 lg:scale-125 xl:scale-132 origin-center lg:translate-x-8 xl:translate-x-12"
            />
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

