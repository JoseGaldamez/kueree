import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      description: "Perfecto para empezar",
      features: [
        "1 menú digital",
        "Hasta 10 productos",
        "Código QR básico",
        "Actualizaciones ilimitadas",
        "Soporte por email",
      ],
      cta: "Empezar Gratis",
      href: "https://app.kueree.com/",
      highlighted: false,
    },
    {
      name: "Profesional",
      price: "$15",
      period: "/mes",
      description: "Para restaurantes en crecimiento",
      features: [
        "Productos ilimitados",
        "Códigos QR personalizados",
        "Análisis de uso",
        "Múltiples idiomas",
        "Soporte prioritario",
        "Sin marca Kueree",
      ],
      cta: "Empezar Prueba Gratis",
      href: "https://app.kueree.com/",
      highlighted: true,
    },
    {
      name: "Empresa",
      price: "$59",
      description: "Para cadenas y franquicias",
      features: [
        "Todo en Profesional",
        "Múltiples menús",
        "Gestión multi-sucursal",
        "API personalizada",
        "Capacitación personalizada",
      ],
      cta: "Contactar Ventas",
      href: "https://app.kueree.com/",
      highlighted: false,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Precios simples y transparentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Elige el plan perfecto para tu negocio. Todos los planes incluyen 14 días de prueba gratis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105"
                  : "bg-card border border-border"
                  }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg">{plan.period}</span>}
                </div>

                <Button
                  asChild
                  className={`w-full mb-8 ${plan.highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""
                    }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas algo diferente?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos para planes personalizados o si tienes preguntas sobre nuestros precios.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Hablar con Ventas</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
