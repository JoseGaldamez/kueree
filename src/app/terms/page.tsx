import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Términos y Condiciones</h1>
          <p className="text-muted-foreground mb-8">Última actualización: 8 de octubre de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar Kueree, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de
                acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Descripción del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kueree es una plataforma SaaS que permite a restaurantes y negocios de alimentos crear, gestionar y
                compartir menús digitales. Proporcionamos herramientas para crear menús, generar códigos QR, y analizar
                el rendimiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Registro y Cuenta</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Requisitos</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Debes tener al menos 18 años para usar Kueree</li>
                <li>Debes proporcionar información precisa y completa</li>
                <li>Eres responsable de mantener la seguridad de tu cuenta</li>
                <li>No puedes compartir tu cuenta con terceros</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">3.2 Responsabilidades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eres responsable de todas las actividades que ocurran bajo tu cuenta. Debes notificarnos inmediatamente
                sobre cualquier uso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Uso Aceptable</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Al usar Kueree, aceptas NO:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violar leyes o regulaciones aplicables</li>
                <li>Publicar contenido ilegal, ofensivo o inapropiado</li>
                <li>Intentar acceder a sistemas o datos no autorizados</li>
                <li>Interferir con el funcionamiento del servicio</li>
                <li>Usar el servicio para spam o actividades maliciosas</li>
                <li>Copiar, modificar o distribuir nuestro software</li>
                <li>Realizar ingeniería inversa de la plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contenido del Usuario</h2>
              <h3 className="text-xl font-semibold mb-3">5.1 Propiedad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantienes todos los derechos sobre el contenido que subes a Kueree (menús, imágenes, descripciones). Nos
                otorgas una licencia para usar, almacenar y mostrar ese contenido según sea necesario para proporcionar
                el servicio.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Responsabilidad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eres responsable de la precisión de la información en tus menús, incluyendo precios, descripciones de
                productos, alérgenos y información nutricional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Planes y Pagos</h2>
              <h3 className="text-xl font-semibold mb-3">6.1 Suscripciones</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Las suscripciones se renuevan automáticamente</li>
                <li>Los precios pueden cambiar con 30 días de aviso</li>
                <li>Los pagos no son reembolsables excepto según lo requiera la ley</li>
                <li>Puedes cancelar en cualquier momento</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Prueba Gratuita</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos una prueba gratuita de 14 días para planes de pago. Se te cobrará automáticamente al finalizar
                la prueba a menos que canceles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Propiedad Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kueree y todo su contenido, características y funcionalidad son propiedad de Kueree y están protegidos
                por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Kueree se proporciona "tal cual" sin garantías de ningún tipo. No somos responsables de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Pérdida de datos o contenido</li>
                <li>Interrupciones del servicio</li>
                <li>Daños indirectos o consecuentes</li>
                <li>Errores en la información del menú</li>
                <li>Acciones de terceros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Indemnización</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aceptas indemnizar y mantener indemne a Kueree de cualquier reclamo, daño, pérdida o gasto que surja de
                tu uso del servicio o violación de estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Terminación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos suspender o terminar tu cuenta si violas estos términos. Puedes cancelar tu cuenta en cualquier
                momento desde la configuración. Al terminar, tu acceso al servicio cesará inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre
                cambios significativos. El uso continuado del servicio después de los cambios constituye tu aceptación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Ley Aplicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos términos se rigen por las leyes de México. Cualquier disputa se resolverá en los tribunales de
                Ciudad de México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-3">
                <li>Email: legal@kueree.com</li>
                <li>Dirección: Ciudad de México, México</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
