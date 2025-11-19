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
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/images/fondo-hero.jpg')",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
          }}
        />
        {/* Overlay gradients for better text readability */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
        {/* Additional decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Menú Digital Moderno</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance" style={{ lineHeight: "1" }}>
              Crea y administra tu  <span className="text-primary">menú digital</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Moderniza tu mesa. Actualiza al instante. Disfruta de la eficiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://app.kueree.com/">Empieza Gratis</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-amber-300 hover:bg-amber-400 cursor-pointer">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Escanea y Listo</p>
                  <p className="text-xs text-muted-foreground">Sin apps</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Actualización Instantánea</p>
                  <p className="text-xs text-muted-foreground">En segundos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - QR Code with animation */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mx-auto w-full max-w-sm">


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
