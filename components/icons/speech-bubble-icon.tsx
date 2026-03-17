interface IconProps {
  className?: string
}

export function SpeechBubbleIcon({ className }: IconProps) {
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
      <path 
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" 
        strokeDasharray="3 2"
      />
      <path d="M8 10h8" strokeDasharray="2 2" opacity="0.6"/>
      <path d="M8 14h5" strokeDasharray="2 2" opacity="0.6"/>
    </svg>
  )
}
