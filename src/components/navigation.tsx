import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/images/kueree.png" alt="Kueree Logo" width={50} height={50} />
            </div>
            <span className="font-bold text-xl">Kueree</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              Acerca de
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
              Soporte
            </Link>
          </div>

          <Button variant="ghost" size="sm" asChild>
            <Link href="https://app.kueree.com">Iniciar Sesión</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
