import { Cloud, Cog, Lock, Network, Server, Zap } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Gesti\u00f3n y administraci\u00f3n digital',
    description: 'Digitalizamos procesos de gesti\u00f3n y administraci\u00f3n para reducir tareas manuales, eliminar cuellos de botella y sostener operaciones consistentes.'
  },
  {
    icon: Network,
    title: 'Integraci\u00f3n de sistemas y datos',
    description: 'Conectamos sistemas internos y plataformas externas para consolidar informaci\u00f3n y operar con una sola fuente confiable.'
  },
  {
    icon: Zap,
    title: 'Automatizaci\u00f3n operativa',
    description: 'Dise\u00f1amos flujos autom\u00e1ticos para validaciones, aprobaciones y ejecuci\u00f3n de procesos cr\u00edticos con menos error humano.'
  },
  {
    icon: Lock,
    title: 'Seguridad y control de acceso',
    description: 'Implementamos esquemas de acceso por perfiles y permisos granulares para proteger datos y mantener trazabilidad por acci\u00f3n.'
  },
  {
    icon: Cloud,
    title: 'Infraestructura empresarial escalable',
    description: 'Desplegamos infraestructura escalable con almacenamiento integrado, observabilidad y continuidad operativa.'
  },
  {
    icon: Server,
    title: 'Despliegues y escalabilidad',
    description: 'Construimos plataformas modulares para crecer por etapas sin comprometer estabilidad ni rendimiento.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#131415]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
            <span className="text-sm text-[#2794F6]">Qu&eacute; hacemos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
            Soluciones digitales construidas para la operaci&oacute;n real
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Desarrollamos soluciones para empresas que necesitan orden, control y trazabilidad en procesos cr&iacute;ticos. Cada implementaci&oacute;n responde al contexto del negocio, no a plantillas gen&eacute;ricas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8 hover:border-[#0251FF]/50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0251FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0251FF]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#2794F6]" />
              </div>

              <h3 className="text-xl text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
