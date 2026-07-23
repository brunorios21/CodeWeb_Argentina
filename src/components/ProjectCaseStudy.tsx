import type { PortfolioProject } from '../data/projects'

type CaseStudy = { client: string; sector: string; problem: string; architecture: string; stack: string; decisions: string }

const studies: Record<string, CaseStudy> = {
  'arkhe-studio': { client: 'ARKHE Studio', sector: 'Arquitectura y diseño', problem: 'Presentar una obra visual de alto valor sin sacrificar claridad, carga inicial ni contacto comercial.', architecture: 'JAMstack orientado a contenido visual', stack: 'React, TypeScript, Vite, CSS moderno y hosting estático', decisions: 'Jerarquía editorial, optimización de recursos visuales y formularios con validación de cliente.' },
  autoimport: { client: 'AutoImport', sector: 'Importación y venta vehicular', problem: 'Convertir un catálogo amplio en un recorrido de consulta entendible y orientado a decisión.', architecture: 'Frontend desacoplado preparado para API / Serverless', stack: 'React, TypeScript, Vite, EmailJS y componentes de UI', decisions: 'Filtros progresivos, CTAs persistentes y validación de consultas antes del envío.' },
  'meridian-legal-studio': { client: 'Meridian Legal Studio', sector: 'Asesoría jurídica corporativa', problem: 'Transmitir autoridad, especialización y confianza sin introducir fricción en el primer contacto.', architecture: 'JAMstack corporativo con servicios de contacto', stack: 'React, TypeScript, Vite, EmailJS/SMTP y CSS moderno', decisions: 'Rutas semánticas, contraste accesible, formularios sanitizados y contenido por niveles.' },
}

function Donut({ value, label }: { value: number; label: string }) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  return <div className="case-donut"><svg viewBox="0 0 88 88" role="img" aria-label={`${label}: ${value}%`}><circle cx="44" cy="44" r={radius} className="case-donut-track" /><circle cx="44" cy="44" r={radius} className="case-donut-value" strokeDasharray={`${(value / 100) * circumference} ${circumference}`} /></svg><strong>{value}%</strong><span>{label}</span></div>
}

function MiniCharts() {
  return <div className="case-metrics" aria-label="Benchmarks de ingeniería"><div className="case-donuts"><Donut value={98} label="meta Lighthouse" /><Donut value={100} label="cobertura objetivo" /></div><div className="case-chart"><div><span>Presupuesto de carga</span><strong>0.4 s</strong></div><svg viewBox="0 0 220 72" role="img" aria-label="Tendencia objetivo de reducción del tiempo de carga"><path d="M4 59 L45 49 L86 42 L126 25 L166 18 L216 10" className="case-line-area" /><polyline points="4,59 45,49 86,42 126,25 166,18 216,10" className="case-line" /><circle cx="216" cy="10" r="4" className="case-line-point" /></svg><small>Benchmark de performance a validar con medición real.</small></div><div className="case-bars"><span>Capas de calidad</span><svg viewBox="0 0 180 76" role="img" aria-label="Barras de objetivos de calidad"><rect x="12" y="39" width="26" height="28" rx="4" /><rect x="54" y="25" width="26" height="42" rx="4" /><rect x="96" y="14" width="26" height="53" rx="4" /><rect x="138" y="7" width="26" height="60" rx="4" /></svg><small>UX · Accesibilidad · Seguridad · Rendimiento</small></div></div>
}

export function ProjectCaseStudy({ project }: { project: PortfolioProject }) {
  const study = studies[project.id] ?? { client: project.title, sector: project.category, problem: 'Definir una experiencia clara, rápida y preparada para la evolución del negocio.', architecture: 'Arquitectura frontend modular preparada para integraciones', stack: 'React, TypeScript, Vite y CSS moderno', decisions: 'Componentes reutilizables, rutas semánticas y validación de entradas.' }
  return <section className="case-study" aria-label={`Especificación de ingeniería de ${project.title}`}><header className="case-study-head"><div><span>ENGINEERING CASE FILE</span><h3>{study.client}</h3></div><p>Fecha de despliegue: <b>por confirmar</b></p></header><div className="case-study-grid"><article><small>Cliente / empresa</small><p>{study.client} · {study.sector}</p></article><article><small>Análisis de requisitos & problema</small><p>{study.problem}</p></article><article><small>Arquitectura & ingeniería</small><p><b>{study.architecture}</b><br />{study.stack}</p></article><article><small>Decisiones de software</small><p>{study.decisions}</p></article></div><MiniCharts /><p className="case-disclaimer">Los gráficos representan objetivos de calidad y presupuestos técnicos. Deben reemplazarse por resultados instrumentados de Lighthouse, monitoreo y analítica al cerrar cada despliegue.</p></section>
}
