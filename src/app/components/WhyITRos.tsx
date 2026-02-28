import { Award, Clock, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Arquitectura robusta',
    metric: 'Segura',
    description: 'Dise\u00f1amos plataformas con control de acceso, trazabilidad y una estructura t\u00e9cnica preparada para entornos empresariales exigentes.'
  },
  {
    icon: Clock,
    title: 'Eficiencia operativa',
    metric: '\u00c1gil',
    description: 'Automatizamos tareas cr\u00edticas para reducir tiempos de ejecuci\u00f3n, dependencia manual y errores repetitivos en la operaci\u00f3n diaria.'
  },
  {
    icon: Award,
    title: 'Soluciones a medida',
    metric: 'A medida',
    description: 'No vendemos software gen\u00e9rico: construimos ecosistemas digitales alineados al contexto, los procesos y los objetivos de cada empresa.'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad real',
    metric: 'Evolutiva',
    description: 'Combinamos software, infraestructura e IA en una base que crece con el negocio sin perder estabilidad ni gobernanza.'
  }
];

export function WhyITRos() {
  return (
    <section id="why-itros" className="py-16 sm:py-20 px-4 sm:px-6 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
            <span className="text-sm text-[#2794F6]">Por qu&eacute; ITROS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
            Socio tecnol&oacute;gico para operaciones complejas
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Unificamos desarrollo, infraestructura e inteligencia aplicada para que tu operaci&oacute;n gane control, continuidad y capacidad de evoluci&oacute;n.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 rounded-lg p-8 hover:border-[#0251FF]/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-lg">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#0251FF] to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#0251FF] to-transparent" />
                </div>

                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#2794F6]" />
                </div>

                <div className="text-3xl sm:text-4xl font-light text-white mb-2">
                  {benefit.metric}
                </div>

                <h3 className="text-xl text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
