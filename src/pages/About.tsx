import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Gauge, HeartHandshake, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProcessSection } from '../components/ProcessSection'

const principles = [{ icon: Gauge, title: 'Velocidad con criterio', text: 'Landing pages en aproximadamente 3 días y aplicaciones web en menos de una semana, sin sacrificar calidad.' }, { icon: HeartHandshake, title: 'Trato directo', text: 'Trabajás con quien diseña y construye. Menos intermediarios, más claridad y mejores decisiones.' }, { icon: Boxes, title: 'Pensado para crecer', text: 'Arquitectura limpia, componentes reutilizables y una base lista para acompañar la evolución de tu negocio.' }]

export function About() {
  return <div className="page-wrap">
    <section className="about-video-hero mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <video className="about-video-background" autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
        <source src="/projects/fondo1.mp4" type="video/mp4" />
      </video>
      <div className="about-video-overlay" />
      <div className="about-video-content">
        <div className="mx-auto max-w-3xl text-center"><p className="eyebrow justify-center"><Code2 size={14} /> Nosotros</p><h1 className="page-title mx-auto">Tecnología simple para <span className="gradient-text">negocios ambiciosos.</span></h1><p className="hero-copy mx-auto">CodeWeb es un estudio digital independiente. Combinamos estrategia, diseño y desarrollo full-stack para crear experiencias digitales con impacto real.</p></div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }, i) => <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={title} className="glass-card"><div className="icon-box"><Icon size={21} /></div><h2 className="mt-6 text-xl font-semibold text-white">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></motion.article>)}</div>
      </div>
    </section>
    <ProcessSection />
    <section className="mx-auto max-w-7xl px-4 pb-28 text-center sm:px-6"><h2 className="section-title">¿Construimos algo que importe?</h2><Link to="/contacto" className="button-primary mt-8 inline-flex">Conocernos mejor <ArrowRight size={16} /></Link></section>
  </div>
}
