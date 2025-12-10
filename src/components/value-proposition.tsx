"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { FileX, Clock, Zap, Shield } from "lucide-react"

const problems = [
  {
    icon: FileX,
    title: "Menús en Papel Obsoletos",
    description: "Costosos de imprimir, imposibles de actualizar rápidamente, y poco higiénicos.",
  },
  {
    icon: Clock,
    title: "Actualizaciones Lentas",
    description: "Cambiar precios o platos requiere reimprimir todo el menú.",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "Actualización Instantánea",
    description: "Cambia precios, platos y descripciones en segundos desde cualquier dispositivo.",
  },
  {
    icon: Shield,
    title: "Higiénico y Moderno",
    description: "Sin contacto físico. Tus clientes escanean y ven un menú elegante en su teléfono.",
  },
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  )
}

export function ValueProposition() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Del Problema a la <span className="text-primary">Solución</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kueree transforma la experiencia del menú tradicional en algo moderno y eficiente
            </p>
          </div>
        </AnimatedSection>

        {/* Zigzag layout */}
        <div className="space-y-24">
          {/* Problem 1 - Image left, text right */}
          <AnimatedSection delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-3xl flex items-center justify-center">
                  <FileX className="w-32 h-32 text-destructive/40 my-20" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-sm font-medium text-destructive">
                  Problema
                </div>
                <h3 className="text-3xl font-bold">{problems[0].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{problems[0].description}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Solution 1 - Text left, image right */}
          <AnimatedSection delay={200}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                  Solución Kueree
                </div>
                <h3 className="text-3xl font-bold">{solutions[0].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{solutions[0].description}</p>
              </div>
              <div className="relative lg:order-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                  <Zap className="w-32 h-32 text-primary my-20" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Problem 2 - Image left, text right */}
          <AnimatedSection delay={300}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-3xl flex items-center justify-center">
                  <Clock className="w-32 h-32 text-destructive/40 my-20" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-sm font-medium text-destructive">
                  Problema
                </div>
                <h3 className="text-3xl font-bold">{problems[1].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{problems[1].description}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Solution 2 - Text left, image right */}
          <AnimatedSection delay={400}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                  Solución Kueree
                </div>
                <h3 className="text-3xl font-bold">{solutions[1].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{solutions[1].description}</p>
              </div>
              <div className="relative lg:order-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary my-20" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
