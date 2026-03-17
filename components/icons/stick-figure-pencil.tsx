interface IconProps {
  className?: string
}

export function StickFigurePencil({ className }: IconProps) {
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
      {/* Head */}
      <circle cx="30" cy="18" r="10" strokeDasharray="3 2"/>
      
      {/* Body */}
      <path d="M30 28v22" strokeDasharray="3 2"/>
      
      {/* Arms - one waving, one holding pencil */}
      <path d="M30 35l-15 8" strokeDasharray="3 2"/>
      <path d="M30 35l18 -5" strokeDasharray="3 2"/>
      
      {/* Pencil */}
      <path d="M48 30l18 -12" strokeDasharray="3 2"/>
      <path d="M66 18l4 -3" strokeWidth="3"/>
      <path d="M48 30l-2 4 6 -2z" fill="currentColor"/>
      
      {/* Legs */}
      <path d="M30 50l-10 18" strokeDasharray="3 2"/>
      <path d="M30 50l10 18" strokeDasharray="3 2"/>
      
      {/* Waving hand lines */}
      <path d="M12 40l-3 -2" strokeDasharray="2 2" opacity="0.6"/>
      <path d="M12 43l-4 0" strokeDasharray="2 2" opacity="0.6"/>
      <path d="M12 46l-3 2" strokeDasharray="2 2" opacity="0.6"/>
    </svg>
  )
}
