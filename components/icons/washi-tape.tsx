interface IconProps {
  className?: string
}

export function WashiTape({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 80 24" 
      fill="none"
      aria-hidden="true"
      style={{ transform: "rotate(-3deg)" }}
    >
      {/* Tape background */}
      <rect 
        x="0" 
        y="4" 
        width="80" 
        height="16" 
        fill="#FFB5B5"
        opacity="0.7"
      />
      {/* Tape pattern - stripes */}
      <path d="M10 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M20 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M30 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M40 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M50 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M60 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      <path d="M70 4v16" stroke="#fff" strokeWidth="2" opacity="0.4"/>
      
      {/* Torn edges */}
      <path 
        d="M0 4 Q2 6 0 8 Q2 10 0 12 Q2 14 0 16 Q2 18 0 20" 
        stroke="#FFB5B5" 
        strokeWidth="1"
        fill="none"
      />
      <path 
        d="M80 4 Q78 6 80 8 Q78 10 80 12 Q78 14 80 16 Q78 18 80 20" 
        stroke="#FFB5B5" 
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}
