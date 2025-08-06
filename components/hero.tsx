"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"
import ParallaxElement from './parallax-element'
import FloatingElement from './floating-element'
import { useScrollPosition } from "@/hooks/use-scroll-position"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScrollPosition()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900 pt-20 relative overflow-hidden">
      {/* Enhanced Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={0.2} className="absolute top-1/4 left-1/4">
          <div className="w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        </ParallaxElement>
        
        <ParallaxElement speed={0.3} direction="down" className="absolute bottom-1/4 right-1/4">
          <div className="w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </ParallaxElement>
        
        <ParallaxElement speed={0.15} direction="left" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-cyan-500/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </ParallaxElement>

        {/* Floating geometric shapes */}
        <FloatingElement duration={4} delay={0} intensity={15} className="absolute top-20 left-10">
          <div className="w-4 h-4 bg-blue-400/20 rotate-45 rounded-sm"></div>
        </FloatingElement>
        
        <FloatingElement duration={5} delay={1} intensity={20} className="absolute top-40 right-20">
          <div className="w-6 h-6 bg-purple-400/20 rounded-full"></div>
        </FloatingElement>
        
        <FloatingElement duration={3.5} delay={2} intensity={12} className="absolute bottom-40 left-20">
          <div className="w-3 h-3 bg-cyan-400/20 rounded-full"></div>
        </FloatingElement>
        
        <FloatingElement duration={6} delay={0.5} intensity={18} className="absolute bottom-20 right-10">
          <div className="w-5 h-5 bg-blue-400/20 rotate-12 rounded-sm"></div>
        </FloatingElement>
      </div>

      {/* Main content with parallax movement */}
      <ParallaxElement speed={0.1} className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        {/* Profile Image with continuous bobbing */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <FloatingElement duration={3} delay={0} intensity={8} className="inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-600 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group relative">
              {/* Floating ring around profile */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 scale-110 animate-ping opacity-20"></div>
              <Image
                src="/profile.jpg"
                alt="Kurt Schimmel"
                width={192}
                height={192}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </FloatingElement>
        </div>

        {/* Main Heading with enhanced parallax */}
        <ParallaxElement speed={0.05}>
          <div className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Kurt</span>
            </h1>
          </div>
        </ParallaxElement>

        {/* Subtitle with different parallax speed */}
        <ParallaxElement speed={0.08}>
          <div className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <p className="text-2xl md:text-3xl text-gray-400 mb-8">
              Aspiring Full-Stack Developer
            </p>
          </div>
        </ParallaxElement>

        {/* Description with subtle movement */}
        <ParallaxElement speed={0.06}>
          <div className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
              Computer Science student at Carnegie Mellon University passionate about
              building innovative solutions. Currently seeking software engineering internship
              opportunities to apply my skills in full-stack development and AI.
            </p>
          </div>
        </ParallaxElement>

        {/* Action Buttons with hover-enhanced movement */}
        <ParallaxElement speed={0.04}>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
              onClick={() => handleSmoothScroll('projects')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative mr-2">View My Work</span>
              <ChevronDown className="relative w-5 h-5 group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:border-gray-400 px-10 py-4 text-lg rounded-lg bg-transparent transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="relative w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">Download Resume</span>
            </Button>
          </div>
        </ParallaxElement>

        {/* Social Links with staggered floating */}
        <ParallaxElement speed={0.02}>
          <div className={`flex justify-center space-x-8 transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            {[
              { icon: Github, href: "https://github.com/KurthaTheBurtha", delay: 0 },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kurt-schimmel-67a27b252/", delay: 0.5 },
              { icon: Mail, href: "mailto:kschimme@andrew.cmu.edu", delay: 1 }
            ].map(({ icon: Icon, href, delay }, index) => (
              <FloatingElement key={index} duration={4 + index} delay={delay} intensity={6}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transform hover:scale-110 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden"
                  style={{ transitionDelay: `${delay * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                  <Icon className="relative w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </FloatingElement>
            ))}
          </div>
        </ParallaxElement>
      </ParallaxElement>

      {/* Scroll indicator with movement */}
      <ParallaxElement speed={0.3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FloatingElement duration={2} intensity={5}>
          <div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-blue-400 transition-colors duration-300"
            onClick={() => handleSmoothScroll('about')}
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </FloatingElement>
      </ParallaxElement>
    </section>
  )
}
