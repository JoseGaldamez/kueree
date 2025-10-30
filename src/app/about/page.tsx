import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Users, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovación",
      description: "Creamos soluciones que transforman la experiencia gastronómica digital.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos junto a nuestros clientes para entender y resolver sus necesidades.",
    },
    {
      icon: Zap,
      title: "Simplicidad",
      description: "Hacemos que la tecnología sea accesible y fácil de usar para todos.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y nos dedicamos a ayudar a los restaurantes a crecer.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Transformando la experiencia gastronómica
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Kueree nació de la visión de hacer que los menús digitales sean accesibles, hermosos y fáciles de
              gestionar para cualquier restaurante.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En 2025, un grupo de emprendedores apasionados por la tecnología y la gastronomía se unió con una misión
              clara: democratizar el acceso a menús digitales de alta calidad. Vimos cómo muchos restaurantes luchaban
              con soluciones complicadas y costosas, imágenes o simplemente usaban PDFs difíciles de navegar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Decidimos crear algo diferente. Kueree es una plataforma que combina diseño elegante, facilidad de uso y
              precios accesibles. Hoy, ayudamos a cientos de restaurantes a ofrecer experiencias digitales excepcionales
              a sus clientes.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para unirte a nosotros?</h2>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Únete a los cientos de restaurantes que ya confían en Kueree para sus menús digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://app.kueree.com/registro">Empezar Gratis</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
