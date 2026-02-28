import logoImage from '../../assets/bbf66e82f9d30b985d305d479af433114012ffdd.png';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logoImage} alt="ITROS" className="h-10 mb-4" />
            <p className="text-white/60 max-w-md leading-relaxed">
              Ecosistemas digitales para empresas que necesitan eficiencia operativa, control y escalabilidad con una base tecnol&oacute;gica s&oacute;lida.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Capacidades</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-[#2794F6] transition-colors">Qu&eacute; hacemos</a></li>
              <li><a href="#portal-inteligente" className="text-white/60 hover:text-[#2794F6] transition-colors">Portal Inteligente</a></li>
              <li><a href="#soluciones-ia" className="text-white/60 hover:text-[#2794F6] transition-colors">Soluciones con IA</a></li>
              <li><a href="#why-itros" className="text-white/60 hover:text-[#2794F6] transition-colors">Por qu&eacute; ITROS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li><a href="mailto:nicolas@itros.ar" className="text-white/60 hover:text-[#2794F6] transition-colors">nicolas@itros.ar</a></li>
              <li><a href="mailto:maxi@itros.ar" className="text-white/60 hover:text-[#2794F6] transition-colors">maxi@itros.ar</a></li>
              <li><a href="tel:+5493417415834" className="text-white/60 hover:text-[#2794F6] transition-colors">+54 9 3417 41-5834</a></li>
              <li><a href="#contacto" className="text-white/60 hover:text-[#2794F6] transition-colors">Agendar reuni&oacute;n</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 ITROS. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-white/40 hover:text-[#2794F6] text-sm transition-colors">Pol&iacute;tica de privacidad</a>
            <a href="#" className="text-white/40 hover:text-[#2794F6] text-sm transition-colors">T&eacute;rminos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



