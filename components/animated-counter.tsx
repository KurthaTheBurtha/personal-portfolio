"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "",
  className = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, hasIntersected } = useIntersectionObserver()

  useEffect(() => {
    if (!hasIntersected) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [hasIntersected, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
