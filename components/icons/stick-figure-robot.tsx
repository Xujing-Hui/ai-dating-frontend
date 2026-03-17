interface IconProps {
  className?: string
}

export function StickFigureRobot({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 80 80" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Antenna */}
      <path d="M40 8v6" strokeDasharray="2 2"/>
      <circle cx="40" cy="6" r="3" strokeDasharray="2 2"/>
      
      {/* Robot head - square */}
      <rect x="26" y="14" width="28" height="22" rx="3" strokeDasharray="3 2"/>
      
      {/* Glasses */}
      <circle cx="34" cy="24" r="4" strokeDasharray="2 2"/>
      <circle cx="46" cy="24" r="4" strokeDasharray="2 2"/>
      <path d="M38 24h4" strokeDasharray="2 2"/>
      
      {/* Mouth - happy */}
      <path d="M35 30 Q40 34 45 30" strokeDasharray="2 2"/>
      
      {/* Body */}
      <rect x="30" y="36" width="20" height="18" rx="2" strokeDasharray="3 2"/>
      
      {/* Arms holding letters */}
      <path d="M30 42l-12 4" strokeDasharray="3 2"/>
      <path d="M50 42l12 4" strokeDasharray="3 2"/>
      
      {/* Letter stack on left */}
      <rect x="8" y="44" width="12" height="8" strokeDasharray="2 2"/>
      <rect x="10" y="42" width="12" height="8" strokeDasharray="2 2"/>
      <rect x="12" y="40" width="12" height="8" strokeDasharray="2 2"/>
      
      {/* Letter on right - being read */}
      <rect x="58" y="42" width="14" height="10" strokeDasharray="2 2"/>
      <path d="M60 44h10" strokeDasharray="2 2" opacity="0.5"/>
      <path d="M60 47h8" strokeDasharray="2 2" opacity="0.5"/>
      <path d="M60 50h6" strokeDasharray="2 2" opacity="0.5"/>
      
      {/* Legs */}
      <path d="M36 54v12" strokeDasharray="3 2"/>
      <path d="M44 54v12" strokeDasharray="3 2"/>
      <path d="M32 66h8" strokeDasharray="2 2"/>
      <path d="M40 66h8" strokeDasharray="2 2"/>
      
      {/* Processing dots animation hint */}
      <circle cx="34" cy="41" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="40" cy="41" r="1.5" fill="currentColor" opacity="0.8"/>
      <circle cx="46" cy="41" r="1.5" fill="currentColor"/>
    </svg>
  )
}
