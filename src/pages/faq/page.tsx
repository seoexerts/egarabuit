
import { useState } from 'react';
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import CookieBanner from '../../components/feature/CookieBanner';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuándo tiempo se tarda en vaciar un local comercial?",
      answer: "El tiempo depende del tamaño del local y la cantidad de elementos a retirar. Un local comercial pequeño (50-100m²) se puede vaciar en 1-2 días, mientras que espacios más grandes pueden requerir 3-5 días. Siempre proporcionamos un cronograma detallado antes de comenzar el trabajo. Nuestro equipo trabaja de manera eficiente para minimizar las molestias y completar el proyecto en el menor tiempo posible sin comprometer la calidad del servicio."
    },
    {
      question: "¿Qué está incluido en el precio del vaciado?",
      answer: "Nuestros presupuestos incluyen la mano de obra completa, desmontaje de mobiliario, carga y transporte de todos los materiales, y entrega en puntos limpios autorizados. También incluimos la limpieza básica posterior al vaciado. Los servicios adicionales como limpieza profunda, desinfección especializada o trabajos fuera de horario comercial se presupuestan por separado. Siempre proporcionamos presupuestos detallados y transparentes sin costes ocultos."
    },
    {
      question: "¿Trabajáis fuera del horario comercial o fines de semana?",
      answer: "Sí, ofrecemos flexibilidad total de horarios para adaptarnos a las necesidades de nuestros clientes. Podemos trabajar por las noches, madrugadas, fines de semana y festivos cuando sea necesario para no interferir con la actividad comercial. Este servicio tiene un coste adicional que se especifica claramente en el presupuesto. Es especialmente útil para oficinas en funcionamiento o locales que necesitan mantener su actividad hasta el último día."
    },
    {
      question: "¿Qué hacéis con los materiales y mobiliario retirado?",
      answer: "Seguimos un protocolo de gestión responsable: primero clasificamos los materiales por tipo y estado. Los elementos en buen estado los donamos a organizaciones benéficas o centros sociales. Los materiales reciclables se llevan a plantas de reciclaje especializadas. Los residuos no reciclables se entregan en puntos limpios autorizados. Como gestores autorizados de residuos, proporcionamos certificados de entrega y tratamiento ecológico de todos los materiales gestionados, cumpliendo toda la normativa medioambiental vigente."
    },
    {
      question: "¿Tenéis seguro de responsabilidad civil?",
      answer: "Sí, contamos con un seguro de responsabilidad civil profesional completo que cubre cualquier daño que pudiera ocasionarse durante nuestros trabajos. Nuestra póliza incluye cobertura para daños a terceros, daños materiales a la propiedad y responsabilidad civil profesional. Antes de comenzar cualquier trabajo, proporcionamos copia del certificado de seguro vigente. Además, todos nuestros trabajadores están dados de alta en la Seguridad Social y cuentan con seguro de accidentes laborales."
    },
    {
      question: "¿Podéis gestionar documentación confidencial de empresas?",
      answer: "Absolutamente. Entendemos la importancia de la confidencialidad empresarial y tenemos protocolos específicos para el manejo de documentación sensible. Ofrecemos servicios de destrucción segura de documentos con certificado de destrucción. Nuestro personal está formado en confidencialidad y puede firmar acuerdos de no divulgación cuando sea necesario. Para documentación especialmente sensible, coordinamos con empresas especializadas en destrucción certificada de documentos que cumplen con la normativa de protección de datos."
    },
    {
      question: "¿Qué zona geográfica cubrís para vuestros servicios?",
      answer: "Nuestro área principal de servicio es Terrassa y toda la comarca del Vallès Occidental. También prestamos servicios en Barcelona capital y área metropolitana. Para proyectos de gran envergadura, podemos desplazarnos a otras provincias de Cataluña. Los desplazamientos fuera de nuestro área principal pueden tener un coste adicional que se especifica en el presupuesto. Disponemos de vehículos propios y colaboramos con transportistas locales para optimizar los costes de desplazamiento."
    },
    {
      question: "¿Cómo se solicita un presupuesto y cuándo lo recibo?",
      answer: "Solicitar un presupuesto es muy sencillo: puedes llamarnos al 609 93 65 90, enviarnos un WhatsApp o rellenar nuestro formulario de contacto. Programamos una visita gratuita para evaluar el trabajo y tomar medidas. En proyectos estándar, entregamos el presupuesto en 24-48 horas. Para proyectos complejos, podemos tardar hasta 72 horas. El presupuesto es completamente gratuito y sin compromiso. Incluye cronograma detallado, especificaciones del trabajo y condiciones del servicio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "about": {
      "@type": "Service",
      "name": "Vaciado de Locales Comerciales",
      "provider": {
        "@type": "LocalBusiness",
        "name": "EgaraBuit",
        "telephone": "+34609936590"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Preguntas Frecuentes Vaciado Locales Terrassa | EgaraBuit"
        description="Resuelve dudas sobre vaciado locales comerciales Terrassa: precios, tiempos, seguros, proceso. Respuestas expertas. ☎️ 609936590"
        keywords="preguntas vaciado locales, FAQ vaciado Terrassa, dudas vaciado oficinas, presupuesto vaciado Barcelona, tiempo vaciado local"
        schema={schema}
      />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20explaining%20services%20to%20client%20in%20modern%20office%20Barcelona%2C%20consultation%20meeting%2C%20question%20and%20answer%20session%2C%20helpful%20business%20advisor%2C%20clear%20communication%2C%20professional%20environment&width=1920&height=800&seq=faq-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Preguntas frecuentes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Resuelve todas tus dudas sobre nuestros servicios de vaciado profesional. 
            Si no encuentras la respuesta que buscas, contacta con nosotros directamente.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Las respuestas que necesitas
              </h2>
              <p className="text-xl text-gray-600">
                Hemos recopilado las preguntas más habituales de nuestros clientes para ayudarte 
                a tomar la mejor decisión para tu proyecto de vaciado.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <i className={`fas ${openFAQ === index ? 'fa-minus' : 'fa-plus'} text-blue-600 flex-shrink-0`}></i>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Nuestro equipo de atención al cliente está disponible 
              para resolver cualquier duda específica sobre tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Llamada directa</h3>
              <p className="text-gray-600 mb-4">
                Habla directamente con nuestro equipo para resolver tus dudas al instante.
              </p>
              <a href="tel:609936590">
                <Button>
                  609 93 65 90
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-whatsapp text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Contacta por WhatsApp para consultas rápidas y recibir respuesta inmediata.
              </p>
              <Button 
                onClick={() => {
                  const message = encodeURIComponent("Hola, tengo una consulta sobre sus servicios de vaciado.");
                  window.open(`https://wa.me/34609936590?text=${message}`, '_blank');
                }}
                variant="secondary"
              >
                Enviar Mensaje
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formulario</h3>
              <p className="text-gray-600 mb-4">
                Envíanos tu consulta detallada y te responderemos en menos de 24 horas.
              </p>
              <Link to="/contacto">
                <Button variant="outline">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Necesitas una consulta personalizada?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Cada proyecto de vaciado es único. Si tu situación requiere un análisis específico, 
                  podemos programar una consulta gratuita donde evaluaremos tu caso particular y 
                  te proporcionaremos la mejor solución adaptada a tus necesidades.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contacto">
                    <Button size="lg">
                      <i className="fas fa-calendar mr-2"></i>
                      Programar Consulta
                    </Button>
                  </Link>
                  <a href="tel:609936590">
                    <Button variant="outline" size="lg">
                      <i className="fas fa-phone mr-2"></i>
                      Llamar Ahora
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No esperes más. Con más de 10 años de experiencia y miles de clientes satisfechos, 
            somos tu mejor opción para el vaciado profesional en Terrassa.
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
