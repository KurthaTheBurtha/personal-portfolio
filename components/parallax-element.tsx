"use client"

import { useScrollPosition } from "@/hooks/use-scroll-position"
import { ReactNode, useRef, useEffect, useState } from "react"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = "",
  direction = 'up'
}: ParallaxElementProps) {
  const { scrollY } = useScrollPosition()
  const elementRef = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    const updateElementTop = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        setElementTop(rect.top + window.scrollY)
      }
    }

    updateElementTop()
    window.addEventListener('resize', updateElementTop)
    return () => window.removeEventListener('resize', updateElementTop)
  }, [])

  const getTransform = () => {
    const offset = (scrollY - elementTop) * speed
    
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`
      case 'down':
        return `translateY(${offset}px)`
      case 'left':
        return `translateX(${-offset}px)`
      case 'right':
        return `translateX(${offset}px)`
      default:
        return `translateY(${-offset}px)`
    }
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}
