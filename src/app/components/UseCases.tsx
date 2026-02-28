import { Bot, FileText, SearchCheck, Sparkles } from 'lucide-react';

const aiSolutions = [
  {
    icon: Sparkles,
    title: 'Analisis y prediccion operativa',
    scenario: 'Modelos para decisiones de negocio',
    challenge: 'Datos dispersos y analisis manual que retrasan decisiones clave.',
    solution: 'Automatizamos analisis de datos y aplicamos modelos predictivos para anticipar desvio de indicadores y oportunidades de optimizacion.',
    results: ['Menos tiempo de analisis', 'Mejor precision en proyecciones', 'Decisiones basadas en evidencia']
  },
  {
    icon: Bot,
    title: 'Asistentes inteligentes internos',
    scenario: 'Soporte operativo con contexto empresarial',
    challenge: 'Equipos con alta carga de consultas repetitivas y poca visibilidad transversal.',
    solution: 'Integramos asistentes conversacionales conectados a informacion interna para responder, guiar procesos y acelerar ejecucion.',
    results: ['Atencion interna mas rapida', 'Menor carga operativa', 'Mayor autonomia por equipo']
  },
  {
    icon: FileText,
    title: 'Reportes y clasificacion automatica',
    scenario: 'Informacion lista para auditoria y gestion',
    challenge: 'Reportes manuales lentos y documentacion sin estandarizacion.',
    solution: 'Generamos reportes automaticos, clasificamos informacion y estructuramos salidas para seguimiento operativo y ejecutivo.',
    results: ['Reportes consistentes', 'Menos trabajo manual', 'Visibilidad continua del estado operativo']
  },
  {
    icon: SearchCheck,
    title: 'Validacion y deteccion de inconsistencias',
    scenario: 'Control preventivo de procesos criticos',
    challenge: 'Errores detectados tarde en flujos con impacto economico o regulatorio.',
    solution: 'Implementamos reglas inteligentes para validar procesos, detectar anomalias y alertar desajustes antes de que escalen.',
    results: ['Menos errores en ejecucion', 'Mayor trazabilidad', 'Riesgo operativo reducido']
  }
];

export function UseCases() {
  return (
    <section id="soluciones-ia" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-[#131415]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
            <span className="text-sm text-[#2794F6]">Soluciones con IA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
            Inteligencia artificial integrada a procesos de negocio
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Aplicamos IA donde existe impacto medible: eficiencia, calidad de datos, control operativo y mejor toma de decisiones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8 hover:border-[#0251FF]/50 transition-all duration-300"
            >
              <div className="hidden sm:block absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#0251FF] to-transparent" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-[#2794F6]" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1">
                    {solution.title}
                  </h3>
                  <div className="text-sm text-[#2794F6]">
                    {solution.scenario}
                  </div>
                </div>
              </div>

              <div className="space-y-4 ml-0 sm:ml-16">
                <div>
                  <div className="text-sm text-white/50 mb-1">Desafio</div>
                  <p className="text-white/70">
                    {solution.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-sm text-white/50 mb-1">Aplicacion</div>
                  <p className="text-white/70">
                    {solution.solution}
                  </p>
                </div>

                <div>
                  <div className="text-sm text-white/50 mb-2">Impacto</div>
                  <div className="flex flex-wrap gap-2">
                    {solution.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full text-sm text-[#2794F6]"
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
