import { type ReactNode, useEffect, useRef, useState } from 'react'

type DeferredSectionProps = {
  children: ReactNode
  minHeight?: string
}

/** Mounts expensive below-the-fold content shortly before it enters the viewport. */
export function DeferredSection({ children, minHeight = '18rem' }: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.disconnect()
    }, { rootMargin: '600px 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} style={isVisible ? undefined : { minHeight }}>{isVisible ? children : null}</div>
}
