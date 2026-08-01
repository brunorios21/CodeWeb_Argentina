import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, AtSign, Check, ChevronDown, Mail, MessageCircle, Send } from 'lucide-react'

const Instagram = AtSign
const projectTypes = [
  { value: 'landing', label: 'Landing page' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'app', label: 'Aplicación web' },
  { value: 'other', label: 'Otro proyecto' },
]

const budgetOptions = ['< $500 USD', '$500 - $1200 USD', '$1200+ USD']

type ProjectTypeDropdownProps = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

function ProjectTypeDropdown({ value, onChange, disabled = false }: ProjectTypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selected = projectTypes.find((type) => type.value === value) ?? projectTypes[0]

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => { if (!dropdownRef.current?.contains(event.target as Node)) setIsOpen(false) }
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false) }
    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => { document.removeEventListener('mousedown', closeOnOutsideClick); document.removeEventListener('keydown', closeOnEscape) }
  }, [])

  return <div ref={dropdownRef} className="custom-select"><input type="hidden" name="type" value={value} /><button type="button" className="custom-select-trigger" aria-haspopup="listbox" aria-expanded={isOpen} disabled={disabled} onClick={() => setIsOpen((open) => !open)}>{selected.label}<ChevronDown size={17} className={isOpen ? 'rotate-180' : ''} /></button>{isOpen && <div className="custom-select-menu" role="listbox" aria-label="¿Qué querés construir?">{projectTypes.map((type) => <button key={type.value} type="button" role="option" aria-selected={type.value === value} className={`custom-select-option ${type.value === value ? 'custom-select-option-selected' : ''}`} onClick={() => { onChange(type.value); setIsOpen(false) }}><span>{type.label}</span>{type.value === value && <Check size={16} />}</button>)}</div>}</div>
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [projectType, setProjectType] = useState(projectTypes[0].value)
  const [budget, setBudget] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    if (!budget) {
      setFeedback({ type: 'error', message: 'Seleccioná un rango de presupuesto para continuar.' })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({ type: 'error', message: 'El formulario todavía no está configurado. Completá las variables de EmailJS antes de publicar.' })
      return
    }

    const formData = new FormData(event.currentTarget)
    setFeedback(null)
    setIsSubmitting(true)

    try {
      await emailjs.send(serviceId, templateId, {
        name: formData.get('name'),
        email: formData.get('email'),
        project_type: projectTypes.find((type) => type.value === projectType)?.label ?? projectType,
        budget,
        message: formData.get('message'),
      }, { publicKey })
      formRef.current?.reset()
      setProjectType(projectTypes[0].value)
      setBudget('')
      setFeedback({ type: 'success', message: '¡Consulta enviada con éxito! Te responderé a la brevedad.' })
    } catch {
      setFeedback({ type: 'error', message: 'No pudimos enviar tu consulta. Revisá tu conexión e intentá nuevamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return <div className="page-wrap">
    <section className="contact-video-hero mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pt-40">
      <video className="contact-video-background" autoPlay loop muted playsInline preload="metadata" aria-hidden="true"><source src="/projects/fondo2.mp4" type="video/mp4" /></video>
      <div className="contact-video-overlay" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Contacto</p><h1 className="page-title">Hablemos de <span className="gradient-text">tu próximo proyecto.</span></h1><p className="mt-6 max-w-md text-base leading-8 text-slate-300">Contanos qué querés construir. Te respondemos en menos de 24 horas con ideas, próximos pasos y una propuesta clara.</p><div className="mt-10 space-y-4"><a className="contact-link" href="https://wa.me/5491123240691" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small>+54 9 11 2324 0691</span><ArrowUpRight size={16} /></a><a className="contact-link" href="https://instagram.com/code_web_argentina" target="_blank" rel="noopener noreferrer"><Instagram size={19} /><span><small>Instagram</small>@code_web_argentina</span><ArrowUpRight size={16} /></a><a className="contact-link" href="mailto:brunorioscorp4@gmail.com"><Mail size={19} /><span><small>Email</small>brunorioscorp4@gmail.com</span><ArrowUpRight size={16} /></a></div></div><form ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={submit} className="glass-card grid gap-5 sm:grid-cols-2"><input type="hidden" name="form-name" value="contact" /><div><label>Nombre</label><input required name="name" placeholder="Tu nombre" disabled={isSubmitting} /></div><div><label>Email</label><input required type="email" name="email" placeholder="tu@email.com" disabled={isSubmitting} /></div><div className="sm:col-span-2"><label>¿Qué querés construir?</label><ProjectTypeDropdown value={projectType} onChange={setProjectType} disabled={isSubmitting} /></div><div className="sm:col-span-2"><label>Mensaje</label><textarea required name="message" rows={5} placeholder="Contanos brevemente sobre tu idea..." disabled={isSubmitting} /></div><fieldset className="budget-selector sm:col-span-2" disabled={isSubmitting}><legend>Presupuesto estimado</legend><input type="hidden" name="budget" value={budget} /><div className="budget-options">{budgetOptions.map((option) => <button key={option} type="button" className={`budget-chip ${budget === option ? 'budget-chip-active' : ''}`} aria-pressed={budget === option} onClick={() => { setBudget(option); setFeedback(null) }}>{option}</button>)}</div></fieldset>{feedback && <p className={`form-feedback form-feedback-${feedback.type} sm:col-span-2`} role="status" aria-live="polite">{feedback.message}</p>}<button type="submit" className="button-primary w-full justify-center sm:col-span-2" disabled={isSubmitting}>{isSubmitting ? 'Enviando…' : 'Enviar consulta'} <Send size={15} /></button></form></div>
    </section>
  </div>
}
