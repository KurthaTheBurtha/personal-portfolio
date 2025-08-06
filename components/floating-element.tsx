"use client"

import { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  intensity?: number
}

export default function FloatingElement({ 
  children, 
  className = "",
  duration = 3,
  delay = 0,
  intensity = 10
}: FloatingElementProps) {
  return (
    <div
      className={`${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        '--float-intensity': `${intensity}px`
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
