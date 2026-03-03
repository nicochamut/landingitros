import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/7c856a28c1ca2105ace97221d7f416a084ad4ee3.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-36 lg:pb-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.05fr_1.25fr] gap-10 lg:gap-8 items-center">
          <div className="order-1 space-y-7 max-w-[42rem] relative z-20 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-2 bg-white/5 border border-[#0251FF]/30 rounded-full">
              <span className="text-sm text-white/85">Software empresarial, infraestructura e IA aplicada</span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.05]">
              Sistemas, infraestructura e inteligencia aplicada para operar con m&aacute;s control.
            </h1>

            <p className="text-base sm:text-lg text-white/78 leading-relaxed max-w-2xl">
              Dise&ntilde;amos soluciones a medida para empresas que necesitan ordenar procesos cr&iacute;ticos, reducir trabajo manual y tomar decisiones con informaci&oacute;n confiable.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-white/75">
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">Menos fricci&oacute;n operativa</span>
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">M&aacute;s trazabilidad</span>
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">Escalabilidad sin improvisaci&oacute;n</span>
            </div>

            <div className="hidden lg:flex flex-wrap gap-4 pt-2">
              <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#131415] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
                Ver soluciones
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portal-inteligente" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
                C&oacute;mo trabajamos
              </a>
            </div>
          </div>

          <div className="order-2 mt-2 sm:mt-4 lg:mt-0 relative z-0 flex items-center justify-center lg:justify-end lg:-mr-6 xl:-mr-10 pointer-events-none">
            <img
              src={heroImage}
              alt="ITRos intelligent digital ecosystem"
              className="w-full max-w-[780px] sm:max-w-[860px] lg:max-w-[1180px] xl:max-w-[1320px] h-auto opacity-45 sm:opacity-60 lg:opacity-92 scale-100 lg:scale-105 xl:scale-110 origin-center mx-auto lg:translate-x-2 xl:translate-x-6"
            />
          </div>

          <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-4 relative z-20 w-full max-w-xl mx-auto">
            <a href="#services" className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-white text-[#131415] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
              Ver soluciones
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contacto" className="w-full sm:flex-1 flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
              Agendar reuni&oacute;n
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

