"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"
    
    if (!hasIntersected) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'fade-in':
          return `${baseClasses} opacity-0`
        case 'slide-left':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'slide-right':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}
