interface IconProps {
  className?: string
}

export function PushpinIcon({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 32" 
      fill="none"
      aria-hidden="true"
    >
      {/* Pin head */}
      <circle 
        cx="12" 
        cy="8" 
        r="6" 
        fill="#FFB5B5"
        stroke="#4A4A4A"
        strokeWidth="1.5"
      />
      {/* Highlight */}
      <circle 
        cx="10" 
        cy="6" 
        r="2" 
        fill="#fff"
        opacity="0.5"
      />
      {/* Pin body */}
      <path 
        d="M12 14v12" 
        stroke="#4A4A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Pin point */}
      <path 
        d="M12 26l-2 4h4l-2-4z" 
        fill="#4A4A4A"
      />
    </svg>
  )
}
