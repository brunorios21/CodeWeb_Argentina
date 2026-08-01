import { motion } from 'framer-motion'
import { BadgeCheck, Boxes, Braces, CheckCircle2, CloudCog, Code2, GitBranch, Globe2, LayoutTemplate, LockKeyhole, MonitorCog, Rocket, SearchCheck, Server, ShoppingCart, Timer, Workflow } from 'lucide-react'

const stages = [
  { number: '01', title: 'Análisis de Requerimientos', copy: 'Levantamos las necesidades de tu empresa para crear un sistema exacto a tu medida.', icon: SearchCheck },
  { number: '02', title: 'Diseño & Prototipado', copy: 'Modelamos la estructura y la experiencia visual antes de escribir código para que todo sea intuitivo.', icon: LayoutTemplate },
  { number: '03', title: 'Desarrollo & Lanzamiento', copy: 'Programamos con tecnología moderna, probamos seguridad y velocidad, y llevamos tu producto a producción.', icon: Workflow },
]

const businessFlow = [
  { number: '01', title: 'Análisis & Requerimientos', copy: 'Entendemos tu negocio y definimos qué funciones necesitás.', icon: SearchCheck },
  { number: '02', title: 'Arquitectura & Prototipo', copy: 'Diseñamos la interfaz, los flujos de usuario y los datos.', icon: LayoutTemplate },
  { number: '03', title: 'Desarrollo Full Stack', copy: 'Programamos a medida con React + Node.js rápido y seguro.', icon: Code2 },
  { number: '04', title: 'Producto Final Listo', copy: 'Tu sistema queda en la nube, listo para vender y crecer.', icon: Rocket },
]

const stacks = [
  { label: 'Frontend Core', icon: Code2, items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { label: 'Backend & APIs', icon: Server, items: ['Node.js', 'Express', 'REST APIs', 'JSON integration'] },
  { label: 'DevOps & Performance', icon: CloudCog, items: ['Git', 'GitHub CI/CD', 'Netlify CDN Edge', 'W3C Optimization'] },
]

const pipeline = [
  { icon: GitBranch, title: 'Commit', detail: 'GitHub' },
  { icon: CheckCircle2, title: 'CI', detail: 'Build + tests' },
  { icon: BadgeCheck, title: 'V&V', detail: 'QA técnico' },
  { icon: Rocket, title: 'Deploy', detail: 'Netlify Edge' },
]

function Node({ icon: Icon, label, accent = 'cyan' }: { icon: typeof Globe2; label: string; accent?: 'cyan' | 'violet' }) {
  return <div className={`process-node process-node-${accent}`}><Icon size={19} /><span>{label}</span></div>
}

export function ProcessSection() {
  return <section className="mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6" aria-labelledby="process-title">
    <div className="max-w-3xl">
      <p className="eyebrow">Nuestra forma de trabajar</p>
      <h2 id="process-title" className="section-title mt-4"><span className="gradient-text">Ingeniería de software</span> para resultados que se pueden medir.</h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">Traducimos problemas de negocio en productos digitales claros, rápidos y listos para evolucionar.</p>
    </div>

    <article className="what-we-build mt-10">
      <div><span className="diagram-kicker">Soluciones que generan valor</span><h3>¿Qué construimos en <span className="gradient-text">CodeWeb?</span></h3><p>Desarrollamos <strong>Software a Medida</strong>, <strong>Plataformas E-commerce</strong>, <strong>Sistemas de Gestión</strong> y <strong>Webs de Alta Conversión</strong>. No usamos plantillas genéricas: analizamos la lógica de tu negocio y creamos un producto único para vender más y automatizar procesos.</p></div>
      <div className="build-products" aria-label="Software a medida, E-commerce, Sistemas de gestión y Webs de alta conversión"><span><MonitorCog size={17} />Software a medida</span><span><ShoppingCart size={17} />E-commerce</span><span><Boxes size={17} />Sistemas de gestión</span><span><Globe2 size={17} />Webs que convierten</span></div>
    </article>

    <article className="business-diagram mt-5">
      <div className="process-panel-heading"><div><span className="diagram-kicker">Del problema a la solución</span><h3>Así llevamos tu idea a un producto que funciona</h3></div><Workflow size={21} /></div>
      <div className="business-flow">
        {businessFlow.map(({ number, title, copy, icon: Icon }, index) => <div className="business-step" key={number}><span className="business-step-number">{number}</span><div className="business-step-icon"><Icon size={19} /></div><h4>{title}</h4><p>{copy}</p>{index < businessFlow.length - 1 && <span className="business-arrow" aria-hidden="true">→</span>}</div>)}
      </div>
    </article>

    <div className="mt-12 grid gap-4 lg:grid-cols-3">
      {stages.map(({ number, title, copy, icon: Icon }, index) => <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="process-stage">
        <div className="flex items-start justify-between gap-4"><span className="process-number">{number}</span><Icon className="text-cyan-300" size={22} /></div>
        <h3>{title}</h3><p>{copy}</p>
      </motion.article>)}
    </div>

    <div className="mt-16 grid gap-5 xl:grid-cols-2">
      <article className="process-panel xl:col-span-2">
        <div className="process-panel-heading"><div><span className="diagram-kicker">C4 · Level 2</span><h3>Vista de contenedores</h3></div><Boxes size={21} /></div>
        <div className="architecture-flow" aria-label="Cliente, CDN Netlify Edge, React SPA Tailwind, APIs Backend Node.js Express">
          <Node icon={Globe2} label="Cliente / Browser" />
          <span className="flow-arrow">↔</span><Node icon={CloudCog} label="CDN / Netlify Edge" accent="violet" />
          <span className="flow-arrow">↔</span><Node icon={Braces} label="React SPA / Tailwind App" />
          <span className="flow-arrow">↔</span><Node icon={Server} label="APIs / Node.js · Express" accent="violet" />
        </div>
      </article>

      <article className="process-panel">
        <div className="process-panel-heading"><div><span className="diagram-kicker">SDLC Pipeline</span><h3>Del commit a producción</h3></div><GitBranch size={21} /></div>
        <div className="pipeline-flow">
          {pipeline.map(({ icon: Icon, title, detail }, index) => <div className="pipeline-step" key={title}><div className="pipeline-icon"><Icon size={16} /></div><div><strong>{title}</strong><span>{detail}</span></div>{index < 3 && <i aria-hidden="true">→</i>}</div>)}
        </div>
      </article>

      <article className="process-panel">
        <div className="process-panel-heading"><div><span className="diagram-kicker">NFR Matrix</span><h3>Atributos de calidad</h3></div><BadgeCheck size={21} /></div>
        <dl className="quality-matrix">
          <div><dt><Timer size={16} />Core Web Vitals</dt><dd>&lt;1.2s LCP</dd></div>
          <div><dt><SearchCheck size={16} />SEO técnico</dt><dd>Score 100%</dd></div>
          <div><dt><CloudCog size={16} />Disponibilidad</dt><dd>High Availability</dd></div>
          <div><dt><LockKeyhole size={16} />Seguridad</dt><dd>TLS / SSL</dd></div>
        </dl>
      </article>
    </div>

    <div className="mt-16"><p className="eyebrow">Stack técnico</p><div className="mt-5 grid gap-4 md:grid-cols-3">{stacks.map(({ label, icon: Icon, items }) => <article key={label} className="stack-card"><Icon size={21} /><h3>{label}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div>
  </section>
}
