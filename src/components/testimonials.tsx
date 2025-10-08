"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-2xl sm:text-3xl font-medium leading-relaxed text-balance">
                "Kueree transformó completamente la experiencia de nuestros clientes. Ahora podemos actualizar nuestro
                menú en segundos y nuestros clientes adoran la facilidad de escanear el QR. Nos ha ahorrado tiempo y
                dinero."
              </blockquote>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  RM
                </div>
                <div>
                  <p className="font-semibold text-lg">Roberto Martínez</p>
                  <p className="text-muted-foreground">Chef Ejecutivo, Restaurante La Perla</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
