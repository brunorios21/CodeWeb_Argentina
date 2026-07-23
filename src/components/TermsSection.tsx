import { motion, type Variants } from 'framer-motion'

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function TermsSection() {
  return (
    <section id="terms" className="w-full py-20 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(94,92,255,0.14),_transparent_35%)] blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={staggerContainer}
          className="w-full flex flex-col gap-8"
        >
          <motion.div variants={staggerItem} className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0F1421]/80 p-10 shadow-[0_0_80px_rgba(15,23,42,0.3)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066FF]/10 text-[#60A5FA] shadow-[0_0_40px_rgba(0,102,255,0.12)]">
                  <span className="text-lg font-semibold">C</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8E939E]">CodeWeb</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F6]">Términos & condiciones</h2>
                </div>
              </div>

              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-full border border-[#5B70FF]/30 bg-[#111827]/90 px-5 py-3 text-sm font-medium text-[#E5E7EB] transition hover:border-[#0066FF] hover:bg-[#111827]/100"
              >
                Volver a la página principal
              </a>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-[#C7D2FE]">
              Este espacio describe la forma en que trabajamos, la protección de tu proyecto y los compromisos que mantenemos contigo. Está diseñado para ser claro, serio y sin lenguaje técnico excesivo.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Nuestra promesa profesional</h3>
              <p className="text-sm leading-7 text-[#CBD5E1]">
                CodeWeb ofrece servicios de desarrollo web personalizados con foco en calidad, diseño y resultados. Cada propuesta se trabaja como un proyecto único y se gestiona con plazos, entregables y revisiones acordadas desde el inicio.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Protección de la información</h3>
              <p className="text-sm leading-7 text-[#CBD5E1]">
                Toda información que compartas en este sitio se usa exclusivamente para evaluar tu proyecto y ofrecerte una propuesta. No difundimos datos ni los usamos para fines distintos a la prestación del servicio.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Propiedad creativa</h3>
              <p className="text-sm leading-7 text-[#CBD5E1]">
                El código, diseños y materiales generados para tu proyecto se gestionan con acuerdos claros. Puedes esperar una entrega con derechos de uso completos y diseño hecho a medida para tu marca.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Alcance y responsabilidades</h3>
              <p className="text-sm leading-7 text-[#CBD5E1]">
                Definimos el alcance inicial en la propuesta. Cambios más allá del alcance pueden ajustarse con acuerdos adicionales, siempre manteniendo transparencia en tiempos y costos.
              </p>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Cómo trabajamos contigo</h3>
            <div className="space-y-4 text-sm leading-7 text-[#CBD5E1]">
              <p>
                Entendemos tu proyecto mediante un brief claro. Después, proponemos un plan de trabajo con etapas, análisis y pruebas. Cada entrega se revisa antes de avanzar a la siguiente fase.
              </p>
              <p>
                Nuestra metodología es colaborativa: valoramos tu feedback y ajustamos el desarrollo para que el resultado sea elegante, usable y fiel a tus objetivos comerciales.
              </p>
              <p>
                Si decides avanzar, firmamos un acuerdo que define lo que se incluye en el alcance inicial y cómo se manejarán las revisiones adicionales.
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="rounded-[2rem] border border-white/10 bg-[#111827]/85 p-8 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-[#F8FAFC]">Contacto y aceptación</h3>
            <p className="text-sm leading-7 text-[#CBD5E1]">
              Al usar el formulario de contacto y solicitar una propuesta, estás aceptando que revisemos la información y te respondamos con una propuesta comercial. Para cualquier consulta adicional, utilizamos el mismo canal de contacto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
