import { Bot, FileText, SearchCheck, Sparkles } from 'lucide-react';

const aiSolutions = [
  {
    icon: Sparkles,
    title: 'An\u00e1lisis y predicci\u00f3n operativa',
    scenario: 'Modelos para decisiones de negocio',
    challenge: 'Datos dispersos y an\u00e1lisis manual que demoran decisiones clave.',
    solution: 'Automatizamos el an\u00e1lisis de datos y aplicamos modelos predictivos para anticipar desv\u00edos de indicadores y detectar oportunidades de optimizaci\u00f3n.',
    results: ['Menos tiempo de an\u00e1lisis', 'M\u00e1s precisi\u00f3n en proyecciones', 'Decisiones basadas en evidencia']
  },
  {
    icon: Bot,
    title: 'Asistentes inteligentes internos',
    scenario: 'Soporte operativo con contexto empresarial',
    challenge: 'Equipos con alta carga de consultas repetitivas y poca visibilidad transversal.',
    solution: 'Integramos asistentes conversacionales conectados a informaci\u00f3n interna para responder, guiar procesos y acelerar la ejecuci\u00f3n.',
    results: ['Atenci\u00f3n interna m\u00e1s r\u00e1pida', 'Menor carga operativa', 'Mayor autonom\u00eda por equipo']
  },
  {
    icon: FileText,
    title: 'Reportes y clasificaci\u00f3n autom\u00e1tica',
    scenario: 'Informaci\u00f3n lista para auditor\u00eda y gesti\u00f3n',
    challenge: 'Reportes manuales lentos y documentaci\u00f3n sin estandarizaci\u00f3n.',
    solution: 'Generamos reportes autom\u00e1ticos, clasificamos informaci\u00f3n y estructuramos salidas para el seguimiento operativo y ejecutivo.',
    results: ['Reportes consistentes', 'Menos trabajo manual', 'Visibilidad continua del estado operativo']
  },
  {
    icon: SearchCheck,
    title: 'Validaci\u00f3n y detecci\u00f3n de inconsistencias',
    scenario: 'Control preventivo de procesos cr\u00edticos',
    challenge: 'Errores detectados tarde en flujos con impacto econ\u00f3mico o regulatorio.',
    solution: 'Implementamos reglas inteligentes para validar procesos, detectar anomal\u00edas y alertar desajustes antes de que escalen.',
    results: ['Menos errores en ejecuci\u00f3n', 'Mayor trazabilidad', 'Riesgo operativo reducido']
  }
];

export function UseCases() {
  return (
    <section id="soluciones-ia" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-[#131415]">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-end mb-16 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
              <span className="text-sm text-[#2794F6]">Soluciones con IA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 max-w-3xl">
              IA integrada donde hay impacto operativo y decisiones que acelerar
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/72 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            Aplicamos inteligencia artificial en flujos concretos, con foco en eficiencia, calidad de datos, prevenci&oacute;n de errores y mejor capacidad de respuesta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white/[0.025] border border-white/10 rounded-xl p-6 sm:p-8 hover:border-[#0251FF]/50 transition-all duration-300"
            >
              <div className="hidden sm:block absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#0251FF] to-transparent" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-[#2794F6]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {solution.title}
                  </h3>
                  <div className="text-sm text-[#5caeff]">
                    {solution.scenario}
                  </div>
                </div>
              </div>

              <div className="space-y-4 ml-0 sm:ml-16">
                <div>
                  <div className="text-sm text-white/60 mb-1">Desaf&iacute;o</div>
                  <p className="text-white/78">
                    {solution.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-sm text-white/60 mb-1">Aplicaci&oacute;n</div>
                  <p className="text-white/78">
                    {solution.solution}
                  </p>
                </div>

                <div>
                  <div className="text-sm text-white/60 mb-2">Impacto</div>
                  <div className="flex flex-wrap gap-2">
                    {solution.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full text-sm text-[#5caeff]"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
