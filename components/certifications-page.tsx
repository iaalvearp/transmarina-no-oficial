import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Eyebrow } from '@/components/transmarina-layout'

const certifications = [
  { code: 'BRC', title: 'BRC Global Standard for Food Safety', category: 'Seguridad alimentaria', description: 'Estándar global para la gestión de calidad y seguridad alimentaria, orientado al cumplimiento normativo y la protección del consumidor.' },
  { code: 'IFS', title: 'IFS Food', category: 'Calidad del producto', description: 'Auditoría de productores de alimentos que evalúa la seguridad, la calidad del producto y la mejora continua de los procesos.' },
  { code: 'MSC', title: 'MSC Chain of Custody', category: 'Trazabilidad', description: 'Estándar de cadena de custodia que aporta trazabilidad desde pesquerías certificadas hasta el destino final del producto.' },
  { code: 'ISO', title: 'ISO 9001:2015', category: 'Gestión de calidad', description: 'Sistema de gestión de calidad enfocado en el cliente, la participación del equipo y la mejora continua.' },
  { code: 'BASC', title: 'Business Alliance for Secure Commerce', category: 'Seguridad comercial', description: 'Alianza internacional que promueve prácticas seguras en el comercio y en la cadena de suministro.' },
  { code: 'BSCI', title: 'Business Social Compliance Initiative', category: 'Responsabilidad social', description: 'Iniciativa orientada a promover mejores condiciones de trabajo y principios de responsabilidad social en la cadena global.' },
  { code: 'DOLPHIN', title: 'Dolphin Safe', category: 'Protección marina', description: 'Programa de monitoreo orientado a evitar la captura intencional de delfines y otros mamíferos marinos durante la pesca de atún.' },
  { code: 'FOS', title: 'Friend of the Sea', category: 'Sostenibilidad', description: 'Certificación internacional que fomenta la conservación de hábitats marinos y el abastecimiento de fuentes sostenibles.' },
]

export function CertificationsPage() {
  return (
    <main className="inner-page certifications-page">
      <section className="cert-hero">
        <div className="cert-hero-top"><Eyebrow light>Compromiso · 02</Eyebrow><span>CALIDAD <i>×</i> RESPONSABILIDAD</span></div>
        <h1>La confianza<br />se demuestra<br /><em>en cada paso.</em></h1>
        <div className="cert-hero-bottom">
          <p>Para nosotros, cumplir va más allá de ceñirse a requisitos. Es una forma de trabajar, compartida por toda la organización.</p>
          <a className="button button-light" href="#estandares">Conoce nuestros estándares <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <span className="cert-hero-index" aria-hidden="true">02 / 03</span>
      </section>

      <section className="cert-intro section-shell">
        <div className="cert-intro-number">01<br /><span>—</span></div>
        <div><Eyebrow>Calidad en toda la cadena</Eyebrow><h2>Principios firmes.<br /><em>Procesos confiables.</em></h2></div>
        <p>Nuestra flota, planta y procesos trabajan bajo certificaciones y estándares que respaldan la calidad, seguridad y trazabilidad de nuestros productos.</p>
      </section>

      <section className="standards-section section-shell" id="estandares">
        <div className="standards-heading"><div><Eyebrow>Un compromiso compartido</Eyebrow><h2>Estándares y <em>certificaciones.</em></h2></div><p>Una guía clara para nuestros colaboradores y una referencia de confianza para nuestros clientes.</p></div>
        <div className="standards-grid">
          {certifications.map((cert, index) => (
            <article className="standard-card" key={cert.code}>
              <div className="standard-card-top"><span className="standard-number">0{index + 1}</span><span className="standard-check"><Check size={13} aria-hidden="true" /></span></div>
              <span className="standard-code">{cert.code}</span>
              <span className="standard-category">{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </article>
          ))}
        </div>
        <p className="cert-disclaimer">Los nombres de los estándares se presentan como referencia de nuestros compromisos y procesos. La vigencia y alcance aplicable corresponde a la documentación oficial de cada certificación.</p>
      </section>

      <section className="cert-bottom-cta">
        <div className="cta-rule"></div>
        <div><Eyebrow light>Transparencia desde el origen</Eyebrow><h2>Conoce el producto<br />detrás de <em>cada estándar.</em></h2></div>
        <Link className="button button-light" href="/productos/atun">Explorar el atún <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
