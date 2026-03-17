export function BackgroundDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Heart doodle top right */}
      <svg 
        className="absolute top-20 right-10 w-12 h-12 opacity-15 float-slow" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        style={{ animationDelay: "0s" }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeDasharray="3 2"/>
      </svg>

      {/* Star doodle top left */}
      <svg 
        className="absolute top-32 left-16 w-8 h-8 opacity-12 float" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeDasharray="3 2"/>
      </svg>

      {/* Arrow doodle middle left */}
      <svg 
        className="absolute top-1/3 left-8 w-16 h-16 opacity-10 float-slow" 
        viewBox="0 0 48 48" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        style={{ animationDelay: "4s" }}
      >
        <path d="M8 24c12-8 20-4 32 0" strokeDasharray="4 3"/>
        <path d="M34 18l6 6-6 6" strokeDasharray="3 2"/>
      </svg>

      {/* Squiggly line middle right */}
      <svg 
        className="absolute top-1/2 right-12 w-20 h-4 opacity-15" 
        viewBox="0 0 80 16" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M0 8c10-6 10 6 20 0s10 6 20 0 10 6 20 0 10 6 20 0" strokeDasharray="4 2"/>
      </svg>

      {/* Paper clip doodle bottom left */}
      <svg 
        className="absolute bottom-40 left-20 w-10 h-16 opacity-12 float" 
        viewBox="0 0 24 40" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        style={{ animationDelay: "1s" }}
      >
        <path d="M8 4v28c0 4 8 4 8 0V8c0-2-4-2-4 0v20" strokeDasharray="3 2"/>
      </svg>

      {/* Envelope doodle bottom right */}
      <svg 
        className="absolute bottom-32 right-24 w-14 h-10 opacity-10 float-slow" 
        viewBox="0 0 32 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        style={{ animationDelay: "3s" }}
      >
        <rect x="2" y="4" width="28" height="16" rx="2" strokeDasharray="3 2"/>
        <path d="M2 4l14 10 14-10" strokeDasharray="3 2"/>
      </svg>

      {/* Postage stamp doodle */}
      <svg 
        className="absolute top-2/3 left-1/4 w-12 h-14 opacity-10" 
        viewBox="0 0 32 40" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <rect x="4" y="4" width="24" height="32" strokeDasharray="2 2"/>
        <circle cx="16" cy="20" r="6" strokeDasharray="2 2"/>
      </svg>

      {/* Small hearts scattered */}
      <svg className="absolute top-1/4 right-1/3 w-6 h-6 opacity-15 float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animationDelay: "5s" }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeDasharray="2 2"/>
      </svg>

      <svg className="absolute bottom-1/4 left-1/3 w-5 h-5 opacity-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeDasharray="2 2"/>
      </svg>

      {/* Small stars */}
      <svg className="absolute top-3/4 right-1/4 w-4 h-4 opacity-10 float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animationDelay: "6s" }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeDasharray="2 2"/>
      </svg>
    </div>
  )
}
