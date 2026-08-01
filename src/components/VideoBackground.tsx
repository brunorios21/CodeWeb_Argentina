import { useEffect, useRef } from 'react'

type VideoBackgroundProps = {
  src: string
  poster?: string
}

/** Decorative video that only plays while its Hero is visible. */
export function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

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
  }, [])

  return (
    <div className="hero-video-layer" aria-hidden="true">
      <video
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
      </video>
      <div className="hero-video-overlay" />
    </div>
  )
}
