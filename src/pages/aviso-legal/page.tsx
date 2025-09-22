
import SEOHead from '../../components/feature/SEOHead';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ScrollToTop from '../../components/feature/ScrollToTop';

export default function AvisoLegal() {
  return (
    <>
      <SEOHead
        title="Aviso legal | EgaraBuit"
        description="Aviso legal de EgaraBuit. Información sobre términos de uso, responsabilidades y condiciones legales de nuestros servicios de vaciado en Terrassa."
        keywords="aviso legal, EgaraBuit, términos uso, vaciado locales Terrassa"
      />
      <Header />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aviso legal
            </h1>
            <p className="text-xl text-gray-600">
              Términos y condiciones de uso del sitio web
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Última actualización:</strong> Enero 2024
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información general</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
                de la Información y de Comercio Electrónico, se informa de los datos identificativos del prestador 
                del servicio:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Denominación social:</strong> EgaraBuit</p>
                <p className="text-gray-700 mb-2"><strong>Domicilio social:</strong> Terrassa, Barcelona</p>
                <p className="text-gray-700 mb-2"><strong>Teléfono:</strong> 609 93 65 90</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@egarabuit.com</p>
                <p className="text-gray-700"><strong>Actividad:</strong> Servicios de vaciado de locales comerciales, oficinas y naves industriales</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Objeto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El presente aviso legal regula el uso del sitio web www.egarabuit.com (en adelante, el "Sitio Web"), 
                del que es titular EgaraBuit (en adelante, "EgaraBuit" o "la Empresa").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación 
                plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que 
                pueden sufrir modificaciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Condiciones de uso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El acceso y uso de este Sitio Web se rige por la legalidad vigente y por los principios de buena fe 
                y uso lícito por parte de los usuarios. Queda prohibido el uso del Sitio Web y de cualquiera de sus 
                servicios con fines o efectos ilícitos o lesivos de los derechos e intereses de terceros.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">El usuario se compromete a:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Hacer un uso adecuado y lícito del Sitio Web</li>
                <li>No utilizar el Sitio Web para fines o efectos ilícitos o contrarios a lo establecido en el presente Aviso Legal</li>
                <li>No acceder o intentar acceder a recursos restringidos o no autorizados del Sitio Web</li>
                <li>No provocar daños en los sistemas físicos y lógicos del Sitio Web</li>
                <li>No introducir virus o realizar cualquier acción que pueda alterar, dañar o inutilizar los archivos, programas o equipos informáticos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propiedad intelectual e industrial</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, 
                así como de los elementos contenidos en el mismo (a título enunciativo, imágenes, sonido, audio, 
                vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, 
                selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso 
                y uso, etc.).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico 
                español, siéndoles aplicables tanto la normativa española e internacional en este campo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitación de responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit no se responsabiliza de los daños y perjuicios de toda naturaleza que pudieran deberse 
                a la falta de disponibilidad o de continuidad del funcionamiento del Sitio Web, a la defraudación 
                de la utilidad que los usuarios hubieren podido atribuir al Sitio Web, a la falibilidad del Sitio Web, 
                y en particular, aunque no de modo exclusivo, a las fallas en el acceso a las distintas páginas web 
                del Sitio Web o a aquellas desde las que se preste el servicio.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit llevará a cabo las acciones necesarias para reestablecer el servicio en caso de fallo 
                técnico, sin que por ello tenga derecho el usuario a exigir indemnización alguna.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enlaces externos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En el caso de que en el Sitio Web se dispusiesen enlaces o hipervínculos hacia otros sitios de 
                Internet, EgaraBuit no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún 
                caso EgaraBuit asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a 
                un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, 
                amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida 
                en ninguno de dichos hipervínculos u otros sitios de Internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EgaraBuit se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso 
                previo, en el contenido del Sitio Web. Tanto en lo referente a los contenidos del Sitio Web como 
                en las condiciones de uso del mismo. Dichas modificaciones podrán realizarse a través del Sitio Web 
                por cualquier forma admisible en derecho y serán de obligado cumplimiento durante el tiempo en que 
                se encuentren publicadas en el web y hasta que no sean modificadas válidamente por otras posteriores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legislación aplicable y jurisdicción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La relación entre EgaraBuit y el Usuario se regirá por la normativa española vigente y cualquier 
                controversia se someterá a los Juzgados y tribunales de la ciudad de Barcelona.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta relacionada con este aviso legal, puede contactarnos a través de:
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
