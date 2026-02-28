import { FormEvent, useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Complet\u00e1 nombre, email y mensaje para continuar.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message ?? 'No se pudo enviar el mensaje.');
      }

      setStatus({
        type: 'success',
        message: 'Mensaje enviado. Te contactamos a la brevedad.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Ocurri\u00f3 un error inesperado al enviar el formulario.';
      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#131415]">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block px-4 py-2 bg-[#0251FF]/10 border border-[#0251FF]/30 rounded-full mb-6">
              <span className="text-sm text-[#2794F6]">Contacto</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-6">
              Si tu operaci&oacute;n exige m&aacute;s orden, control e inteligencia real, conversemos.
            </h2>

            <p className="text-base sm:text-lg text-white/60 mb-12 leading-relaxed">
              Evaluamos tu contexto y dise&ntilde;amos una soluci&oacute;n tecnol&oacute;gica alineada con tus objetivos de negocio.
              ITROS trabaja como socio estrat&eacute;gico para ejecutar, integrar y evolucionar tu ecosistema digital.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2794F6]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Email</div>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:nicolas@itros.ar" className="text-white hover:text-[#2794F6] transition-colors">
                      nicolas@itros.ar
                    </a>
                    <a href="mailto:maxi@itros.ar" className="text-white hover:text-[#2794F6] transition-colors">
                      maxi@itros.ar
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2794F6]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Tel&eacute;fono</div>
                  <a href="tel:+5493417415834" className="text-white hover:text-[#2794F6] transition-colors">
                    +54 9 3417 41-5834
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0251FF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2794F6]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Ubicaci&oacute;n</div>
                  <div className="text-white">Rosario, Santa Fe</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#0251FF] focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#0251FF] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#0251FF] focus:outline-none transition-colors"
                    placeholder="Nombre de la empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#0251FF] focus:outline-none transition-colors resize-none"
                    placeholder="Contanos qu\u00e9 est\u00e1s buscando resolver"
                  />
                </div>

                {status.type !== 'idle' && (
                  <p className={status.type === 'success' ? 'text-green-400 text-sm' : 'text-red-400 text-sm'}>
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#0251FF] hover:bg-[#2794F6] text-white px-8 py-4 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar reuni\u00f3n'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
