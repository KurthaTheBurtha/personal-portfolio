"use client"

import AnimatedSection from './animated-section'
import StaggerContainer from './stagger-container'
import ParallaxElement from './parallax-element'
import FloatingElement from './floating-element'

export default function ProfessionalQualities() {
  const qualities = [
    "Problem Solving",
    "Team Collaboration", 
    "Time Management",
    "Leadership",
    "Communication",
    "Adaptability",
    "Critical Thinking",
    "Project Management"
  ]

  const languages = [
    { name: "English", level: "Native" },
    { name: "German", level: "Bilingual Fluent" },
    { name: "Chinese", level: "Bilingual Fluent" }
  ]

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement duration={10} delay={0} intensity={25} className="absolute top-20 right-10">
          <div className="w-3 h-3 bg-blue-400/8 rounded-full"></div>
        </FloatingElement>
        <FloatingElement duration={8} delay={3} intensity={20} className="absolute top-1/2 left-10">
          <div className="w-2 h-2 bg-purple-400/8 rotate-45"></div>
        </FloatingElement>
        <FloatingElement duration={12} delay={1} intensity={30} className="absolute bottom-20 right-1/4">
          <div className="w-1 h-1 bg-cyan-400/8 rounded-full"></div>
        </FloatingElement>
        <FloatingElement duration={6} delay={2} intensity={15} className="absolute bottom-40 left-1/3">
          <div className="w-4 h-4 bg-green-400/5 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Professional Qualities Section */}
        <ParallaxElement speed={0.08}>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-blue-400">Qualities</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Beyond technical expertise, I bring strong interpersonal skills developed through varsity athletics
              and collaborative project work. These qualities enable me to thrive in team environments and
              deliver results under pressure.
            </p>
          </AnimatedSection>
        </ParallaxElement>

        {/* Qualities Pills with staggered slide-in animations */}
        <ParallaxElement speed={0.05}>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {qualities.map((quality, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                animation="scale-up"
              >
                <FloatingElement 
                  duration={4 + (index % 3)} 
                  delay={index * 0.2} 
                  intensity={3}
                >
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 cursor-default transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative">{quality}</span>
                  </span>
                </FloatingElement>
              </AnimatedSection>
            ))}
          </div>
        </ParallaxElement>

        {/* Languages Section */}
        <ParallaxElement speed={0.06}>
          <AnimatedSection className="text-center" delay={400}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              <span className="text-blue-400">Languages</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <AnimatedSection
                key={index}
                delay={600 + (index * 200)}
                animation="slide-right"
              >
                <FloatingElement 
                  duration={5 + index} 
                  delay={index * 0.5} 
                  intensity={5}
                >
                  <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400 hover:bg-slate-800 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {language.name}
                      </h3>
                      <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                        {language.level}
                      </p>
                    </div>
                    
                    {/* Decorative floating dot */}
                    <FloatingElement duration={3} delay={index} intensity={2} className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-blue-400/30 rounded-full group-hover:bg-blue-400/60 transition-colors duration-300"></div>
                    </FloatingElement>
                  </div>
                </FloatingElement>
              </AnimatedSection>
            ))}
          </div>
        </ParallaxElement>
      </div>
    </section>
  )
}
