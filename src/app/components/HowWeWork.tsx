import { ArrowRight } from 'lucide-react';

const portalFeatures = [
  {
    number: '01',
    title: 'Portal modular',
    description: 'Centraliza operaciones de gesti\u00f3n, auditor\u00eda y administraci\u00f3n en una plataforma \u00fanica, organizada por m\u00f3dulos escalables.'
  },
  {
    number: '02',
    title: 'Arquitectura moderna',
    description: 'Base t\u00e9cnica moderna para un rendimiento estable, evoluci\u00f3n continua y mantenimiento predecible.'
  },
  {
    number: '03',
    title: 'Control empresarial',
    description: 'Control de acceso por perfiles y trazabilidad por usuario para operar con seguridad y evidencia en cada acci\u00f3n.'
  },
  {
    number: '04',
    title: 'Integraci\u00f3n y despliegue',
    description: 'Conecta sistemas internos y servicios externos para escalar sin frenar la operaci\u00f3n.'
  }
];

export function HowWeWork() {
  return (
    <section id="portal-inteligente" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#131415] to-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-8 lg:gap-12 items-end mb-16 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
              <span className="text-sm text-[#2794F6]">Portal Inteligente</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 max-w-3xl">
              Una plataforma para ordenar procesos y sostener decisiones con datos confiables
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/72 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            Unificamos operaciones, seguridad y escalabilidad en una base preparada para crecer sin volver a improvisar cada cambio.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0251FF]/20 via-[#0251FF] to-[#0251FF]/20" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2794F6] to-transparent animate-pulse"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite'
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portalFeatures.map((feature, index) => (
              <div key={index} className="relative">
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 rounded-full bg-[#131415] border-2 border-[#0251FF] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#2794F6] animate-pulse" />
                </div>

                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-light text-[#0251FF]/30 mb-4">
                    {feature.number}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/72 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {index < portalFeatures.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight className="w-6 h-6 text-[#0251FF]/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
