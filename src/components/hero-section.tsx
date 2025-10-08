"use client"

import { Button } from "@/components/ui/button"
import { QrCode, Smartphone, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Menú Digital Moderno</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance" style={{ lineHeight: "1" }}>
              <span className="text-primary">Kueree</span>: Tus Clientes <span className="text-gray-500">Amarán Escanearlo</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Moderniza tu mesa. Actualiza al instante. Disfruta de la eficiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://app.kueree.com/registro">Empieza Gratis</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Escanea y Listo</p>
                  <p className="text-xs text-muted-foreground">Sin apps</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Actualización Instantánea</p>
                  <p className="text-xs text-muted-foreground">En segundos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup with animation */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mx-auto w-full max-w-sm animate-float">
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="aspect-[9/19] bg-gradient-to-b from-background to-muted/20 p-6 space-y-4">
                    {/* QR scan animation */}
                    <div className="flex items-center justify-center py-8">
                      <div className="relative">
                        <div className="w-32 h-32 border-4 border-primary rounded-2xl flex items-center justify-center">
                          <QrCode className="w-20 h-20 text-primary" />
                        </div>
                        <div className="absolute inset-0 border-4 border-accent rounded-2xl animate-ping opacity-20" />
                      </div>
                    </div>

                    {/* Menu preview */}
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded w-3/4" />
                      <div className="space-y-2">
                        <div className="h-20 bg-card border border-border rounded-lg p-3 space-y-2">
                          <div className="h-3 bg-muted rounded w-2/3" />
                          <div className="h-2 bg-muted rounded w-1/2" />
                        </div>
                        <div className="h-20 bg-card border border-border rounded-lg p-3 space-y-2">
                          <div className="h-3 bg-muted rounded w-2/3" />
                          <div className="h-2 bg-muted rounded w-1/2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Smartphone className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
