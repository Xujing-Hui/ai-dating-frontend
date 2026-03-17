interface IconProps {
  className?: string
}

export function SquigglyUnderline({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 120 8" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path 
        d="M2 4c8-4 8 4 16 0s8 4 16 0 8 4 16 0 8 4 16 0 8 4 16 0 8 4 16 0 8 4 16 0" 
        strokeDasharray="4 2"
      />
    </svg>
  )
}
