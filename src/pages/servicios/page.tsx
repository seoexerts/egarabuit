
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import CookieBanner from '../../components/feature/CookieBanner';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function Servicios() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de Vaciado Profesional EgaraBuit",
    "description": "Servicios integrales de vaciado de locales comerciales, oficinas y naves industriales en Terrassa y Barcelona",
    "url": "https://egarabuit.com/servicios",
    "provider": {
      "@type": "LocalBusiness",
      "name": "EgaraBuit",
      "telephone": "+34609936590",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Terrassa",
        "addressRegion": "Barcelona",
        "addressCountry": "ES"
      }
    },
    "serviceType": [
      "Vaciado de locales comerciales",
      "Vaciado de oficinas",
      "Vaciado de naves industriales",
      "Limpieza y desinfección",
      "Gestión de mobiliario",
      "Transporte a puntos limpios"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Terrassa"
      },
      {
        "@type": "State",
        "name": "Barcelona"
      }
    ],
    "offers": {
      "@type": "Offer",
      "description": "Presupuesto gratuito y sin compromiso",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Servicios Vaciado Profesional Terrassa | EgaraBuit"
        description="Servicios especializados: vaciado locales comerciales, oficinas, naves industriales, limpieza y gestión residuos Terrassa. ☎️ 609936590"
        keywords="servicios vaciado Terrassa, vaciado locales comerciales, vaciado oficinas Barcelona, vaciado naves industriales, limpieza posterior vaciado, gestión mobiliario"
        schema={schema}
      />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20commercial%20cleaning%20services%20showcase%20in%20Barcelona%2C%20multiple%20service%20types%20demonstration%2C%20office%20clearance%20and%20industrial%20cleaning%2C%20professional%20equipment%20and%20uniformed%20workers%2C%20modern%20facilities%2C%20comprehensive%20service%20portfolio&width=1920&height=800&seq=servicios-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros servicios profesionales
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluciones integrales de vaciado, limpieza y gestión de residuos para espacios 
            comerciales e industriales en Terrassa y toda Barcelona.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            
            {/* Service 1: Vaciado de Locales Comerciales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Vaciado de locales comerciales
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Servicio especializado en el vaciado completo de tiendas, comercios, restaurantes y 
                  cualquier tipo de local comercial. Nos encargamos de la retirada de estanterías, 
                  mostradores, equipos comerciales, mercancía residual y todos los elementos que 
                  compongan el establecimiento comercial.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Desmontaje de estanterías y expositores comerciales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Retirada de equipos de hostelería y maquinaria comercial</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Gestión de mercancía residual y stock sobrante</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Coordinación con horarios comerciales para mínimas molestias</p>
                  </div>
                </div>
                <Link to="/contacto">
                  <Button>
                    Solicitar Presupuesto
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20commercial%20space%20clearance%20in%20Barcelona%20retail%20store%2C%20empty%20shop%20with%20removed%20shelving%20and%20commercial%20equipment%2C%20clean%20organized%20clearance%20work%2C%20professional%20workers%20in%20uniform%2C%20modern%20retail%20space%20transformation&width=600&height=400&seq=local-comercial&orientation=landscape"
                  alt="Vaciado de local comercial en Terrassa"
                  className="rounded-lg shadow-lg w-full object-cover object-top h-80"
                />
              </div>
            </div>

            {/* Service 2: Vaciado de Oficinas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20office%20clearance%20service%20in%20Barcelona%2C%20empty%20office%20space%20with%20removed%20desks%20and%20computer%20equipment%2C%20modern%20office%20building%2C%20professional%20cleaning%20team%2C%20organized%20furniture%20removal%2C%20clean%20corporate%20environment&width=600&height=400&seq=oficinas&orientation=landscape"
                  alt="Vaciado de oficinas en Barcelona"
                  className="rounded-lg shadow-lg w-full object-cover object-top h-80"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Vaciado de oficinas
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Especialistas en el desmontaje y retirada de mobiliario de oficina, equipos informáticos, 
                  sistemas de archivo y todo tipo de material corporativo. Ideal para empresas en proceso 
                  de mudanza, reestructuración o cierre de instalaciones. Garantizamos la confidencialidad 
                  y seguridad en el manejo de documentación empresarial.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Desmontaje de mobiliario modular y mesas de oficina</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Retirada segura de equipos informáticos y servidores</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Gestión confidencial de archivos y documentación</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Servicio fuera de horario laboral disponible</p>
                  </div>
                </div>
                <Link to="/contacto">
                  <Button>
                    Más Información
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 3: Vaciado de Naves Industriales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Vaciado de naves industriales
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Servicio especializado en el vaciado de instalaciones industriales de gran envergadura. 
                  Contamos con maquinaria pesada y equipos especializados para la retirada de maquinaria 
                  industrial, equipos de producción, estructuras metálicas y materiales de gran volumen. 
                  Coordinamos con grúas y camiones de gran tonelaje cuando es necesario.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Desmontaje de maquinaria industrial pesada</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Retirada de estructuras metálicas y instalaciones</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Coordinación con grúas y transporte especializado</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <p className="text-gray-600">Gestión de residuos industriales y chatarra</p>
                  </div>
                </div>
                <Link to="/contacto">
                  <Button>
                    Consultar Proyecto
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Industrial%20warehouse%20clearance%20in%20Barcelona%2C%20large%20empty%20industrial%20space%20with%20removed%20heavy%20machinery%2C%20professional%20industrial%20cleaning%20team%2C%20specialized%20equipment%2C%20modern%20industrial%20facility%2C%20organized%20clearance%20operation&width=600&height=400&seq=nave-industrial&orientation=landscape"
                  alt="Vaciado de nave industrial en Terrassa"
                  className="rounded-lg shadow-lg w-full object-cover object-top h-80"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios complementarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completamos nuestro servicio de vaciado con estas prestaciones adicionales 
              para ofrecerte una solución integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Limpieza y Desinfección */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-broom text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Limpieza y desinfección posterior
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Una vez completado el vaciado, realizamos una limpieza profunda y desinfección 
                completa del espacio. Utilizamos productos profesionales y técnicas especializadas 
                para dejar el local en perfectas condiciones de entrega. Incluye limpieza de 
                suelos, paredes, techos, sanitarios y eliminación de residuos menores.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Limpieza profunda integral</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Desinfección con productos profesionales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Limpieza de cristales y superficies</span>
                </li>
              </ul>
              <Link to="/contacto">
                <Button variant="outline" size="sm">
                  Solicitar Servicio
                </Button>
              </Link>
            </div>

            {/* Gestión de Mobiliario */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-couch text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Gestión y retirada de mobiliario
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nos encargamos de la clasificación, desmontaje y gestión responsable de todo el 
                mobiliario y enseres. Separamos los elementos que pueden ser reutilizados o 
                donados a organizaciones benéficas, optimizando el aprovechamiento de recursos 
                y minimizando el impacto medioambiental del proceso de vaciado.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Clasificación por materiales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Donación a entidades benéficas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Desmontaje profesional</span>
                </li>
              </ul>
              <Link to="/contacto">
                <Button variant="outline" size="sm">
                  Más Detalles
                </Button>
              </Link>
            </div>

            {/* Transporte a Puntos Limpios */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-recycle text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Transporte a puntos limpios autorizados
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Garantizamos el transporte y entrega de todos los materiales y residuos a puntos 
                limpios autorizados. Somos gestores autorizados de residuos y cumplimos toda la 
                normativa medioambiental vigente. Proporcionamos certificados de entrega y 
                tratamiento ecológico de todos los desechos generados.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Gestores autorizados de residuos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Certificados de entrega</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-500 text-sm"></i>
                  <span className="text-sm text-gray-600">Cumplimiento normativa ambiental</span>
                </li>
              </ul>
              <Link to="/contacto">
                <Button variant="outline" size="sm">
                  Información Legal
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro proceso de trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un método probado que garantiza resultados óptimos en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Evaluación Inicial",
                description: "Visitamos el espacio, evaluamos el volumen de trabajo y proporcionamos un presupuesto detallado sin compromiso."
              },
              {
                step: "02", 
                title: "Planificación",
                description: "Diseñamos un plan de trabajo personalizado, coordinamos horarios y preparamos el equipo y maquinaria necesaria."
              },
              {
                step: "03",
                title: "Ejecución",
                description: "Realizamos el vaciado siguiendo todas las medidas de seguridad, con supervisión constante y comunicación continua."
              },
              {
                step: "04",
                title: "Finalización",
                description: "Limpieza final, entrega de certificados de gestión de residuos y verificación de la satisfacción del cliente."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas alguno de nuestros servicios?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No esperes más. Contacta con nosotros hoy mismo para recibir un presupuesto 
            personalizado y sin compromiso. Te atendemos de manera inmediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <i className="fas fa-envelope mr-2"></i>
                Solicitar Presupuesto
              </Button>
            </Link>
            <a href="tel:609936590">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <i className="fas fa-phone mr-2"></i>
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
