interface IconProps {
  className?: string
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 48 48" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Camera body */}
      <rect x="6" y="14" width="36" height="26" rx="4" strokeDasharray="4 2"/>
      
      {/* Lens */}
      <circle cx="24" cy="27" r="8" strokeDasharray="3 2"/>
      <circle cx="24" cy="27" r="4" strokeDasharray="2 2"/>
      
      {/* Flash */}
      <rect x="14" y="10" width="8" height="4" rx="1" strokeDasharray="2 2"/>
      
      {/* Button */}
      <circle cx="36" cy="20" r="2" fill="currentColor"/>
    </svg>
  )
}
