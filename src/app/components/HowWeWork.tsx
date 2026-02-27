import { ArrowRight } from 'lucide-react';

const portalFeatures = [
  {
    number: '01',
    title: 'Portal modular',
    description: 'Centraliza operaciones de gestion, auditoria y administracion en una plataforma unica, organizada por modulos escalables.'
  },
  {
    number: '02',
    title: 'Arquitectura moderna',
    description: 'Base tecnica moderna para rendimiento estable, evolucion continua y mantenimiento predecible.'
  },
  {
    number: '03',
    title: 'Control empresarial',
    description: 'Control de acceso por perfiles y trazabilidad por usuario para operar con seguridad y evidencia en cada accion.'
  },
  {
    number: '04',
    title: 'Integracion y despliegue',
    description: 'Conecta sistemas internos y servicios externos para escalar sin frenar la operacion.'
  }
];

export function HowWeWork() {
  return (
    <section id="portal-inteligente" className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#131415] to-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
            <span className="text-sm text-[#2794F6]">Portal Inteligente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
            Una plataforma para ordenar, escalar y decidir con datos confiables
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Nuestro portal empresarial integra procesos, seguridad e infraestructura en un entorno listo para crecer con la empresa.
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
                  <h3 className="text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
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
