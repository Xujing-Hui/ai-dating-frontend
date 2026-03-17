interface IconProps {
  className?: string
}

export function StickFigureCouple({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 120 50" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Person 1 - Left */}
      <circle cx="25" cy="12" r="8" strokeDasharray="3 2"/>
      <path d="M25 20v15" strokeDasharray="3 2"/>
      <path d="M25 25l-10 8" strokeDasharray="3 2"/>
      <path d="M25 25l10 -2" strokeDasharray="3 2"/>
      <path d="M25 35l-8 12" strokeDasharray="3 2"/>
      <path d="M25 35l8 12" strokeDasharray="3 2"/>
      
      {/* Red string/connection - heart path */}
      <path 
        d="M35 23 Q 60 5 85 23" 
        stroke="#FFB5B5" 
        strokeWidth="2" 
        strokeDasharray="4 3"
        fill="none"
      />
      <circle cx="60" cy="10" r="4" fill="#FFB5B5" stroke="none"/>
      
      {/* Person 2 - Right */}
      <circle cx="95" cy="12" r="8" strokeDasharray="3 2"/>
      <path d="M95 20v15" strokeDasharray="3 2"/>
      <path d="M95 25l10 8" strokeDasharray="3 2"/>
      <path d="M95 25l-10 -2" strokeDasharray="3 2"/>
      <path d="M95 35l-8 12" strokeDasharray="3 2"/>
      <path d="M95 35l8 12" strokeDasharray="3 2"/>
    </svg>
  )
}
