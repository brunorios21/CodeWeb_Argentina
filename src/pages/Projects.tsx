import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Laptop, Network } from 'lucide-react'
import { projectsData, type PortfolioProject } from '../data/projects'
import { ProjectArchitecture, ProjectSequencePreview } from '../components/ProjectArchitecture'
import { MacbookMockup } from '../components/MacbookMockup'
import { ProjectCaseStudy } from '../components/ProjectCaseStudy'

function ProjectGallery({ project }: { project: PortfolioProject }) {
  const [activeImage, setActiveImage] = useState(0)
  const hasGallery = project.images.length > 1
  const image = project.images[activeImage]

  const showImage = (direction: -1 | 1) => {
    setActiveImage((current) => (current + direction + project.images.length) % project.images.length)
  }

  return (
    <div className="project-mockup-area group/gallery">
      <MacbookMockup imageSrc={image} title={`${project.title} — captura ${activeImage + 1}`}>
        <span className="project-number">{String(activeImage + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>

        {hasGallery && <><div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-100 transition-opacity sm:opacity-0 sm:group-hover/gallery:opacity-100"><button type="button" onClick={() => showImage(-1)} aria-label={`Ver captura anterior de ${project.title}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#07080d]/75 text-white backdrop-blur transition hover:border-violet-300 hover:bg-violet-600"><ChevronLeft size={19} /></button><button type="button" onClick={() => showImage(1)} aria-label={`Ver siguiente captura de ${project.title}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#07080d]/75 text-white backdrop-blur transition hover:border-violet-300 hover:bg-violet-600"><ChevronRight size={19} /></button></div><div className="absolute inset-x-4 bottom-4 flex justify-center gap-2">{project.images.map((_, index) => <button key={index} type="button" onClick={() => setActiveImage(index)} aria-label={`Mostrar captura ${index + 1} de ${project.title}`} aria-current={index === activeImage ? 'true' : undefined} className={`h-1.5 rounded-full transition-all ${index === activeImage ? 'w-6 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/80'}`} />)}</div></>}
      </MacbookMockup>
    </div>
  )
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [view, setView] = useState<'preview' | 'architecture' | 'case-study'>('preview')
  return <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08 }} className="project-large">
    {view === 'preview' ? <ProjectGallery project={project} /> : view === 'architecture' ? <ProjectSequencePreview projectIndex={index} /> : <ProjectCaseStudy project={project} />}
    <div className="flex flex-col justify-between gap-6 p-6 sm:p-9 md:flex-row md:items-end"><div><div className="project-view-tabs" role="tablist" aria-label={`Vista de ${project.title}`}><button type="button" role="tab" aria-selected={view === 'preview'} className={view === 'preview' ? 'project-view-tab-active' : ''} onClick={() => setView('preview')}><Laptop size={14} />Vista previa</button><button type="button" role="tab" aria-selected={view === 'architecture'} className={view === 'architecture' ? 'project-view-tab-active' : ''} onClick={() => setView('architecture')}><Network size={14} />Arquitectura</button><button type="button" role="tab" aria-selected={view === 'case-study'} className={view === 'case-study' ? 'project-view-tab-active' : ''} onClick={() => setView('case-study')}>Case study</button></div><p className="eyebrow mt-5">{project.category}</p><h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{project.description}</p></div><a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button-secondary shrink-0">Visitar sitio <ExternalLink size={15} /></a></div>
  </motion.article>
}

export function Projects() {
  return (
    <div className="page-wrap">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <p className="eyebrow">Proyectos seleccionados</p>
        <h1 className="page-title max-w-3xl">Trabajo real. <span className="gradient-text">Resultados que se ven.</span></h1>
        <p className="hero-copy max-w-2xl">Una selección de experiencias digitales creadas para marcas que necesitaban dar el siguiente paso.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-28 sm:px-6">
        {projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </section>
      <ProjectArchitecture />
    </div>
  )
}
