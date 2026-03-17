interface IconProps {
  className?: string
}

export function NotebookIcon({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" strokeDasharray="3 2"/>
      <path d="M8 6h8" strokeDasharray="2 2"/>
      <path d="M8 10h8" strokeDasharray="2 2"/>
      <path d="M8 14h5" strokeDasharray="2 2"/>
      <path d="M2 6h2" strokeDasharray="2 2"/>
      <path d="M2 10h2" strokeDasharray="2 2"/>
      <path d="M2 14h2" strokeDasharray="2 2"/>
    </svg>
  )
}
