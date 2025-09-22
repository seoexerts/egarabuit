
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ScrollToTop from '../../components/feature/ScrollToTop';

export default function PoliticaCookies() {
  return (
    <>
      <SEOHead
        title="Política de cookies | EgaraBuit"
        description="Conoce nuestra política de cookies. Información sobre el uso de cookies en el sitio web de EgaraBuit, empresa de vaciado de locales en Terrassa."
        keywords="política cookies, EgaraBuit, vaciado locales Terrassa"
      />
      <Header />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de cookies
            </h1>
            <p className="text-xl text-gray-600">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Última actualización:</strong> Enero 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para 
                proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo utilizamos las cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En EgaraBuit utilizamos cookies para mejorar la experiencia del usuario en nuestro sitio web y para 
                analizar cómo se utiliza nuestro sitio. Las cookies nos ayudan a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Recordar sus preferencias de navegación</li>
                <li>Entender cómo interactúa con nuestro sitio web</li>
                <li>Mejorar la funcionalidad y el rendimiento del sitio</li>
                <li>Personalizar el contenido y los anuncios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de cookies que utilizamos</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies esenciales</h3>
                  <p className="text-gray-700">
                    Estas cookies son necesarias para que el sitio web funcione correctamente. No se pueden desactivar 
                    en nuestros sistemas. Incluyen cookies de consentimiento y preferencias del usuario.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de rendimiento</h3>
                  <p className="text-gray-700">
                    Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar 
                    el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más populares y cómo 
                    se mueven los visitantes por el sitio.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de funcionalidad</h3>
                  <p className="text-gray-700">
                    Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. 
                    Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a 
                    nuestras páginas.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Algunos de nuestros socios pueden establecer cookies en su dispositivo cuando visita nuestro sitio. 
                Estos incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
                <li><strong>Redes sociales:</strong> Para funciones de compartir en redes sociales</li>
                <li><strong>Servicios de chat:</strong> Para proporcionar asistencia al cliente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Control de cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puede controlar y/o eliminar cookies como desee. Puede eliminar todas las cookies que ya están en 
                su dispositivo y configurar la mayoría de navegadores para evitar que se establezcan. Sin embargo, 
                si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite 
                un sitio y algunos servicios y funciones pueden no funcionar.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Configuración del navegador:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos del sitio</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos de sitios web</li>
                <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consentimiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al continuar navegando por nuestro sitio web después de ver el banner de cookies, acepta el uso 
                de cookies según se describe en esta política. Puede retirar su consentimiento en cualquier momento 
                eliminando las cookies de su navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambios en esta política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en nuestras 
                prácticas o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise 
                esta página periódicamente para estar informado de cualquier cambio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@egarabuit.com</p>
                <p className="text-gray-700 mb-2"><strong>Teléfono:</strong> 609 93 65 90</p>
                <p className="text-gray-700"><strong>Dirección:</strong> Terrassa, Barcelona</p>
              </div>
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
