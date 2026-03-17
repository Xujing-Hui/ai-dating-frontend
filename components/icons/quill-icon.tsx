interface IconProps {
  className?: string
}

export function QuillIcon({ className }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 32 32" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Quill feather */}
      <path 
        d="M26 2c-8 4-16 12-18 22 2-2 6-4 10-4-2-4 2-10 8-14" 
        strokeDasharray="3 2"
      />
      <path d="M8 24c0 4 2 6 2 6" strokeDasharray="2 2"/>
      
      {/* Writing line - animated */}
      <path 
        d="M12 28c4-1 8-2 12-1" 
        strokeDasharray="3 2"
        className="quill-line"
      />
    </svg>
  )
}
