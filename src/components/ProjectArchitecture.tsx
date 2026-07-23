import { useState } from 'react'
import { Code2, Eye, ZoomIn } from 'lucide-react'

type Step = { from: number; to: number; label: string }
type Diagram = {
  id: string
  tab: string
  file: string
  participants: string[]
  steps: Step[]
  source: string
}

const diagrams: Diagram[] = [
  {
    id: 'contact',
    tab: '01. Flujo de contacto',
    file: 'contact-flow.sequence',
    participants: ['Usuario', 'React / Vite', 'Validación', 'EmailJS / API', 'SMTP / Gmail'],
    steps: [
      { from: 0, to: 1, label: 'Completa datos y envía' },
      { from: 1, to: 2, label: 'Sanitiza campos e inputs' },
      { from: 1, to: 3, label: 'POST cifrado (TLS)' },
      { from: 3, to: 4, label: 'Procesa plantilla y notifica' },
      { from: 3, to: 1, label: 'HTTP 200 · success response' },
      { from: 1, to: 0, label: 'Feedback y confirmación' },
    ],
    source: `sequenceDiagram\n  participant U as Usuario\n  participant C as Client App (React/Vite)\n  participant V as Validación Zod/State\n  participant A as EmailJS / API Gateway\n  participant M as SMTP / Gmail\n\n  U->>C: Completa datos y envía\n  C->>V: Sanitiza campos e inputs\n  C->>A: POST cifrado (TLS)\n  A->>M: Procesa plantilla y notifica\n  A-->>C: HTTP 200 OK\n  C-->>U: Feedback visual`,
  },
  {
    id: 'payments',
    tab: '02. Sistema de pagos',
    file: 'checkout-flow.sequence',
    participants: ['Usuario', 'Storefront', 'API Gateway', 'Payment Gateway', 'Base de datos'],
    steps: [
      { from: 0, to: 1, label: 'Confirma el checkout' },
      { from: 1, to: 2, label: 'Crea intención de pago' },
      { from: 2, to: 3, label: 'Token seguro de transacción' },
      { from: 3, to: 4, label: 'Registra orden aprobada' },
      { from: 3, to: 1, label: 'Webhook · pago confirmado' },
      { from: 1, to: 0, label: 'Recibo y estado final' },
    ],
    source: `sequenceDiagram\n  participant U as Usuario\n  participant S as Storefront React\n  participant A as API Gateway\n  participant P as Payment Gateway\n  participant D as Base de datos\n\n  U->>S: Confirma el checkout\n  S->>A: Crea intención de pago\n  A->>P: Token seguro de transacción\n  P->>D: Registra orden aprobada\n  P-->>S: Webhook de confirmación\n  S-->>U: Recibo y estado final`,
  },
  {
    id: 'auth',
    tab: '03. Autenticación JWT',
    file: 'auth-jwt.sequence',
    participants: ['Usuario', 'React / Vite', 'Auth API', 'JWT Service', 'Data API'],
    steps: [
      { from: 0, to: 1, label: 'Ingresa credenciales' },
      { from: 1, to: 2, label: 'POST login con TLS' },
      { from: 2, to: 3, label: 'Firma access token' },
      { from: 3, to: 1, label: 'JWT + refresh token' },
      { from: 1, to: 4, label: 'Request autorizado' },
      { from: 4, to: 0, label: 'Perfil y sesión activa' },
    ],
    source: `sequenceDiagram\n  participant U as Usuario\n  participant C as Client App (React/Vite)\n  participant A as Auth API\n  participant J as JWT Service\n  participant D as Data API\n\n  U->>C: Ingresa credenciales\n  C->>A: POST login con TLS\n  A->>J: Firma access token\n  J-->>C: JWT + refresh token\n  C->>D: Request autorizado\n  D-->>U: Perfil y sesión activa`,
  },
]

