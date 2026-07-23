import { useEffect, useRef, useState } from 'react'

type VideoBackgroundProps = {
  src: string
  poster?: string
}

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean }
}

/** Avoid decoding decorative video on small screens or when the user requests less work. */
export function useDecorativeVideoEnabled() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const queries = [
      window.matchMedia('(min-width: 769px)'),
      window.matchMedia('(prefers-reduced-motion: no-preference)'),
    ]
    const update = () => setEnabled(queries.every((query) => query.matches) && !(navigator as NavigatorWithConnection).connection?.saveData)

    update()
    queries.forEach((query) => query.addEventListener('change', update))
    return () => queries.forEach((query) => query.removeEventListener('change', update))
  }, [])

  return enabled
}

/** Decorative video that only plays while its Hero is visible. */
export function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isVideoEnabled = useDecorativeVideoEnabled()

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVideoEnabled) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.01 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [isVideoEnabled])

  return (
    <div className="hero-video-layer" aria-hidden="true" style={poster ? { backgroundImage: `url(${poster})` } : undefined}>
      {isVideoEnabled && <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="hero-video"
      >
        <source src={src} type="video/mp4" />
      </video>}
      <div className="hero-video-overlay" />
    </div>
  )
}
