import { useEffect, useRef, useState } from 'react'

type Particle = { x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }

const colors = ['#a855f7', '#d946ef', '#8b5cf6']

export function CursorEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef<number | null>(null)
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, visible: true })
    const burst = (event: MouseEvent) => {
      for (let index = 0; index < 24; index += 1) {
        const angle = (Math.PI * 2 * index) / 24 + Math.random() * 0.25
        const speed = 1.5 + Math.random() * 3.5
        particlesRef.current.push({ x: event.clientX, y: event.clientY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, size: 1.5 + Math.random() * 2.5, color: colors[index % colors.length] })
      }
    }

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      particlesRef.current = particlesRef.current.filter((particle) => particle.life > 0)
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.025
        particle.vx *= 0.985
        particle.life -= 0.018
        context.globalAlpha = Math.max(particle.life, 0)
        context.fillStyle = particle.color
        context.shadowBlur = 12
        context.shadowColor = particle.color
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
      context.shadowBlur = 0
      frameRef.current = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', burst)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', burst)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <><canvas ref={canvasRef} aria-hidden="true" className="particle-canvas" /><span aria-hidden="true" className={`cursor-star ${cursor.visible ? 'cursor-star-visible' : ''}`} style={{ left: cursor.x, top: cursor.y }} /></>
}
