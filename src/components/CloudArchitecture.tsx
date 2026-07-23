import { motion, type Variants } from 'framer-motion'
import { Cloud, Server, Terminal } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

interface ArchitectureNodeProps {
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
}

function ArchitectureNode({ icon, title, description, isLast = false }: ArchitectureNodeProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex-1 flex flex-col items-center text-center relative"
    >
      <div className="mb-4 inline-flex items-center justify-center p-4 text-[#0066FF] bg-[#0066FF]/10 rounded-2xl">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#F4F4F6]">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-[#8E939E] max-w-xs">
        {description}
      </p>
      {!isLast && (
        <div className="hidden md:block absolute top-8 right-0 w-16 h-px bg-gradient-to-r from-[#0066FF]/30 to-transparent translate-x-1/2" />
      )}
    </motion.div>
  )
}

export function CloudArchitecture() {
  return (
    <section className="compact-section w-full py-16 sm:py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="compact-title text-2xl md:text-4xl font-light tracking-tighter text-center mb-10 sm:mb-16 text-[#F4F4F6]"
        >
          Infraestructura Cloud Moderna
        </motion.h2>

        <motion.div variants={containerVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          <ArchitectureNode
            icon={<Cloud size={32} />}
            title="Despliegue Automatizado"
            description="AWS/Vercel Edge Network con distribución global y CDN optimizado."
          />
          <ArchitectureNode
            icon={<Server size={32} />}
            title="Serverless & Escalable"
            description="Bases de datos optimizadas sin servidor, arquitecturas desacopladas."
          />
          <ArchitectureNode
            icon={<Terminal size={32} />}
            title="CI/CD & Seguridad"
            description="Pipelines de integración continua, SSL grado bancario y monitoreo 24/7."
            isLast
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
