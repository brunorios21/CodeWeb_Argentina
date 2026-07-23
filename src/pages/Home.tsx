import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { HeroStats } from '../components/HeroStats'
import { CloudSecuritySection } from '../components/CloudSecuritySection'
import { PricingCards } from '../components/PricingCards'
import { VideoBackground } from '../components/VideoBackground'

const featuredProjects = projectsData.slice(0, 3)

const Button = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="button-primary">
    {children}<ArrowRight size={16} />
  </Link>
)

export function Home() {
  return (
    <div className="page-wrap">
      <section className="hero-grid mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:pb-28">
        <VideoBackground src="/projects/fondo01.mp4" poster="/projects/fondoprincipal.jpg" />

        <div className="hero-content max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><Sparkles size={14} /> Agencia digital independiente · Buenos Aires</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-title">Transformamos ideas en <span className="gradient-text">máquinas de ventas.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="hero-copy">Diseñamos y desarrollamos sitios, tiendas y productos digitales que convierten. Estrategia clara, ejecución veloz y tecnología que trabaja para tu negocio.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3"><Button to="/contacto">Iniciar proyecto</Button><Link to="/proyectos" className="button-secondary">Ver nuestro trabajo <ArrowRight size={16} /></Link></motion.div>
          <HeroStats />
        </div>

        <div className="hero-content mt-16 grid items-stretch gap-4 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.a key={project.id} href="/proyectos" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + index * 0.12 }} className="project-float project-card">
              <div className="project-image"><img src={project.images[0]} alt={project.title} loading="lazy" decoding="async" width="1600" height="900" /><span className="project-number">0{index + 1}</span></div>
              <div className="flex items-center justify-between p-4"><div><p className="text-sm font-medium text-white">{project.title}</p><p className="mt-1 text-xs text-slate-500">{project.category}</p></div><ArrowRight size={16} className="text-violet-300" /></div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-24 sm:px-6 md:grid-cols-3"><div className="stat-card"><strong>10+</strong><span>proyectos entregados</span></div><div className="stat-card"><strong>3 días</strong><span>para una landing lista</span></div><div className="stat-card"><strong>100%</strong><span>dedicación directa</span></div></section>

      <CloudSecuritySection />
      <PricingCards />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="project-bento">
          <div className="project-bento-copy"><span className="eyebrow">Diseño que se mueve</span><h2 className="section-title mt-4">Estrategia, diseño y código en <span className="gradient-text">una sola dirección.</span></h2><p>Interfaces de alto impacto pensadas para que cada visita encuentre una razón para avanzar.</p><Link to="/proyectos" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">Explorar proyectos <ArrowRight size={15} /></Link></div>
          <div className="project-bento-images">{featuredProjects.map((project, index) => <motion.div key={project.id} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className={`bento-shot bento-shot-${index + 1}`}><img src={project.images[0]} alt={`Vista previa de ${project.title}`} loading="lazy" decoding="async" width="1600" height="900" /><span>{project.title}</span></motion.div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-28 text-center sm:px-6"><p className="eyebrow justify-center">Tu próximo salto digital</p><h2 className="section-title mx-auto mt-4 max-w-2xl">Una buena idea merece una web que esté a la altura.</h2><div className="mt-8 flex justify-center"><Button to="/contacto">Hablemos de tu proyecto</Button></div></section>
    </div>
  )
}
