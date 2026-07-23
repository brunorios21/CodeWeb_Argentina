import { useId, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

type SecurityPillar = {
  number: string
  title: string
  summary: string
  badge: string
  protocols: string
  detail: string
  icon: 'edge' | 'shield' | 'database' | 'radar'
}

const pillars: SecurityPillar[] = [
  {
    number: '01', title: 'Hosting privado & cero caídas', badge: 'SLA 99.9%', icon: 'edge',
    summary: 'Edge / Cloud de alta velocidad, CDN global y disponibilidad diseñada para escalar.',
    protocols: 'Vercel Edge Network / AWS CloudFront · Anycast DNS · HTTP/3',
    detail: 'Despliegue multirregión con ruteo inteligente hacia la ubicación más cercana de cada usuario para reducir el TTFB.',
  },
  {
    number: '02', title: 'SSL/TLS & cifrado', badge: 'AES-256', icon: 'shield',
    summary: 'Protección de cada interacción con cifrado en tránsito y controles de seguridad web.',
    protocols: 'ECDSA 256-bit · HSTS · Cloudflare DDoS Shield',
    detail: 'Cifrado de extremo a extremo en tránsito y mitigación de ataques volumétricos en las capas 3, 4 y 7.',
  },
  {
    number: '03', title: 'Datos aislados & backups', badge: 'Snapshots', icon: 'database',
    summary: 'Datos separados por entorno, cifrados y con una estrategia de recuperación clara.',
    protocols: 'PostgreSQL / Supabase · AES-256 at rest · PITR',
    detail: 'Aislamiento lógico por entorno de producción y staging, con respaldos automáticos y retención planificada.',
  },
  {
    number: '04', title: 'Monitoreo 24/7', badge: 'OWASP Ready', icon: 'radar',
    summary: 'Observabilidad, alertas y revisión preventiva para detectar problemas antes de que escalen.',
    protocols: 'Datadog / Sentry · UptimeRobot · OWASP Top 10',
    detail: 'Seguimiento de Web Vitals, excepciones y disponibilidad, con alertas ante patrones de riesgo como SQLi o XSS.',
  },
]

function SecurityIcon({ type }: { type: SecurityPillar['icon'] }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (type === 'edge') return <svg viewBox="0 0 80 80" aria-hidden="true"><path {...common} d="M24 52h32a11 11 0 0 0 1.5-21.9A17 17 0 0 0 25 35.5 8.5 8.5 0 0 0 24 52Z" /><path {...common} d="M29 61h22M34 67h12M40 27v7m-14 8 5 2m23-2-5 2" /><circle cx="40" cy="22" r="3" fill="currentColor" /><circle cx="21" cy="44" r="3" fill="currentColor" /><circle cx="59" cy="44" r="3" fill="currentColor" /><path {...common} d="M40 25v5m-16 15 7-5m25 5-7-5" /></svg>
  if (type === 'shield') return <svg viewBox="0 0 80 80" aria-hidden="true"><path {...common} d="M40 13 62 22v16c0 14-9.4 24-22 29-12.6-5-22-15-22-29V22l22-9Z" /><path {...common} d="M32 39v-4a8 8 0 0 1 16 0v4m-18 0h20v15H30V39Z" /><path {...common} d="M40 45v4" /><path {...common} d="m18 28-7 4m51-4 7 4M24 16l-4-7m36 7 4-7" /></svg>
  if (type === 'database') return <svg viewBox="0 0 80 80" aria-hidden="true"><ellipse {...common} cx="38" cy="22" rx="17" ry="7" /><path {...common} d="M21 22v30c0 4 7.6 7 17 7s17-3 17-7V22" /><path {...common} d="M21 37c0 4 7.6 7 17 7s17-3 17-7M21 51c0 4 7.6 7 17 7s17-3 17-7" /><circle {...common} cx="40" cy="40" r="27" /><path {...common} d="M62 51l5 5 8-10" /></svg>
  return <svg viewBox="0 0 80 80" aria-hidden="true"><circle {...common} cx="40" cy="40" r="24" /><circle {...common} cx="40" cy="40" r="14" /><circle cx="40" cy="40" r="4" fill="currentColor" /><path {...common} d="M40 16V9m0 62v-7M16 40H9m62 0h-7M57 23l5-5M18 62l5-5" /><path {...common} d="M40 40 55 30" /><circle cx="61" cy="20" r="5" fill="#4ade80" /></svg>
}

function SecurityBentoCard({ pillar, expanded, onToggle }: { pillar: SecurityPillar; expanded: boolean; onToggle: () => void }) {
  const panelId = useId()
  return <article className={`security-card ${expanded ? 'security-card-expanded' : ''}`}>
    <div className="security-card-top">
      <div className="security-icon"><SecurityIcon type={pillar.icon} /></div>
      <span className="security-ordinal">{pillar.number}</span>
    </div>
    <span className="security-badge"><i />{pillar.badge}</span>
    <h3>{pillar.title}</h3>
    <p className="security-summary">{pillar.summary}</p>
    <button className="security-toggle" type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={panelId}>
      <span>Especificación técnica &amp; protocolos</span><ChevronDown size={17} aria-hidden="true" />
    </button>
    <div id={panelId} className="security-details" aria-hidden={!expanded}>
      <div className="security-details-inner">
        <p className="security-protocols">{pillar.protocols}</p>
        <p>{pillar.detail}</p>
        <span className="security-detail-link">Arquitectura preparada <ArrowUpRight size={14} aria-hidden="true" /></span>
      </div>
    </div>
  </article>
}

export function CloudSecuritySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return <section className="security-section mx-auto max-w-7xl px-4 pb-24 sm:px-6" aria-labelledby="security-title">
    <div className="infrastructure-intro">
      <p className="eyebrow">Infraestructura incluida</p>
      <h2 id="security-title" className="section-title mt-4">Seguridad Cloud para que tu producto <span className="gradient-text">crezca sin límites.</span></h2>
      <p>Una solución no termina al publicar. Diseñamos el recorrido completo: aplicación, infraestructura, datos, seguridad y operación continua.</p>
    </div>
    <div className="security-bento-grid">
      {pillars.map((pillar, index) => <SecurityBentoCard key={pillar.number} pillar={pillar} expanded={expandedIndex === index} onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)} />)}
    </div>
  </section>
}
