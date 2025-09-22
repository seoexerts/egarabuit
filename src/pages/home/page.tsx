
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import CookieBanner from '../../components/feature/CookieBanner';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/feature/ScrollToTop';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EgaraBuit",
    "description": "Empresa especializada en vaciado de locales comerciales, oficinas y naves industriales en Terrassa, Barcelona",
    "url": "https://egarabuit.com",
    "telephone": "+34609936590",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Terrassa",
      "addressRegion": "Barcelona",
      "postalCode": "08221",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.56311",
      "longitude": "2.01073"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.56311",
        "longitude": "2.01073"
      },
      "geoRadius": "50000"
    },
    "serviceType": ["Vaciado de locales comerciales", "Vaciado de oficinas", "Vaciado de naves industriales", "Limpieza posterior", "Gestión de residuos"],
    "priceRange": "€€",
    "openingHours": ["Mo-Fr 08:00-19:00", "Sa 09:00-14:00"],
    "image": "https://egarabuit.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/egarabuit",
      "https://www.instagram.com/egarabuit"
    ]
  };

  return (
    <>
      <SEOHead
        title="Vaciado Locales Comerciales Terrassa | EgaraBuit ☎️ 609936590"
        description="✅ Empresa especializada en vaciado de locales comerciales, oficinas y naves industriales en Terrassa. Servicio profesional y rápido. ☎️ 609936590"
        keywords="vaciado locales comerciales Terrassa, vaciado oficinas Barcelona, vaciado naves industriales, limpieza vaciado, gestión mobiliario"
        schema={schema}
      />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20commercial%20space%20clearance%20team%20working%20in%20modern%20office%20building%20with%20empty%20desks%20and%20furniture%20removal%20in%20Terrassa%20Barcelona%2C%20industrial%20warehouse%20cleaning%20service%2C%20professional%20workers%20in%20uniform%2C%20clean%20organized%20space%2C%20bright%20lighting%2C%20modern%20architecture%2C%20minimal%20background&width=1920&height=1080&seq=hero-home&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-white w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vaciado de locales comerciales en Terrassa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Especialistas en vaciado profesional de locales comerciales, oficinas y naves industriales. 
              Servicio rápido, eficiente y responsable con el medio ambiente en Terrassa y toda Barcelona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  <i className="fas fa-phone mr-2"></i>
                  Solicitar Presupuesto
                </Button>
              </Link>
              <a href="tel:609936590">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                  609 93 65 90
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros servicios especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para el vaciado y limpieza de espacios comerciales e industriales 
              con garantía de calidad y respeto por el medio ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-store",
                title: "Vaciado de Locales Comerciales",
                description: "Vaciado completo de tiendas, comercios y espacios retail. Retirada de estanterías, mostradores, equipos comerciales y mercancía residual con total discreción y profesionalidad."
              },
              {
                icon: "fas fa-building",
                title: "Vaciado de Oficinas",
                description: "Desmontaje y retirada de mobiliario de oficina, equipos informáticos, archivadores y material de oficina. Servicio ideal para mudanzas empresariales y cierre de oficinas."
              },
              {
                icon: "fas fa-industry",
                title: "Vaciado de Naves Industriales",
                description: "Vaciado de instalaciones industriales, retirada de maquinaria pesada, equipos industriales y materiales. Especialistas en espacios de gran volumen con acceso para camiones."
              },
              {
                icon: "fas fa-broom",
                title: "Limpieza y Desinfección",
                description: "Limpieza profunda posterior al vaciado con productos profesionales. Desinfección completa del espacio dejándolo listo para su nuevo uso o entrega al propietario."
              },
              {
                icon: "fas fa-truck",
                title: "Gestión de Mobiliario",
                description: "Clasificación, desmontaje y gestión responsable de mobiliario y enseres. Separamos materiales reciclables y gestionamos la donación de elementos en buen estado."
              },
              {
                icon: "fas fa-recycle",
                title: "Transporte a Puntos Limpios",
                description: "Transporte y entrega en puntos limpios autorizados de todos los materiales y residuos. Certificamos el tratamiento ecológico y responsable de todos los desechos."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicios">
              <Button size="lg">
                Ver Todos los Servicios
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir EgaraBuit?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Con más de 10 años de experiencia en el sector, somos la empresa de referencia en 
                Terrassa para el vaciado profesional de espacios comerciales e industriales.
              </p>
              
              <div className="grid grid-cols-1 sm-grid-cols-2 gap-6">
                {[
                  { icon: "fas fa-clock", title: "Rapidez", desc: "Servicio en 24-48h" },
                  { icon: "fas fa-shield-alt", title: "Garantía", desc: "Trabajo 100% garantizado" },
                  { icon: "fas fa-leaf", title: "Ecológico", desc: "Gestión responsable" },
                  { icon: "fas fa-users", title: "Profesional", desc: "Equipo especializado" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20cleaning%20and%20clearance%20team%20in%20modern%20commercial%20space%20in%20Barcelona%2C%20workers%20in%20blue%20uniforms%20organizing%20and%20cleaning%20empty%20office%20space%2C%20professional%20equipment%2C%20clean%20industrial%20environment%2C%20natural%20lighting%2C%20modern%20architecture%2C%20teamwork%20and%20efficiency&width=600&height=400&seq=why-choose&orientation=landscape"
                alt="Equipo profesional de EgaraBuit trabajando"
                className="rounded-lg shadow-lg w-full object-cover object-top h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zona de servicio
            </h2>
            <p className="text-xl text-gray-600">
              Prestamos nuestros servicios en Terrassa y toda la provincia de Barcelona
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Terrassa", "Sabadell", "Barcelona", "Rubí", "Cerdanyola", "Sant Cugat",
              "Matadepera", "Viladecavalls", "Ullastrell", "Rellinars", "Vacarisses", "Castellbisbal"
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-map-marker-alt text-blue-600 mb-2"></i>
                <p className="font-medium text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas vaciar tu local o oficina?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contacta con nosotros hoy mismo para recibir un presupuesto gratuito y sin compromiso. 
            Te ofrecemos la mejor solución para tu proyecto de vaciado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <i className="fas fa-envelope mr-2"></i>
                Solicitar Presupuesto
              </Button>
            </Link>
            <a href="tel:609936590">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
                <i className="fas fa-phone mr-2"></i>
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
