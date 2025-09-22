
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ScrollToTop from '../../components/feature/ScrollToTop';

export default function PoliticaPrivacidad() {
  return (
    <>
      <SEOHead
        title="Política de privacidad | EgaraBuit"
        description="Política de privacidad de EgaraBuit. Información sobre protección de datos personales y tratamiento de información en nuestros servicios de vaciado."
        keywords="política privacidad, protección datos, EgaraBuit, RGPD, vaciado locales Terrassa"
      />
      <Header />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de privacidad
            </h1>
            <p className="text-xl text-gray-600">
              Información sobre protección de datos personales
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Última actualización:</strong> Enero 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable del tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit es el responsable del tratamiento de los datos personales del Usuario y le informa que 
                dichos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de 
                abril de 2016 (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento 
                de datos personales y a la libre circulación de estos datos.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Responsable:</strong> EgaraBuit</p>
                <p className="text-gray-700 mb-2"><strong>Dirección:</strong> Terrassa, Barcelona</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@egarabuit.com</p>
                <p className="text-gray-700"><strong>Teléfono:</strong> 609 93 65 90</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalidad del tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los datos personales que nos proporcione serán utilizados para las siguientes finalidades:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prestación de servicios</h3>
                  <p className="text-gray-700">
                    Gestionar y prestar los servicios de vaciado de locales comerciales, oficinas y naves industriales 
                    que nos solicite, incluyendo la elaboración de presupuestos y la coordinación de trabajos.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comunicación comercial</h3>
                  <p className="text-gray-700">
                    Enviarle información comercial sobre nuestros servicios, promociones y novedades, siempre que 
                    haya dado su consentimiento expreso para ello.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Atención al cliente</h3>
                  <p className="text-gray-700">
                    Gestionar sus consultas, reclamaciones y sugerencias a través de nuestros canales de atención 
                    al cliente.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Base jurídica</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El tratamiento de sus datos se basa en las siguientes bases jurídicas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Ejecución de un contrato:</strong> Para la prestación de los servicios solicitados</li>
                <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                <li><strong>Interés legítimo:</strong> Para la gestión de consultas y mejora de nuestros servicios</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con las obligaciones fiscales y contables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de datos recopilados</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos recopilar y tratar los siguientes tipos de información personal:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Datos de identificación</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Nombre y apellidos</li>
                    <li>• DNI/NIE</li>
                    <li>• Dirección postal</li>
                    <li>• Teléfono</li>
                    <li>• Email</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Datos de navegación</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dirección IP</li>
                    <li>• Tipo de navegador</li>
                    <li>• Páginas visitadas</li>
                    <li>• Tiempo de navegación</li>
                    <li>• Cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservación de datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sus datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad 
                para la que se recabaron y, en todo caso, durante los plazos establecidos por la legislación aplicable:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Datos de clientes:</strong> Durante la relación contractual y 6 años posteriores</li>
                <li><strong>Datos fiscales:</strong> 4 años desde la finalización del ejercicio fiscal</li>
                <li><strong>Comunicaciones comerciales:</strong> Hasta que retire el consentimiento</li>
                <li><strong>Datos de navegación:</strong> Según se establece en nuestra política de cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Destinatarios de los datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sus datos personales no serán cedidos a terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Cuando sea necesario para la prestación del servicio solicitado</li>
                <li>Cuando exista una obligación legal</li>
                <li>Organismos públicos competentes cuando sea requerido</li>
                <li>Proveedores de servicios tecnológicos que actúen como encargados del tratamiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sus derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como usuario, tiene derecho a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-eye text-blue-600 mr-2"></i>
                    Derecho de acceso
                  </h4>
                  <p className="text-sm text-gray-700">Obtener información sobre el tratamiento de sus datos</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-edit text-green-600 mr-2"></i>
                    Derecho de rectificación
                  </h4>
                  <p className="text-sm text-gray-700">Corregir datos inexactos o incompletos</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-trash text-red-600 mr-2"></i>
                    Derecho de supresión
                  </h4>
                  <p className="text-sm text-gray-700">Solicitar la eliminación de sus datos</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-ban text-yellow-600 mr-2"></i>
                    Derecho de oposición
                  </h4>
                  <p className="text-sm text-gray-700">Oponerse al tratamiento de sus datos</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-download text-purple-600 mr-2"></i>
                    Derecho de portabilidad
                  </h4>
                  <p className="text-sm text-gray-700">Recibir sus datos en formato estructurado</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="fas fa-pause text-gray-600 mr-2"></i>
                    Derecho de limitación
                  </h4>
                  <p className="text-sm text-gray-700">Limitar el tratamiento de sus datos</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ejercicio de derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para ejercitar sus derechos, puede dirigirse a nosotros a través de:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@egarabuit.com</p>
                <p className="text-gray-700 mb-2"><strong>Teléfono:</strong> 609 93 65 90</p>
                <p className="text-gray-700"><strong>Dirección postal:</strong> Terrassa, Barcelona</p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                También tiene derecho a presentar una reclamación ante la Autoridad de Control (Agencia Española 
                de Protección de Datos) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Seguridad de los datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
                de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida 
                cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están 
                expuestos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit se reserva el derecho a modificar la presente política para adaptarla a novedades 
                legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, 
                se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en aplicación.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
