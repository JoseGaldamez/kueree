import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            ¿Listo para que tus menús se muevan tan rápido como tu cocina?
          </h2>

          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Únete a cientos de restaurantes que ya están disfrutando de la eficiencia de Kueree
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group" asChild>
              <a href="https://app.kueree.com/registro">
                Únete a Kueree Hoy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/schedule">
                Hablar con Ventas
              </Link>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Sin tarjeta de crédito requerida • Configuración en 5 minutos
          </p>
        </div>
      </div>
    </section>
  )
}
