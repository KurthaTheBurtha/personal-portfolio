"use client"

import { GraduationCap, Code, Target, Award } from 'lucide-react'

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
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Passionate Developer & Problem Solver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Computer Science student at Carnegie Mellon University with
              a passion for creating innovative software solutions. My journey in
              tech began with curiosity about how things work, and has evolved
              into a deep love for building applications that make a real impact.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing a Bachelor of Science in Information Systems
              with an additional minor in Artificial Intelligence, I've gained hands-
              on experience developing enterprise-grade applications, from
              payment portals handling $100k+ in transactions to AI-powered
              tools serving 50+ users.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As a varsity athlete, I've learned to balance demanding schedules
              while maintaining excellence in both academics and athletics. This
              experience has taught me valuable skills in time management,
              teamwork, and perseverance that I bring to every project.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">What drives me:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Building scalable, user-focused applications
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Exploring the intersection of AI and web development
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Continuous learning and staying current with tech trends
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="space-y-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