function SequenceGraphic({ diagram }: { diagram: Diagram }) {
  const columnStart = 118
  const columnGap = 145
  const stepStart = 116
  const stepGap = 67
  const endY = stepStart + diagram.steps.length * stepGap + 6

  return <div className="architecture-canvas" tabIndex={0} aria-label={`Diagrama de secuencia: ${diagram.tab}`}>
    <svg className="sequence-svg" viewBox="0 0 760 570" role="img" aria-labelledby={`${diagram.id}-title`}>
      <title id={`${diagram.id}-title`}>{diagram.tab}</title>
      <defs>
        <marker id={`${diagram.id}-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#a855f7" /></marker>
      </defs>
      <rect x=".5" y=".5" width="759" height="569" rx="12" className="sequence-background" />
      {diagram.participants.map((participant, index) => {
        const x = columnStart + index * columnGap
        return <g key={participant}><rect x={x - 53} y="28" width="106" height="45" rx="8" className="sequence-node" /><text x={x} y="55" textAnchor="middle" className="sequence-node-text">{participant}</text><line x1={x} y1="74" x2={x} y2={endY} className="sequence-lifeline" /></g>
      })}
      {diagram.steps.map((step, index) => {
        const y = stepStart + index * stepGap
        const fromX = columnStart + step.from * columnGap
        const toX = columnStart + step.to * columnGap
        const labelX = (fromX + toX) / 2
        return <g className="sequence-step" key={`${step.label}-${index}`}><line x1={fromX} y1={y} x2={toX} y2={y} className="sequence-arrow" markerEnd={`url(#${diagram.id}-arrow)`} /><rect x={labelX - 68} y={y - 28} width="136" height="19" rx="4" className="sequence-label-bg" /><text x={labelX} y={y - 15} textAnchor="middle" className="sequence-label">{step.label}</text><text x="28" y={y + 4} className="sequence-index">{String(index + 1).padStart(2, '0')}</text></g>
      })}
    </svg>
  </div>
}

export function ProjectSequencePreview({ projectIndex }: { projectIndex: number }) {
  const diagram = diagrams[projectIndex % diagrams.length]
  return <div className="project-sequence-preview"><div className="project-sequence-bar"><span>{diagram.file}</span><span>SEQUENCE MAP</span></div><SequenceGraphic diagram={diagram} /></div>
}

export function ProjectArchitecture() {
  const [activeId, setActiveId] = useState(diagrams[0].id)
  const [mode, setMode] = useState<'visual' | 'source'>('visual')
  const diagram = diagrams.find((item) => item.id === activeId) ?? diagrams[0]

  return <section className="architecture-section mx-auto max-w-7xl px-4 pb-28 sm:px-6" aria-labelledby="architecture-heading">
    <p className="eyebrow">Arquitectura & diagramas de secuencia</p>
    <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><h2 id="architecture-heading" className="section-title max-w-3xl">Pensado para que cada <span className="gradient-text">interacción llegue a destino.</span></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">Flujos de referencia para los sistemas de contacto, pagos y autenticación que diseñamos para productos digitales.</p></div><span className="architecture-status">LIVE SYSTEM MAP</span></div>
    <div className="architecture-tabs" role="tablist" aria-label="Diagramas de arquitectura">{diagrams.map((item) => <button key={item.id} type="button" role="tab" aria-selected={item.id === activeId} className={`architecture-tab ${item.id === activeId ? 'architecture-tab-active' : ''}`} onClick={() => setActiveId(item.id)}>{item.tab}</button>)}</div>
    <div className="architecture-editor">
      <div className="architecture-editor-bar"><div className="architecture-lights"><i /><i /><i /></div><span>{diagram.file}</span><div className="architecture-actions"><button type="button" className={mode === 'visual' ? 'architecture-mode-active' : ''} onClick={() => setMode('visual')} aria-pressed={mode === 'visual'}><Eye size={15} />Vista gráfica</button><button type="button" className={mode === 'source' ? 'architecture-mode-active' : ''} onClick={() => setMode('source')} aria-pressed={mode === 'source'}><Code2 size={15} />Código Mermaid</button><span className="architecture-zoom"><ZoomIn size={14} />100%</span></div></div>
      {mode === 'visual' ? <SequenceGraphic diagram={diagram} /> : <pre className="architecture-source"><code>{diagram.source}</code></pre>}
    </div>
  </section>
}
