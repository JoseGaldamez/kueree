"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Zap, Cloud, BarChart3, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Actualización en Segundos",
    description: "Cambia tu menú al instante desde cualquier dispositivo. Sin esperas, sin complicaciones.",
    color: "bg-accent/20",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Cloud,
    title: "Integración segura en la Nube",
    description: "Velocidad y seguridad de clase mundial. Tu menú carga instantáneamente en cualquier parte del mundo.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Analíticas destacadas",
    description: "Descubre qué platos son los más vistos y optimiza tu menú basándote en datos reales.",
    color: "bg-accent/20",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Palette,
    title: "Diseño Personalizable",
    description: "Adapta los colores y el estilo de tu menú para que coincida perfectamente con tu marca.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
]

export function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Características que <span className="text-primary">Marcan la Diferencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para llevar tu restaurante al siguiente nivel
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center`}>
                          <Icon className={`w-10 h-10 ${feature.iconColor}`} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{feature.description}</p>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={goToPrev} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
