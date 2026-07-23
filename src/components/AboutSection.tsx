import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Zap, Target, MessageSquare, Rocket } from 'lucide-react'

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const features = [
  {
    icon: Zap,
    title: 'Velocidad sin excusas',
    description: 'Landing pages en ~3 días, webs institucionales en menos de una semana. Sin demoras de nuestra parte.',
  },
  {
    icon: Target,
    title: 'Enfoque en conversión',
    description: 'Cada decisión de diseño tiene un propósito: convertir visitantes en clientes reales.',
  },
  {
    icon: MessageSquare,
    title: 'Transparencia total',
    description: 'Comunicación directa, sin relleno. Sabés en todo momento en qué etapa está tu proyecto.',
  },
  {
    icon: Rocket,
    title: 'Acompañamiento real',
    description: 'No desaparecemos al entregar. Somos el equipo digital de tu negocio a largo plazo.',
  },
]

export function AboutSection() {
  return (
    <section className="w-full px-4 sm:px-6 py-20 sm:py-32 lg:py-40 bg-[#0A0C10] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,102,255,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.10),_transparent_35%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-tr from-[#0066FF]/3 via-transparent to-purple-500/3 blur-[80px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={staggerItem} className="text-center mb-16 sm:mb-24">
          <motion.p
            variants={staggerItem}
            className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7DD3FC] mb-6"
          >
            Sobre CodeWeb
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Transformamos ideas en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] to-[#A78BFA]">
              máquinas de ventas
            </span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-[#8E939E] max-w-3xl mx-auto leading-relaxed"
          >
            Somos CodeWeb, una agencia boutique enfocada en el alto rendimiento. No solo diseñamos, creamos el futuro digital de tu marca.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="https://wa.me/5491123240691"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0C10] rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              Empezar ahora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
            >
              Ver trayectoria
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Trust Section */}
        <motion.div variants={staggerItem} className="text-center mb-20 sm:mb-28">
          <motion.h2
            variants={staggerItem}
            className="text-2xl sm:text-3xl font-bold text-white mb-6"
          >
            Más de 10 empresas confían en CodeWeb
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-[#8E939E] max-w-3xl mx-auto leading-relaxed"
          >
            Desde 2024, en CodeWeb nos obsesionamos con el detalle. Creemos que una web no debe ser solo estática, sino una extensión dinámica de tu negocio que trabaje mientras vos dormís.
            Nuestro proceso combina la velocidad de ejecución con la precisión del desarrollo moderno (Next.js + Framer Motion), asegurando que cada sitio sea una experiencia fluida y optimizada para el posicionamiento orgánico.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={staggerItem} className="mb-16 sm:mb-20">
          <motion.h2
            variants={staggerItem}
            className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
          >
            Por qué elegirnos
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-[#8E939E] max-w-2xl mx-auto mb-12 text-center leading-relaxed"
          >
            No solo escribimos código, construimos la base digital para que tu negocio pueda escalar sin límites.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#14161A]/60 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#7DD3FC]/30 hover:bg-[#14161A]/80 hover:shadow-[0_0_50px_rgba(0,102,255,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#7DD3FC]/25 bg-[#7DD3FC]/15 text-[#7DD3FC]">
                    <feature.icon size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-base text-[#8E939E] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={staggerItem} className="text-center">
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10"
          >
            ¿Llevamos tu marca al siguiente nivel?
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5491123240691"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]"
            >
              Hablemos por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.instagram.com/code_web_argentina/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
            >
              Instagram
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
