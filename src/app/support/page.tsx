import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Video, Mail } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  const faqs = [
    {
      question: "¿Cómo creo mi primer menú digital?",
      answer:
        "Después de registrarte, haz clic en 'Crear Menú' en tu dashboard. Sigue el asistente paso a paso para agregar tu información, categorías y productos. Puedes personalizar colores, fuentes y agregar imágenes. Una vez listo, genera tu código QR y descárgalo para imprimir.",
    },
    {
      question: "¿Puedo actualizar mi menú en tiempo real?",
      answer:
        "Sí, todos los cambios que hagas en tu menú se reflejan inmediatamente. Tus clientes verán la versión actualizada sin necesidad de reimprimir códigos QR o actualizar nada.",
    },
    {
      question: "¿Cómo funciona el código QR?",
      answer:
        "Generamos un código QR único para tu menú. Los clientes lo escanean con la cámara de su teléfono y acceden directamente a tu menú digital sin necesidad de descargar apps. El código QR nunca cambia, incluso si actualizas tu menú.",
    },
    {
      question: "¿Puedo tener menús en varios idiomas?",
      answer:
        "Sí, en el plan Profesional y Empresa puedes crear versiones de tu menú en múltiples idiomas. Los clientes pueden cambiar el idioma con un simple clic.",
    },
    {
      question: "¿Qué pasa si cancelo mi suscripción?",
      answer:
        "Puedes cancelar en cualquier momento. Tu menú seguirá activo hasta el final del período pagado. Después, tu cuenta pasará al plan gratuito con funcionalidades limitadas. Tus datos se conservan por 90 días.",
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer:
        "No, Kueree está diseñado para ser extremadamente fácil de usar. Si sabes usar redes sociales, puedes usar Kueree. Además, ofrecemos tutoriales en video y soporte por chat.",
    },
    {
      question: "¿Puedo personalizar el diseño de mi menú?",
      answer:
        "Sí, puedes personalizar colores, fuentes, agregar tu logo y elegir entre diferentes estilos de presentación. En planes superiores, tienes aún más opciones de personalización.",
    },
    {
      question: "¿Cómo funcionan los análisis?",
      answer:
        "En el plan Profesional y Empresa, obtienes estadísticas sobre cuántas personas ven tu menú, qué productos son más populares, horarios de mayor tráfico y más. Esto te ayuda a tomar mejores decisiones de negocio.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Centro de Soporte</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Encuentra respuestas rápidas o contacta con nuestro equipo de soporte.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input placeholder="Buscar en la base de conocimientos..." className="pl-4 pr-4 py-6 text-lg" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Documentación</h3>
              <p className="text-sm text-muted-foreground mb-4">Guías completas y tutoriales</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs">Ver Docs</Link>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Chat en Vivo</h3>
              <p className="text-sm text-muted-foreground mb-4">Respuesta inmediata</p>
              <Button variant="outline" size="sm">
                Iniciar Chat
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Video Tutoriales</h3>
              <p className="text-sm text-muted-foreground mb-4">Aprende paso a paso</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/tutorials">Ver Videos</Link>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Respuesta en 24h</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contactar</Link>
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta o problema.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contactar Soporte</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
