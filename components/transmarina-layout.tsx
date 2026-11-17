import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20.5" />
        <path d="M9 26.5c4-4.5 7.5-4.5 11.5 0s7.5 4.5 11.5 0 6-4 8-3" />
        <path d="M12 18.5c3.5-3 6.5-3 10 0s6.5 3 10 0" />
      </svg>
    </span>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topline">
        <div className="topline-inner">
          <span>MANABÍ, ECUADOR <i aria-hidden="true">·</i> PACÍFICO SUR</span>
          <span className="topline-note">Tecnología y sostenibilidad garantizada</span>
        </div>
      </div>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Transmarina, página de inicio">
          <BrandMark />
          <span className="brand-word">transmarina<span>®</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/#nosotros">Nosotros</Link>
          <Link href="/productos/atun">Productos</Link>
          <Link href="/content/certificaciones">Certificaciones</Link>
        </nav>
        <a className="nav-contact" href="https://transmarina.com" target="_blank" rel="noreferrer">
          Contacto <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú de navegación"><span></span><span></span></summary>
          <nav aria-label="Navegación móvil">
            <Link href="/#nosotros">Nosotros</Link>
            <Link href="/productos/atun">Productos</Link>
            <Link href="/content/certificaciones">Certificaciones</Link>
            <a href="https://transmarina.com" target="_blank" rel="noreferrer">Contacto</a>
          </nav>
        </details>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <BrandMark />
            <span className="brand-word">transmarina<span>®</span></span>
          </Link>
          <p>Productos del mar con origen, precisión y compromiso con el futuro.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explorar</span>
          <Link href="/#nosotros">Nosotros</Link>
          <Link href="/productos/atun">Atún ultra congelado</Link>
          <Link href="/content/certificaciones">Certificaciones</Link>
        </div>
        <div className="footer-column footer-location">
          <span className="footer-label">Nuestro origen</span>
          <span>Manabí · Ecuador</span>
          <span>Océano Pacífico</span>
          <a href="https://transmarina.com" target="_blank" rel="noreferrer">Visitar transmarina.com <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Transmarina. Todos los derechos reservados.</span>
        <span>Del Pacífico, con propósito.</span>
      </div>
    </footer>
  )
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span aria-hidden="true"></span>{children}</p>
}
