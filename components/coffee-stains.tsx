export function CoffeeStains() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top left coffee ring */}
      <svg 
        className="absolute top-8 left-8 w-24 h-24 opacity-[0.12]" 
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="none" 
          stroke="#E8D5B8" 
          strokeWidth="8"
          strokeDasharray="20 10 5 15"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="32" 
          fill="none" 
          stroke="#E8D5B8" 
          strokeWidth="3"
          opacity="0.5"
        />
      </svg>

      {/* Bottom right coffee ring */}
      <svg 
        className="absolute bottom-16 right-12 w-32 h-32 opacity-[0.08]" 
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="42" 
          fill="none" 
          stroke="#E8D5B8" 
          strokeWidth="6"
          strokeDasharray="15 8 25 12"
        />
      </svg>

      {/* Bottom left smaller stain */}
      <svg 
        className="absolute bottom-32 left-24 w-16 h-16 opacity-[0.10]" 
        viewBox="0 0 100 100"
      >
        <ellipse 
          cx="50" 
          cy="50" 
          rx="38" 
          ry="42" 
          fill="none" 
          stroke="#E8D5B8" 
          strokeWidth="10"
          strokeDasharray="12 18 8 12"
        />
      </svg>
    </div>
  )
}
