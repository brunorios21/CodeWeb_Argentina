import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  challenge: string
  solution: string
  image: string
  techBadges: readonly string[]
}

const projects: Project[] = [
  {
    id: 'blackframe',
    title: 'Black Frame Studio',
    category: 'Premium Lead Generation',
    challenge:
      'Entregar storytelling inmersivo con capas de motion personalizadas sin sacrificar LCP por debajo de 2s ni los scores de Lighthouse.',
    solution:
      'Unifica posicionamiento de marca, showcase de portfolio y captación de leads en un único funnel de alta conversión.',
    image: '/projects/blackframe-hero.jpg',
    techBadges: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design'],
  },
  {
    id: 'pctech',
    title: 'PC Tech Store',
    category: 'High-Performance E-Commerce',
    challenge:
      'Sincronización de inventario en tiempo real con 500+ SKUs, reglas de pricing dinámico y checkout optimizado bajo tráfico concurrente.',
    solution:
      'Optimiza el flujo de compra de hardware — reduce pasos de checkout y aumenta el valor promedio de cada orden.',
    image: '/projects/pctech-catalog.jpg',
    techBadges: ['Next.js', 'TypeScript', 'Context API', 'E-Commerce'],
  },
  {
    id: 'lucas',
    title: 'Carnicería Luca — Ops Panel',
    category: 'Custom ERP & Operations',
    challenge:
      'Datos de caja fragmentados en planillas sin visibilidad en tiempo real sobre ingresos, inventario y márgenes operativos.',
    solution:
      'Automatiza la conciliación de cierre de caja y entrega dashboards en vivo para forecasting de ingresos e inventario.',
    image: '/projects/lucas-dashboard.jpg',
    techBadges: ['React', 'Node.js', 'Express', 'REST API', 'Analytics'],
  },
]

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-accent-blue/20 bg-accent-blue/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-blue">
      {label}
    </span>
  )
}

function BrowserWindow({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="perspective-1000">
      <motion.div
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="preserve-3d overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated shadow-card"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-card/80 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-[10px] text-text-subtle">preview — live</span>
        </div>

        <div className="relative h-44 overflow-hidden bg-bg-base">
          <motion.img
            src={image}
            alt={alt}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover object-top"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-card/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}

function InfoBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-subtle">
        {label}
      </span>
      <p className="text-[13px] leading-[1.65] text-text-muted">{content}</p>
    </div>
  )
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-400">
      {label}
    </span>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className="flex h-full flex-col gap-5 rounded-2xl border border-border-subtle bg-bg-card p-5 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent-blue/15 hover:shadow-card-hover md:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <CategoryBadge label={project.category} />
      </div>

      <BrowserWindow image={project.image} alt={project.title} />

      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        <InfoBlock label="Desafío" content={project.challenge} />
        <InfoBlock label="Solución Funcional" content={project.solution} />
      </div>

      <div className="flex flex-wrap gap-2 border-t border-border-subtle/60 pt-4">
        {project.techBadges.map((badge) => (
          <TechBadge key={badge} label={badge} />
        ))}
      </div>
    </motion.article>
  )
}

export function PortfolioProjects() {
  return (
    <div className="w-full">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-card/50 px-3 py-1 backdrop-blur-sm">
            <Monitor size={12} className="text-accent-blue" />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
              Portfolio
            </span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-tight tracking-[-0.03em] text-text-main">
            Ecosistemas que convierten, escalan y redefinen la experiencia digital.
          </h2>
        </div>
        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-subtle bg-bg-card/40 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent-green" />
          <span className="font-mono text-[11px] text-text-subtle">
            3D Parallax · Framer Motion
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {['Smooth Parallax', 'Infinite Scroll', 'Premium UI'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-border-subtle/60 bg-bg-card/30 px-3 py-1 font-mono text-[11px] text-text-subtle"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
