import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Video } from "lucide-react"

export default function SchedulePage() {
  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Agenda una reunión con nosotros
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Hablemos sobre cómo Kueree puede ayudar a tu restaurante. Elige el día y hora que mejor te convenga.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Detalles de la reunión</h2>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Videollamada</p>
                      <p className="text-sm text-muted-foreground">Recibirás un enlace de Google Meet</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">30 minutos</p>
                      <p className="text-sm text-muted-foreground">Tiempo suficiente para conocer tus necesidades</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Confirmación inmediata</p>
                      <p className="text-sm text-muted-foreground">Recibirás un email con los detalles</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold mb-2">¿Qué hablaremos?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tus necesidades específicas</li>
                  <li>• Demostración de la plataforma</li>
                  <li>• Planes y precios personalizados</li>
                  <li>• Proceso de implementación</li>
                  <li>• Respuestas a tus preguntas</li>
                </ul>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input id="phone" type="tel" placeholder="+52 123 456 7890" />
                </div>

                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium mb-2">
                    Nombre del restaurante
                  </label>
                  <Input id="restaurant" placeholder="Nombre de tu negocio" />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Fecha preferida
                  </label>
                  <Input id="date" type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hora preferida</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Confirmar Reunión
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Al agendar, aceptas nuestros{" "}
                  <a href="/terms" className="underline hover:text-foreground">
                    términos y condiciones
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
