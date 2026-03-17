interface IconProps {
  className?: string
}

export function PaperClipIcon({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 32 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path 
        d="M10 6v26c0 4 12 4 12 0V10c0-3-6-3-6 0v18" 
        strokeDasharray="4 2"
      />
    </svg>
  )
}
