
import { useState } from 'react';
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import CookieBanner from '../../components/feature/CookieBanner';
import Button from '../../components/base/Button';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    ubicacion: '',
    tamano: '',
    fechaEstimada: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'mensaje' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d38gm7423rr1ef6e00cg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoServicio: '',
          ubicacion: '',
          tamano: '',
          fechaEstimada: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "EgaraBuit",
      "telephone": "+34609936590",
      "email": "info@egarabuit.com",
      "url": "https://egarabuit.com/contacto",
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
      "openingHours": ["Mo-Fr 08:00-19:00", "Sa 09:00-14:00", "Su 00:00-24:00"],
      "serviceType": ["Vaciado de locales comerciales", "Vaciado de oficinas", "Vaciado de naves industriales"]
    }
  };

  return (
    <>
      <SEOHead
        title="Contacto Presupuesto Gratis Vaciado Terrassa | EgaraBuit"
        description="Solicita presupuesto gratuito vaciado locales comerciales Terrassa. Atención personalizada y respuesta en 24h. ☎️ 609936590 WhatsApp disponible."
        keywords="contacto vaciado Terrassa, presupuesto vaciado locales, presupuesto gratuito Barcelona, contactar EgaraBuit"
        schema={schema}
      />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20office%20in%20Barcelona%2C%20modern%20contact%20center%20with%20friendly%20staff%2C%20consultation%20desk%2C%20phones%20and%20computers%2C%20welcoming%20business%20environment%2C%20professional%20consultation%20meeting&width=1920&height=800&seq=contacto-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contacta con nosotros
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte con tu proyecto de vaciado. Solicita tu presupuesto 
            gratuito y recibe atención personalizada de nuestros expertos.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicita tu presupuesto gratuito
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Completa este formulario con los detalles de tu proyecto y te enviaremos 
                un presupuesto personalizado en menos de 24 horas. Todos los campos marcados 
                con * son obligatorios.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  <i className="fas fa-check-circle mr-2"></i>
                  ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}

              <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tipoServicio" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de servicio *
                    </label>
                    <select
                      id="tipoServicio"
                      name="tipoServicio"
                      value={formData.tipoServicio}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="local-comercial">Vaciado de local comercial</option>
                      <option value="oficina">Vaciado de oficina</option>
                      <option value="nave-industrial">Vaciado de nave industrial</option>
                      <option value="limpieza">Limpieza y desinfección</option>
                      <option value="gestion-mobiliario">Gestión de mobiliario</option>
                      <option value="varios">Varios servicios</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700 mb-2">
                      Ubicación *
                    </label>
                    <input
                      type="text"
                      id="ubicacion"
                      name="ubicacion"
                      value={formData.ubicacion}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Ciudad o dirección"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tamano" className="block text-sm font-medium text-gray-700 mb-2">
                      Tamaño aproximado
                    </label>
                    <select
                      id="tamano"
                      name="tamano"
                      value={formData.tamano}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Selecciona el tamaño</option>
                      <option value="pequeno">Pequeño (menos de 100m²)</option>
                      <option value="mediano">Mediano (100-300m²)</option>
                      <option value="grande">Grande (300-1000m²)</option>
                      <option value="muy-grande">Muy grande (más de 1000m²)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fechaEstimada" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha estimada
                    </label>
                    <input
                      type="date"
                      id="fechaEstimada"
                      name="fechaEstimada"
                      value={formData.fechaEstimada}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Detalles adicionales
                    <span className="text-gray-500 text-xs ml-2">
                      ({formData.mensaje.length}/500 caracteres)
                    </span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Describe tu proyecto con más detalle, horarios preferidos, acceso al local, etc."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Solicitar Presupuesto Gratuito
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Puedes contactar con nosotros directamente a través de cualquiera de estos medios. 
                Nuestro equipo está disponible para atenderte y resolver todas tus dudas.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
                    <p className="text-gray-600 mb-2">
                      Llámanos directamente para consultas urgentes o presupuestos inmediatos
                    </p>
                    <a href="tel:609936590" className="text-blue-600 font-semibold text-lg hover:text-blue-700 cursor-pointer">
                      609 93 65 90
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      Envíanos fotos del espacio y recibe una estimación rápida
                    </p>
                    <button 
                      onClick={() => {
                        const message = encodeURIComponent("Hola, me interesa solicitar un presupuesto para vaciado de local.");
                        window.open(`https://wa.me/34609936590?text=${message}`, '_blank');
                      }}
                      className="text-green-600 font-semibold text-lg hover:text-green-700 cursor-pointer"
                    >
                      Enviar WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">
                      Para consultas detalladas y documentación del proyecto
                    </p>
                    <a href="mailto:info@egarabuit.com" className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer">
                      info@egarabuit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Zona de servicio</h3>
                    <p className="text-gray-600 mb-2">
                      Terrassa y toda la provincia de Barcelona
                    </p>
                    <p className="text-purple-600 font-semibold">
                      Presupuestos gratuitos en toda el área
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Horarios de atención
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes:</span>
                    <span className="font-medium">8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados:</span>
                    <span className="font-medium">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos:</span>
                    <span className="font-medium">Emergencias</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Disponibles 24/7 para emergencias y servicios urgentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra área de servicio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prestamos nuestros servicios en Terrassa y toda la provincia de Barcelona. 
              Consulta si tu ubicación está dentro de nuestra zona de cobertura.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.666!2d2.01073!3d41.56311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sTerrassa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1635789012345!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Terrassa, Barcelona"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nuestro equipo está disponible para atenderte por teléfono. Recibe asesoramiento 
            personalizado y resuelve todas tus dudas en una sola llamada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:609936590">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <i className="fas fa-phone mr-2"></i>
                Llamar Ahora: 609 93 65 90
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
