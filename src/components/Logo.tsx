type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`brand-logo ${className}`}>
      <svg className="brand-logo-mark" viewBox="0 0 512 512" role="img" aria-label="CodeWeb">
        <defs>
          <linearGradient id="brand-cw-neon" x1="124" y1="104" x2="397" y2="408" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e9d5ff" /><stop offset=".38" stopColor="#c084fc" /><stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="brand-cw-edge" x1="82" y1="65" x2="432" y2="451" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d8b4fe" stopOpacity=".85" /><stop offset="1" stopColor="#7e22ce" stopOpacity=".2" />
          </linearGradient>
          <filter id="brand-cw-glow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="13" result="glow" /><feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path d="M160 35h192l125 125v192L352 477H160L35 352V160L160 35Z" fill="#09090b" />
        <path d="M160 45h188l119 119v184L348 467H164L45 348V164L164 45Z" fill="none" stroke="url(#brand-cw-edge)" strokeWidth="9" />
        <path d="M323 151a130 130 0 1 0 0 210" fill="none" stroke="url(#brand-cw-neon)" strokeLinecap="round" strokeWidth="45" filter="url(#brand-cw-glow)" />
        <path d="m207 239 35 104 39-72 39 72 37-104" fill="none" stroke="url(#brand-cw-neon)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="31" filter="url(#brand-cw-glow)" />
        <path d="M323 151a130 130 0 1 0 0 210" fill="none" stroke="#fff" strokeLinecap="round" strokeOpacity=".26" strokeWidth="5" />
      </svg>
      <span className="brand-logo-word">Code<span>Web</span></span>
      <span className="brand-logo-studio">studio</span>
    </span>
  )
}
