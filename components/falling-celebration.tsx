"use client"

import { useMemo } from "react"

const celebrationItems = [
  { type: "heart", symbol: "♡" },
  { type: "star", symbol: "✩" },
  { type: "sparkle", symbol: "✦" },
  { type: "envelope", symbol: "✉" },
  { type: "heart-filled", symbol: "♥" },
]

export function FallingCelebration() {
  const items = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const item = celebrationItems[i % celebrationItems.length]
      return {
        id: i,
        ...item,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${2 + Math.random() * 3}s`,
        size: 12 + Math.random() * 16,
      }
    })
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute falling text-blush"
          style={{
            left: item.left,
            top: "-50px",
            fontSize: `${item.size}px`,
            "--fall-delay": item.delay,
            "--fall-duration": item.duration,
          } as React.CSSProperties}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  )
}
