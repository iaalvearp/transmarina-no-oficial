import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Snowflake, Waves } from 'lucide-react'
import { Eyebrow } from '@/components/transmarina-layout'

const values = [
  { number: '01', title: 'Origen que importa', text: 'Nacemos junto al Pacífico, en Manabí, Ecuador.' },
  { number: '02', title: 'Precisión en cada etapa', text: 'Cuidado experto desde la selección hasta la congelación.' },
  { number: '03', title: 'Compromiso a largo plazo', text: 'Calidad y sostenibilidad presentes en toda la cadena.' },
]

const certifications = ['BRC Global Standard', 'IFS Food', 'MSC Chain of Custody', 'ISO 9001:2015', 'BASC', 'BSCI', 'Dolphin Safe', 'Friend of the Sea']

export function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <Eyebrow>Productos del mar · Ecuador</Eyebrow>
          <h1>Del Pacífico<br />a las mesas<br /><em>del mundo.</em></h1>
          <p>Calidad que nace en el mar y se cuida en cada detalle. Atún ultra congelado desde Manabí, con tecnología y una visión responsable.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/productos/atun">Descubre nuestros productos <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <Link className="quiet-link" href="/content/certificaciones">Nuestro compromiso <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="hero-origin"><span className="origin-dot"></span> MANABÍ, ECUADOR <span className="origin-rule"></span> 00° 57′ S · 80° 43′ O</div>
        </div>
        <div className="hero-image-wrap">
          <Image className="hero-image" src="/transmarina-ocean.png" alt="Embarcación atunera navegando en el Pacífico al amanecer" fill priority sizes="(max-width: 760px) 100vw, 57vw" />
          <div className="image-vignette"></div>
          <div className="hero-image-caption"><span>01 / 03</span><span>EL PACÍFICO ES NUESTRO ORIGEN</span></div>
          <span className="hero-vertical" aria-hidden="true">TRANS MARINA · ECUADOR</span>
        </div>
        <a className="scroll-cue" href="#nosotros" aria-label="Desplazarse para descubrir más"><ArrowDown size={16} aria-hidden="true" /></a>
      </section>

      <section className="facts-row" aria-label="Lo que nos define">
        <div className="fact"><span className="fact-icon"><Waves size={18} aria-hidden="true" /></span><span><strong>Origen Pacífico</strong><small>Manabí, Ecuador</small></span></div>
        <div className="fact"><span className="fact-icon"><Snowflake size={18} aria-hidden="true" /></span><span><strong>Ultra congelado</strong><small>Conservación a −18 °C</small></span></div>
        <div className="fact"><span className="fact-icon"><Check size={18} aria-hidden="true" /></span><span><strong>Calidad certificada</strong><small>Estándares internacionales</small></span></div>
        <span className="facts-index">01 — 03</span>
      </section>

      <section className="story-section section-shell" id="nosotros">
        <div className="story-heading">
          <Eyebrow>Una historia de mar y oficio</Eyebrow>
          <h2>La confianza<br />se construye <em>en origen.</em></h2>
        </div>
        <div className="story-copy">
          <p className="story-lead">Trabajamos con el ritmo del océano y la exigencia de quienes buscan un producto excepcional.</p>
          <p>Desde nuestras operaciones en Manabí, cuidamos cada etapa con atención personalizada, flexibilidad y tecnología de congelación. Una forma de hacer las cosas con rigor, sin perder de vista el mar que nos da origen.</p>
          <Link className="text-link" href="/content/certificaciones">Conoce nuestros estándares <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="value-grid">
          {values.map((item) => (
            <article className="value-card" key={item.number}>
              <span className="value-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-feature">
        <div className="product-feature-image">
          <Image src="/tuna-loin.png" alt="Lomo de atún rojo de calidad sashimi" fill sizes="(max-width: 760px) 100vw, 52vw" />
          <span className="image-tag">SELECCIÓN DEL PACÍFICO</span>
        </div>
        <div className="product-feature-copy">
          <Eyebrow light>Producto destacado</Eyebrow>
          <span className="feature-index">01 / ATÚN</span>
          <h2>La calidad<br /><em>sashimi</em> es<br />nuestro negocio.</h2>
          <p>Atún seleccionado y ultra congelado, con presentaciones que se adaptan a cada necesidad y mercado.</p>
          <ul className="feature-list">
            <li><Check size={15} aria-hidden="true" /> Bigeye · Yellowfin · Skipjack</li>
            <li><Check size={15} aria-hidden="true" /> Lomos, porciones, saku y más</li>
            <li><Check size={15} aria-hidden="true" /> Empaques flexibles para cada cliente</li>
          </ul>
          <Link className="button button-light" href="/productos/atun">Ver línea de atún <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="cert-preview section-shell">
        <div className="cert-heading">
          <div>
            <Eyebrow>Calidad en toda la cadena</Eyebrow>
            <h2>Estándares que<br />respaldan <em>cada paso.</em></h2>
          </div>
          <Link className="text-link" href="/content/certificaciones">Ver certificaciones <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="cert-ribbon">
          {certifications.map((name, index) => <span className="cert-ribbon-item" key={name}><small>0{index + 1}</small>{name}</span>)}
        </div>
        <p className="cert-note">Nuestra flota, planta y procesos trabajan bajo principios de calidad, seguridad alimentaria y responsabilidad.</p>
      </section>

      <section className="closing-cta">
        <div className="closing-mark" aria-hidden="true"><Waves size={22} /></div>
        <Eyebrow light>Desde Manabí para el mundo</Eyebrow>
        <h2>Un producto excepcional<br />empieza con <em>un buen origen.</em></h2>
        <Link className="button button-light" href="/productos/atun">Explorar nuestros productos <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
