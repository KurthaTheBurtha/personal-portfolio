"use client"

import { GraduationCap, Code, Target, Award } from 'lucide-react'
import AnimatedSection from './animated-section'
import StaggerContainer from './stagger-container'
import ParallaxElement from './parallax-element'
import FloatingElement from './floating-element'

export default function About() {
  const infoCards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      title: "Education",
      description: "Carnegie Mellon University - BS Information Systems with AI Minor"
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      title: "Experience", 
      description: "Full-Stack Developer with enterprise-grade project experience"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Focus",
      description: "Building scalable solutions with modern technologies"
    },
    {
      icon: <Award className="w-6 h-6 text-orange-400" />,
      title: "Achievement",
      description: "Varsity athlete balancing academics and 30+ hour commitments"
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement duration={8} delay={0} intensity={20} className="absolute top-20 left-10">
          <div className="w-2 h-2 bg-blue-400/10 rounded-full"></div>
        </FloatingElement>
        <FloatingElement duration={6} delay={2} intensity={15} className="absolute top-40 right-20">
          <div className="w-3 h-3 bg-purple-400/10 rotate-45"></div>
        </FloatingElement>
        <FloatingElement duration={7} delay={1} intensity={25} className="absolute bottom-40 left-1/4">
          <div className="w-1 h-1 bg-cyan-400/10 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with parallax */}
        <ParallaxElement speed={0.1}>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Passionate Developer & Problem Solver
            </p>
          </AnimatedSection>
        </ParallaxElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content with subtle parallax */}
          <ParallaxElement speed={0.05}>
            <div className="space-y-6">
              <AnimatedSection delay={200}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a Computer Science student at Carnegie Mellon University with
                  a passion for creating innovative software solutions. My journey in
                  tech began with curiosity about how things work, and has evolved
                  into a deep love for building applications that make a real impact.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently pursuing a Bachelor of Science in Information Systems
                  with an additional minor in Artificial Intelligence, I've gained hands-
                  on experience developing enterprise-grade applications, from
                  payment portals handling $100k+ in transactions to AI-powered
                  tools serving 50+ users.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a varsity athlete, I've learned to balance demanding schedules
                  while maintaining excellence in both academics and athletics. This
                  experience has taught me valuable skills in time management,
                  teamwork, and perseverance that I bring to every project.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={800}>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">What drives me:</h3>
                  <StaggerContainer className="space-y-3" staggerDelay={150}>
                    <div className="flex items-center text-gray-300 group">
                      <FloatingElement duration={3} intensity={3} className="mr-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </FloatingElement>
                      Building scalable, user-focused applications
                    </div>
                    <div className="flex items-center text-gray-300 group">
                      <FloatingElement duration={3.5} delay={0.5} intensity={3} className="mr-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </FloatingElement>
                      Exploring the intersection of AI and web development
                    </div>
                    <div className="flex items-center text-gray-300 group">
                      <FloatingElement duration={4} delay={1} intensity={3} className="mr-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </FloatingElement>
                      Continuous learning and staying current with tech trends
                    </div>
                  </StaggerContainer>
                </div>
              </AnimatedSection>
            </div>
          </ParallaxElement>

          {/* Right Content - Info Cards with slide-in from right animation */}
          <div className="space-y-6">
            {infoCards.map((card, index) => (
              <AnimatedSection
                key={index}
                delay={index * 150}
                animation="slide-left"
                className="w-full"
              >
                <FloatingElement duration={5 + index * 0.5} delay={index * 0.3} intensity={4}>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 hover:bg-slate-750 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
