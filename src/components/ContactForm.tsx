import { motion, type Variants } from 'framer-motion'
import { ChevronDown, Loader2, SendHorizonal } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  projectType: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  projectType: 'AI-Powered Web Platform',
  message: '',
}

const PROJECT_TYPES = [
  'AI-Powered Web Platform',
  'Premium E-Commerce',
  'Custom Software System',
] as const

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setSubmitted(false)

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 1200))
      setSubmitted(true)
      setForm(initialState)
      window.setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setSubmitted(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-left">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="w-full flex flex-col items-center"
      >
        <motion.div
          variants={staggerItem}
          className="compact-card w-full max-w-2xl bg-[#14161A]/60 backdrop-blur-xl border border-zinc-800/60 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 shadow-2xl relative z-10"
        >
          <motion.p
            variants={staggerItem}
            className="mb-5 text-center text-[11px] font-normal uppercase tracking-[0.25em] text-[#8E939E]"
          >
            Contacto
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="compact-title mb-6 text-center text-[clamp(2rem,5vw,3.25rem)] font-extralight tracking-tighter text-[#F4F4F6] md:font-light"
          >
            Hablemos de tu proyecto
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="compact-description mb-8 sm:mb-12 max-w-md text-center text-sm font-light leading-relaxed text-[#8E939E]"
          >
            Cuéntanos qué necesitás. Te respondemos en menos de 24 horas.
          </motion.p>

          <motion.form
            variants={staggerItem}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="name"
                className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full bg-zinc-950/80 border border-zinc-800/50 rounded-xl py-4 px-5 text-[#F4F4F6] text-sm backdrop-blur-md outline-none transition-all duration-300 hover:bg-zinc-950/90 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="email"
                className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full bg-zinc-950/80 border border-zinc-800/50 rounded-xl py-4 px-5 text-[#F4F4F6] text-sm backdrop-blur-md outline-none transition-all duration-300 hover:bg-zinc-950/90 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2 w-full">
              <label
                htmlFor="project"
                className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono"
              >
                Tipo de proyecto
              </label>
              <div className="relative">
                <select
                  id="project"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/80 border border-zinc-800/50 rounded-xl py-4 px-5 text-[#F4F4F6] text-sm backdrop-blur-md outline-none transition-all duration-300 hover:bg-zinc-950/90 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 bg-zinc-950/80 appearance-none pr-10"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8E939E]"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2 w-full">
              <label
                htmlFor="message"
                className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="¿Qué querés construir?"
                className="w-full bg-zinc-950/80 border border-zinc-800/50 rounded-xl py-4 px-5 text-[#F4F4F6] text-sm backdrop-blur-md outline-none transition-all duration-300 hover:bg-zinc-950/90 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 bg-zinc-950/80 resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={loading || submitted}
                className="w-full bg-zinc-900 border border-zinc-700/60 text-zinc-200 font-mono tracking-wider text-xs uppercase py-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:text-white hover:border-zinc-500 hover:scale-[1.01] cursor-pointer shadow-2xl shadow-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar propuesta
                      <SendHorizonal size={16} />
                    </>
                  )}
                </span>
              </motion.button>

              <motion.p
                initial={false}
                animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 6 }}
                className="mt-5 text-center text-sm font-light text-green-400"
              >
                ✓ Propuesta enviada. Te contactaremos pronto.
              </motion.p>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  )
}
