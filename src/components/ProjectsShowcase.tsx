import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  url: string
  category: string
  description: string
  image: string
  stack: readonly string[]
}

const projects: Project[] = [
  {
    id: 'carniceria-luca',
    title: 'Carnicería Luca — Panel de Gestión & Caja',
    url: 'https://carnicerialutab.netlify.app/',
    category: 'SaaS & Sistema Interno',
    description: 'Sistema web de gestión operativa y control de caja diaria para comercios, optimizado para registro de ventas en tiempo real.',
    image: '/projects/lucas-dashboard.jpg',
    stack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'pc-tech-store',
    title: 'PC Tech Store — E-Commerce de Tecnología',
    url: 'https://brunorios21.github.io/Entrega-Final-Talento-Tech/index.html',
    category: 'E-Commerce & Frontend',
    description: 'Tienda online e-commerce orientada a componentes de PC y hardware, con catálogo dinámico, diseño responsivo y flujo de compra intuitivo.',
    image: '/projects/pctech-catalog.jpg',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages', 'Responsive Design'],
  },
  {
    id: 'codeweb-argentina',
    title: 'CodeWeb — Agencia Digital & Software',
    url: 'https://codewebargentina.netlify.app/',
    category: 'Plataforma Web & Agencia',
    description: 'Sitio web institucional de alto rendimiento, optimizado para conversión con estética dark mode y animaciones en cascada.',
    image: '/projects/blackframe-hero.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
  },
]

export function ProjectsShowcase() {
  return (
    <section className="w-full px-4 sm:px-6 py-20 sm:py-32 lg:py-40 bg-[#0a0b10] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.08),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.06),_transparent_35%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-tr from-[#A855F7]/2 via-transparent to-[#C026D3]/2 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-violet-400 mb-6"
          >
            PORTFOLIO // PROYECTOS REALIZADOS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Trabajos que generan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500">
              impacto real
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#8E939E] max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollo de soluciones full-stack de punta a punta, desde la arquitectura hasta la experiencia final.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="1600"
                    height="900"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-violet-600/90 backdrop-blur-md rounded-full border border-violet-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8E939E] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:bg-violet-600 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    Visitar Sitio
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
