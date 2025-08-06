"use client"

import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    const throttledUpdateScrollPosition = () => {
      requestAnimationFrame(updateScrollPosition)
    }

    window.addEventListener('scroll', throttledUpdateScrollPosition, { passive: true })

    return () => window.removeEventListener('scroll', throttledUpdateScrollPosition)
  }, [])

  return { scrollY, scrollDirection }
}
