import { Activity, Cloud, Database, ShieldCheck } from 'lucide-react'

const pillars = [
  { icon: Cloud, title: 'Hosting privado & cero caídas', text: 'Edge / Cloud de alta velocidad, CDN global y objetivo de disponibilidad SLA de 99.9% según el plan contratado.' },
  { icon: ShieldCheck, title: 'SSL/TLS & cifrado', text: 'Certificados SSL, mitigación DDoS y encabezados HTTP de seguridad para proteger cada interacción.' },
  { icon: Database, title: 'Datos aislados & backups', text: 'Bases relacionales o NoSQL con cifrado en reposo, políticas de respaldo y restauración planificada.' },
  { icon: Activity, title: 'Monitoreo 24/7', text: 'Alertas operativas, observabilidad y revisión preventiva basada en buenas prácticas OWASP.' },
]

export function InfrastructureSection() {
  return <section className="infrastructure-section mx-auto max-w-7xl px-4 pb-24 sm:px-6" aria-labelledby="infrastructure-title"><div className="infrastructure-intro"><p className="eyebrow">Infraestructura incluida</p><h2 id="infrastructure-title" className="section-title mt-4">Seguridad Cloud para que tu producto <span className="gradient-text">crezca sin límites.</span></h2><p>Una solución no termina al publicar. Diseñamos el recorrido completo: aplicación, infraestructura, datos, seguridad y operación continua.</p></div><div className="infrastructure-grid">{pillars.map(({ icon: Icon, title, text }, index) => <article key={title} className={`infrastructure-card infrastructure-card-${index + 1}`}><div className="infrastructure-icon"><Icon size={22} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}
