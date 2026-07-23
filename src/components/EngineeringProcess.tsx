import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

interface ProcessCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ProcessCard({ icon, title, description }: ProcessCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="compact-card group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#14161A]/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-[#14161A]/80"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,102,255,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_25%)] opacity-80" />
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-[#0066FF]/20 bg-gradient-to-br from-[#0066FF]/20 via-[#0066FF]/10 to-transparent p-3.5 text-[#7DD3FC] shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_36px_rgba(0,102,255,0.25)]">
          {icon}
        </div>
        <h3 className="compact-title mb-3 text-lg sm:text-xl font-semibold tracking-tight text-[#F4F4F6]">
          {title}
        </h3>
        <p className="compact-description text-sm font-light leading-relaxed text-[#8E939E]">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function EngineeringProcess() {
  return (
    <section className="compact-section w-full py-16 sm:py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16 text-center">
          <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.25em] text-[#8E939E]">
            Nuestro Proceso
          </p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight tracking-tighter text-[#F4F4F6] md:font-light">
            Ingeniería de Software de Extremo a Extremo
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProcessCard
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3v4" />
                <path d="M18 3v4" />
                <path d="M4 7h16" />
                <path d="M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
                <path d="M9 12h6" />
                <path d="M9 16h4" />
              </svg>
            }
            title="Análisis Funcional y Requerimientos"
            description="Traducimos necesidades de negocio complejas en especificaciones técnicas perfectas antes de escribir código. Cada decisión está fundamentada en datos y objetivos medibles."
          />
          <ProcessCard
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M7 5v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5" />
                <path d="M9 9h6" />
                <path d="M9 13h4" />
                <path d="M8 19h8" />
              </svg>
            }
            title="Metodologías Ágiles & Scrum"
            description="Trabajamos con sprints de 2 semanas, entregas continuas y visibilidad total para el cliente. Tú controlas el progreso en tiempo real con dashboards transparentes."
          />
          <ProcessCard
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 8h8" />
                <path d="M8 12h5" />
                <path d="M8 16h3" />
                <path d="M16 16l2-2-2-2" />
              </svg>
            }
            title="Arquitectura & Escalabilidad"
            description="Desarrollo a medida con Next.js, APIs robustas y rendimiento óptimo. Sistemas diseñados para crecer con tu negocio sin comprometer la velocidad ni la seguridad."
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
