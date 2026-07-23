import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'

const navItems = [{ path: '/', label: 'Inicio' }, { path: '/nosotros', label: 'Nosotros' }, { path: '/proyectos', label: 'Proyectos' }, { path: '/testimonios', label: 'Testimonios' }, { path: '/contacto', label: 'Contacto' }]

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 px-3 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md sm:px-6"><nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between"><Link to="/" onClick={() => setOpen(false)} aria-label="Ir al inicio de CodeWeb"><Logo /></Link><div className="hidden items-center gap-1 md:flex">{navItems.map((item) => <Link key={item.path} to={item.path} className={`nav-link ${pathname === item.path ? 'nav-link-active' : ''}`}>{item.label}</Link>)}</div><Link to="/contacto" className="button-primary hidden sm:inline-flex">Hablemos <ArrowUpRight size={15} /></Link><button aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)} className="rounded-full border border-white/10 p-2 text-white md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button></nav>{open && <div className="border-t border-white/10 bg-[#07080d]/95 px-4 py-4 md:hidden">{navItems.map((item) => <Link key={item.path} onClick={() => setOpen(false)} to={item.path} className={`block rounded-xl px-4 py-3 text-sm ${pathname === item.path ? 'bg-violet-500/20 text-violet-300' : 'text-slate-300'}`}>{item.label}</Link>)}</div>}</header>
}
