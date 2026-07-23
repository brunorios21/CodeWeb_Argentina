import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

interface Project {
  id: string
  title: string
  image: string
  techBadges: readonly string[]
}

const projects: Project[] = [
  {
    id: 'blackframe',
    title: 'Black Frame Studio',
    image: '/projects/blackframe-hero.jpg',
    techBadges: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design'],
  },
  {
    id: 'pctech',
    title: 'PC Tech Store',
    image: '/projects/pctech-catalog.jpg',
    techBadges: ['Next.js', 'TypeScript', 'Context API', 'E-Commerce'],
  },
  {
    id: 'lucas',
    title: 'Carnicería Luca — Ops Panel',
    image: '/projects/lucas-dashboard.jpg',
    techBadges: ['React', 'Node.js', 'Express', 'REST API', 'Analytics'],
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    rotateY: direction > 0 ? -6 : 6,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    rotateY: direction > 0 ? 6 : -6,
  }),
}

function ProjectWindow({ image, alt, enableTilt }: { image: string; alt: string; enableTilt: boolean }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 26,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 26,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    if (!enableTilt) return
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="perspective-1000 mx-auto w-full max-w-2xl">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={enableTilt ? { rotateX, rotateY } : { rotateX: 0, rotateY: 0 }}
        whileHover={enableTilt ? { scale: 1.01 } : undefined}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="preserve-3d overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#14161A] shadow-2xl"
      >
        <div className="flex items-center gap-1.5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>

        <div className="relative aspect-video overflow-hidden">
          <motion.img
            key={image}
            src={image}
            alt={alt}
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            whileHover={enableTilt ? { scale: 1.04 } : undefined}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-contain object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function PortfolioCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    updateViewport()
    mediaQuery.addEventListener?.('change', updateViewport)

    return () => mediaQuery.removeEventListener?.('change', updateViewport)
  }, [])

  const enableTilt = !isMobile

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setIndex((prev) => {
        const next = prev + newDirection
        if (next < 0) return projects.length - 1
        if (next >= projects.length) return 0
        return next
      })
    },
    [],
  )

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, paginate])

  const current = projects[index]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={headerVariants}
      className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4"
    >
      <motion.p
        variants={itemVariants}
        className="mb-6 text-[11px] font-normal uppercase tracking-[0.25em] text-text-subtle"
      >
        Selected Work
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="mb-20 max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-extralight leading-[1.15] tracking-tighter text-text-main md:font-light"
      >
        Proyectos que hablan por sí solos
      </motion.h2>

      <motion.div 
        variants={itemVariants} 
        className="relative w-full flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: isMobile ? 0.28 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag={isMobile ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1)
              else if (info.offset.x > 60) paginate(-1)
            }}
            className="flex flex-col items-center gap-10"
          >
            <ProjectWindow image={current.image} alt={current.title} enableTilt={enableTilt} />

            <div className="flex flex-col items-center gap-5 text-center">
              <h3 className="text-2xl font-light tracking-tight text-text-main md:text-3xl">
                {current.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {current.techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-zinc-800/60 bg-zinc-900/50 px-3 py-1 font-mono text-xs text-zinc-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex items-center justify-center gap-6 w-full">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Proyecto anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800/50 bg-[#14161A]/60 text-text-muted backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:text-text-main"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Ir a ${project.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-accent-blue'
                    : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Siguiente proyecto"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800/50 bg-[#14161A]/60 text-text-muted backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:text-text-main"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
