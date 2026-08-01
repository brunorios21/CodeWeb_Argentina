import { useEffect, useRef } from 'react'

interface MeshTextHoverProps {
  lines: string[]
  className?: string
}

/**
 * Canvas implementation inspired by Origin UI's MeshTextHover. The semantic
 * heading remains in the DOM and the canvas is only the enhanced visual layer.
 */
export function MeshTextHover({ lines, className = '' }: MeshTextHoverProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const media = window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)')
    if (media.matches) return

    const context = canvas.getContext('2d')
    if (!context) return

    let frame = 0
    let visible = true
    let active = true
    let width = 0
    let height = 0
    const pointer = { x: 0.52, y: 0.42, targetX: 0.52, targetY: 0.42 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.round(width * ratio))
      canvas.height = Math.max(1, Math.round(height * ratio))
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time: number) => {
      if (!active || !visible) return
      pointer.x += (pointer.targetX - pointer.x) * 0.055
      pointer.y += (pointer.targetY - pointer.y) * 0.055
      context.clearRect(0, 0, width, height)
      const t = time * 0.00055
      const blobs = [
        { x: 0.17 + Math.sin(t) * 0.08, y: 0.32 + Math.cos(t * 1.4) * 0.1, color: '#00F0FF' },
        { x: 0.72 + Math.cos(t * 0.8) * 0.1, y: 0.33 + Math.sin(t) * 0.9 * 0.12, color: '#7000FF' },
        { x: pointer.x, y: pointer.y, color: '#00F0FF' },
        { x: 0.48 + Math.sin(t * 1.2) * 0.13, y: 0.79, color: '#7000FF' },
      ]
      for (const blob of blobs) {
        const radius = Math.max(width, height) * (blob.x === pointer.x ? 0.38 : 0.5)
        const gradient = context.createRadialGradient(blob.x * width, blob.y * height, 0, blob.x * width, blob.y * height, radius)
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(0.42, `${blob.color}cc`)
        gradient.addColorStop(1, `${blob.color}00`)
        context.fillStyle = gradient
        context.fillRect(0, 0, width, height)
      }
      context.globalCompositeOperation = 'destination-in'
      let fontSize = Math.min(width * 0.082, 96)
      context.font = `600 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`
      const largestLine = Math.max(...lines.map((line) => context.measureText(line).width))
      if (largestLine > width) {
        fontSize *= (width / largestLine) * 0.96
        context.font = `600 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`
      }
      context.textBaseline = 'middle'
      context.textAlign = 'left'
      const lineHeight = fontSize * 1.04
      const totalHeight = lineHeight * lines.length
      const startY = height / 2 - totalHeight / 2 + lineHeight / 2
      lines.forEach((line, index) => context.fillText(line, 0, startY + index * lineHeight))
      context.globalCompositeOperation = 'source-over'
      frame = requestAnimationFrame(draw)
    }

    const pointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.targetX = (event.clientX - rect.left) / rect.width
      pointer.targetY = (event.clientY - rect.top) / rect.height
    }
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !frame) frame = requestAnimationFrame(draw)
      if (!visible && frame) { cancelAnimationFrame(frame); frame = 0 }
    }, { threshold: 0.08 })
    const resizeObserver = new ResizeObserver(resize)
    const pageVisibility = () => {
      active = !document.hidden
      if (active && visible && !frame) frame = requestAnimationFrame(draw)
      if (!active && frame) { cancelAnimationFrame(frame); frame = 0 }
    }

    resize()
    canvas.addEventListener('pointermove', pointerMove, { passive: true })
    document.addEventListener('visibilitychange', pageVisibility)
    resizeObserver.observe(canvas)
    visibility.observe(canvas)
    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      canvas.removeEventListener('pointermove', pointerMove)
      document.removeEventListener('visibilitychange', pageVisibility)
      resizeObserver.disconnect()
      visibility.disconnect()
    }
  }, [lines])

  return (
    <h1 className={`mesh-text-hover ${className}`}>
      <span className="mesh-text-fallback" aria-hidden="true">{lines.map((line) => <span key={line}>{line}</span>)}</span>
      <canvas ref={canvasRef} className="mesh-text-canvas" aria-hidden="true" />
      <span className="sr-only">{lines.join(' ')}</span>
    </h1>
  )
}
