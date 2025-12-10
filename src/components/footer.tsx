import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-sm text-background/70 hover:text-background transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm text-background/70 hover:text-background transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  Acerca de Kueree
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm text-background/70 hover:text-background transition-colors">
                  Agendar Reunión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-sm text-background/70 hover:text-background transition-colors">
                  Soporte
                </Link>
              </li>
              <li>
                <Link
                  href="/support#faq"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-background/70 hover:text-background transition-colors">
                  Documentación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-background/70 hover:text-background transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-background/70 hover:text-background transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-background/70 hover:text-background transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl">Kueree</span>
            </div>

            <p className="text-sm text-background/70">© 2025 Kueree. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
