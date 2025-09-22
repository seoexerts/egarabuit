
import { Link } from 'react-router-dom';
import CookieBanner from './CookieBanner';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-blue-400 font-sans">
                  EgaraBuit
                </div>
              </Link>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Especialistas en vaciado de locales comerciales, oficinas y naves industriales en Terrassa y alrededores. 
                Servicio profesional, rápido y eficiente con más de 10 años de experiencia.
              </p>
              <div className="flex space-x-4">
                <a href="tel:609936590" className="text-blue-400 hover:text-blue-300 cursor-pointer">
                  <i className="fas fa-phone text-xl"></i>
                </a>
                <a href="mailto:info@egarabuit.com" className="text-blue-400 hover:text-blue-300 cursor-pointer">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Inicio</Link></li>
                <li><Link to="/empresa" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Empresa</Link></li>
                <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Servicios</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">FAQ</Link></li>
                <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contacto</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Vaciado de locales comerciales</li>
                <li className="text-gray-300">Vaciado de oficinas</li>
                <li className="text-gray-300">Vaciado de naves industriales</li>
                <li className="text-gray-300">Limpieza y desinfección</li>
                <li className="text-gray-300">Gestión de mobiliario</li>
                <li className="text-gray-300">Transporte a puntos limpios</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <p className="text-gray-400 text-sm">
                © 2024 EgaraBuit. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">
                  Made with Readdy
                </a>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <Link to="/aviso-legal" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Aviso legal
              </Link>
              <span className="text-gray-500">|</span>
              <Link to="/politica-privacidad" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Política de privacidad
              </Link>
              <span className="text-gray-500">|</span>
              <Link to="/politica-cookies" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </>
  );
}
