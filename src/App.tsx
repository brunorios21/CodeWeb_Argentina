import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Copyright, FileText, FolderKanban, Mail, MessageCircle, Rocket, Users } from 'lucide-react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CursorEffects } from './components/CursorEffects'
import { CookieModal } from './components/CookieModal'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Testimonials } from './pages/Testimonials'
import { Terms } from './pages/Terms'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
}

function Footer() {
  return <footer className="footer-premium px-4 pt-14 sm:px-6"><div className="footer-content mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]"><div><p className="footer-brand">Code<span className="gradient-text">Web</span></p><p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">Diseño y desarrollo digital para negocios que quieren crecer.</p></div><div><p className="footer-heading">Acciones</p><div className="footer-links"><Link className="footer-link" to="/contacto"><Rocket size={16} />Empezá un proyecto</Link><Link className="footer-link" to="/testimonios"><Users size={16} />Clientes</Link><Link className="footer-link" to="/proyectos"><FolderKanban size={16} />Proyectos</Link><Link className="footer-link" to="/terminos"><FileText size={16} />Términos y condiciones</Link></div></div><div><p className="footer-heading">Contacto</p><div className="footer-links"><a className="footer-link" href="https://instagram.com/code_web_argentina" target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram</a><a className="footer-link" href="mailto:brunorioscorp4@gmail.com"><Mail size={16} />Email</a><a className="footer-link" href="https://wa.me/5491123240691" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />WhatsApp</a><p className="footer-copyright"><Copyright size={14} />{new Date().getFullYear()} CodeWeb</p></div></div></div><div className="footer-badge-wrap"><p className="footer-tagline">Mejor agencia web de Argentina</p></div></footer>
}

function Layout() {
  const location = useLocation()
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section, footer'))
    const observer = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => { if (isIntersecting) target.classList.add('scroll-reveal-visible') }), { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })
    sections.forEach((section, index) => { section.classList.add('scroll-reveal'); if (index === 0) section.classList.add('scroll-reveal-visible'); observer.observe(section) })
    return () => observer.disconnect()
  }, [location.pathname])

  return <div className="site-shell"><div className="tech-grid" aria-hidden="true" /><div className="ambient ambient-one" /><div className="ambient ambient-two" /><CursorEffects /><Navbar /><AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><Routes location={location}><Route path="/" element={<Home />} /><Route path="/inicio" element={<Navigate to="/" replace />} /><Route path="/nosotros" element={<About />} /><Route path="/proyectos" element={<Projects />} /><Route path="/testimonios" element={<Testimonials />} /><Route path="/faq" element={<FAQ />} /><Route path="/contacto" element={<Contact />} /><Route path="/terminos" element={<Terms />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></motion.main></AnimatePresence><Footer /><CookieModal /><a className="whatsapp-float" href="https://wa.me/5491123240691" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp" style={{ position: 'fixed', right: '24px', bottom: '24px', left: 'auto', zIndex: 99999 }}><img src="/whatsapp.svg" alt="" /></a></div>
}

export default function App() { return <BrowserRouter><Layout /></BrowserRouter> }
