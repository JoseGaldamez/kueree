import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Hablemos de tu proyecto</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Otras formas de contacto</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hola@kueree.com</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+504 3175-1455</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Oficina</h3>
                      <p className="text-muted-foreground">El Progreso, Yoro, Honduras</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Agenda una reunión</h3>
                      <p className="text-muted-foreground mb-2">Habla directamente con nuestro equipo</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/schedule">Agendar Reunión</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold mb-2">¿Necesitas soporte técnico?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Para problemas técnicos o preguntas sobre tu cuenta, visita nuestro centro de soporte.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/support">Ir a Soporte</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
