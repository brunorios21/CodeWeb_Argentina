import { motion, type Variants } from 'framer-motion'
import { FileSearch, Kanban, Cpu } from 'lucide-react'

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

interface TrustCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#121316]/40 border border-zinc-800/60 rounded-2xl p-6 transition-all duration-300 hover:border-[#0066FF]/30"
    >
      <div className="mb-4 inline-flex items-center justify-center p-3 text-[#0066FF]">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#F4F4F6]">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-[#8E939E]">
        {description}
      </p>
    </motion.div>
  )
}

export function CompanyTrust() {
  return (
    <section className="w-full py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="w-full max-w-5xl mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-light tracking-tighter text-center mb-12 text-[#F4F4F6]"
        >
          Garantía de Ingeniería y Calidad Funcional
        </motion.h2>

        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TrustCard
            icon={<FileSearch size={28} />}
            title="Análisis Funcional Avanzado"
            description="Levantamiento de requerimientos y especificación técnica rigurosa. Traducimos procesos de negocio complejos en arquitectura de software limpia antes de codificar."
          />
          <TrustCard
            icon={<Kanban size={28} />}
            title="Metodologías Ágiles & Scrum"
            description="Ciclos de desarrollo iterativos con sprints quincenales, transparencia absoluta y entregas continuas orientadas a valor real."
          />
          <TrustCard
            icon={<Cpu size={28} />}
            title="Ingeniería de Software Premium"
            description="Código modular, limpio y escalable desarrollado con Next.js y TypeScript. Garantía del 100% de rendimiento en Google PageSpeed y cero dependencias de plantillas genéricas."
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
