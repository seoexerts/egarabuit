
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import CookieBanner from '../../components/feature/CookieBanner';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function Empresa() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EgaraBuit",
    "description": "Empresa familiar especializada en vaciado de locales comerciales desde 2014 en Terrassa, Barcelona",
    "url": "https://egarabuit.com/empresa",
    "foundingDate": "2014",
    "numberOfEmployees": "10-50",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Terrassa",
      "addressRegion": "Barcelona",
      "postalCode": "08221",
      "addressCountry": "ES"
    },
    "telephone": "+34609936590",
    "email": "info@egarabuit.com",
    "areaServed": {
      "@type": "State",
      "name": "Cataluña"
    },
    "serviceType": [
      "Vaciado de locales comerciales",
      "Vaciado de oficinas",
      "Vaciado de naves industriales",
      "Limpieza posterior",
      "Gestión de residuos"
    ],
    "founder": {
      "@type": "Person",
      "name": "Josep María Egara"
    }
  };

  return (
    <>
      <SEOHead
        title="Sobre EgaraBuit - Empresa Vaciado Locales Terrassa desde 2014"
        description="Conoce EgaraBuit, empresa familiar con +10 años experiencia vaciado locales comerciales Terrassa. Profesionalidad, rapidez y compromiso medioambiental."
        keywords="empresa vaciado Terrassa, historia EgaraBuit, experiencia vaciado locales, empresa familiar Barcelona"
        schema={schema}
      />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20business%20team%20in%20modern%20office%20setting%20Barcelona%2C%20experienced%20workers%20in%20company%20uniforms%2C%20corporate%20environment%2C%20teamwork%20and%20professionalism%2C%20industrial%20cleaning%20equipment%2C%20clean%20organized%20workspace%2C%20natural%20lighting%2C%20business%20success&width=1920&height=800&seq=empresa-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestra empresa
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Más de 10 años de experiencia nos avalan como líderes en el vaciado profesional 
            de espacios comerciales e industriales en Terrassa y Barcelona.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra historia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EgaraBuit nació en 2014 como una empresa familiar con el objetivo de ofrecer servicios 
                profesionales de vaciado de locales comerciales en Terrassa. Fundada por Josep María Egara, 
                quien tras años trabajando en el sector de la construcción, identificó la necesidad de 
                un servicio especializado y responsable en el vaciado de espacios comerciales.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Durante estos años, hemos consolidado nuestra posición como referentes en el sector, 
                expandiendo nuestros servicios a toda la provincia de Barcelona. Nuestro crecimiento 
                se ha basado siempre en la satisfacción del cliente y el compromiso con la excelencia 
                en cada proyecto que realizamos.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hoy, una década después, seguimos siendo una empresa familiar que mantiene los valores 
                fundacionales: profesionalidad, rapidez, honestidad y respeto por el medio ambiente. 
                Hemos realizado más de 2.500 vaciados exitosos, desde pequeños locales comerciales 
                hasta grandes naves industriales.
              </p>
              <Link to="/contacto">
                <Button>
                  Conócenos Mejor
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Historical%20evolution%20of%20commercial%20cleaning%20company%20in%20Barcelona%2C%20before%20and%20after%20transformation%20of%20commercial%20spaces%2C%20professional%20team%20growth%20over%20years%2C%20modern%20equipment%20and%20traditional%20values%2C%20family%20business%20success%20story%2C%20industrial%20warehouse%20transformation&width=600&height=500&seq=historia&orientation=portrait"
                alt="Evolución de EgaraBuit a lo largo de los años"
                className="rounded-lg shadow-lg w-full object-cover object-top h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Misión, visión y valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los pilares que definen nuestra identidad empresarial y guían cada una de nuestras acciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar servicios integrales de vaciado de espacios comerciales e industriales 
                con la máxima profesionalidad, rapidez y compromiso medioambiental, facilitando 
                la transición de nuestros clientes hacia nuevos proyectos empresariales.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa de referencia en Cataluña para servicios de vaciado profesional, 
                reconocida por nuestra excelencia operativa, innovación en procesos y liderazgo 
                en sostenibilidad medioambiental en el sector.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Integridad, profesionalidad, responsabilidad medioambiental, trato personal, 
                puntualidad, transparencia en precios y compromiso total con la satisfacción 
                de nuestros clientes y la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro equipo profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un equipo humano altamente cualificado y comprometido con la excelencia en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Josep María Egara",
                role: "Director General y Fundador",
                description: "Más de 15 años de experiencia en el sector. Especialista en gestión de proyectos complejos y coordinación de equipos.",
                image: "https://readdy.ai/api/search-image?query=Professional%20middle-aged%20Spanish%20businessman%20director%20in%20business%20suit%2C%20confident%20leader%20pose%2C%20modern%20office%20background%2C%20Barcelona%20business%20professional%2C%20experienced%20executive%2C%20corporate%20portrait%20style&width=300&height=400&seq=director&orientation=portrait"
              },
              {
                name: "Anna Puig",
                role: "Responsable de Operaciones",
                description: "Coordinadora de todos los servicios de vaciado. Garantiza la calidad y puntualidad en cada proyecto realizado por el equipo.",
                image: "https://readdy.ai/api/search-image?query=Professional%20Spanish%20businesswoman%20operations%20manager%2C%20confident%20pose%20in%20work%20uniform%2C%20industrial%20background%2C%20Barcelona%20professional%20woman%2C%20experienced%20coordinator%2C%20corporate%20portrait&width=300&height=400&seq=operations&orientation=portrait"
              },
              {
                name: "Carles Vera",
                role: "Jefe de Equipo Técnico",
                description: "Supervisa todos los trabajos de campo. Especialista en maquinaria pesada y coordinación de vaciados industriales de gran envergadura.",
                image: "https://readdy.ai/api/search-image?query=Professional%20Spanish%20technical%20team%20leader%20in%20work%20uniform%2C%20construction%20background%2C%20experienced%20supervisor%2C%20industrial%20setting%20Barcelona%2C%20confident%20worker%20portrait%2C%20professional%20appearance&width=300&height=400&seq=tecnico&orientation=portrait"
              },
              {
                name: "Laura Martínez",
                role: "Atención al Cliente",
                description: "Primera línea de contacto con clientes. Se encarga de presupuestos, seguimiento de proyectos y atención personalizada a cada cliente.",
                image: "https://readdy.ai/api/search-image?query=Professional%20Spanish%20customer%20service%20representative%20woman%2C%20friendly%20smile%2C%20modern%20office%20environment%2C%20Barcelona%20business%20professional%2C%20client%20service%20specialist%2C%20professional%20corporate%20portrait&width=300&height=400&seq=cliente&orientation=portrait"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees & Certifications */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garantías y compromisos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros certificados y garantías que avalan la calidad de nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-certificate",
                title: "Empresa Autorizada",
                description: "Registrados como gestores autorizados de residuos. Cumplimos toda la normativa vigente medioambiental."
              },
              {
                icon: "fas fa-shield-alt",
                title: "Seguro de Responsabilidad",
                description: "Cobertura completa de responsabilidad civil para proteger a nuestros clientes y sus propiedades."
              },
              {
                icon: "fas fa-award",
                title: "Certificación ISO",
                description: "Procesos certificados en gestión de calidad y medioambiente según normativas internacionales."
              },
              {
                icon: "fas fa-handshake",
                title: "Garantía de Satisfacción",
                description: "Garantizamos la satisfacción total del cliente. Si no estás conforme, repetimos el trabajo sin coste."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-blue-600`}></i>
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
            ¿Quieres formar parte de nuestro equipo?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Siempre estamos buscando profesionales comprometidos que compartan nuestros valores. 
            Si tienes experiencia en el sector o ganas de aprender, contacta con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <i className="fas fa-briefcase mr-2"></i>
                Únete al Equipo
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
