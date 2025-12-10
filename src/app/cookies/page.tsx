import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Cookies</h1>
          <p className="text-muted-foreground mb-8">Última actualización: 8 de octubre de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y
                proporcionen información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Tipos de Cookies que Utilizamos</h2>

              <h3 className="text-xl font-semibold mb-3">2.1 Cookies Esenciales</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Estas cookies son necesarias para que el sitio web funcione correctamente. No se pueden desactivar.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cookies de sesión: mantienen tu sesión activa</li>
                <li>Cookies de seguridad: protegen contra ataques</li>
                <li>Cookies de preferencias: recuerdan tus configuraciones</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Cookies de Rendimiento</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics: análisis de tráfico y comportamiento</li>
                <li>Métricas de rendimiento: velocidad de carga, errores</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Cookies de Funcionalidad</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Permiten que el sitio web recuerde tus elecciones y proporcione características mejoradas.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Preferencias de idioma</li>
                <li>Configuración de visualización</li>
                <li>Recordar información de inicio de sesión</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.4 Cookies de Marketing</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Se utilizan para rastrear visitantes en sitios web y mostrar anuncios relevantes.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cookies de redes sociales: Facebook, LinkedIn</li>
                <li>Cookies de publicidad: Google Ads, remarketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Cookies de Terceros</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics: análisis web</li>
                <li>Stripe: procesamiento de pagos</li>
                <li>Intercom: chat de soporte</li>
                <li>Redes sociales: botones de compartir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Duración de las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Las cookies pueden ser:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Cookies de sesión:</strong> se eliminan cuando cierras el navegador
                </li>
                <li>
                  <strong>Cookies persistentes:</strong> permanecen en tu dispositivo durante un período específico
                  (hasta 2 años)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cómo Controlar las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Puedes controlar y/o eliminar las cookies como desees. Puedes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Eliminar todas las cookies que ya están en tu dispositivo</li>
                <li>Configurar la mayoría de los navegadores para evitar que se coloquen cookies</li>
                <li>Usar nuestro panel de preferencias de cookies (disponible en el pie de página)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Ten en cuenta que si eliminas o bloqueas las cookies, algunas funciones del sitio pueden no funcionar
                correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Configuración del Navegador</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Puedes configurar las cookies en tu navegador:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Configuración → Privacidad → Cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Actualizaciones de esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que
                utilizamos o por otras razones operativas, legales o regulatorias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Más Información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en cookies@kueree.com o consulta
                nuestra{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
