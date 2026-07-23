import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Gauge, HeartHandshake, Layers3, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDecorativeVideoEnabled } from '../components/VideoBackground'

const principles = [{ icon: Gauge, title: 'Velocidad con criterio', text: 'Landing pages en aproximadamente 3 días y aplicaciones web en menos de una semana, sin sacrificar calidad.' }, { icon: HeartHandshake, title: 'Trato directo', text: 'Trabajás con quien diseña y construye. Menos intermediarios, más claridad y mejores decisiones.' }, { icon: Boxes, title: 'Pensado para crecer', text: 'Arquitectura limpia, componentes reutilizables y una base lista para acompañar la evolución de tu negocio.' }]
const stack = ['React', 'Node.js', 'Express', 'Tailwind', 'Vite', 'JavaScript']

export function About() {
  const isVideoEnabled = useDecorativeVideoEnabled()
  return <div className="page-wrap">
    <section className="about-video-hero mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      {isVideoEnabled && <video className="about-video-background" autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
        <source src="/projects/fondo1.mp4" type="video/mp4" />
      </video>}
      <div className="about-video-overlay" />
      <div className="about-video-content">
        <div className="mx-auto max-w-3xl text-center"><p className="eyebrow justify-center"><Code2 size={14} /> Nosotros</p><h1 className="page-title mx-auto">Tecnología simple para <span className="gradient-text">negocios ambiciosos.</span></h1><p className="hero-copy mx-auto">CodeWeb es un estudio digital independiente. Combinamos estrategia, diseño y desarrollo full-stack para crear experiencias digitales con impacto real.</p></div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }, i) => <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={title} className="glass-card"><div className="icon-box"><Icon size={21} /></div><h2 className="mt-6 text-xl font-semibold text-white">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></motion.article>)}</div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-24 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="eyebrow">Nuestra forma de trabajar</p><h2 className="section-title mt-4">Del problema al producto, sin humo.</h2><p className="mt-6 text-base leading-8 text-slate-400">Primero entendemos qué necesita tu negocio y qué esperan tus clientes. Después convertimos esa información en una experiencia clara, rápida y medible. Cada entrega tiene un porqué.</p><div className="mt-8 space-y-5">{['Descubrimiento y objetivos', 'Diseño de experiencia y prototipo', 'Desarrollo, pruebas y lanzamiento'].map((item, i) => <div key={item} className="flex items-center gap-4"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-xs text-violet-300">0{i + 1}</span><span className="text-sm text-slate-200">{item}</span></div>)}</div></div><div className="glass-card relative overflow-hidden"><div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" /><p className="eyebrow">Stack de confianza</p><div className="mt-7 flex flex-wrap gap-2">{stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div><div className="mt-10 border-t border-white/10 pt-6"><p className="text-sm leading-7 text-slate-400">Herramientas modernas para entregar productos sólidos, mantenibles y listos para vender.</p><Layers3 className="mt-5 text-violet-300" /></div></div></section>
    <section className="mx-auto max-w-7xl px-4 pb-28 text-center sm:px-6"><h2 className="section-title">¿Construimos algo que importe?</h2><Link to="/contacto" className="button-primary mt-8 inline-flex">Conocernos mejor <ArrowRight size={16} /></Link></section>
  </div>
}
