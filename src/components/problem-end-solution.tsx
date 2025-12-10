import React from 'react'
import { AlertTriangle, Check } from 'lucide-react'

export const ProblemAndSoluctionSection = () => {
  const problems = [
    {
      title: "Menús físicos deteriorados",
      description: "Los menús impresos se ensucian, rompen y necesitan reimpresión constante, generando costos adicionales."
    },
    {
      title: "Cambios de precios lentos",
      description: "Actualizar precios o platos requiere reimprimir todos los menús, creando demoras y errores."
    },
    {
      title: "Experiencia desactualizada",
      description: "Los clientes esperan opciones digitales modernas, no menús físicos anticuados."
    }
  ]

  const solutionFeatures = [
    "Menú siempre actualizado al instante",
    "Sin costos de impresión ni reimpresión",
    "Experiencia moderna y profesional",
    "Fácil gestión desde cualquier dispositivo",
    "Aumenta la satisfacción del cliente"
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            De Problemas a <span className="text-accent">Soluciones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo Kueree transforma los desafíos tradicionales en oportunidades de crecimiento
          </p>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 items-start">
          

          {/* Problemas - Lado Izquierdo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Problemas Actuales
            </h3>
            
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mr-10"
              >
                <h4 className="text-xl font-semibold text-card-foreground mb-3">
                  {problem.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* VS Element - Center divider */}
          <div className="flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 justify-center lg:justify-start my-8 lg:my-0">
            <div className="bg-background border-4 border-accent rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-accent">VS</span>
            </div>
          </div>

          {/* Solución - Lado Derecho */}
          <div className="lg:pl-8">
            <div className="bg-primary rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  La Solución: Kueree
                </h3>
                
                <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                  Un menú digital inteligente que elimina todos estos problemas y transforma 
                  la experiencia de tus clientes de forma instantánea.
                </p>

                <div className="space-y-4">
                  {solutionFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <div className="bg-primary-foreground/10 rounded-full p-1 mt-1 group-hover:bg-primary-foreground/20 transition-colors duration-200">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground font-medium text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-accent-foreground/20">
                  <p className="text-primary-foreground/80 text-sm italic">
                    💡 Transforma tu negocio en minutos, no en meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
