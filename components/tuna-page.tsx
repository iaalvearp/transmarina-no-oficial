import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Snowflake } from 'lucide-react'
import { Eyebrow } from '@/components/transmarina-layout'

const products = [
  { number: '01', name: 'Lomo', english: 'Loin', detail: 'Corte limpio y versátil, ideal para aplicaciones de alto valor.' },
  { number: '02', name: 'Porción', english: 'Portion', detail: 'Porciones uniformes preparadas para una presentación precisa.' },
  { number: '03', name: 'Saku block', english: 'Saku block', detail: 'Bloques rectangulares seleccionados para cortes consistentes.' },
  { number: '04', name: 'Ventresca sin piel', english: 'Skinless belly', detail: 'Textura delicada, preparada sin piel.' },
  { number: '05', name: 'Filete', english: 'Steak', detail: 'Corte tradicional con calidad sashimi y congelación cuidada.' },
  { number: '06', name: 'Tataki', english: 'Tataki', detail: 'Formato pensado para una preparación breve y una textura singular.' },
]

export function TunaPage() {
  return (
    <main className="inner-page">
      <section className="page-hero tuna-page-hero">
        <div className="page-hero-copy">
          <Eyebrow>Productos · 01</Eyebrow>
          <h1>Atún de<br /><em>origen.</em></h1>
          <p className="page-lead">La calidad sashimi es nuestro negocio. Selección, conocimiento y congelación para llevar la esencia del Pacífico más lejos.</p>
          <a className="text-link" href="#cortes">Explorar presentaciones <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="page-hero-photo">
          <Image src="/tuna-loin.png" alt="Lomo fresco de atún seleccionado para calidad sashimi" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
          <div className="photo-stamp"><Snowflake size={16} aria-hidden="true" /><span>ULTRA<br />CONGELADO</span></div>
          <span className="photo-index">THUNNUS · PACIFIC OCEAN</span>
        </div>
      </section>

      <section className="species-band">
        <div className="species-label"><span>ESPECIES</span><span>01 — 03</span></div>
        <div className="species-item"><strong>Bigeye</strong><em>Thunnus obesus</em></div>
        <div className="species-item"><strong>Yellowfin</strong><em>Thunnus albacares</em></div>
        <div className="species-item"><strong>Skipjack</strong><em>Katsuwonus pelamis</em></div>
      </section>

      <section className="cuts-section section-shell" id="cortes">
        <div className="section-head-row">
          <div><Eyebrow>Una línea versátil</Eyebrow><h2>Cortes pensados<br />para <em>cada mercado.</em></h2></div>
          <p>Atención personalizada y flexibilidad para adaptar los productos a las necesidades de cada cliente.</p>
        </div>
        <div className="cuts-grid">
          {products.map((product) => (
            <article className="cut-card" key={product.number}>
              <span className="cut-number">{product.number}</span>
              <span className="cut-rule"></span>
              <h3>{product.name}</h3>
              <span className="cut-english">{product.english}</span>
              <p>{product.detail}</p>
              <span className="cut-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="packaging-section">
        <div className="packaging-copy">
          <Eyebrow light>Adaptabilidad en cada entrega</Eyebrow>
          <h2>Presentaciones<br />a la medida <em>de tu operación.</em></h2>
          <p>Enfundado individual, vacío o a granel: distintas alternativas de empaque y formatos de caja para responder a cada requerimiento.</p>
          <Link className="quiet-link quiet-link-light" href="https://transmarina.com" target="_blank">Conversemos sobre tu necesidad <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="packaging-options">
          <div><span>01</span><strong>IVP</strong><small>Individual Vacuum Pack</small></div>
          <div><span>02</span><strong>WP</strong><small>Individual Wrap Pack</small></div>
          <div><span>03</span><strong>BVP / BP</strong><small>Bulk Vacuum Pack · Bulk Pack</small></div>
          <div className="box-sizes"><span>FORMATOS DE CAJA</span><strong>2 <i>·</i> 5 <i>·</i> 10 <i>·</i> 25 <i>·</i> 30 <small>kg</small></strong><small>Cartón o caja térmica</small></div>
        </div>
      </section>

      <section className="trace-section section-shell">
        <div className="trace-symbol"><Snowflake size={28} aria-hidden="true" /></div>
        <div><Eyebrow>Frescura en su punto</Eyebrow><h2>La temperatura<br />también cuenta.</h2></div>
        <p>Nuestras cámaras de congelación a −18 °C contribuyen a preservar la frescura y calidad de cada producto.</p>
        <Link className="text-link" href="/content/certificaciones">Calidad y certificaciones <ArrowRight size={15} aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
