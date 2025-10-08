import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">Última actualización: 8 de octubre de 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
              <p className="text-muted-foreground leading-relaxed">
                En Kueree, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad
                describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas
                nuestra plataforma de menús digitales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Información que nos proporcionas</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Datos de registro: nombre, email, teléfono, nombre del restaurante</li>
                <li>Información de pago: procesada de forma segura por nuestros proveedores</li>
                <li>Contenido del menú: productos, precios, imágenes, descripciones</li>
                <li>Comunicaciones: mensajes que nos envías</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Información recopilada automáticamente</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Datos de uso: páginas visitadas, tiempo de uso, interacciones</li>
                <li>Información del dispositivo: tipo de dispositivo, navegador, sistema operativo</li>
                <li>Datos de ubicación: dirección IP, ubicación aproximada</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Cómo Usamos tu Información</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Procesar pagos y transacciones</li>
                <li>Enviar notificaciones importantes sobre tu cuenta</li>
                <li>Mejorar y personalizar tu experiencia</li>
                <li>Analizar el uso de la plataforma</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Enviarte comunicaciones de marketing (con tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Compartir tu Información</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                No vendemos tu información personal. Podemos compartir tu información con:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proveedores de servicios: hosting, procesamiento de pagos, análisis</li>
                <li>Autoridades legales: cuando sea requerido por ley</li>
                <li>Compradores potenciales: en caso de fusión o adquisición</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Seguridad de los Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información, incluyendo
                encriptación SSL/TLS, controles de acceso, y auditorías de seguridad regulares. Sin embargo, ningún
                sistema es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Tus Derechos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acceder a tu información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Retención de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos tu información personal mientras tu cuenta esté activa o según sea necesario para
                proporcionarte servicios. Después de la cancelación, conservamos ciertos datos durante 90 días para
                cumplir con obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Puedes controlar las cookies a
                través de la configuración de tu navegador. Para más información, consulta nuestra{" "}
                <a href="/cookies" className="text-primary hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cambios a esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos por email
                o mediante un aviso en nuestra plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-3">
                <li>Email: privacidad@kueree.com</li>
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
