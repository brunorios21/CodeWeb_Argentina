const qualityTargets = [
  { value: '+99.8%', label: 'Objetivo de uptime' },
  { value: '< 400ms', label: 'Presupuesto de latencia' },
  { value: '100%', label: 'Criterios W3C' },
  { value: '0', label: 'Hallazgos OWASP críticos' },
]

export function HeroStats() {
  return <section className="hero-stats" aria-label="Estándares de calidad de ingeniería"><div className="hero-stats-head"><span>QUALITY ENGINEERING</span><small>Objetivos de entrega</small></div><div className="hero-stats-grid">{qualityTargets.map((item) => <div className="hero-stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>
}
