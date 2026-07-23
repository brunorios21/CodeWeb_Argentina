import type { ReactNode } from 'react'

type MacbookMockupProps = {
  imageSrc: string
  title: string
  children?: ReactNode
}

export function MacbookMockup({ imageSrc, title, children }: MacbookMockupProps) {
  return <div className="macbook-mockup group/macbook">
    <div className="macbook-glow" />
    <div className="macbook-display">
      <div className="macbook-traffic-lights" aria-hidden="true"><span className="macbook-light-close">×</span><span className="macbook-light-minimize">−</span><span className="macbook-light-maximize">+</span></div>
      <div className="macbook-notch"><span /></div>
      <div className="macbook-screen">
        <img src={imageSrc} alt={title} />
        <div className="macbook-glass" aria-hidden="true" />
        {children}
      </div>
    </div>
    <div className="macbook-base"><span /></div>
  </div>
}
