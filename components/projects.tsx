"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, DollarSign, Users, Zap, Star } from 'lucide-react'
import Image from "next/image"
import AnimatedSection from './animated-section'
import AnimatedCounter from './animated-counter'
import projectsContent from '@/content/projects.json'

const iconMap = { DollarSign, Users, Zap, Star } as const

export default function Projects() {
  const projects = projectsContent.projects

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {projectsContent.heading.split(' ')[0]} <span className="text-blue-400">{projectsContent.heading.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {projectsContent.subheading}
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 200}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`${project.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.period}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  {project.metrics.map((metric, metricIndex) => {
                    const Icon = iconMap[metric.icon as keyof typeof iconMap] || Zap
                    return (
                      <div key={metricIndex} className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors duration-300">
                        <div className="text-blue-400 mr-3 group-hover:scale-125 transition-transform duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>
                          {metric.text}
                          {metric.counter > 0 && (
                            <AnimatedCounter 
                              end={metric.counter} 
                              duration={2000}
                              className="font-semibold"
                            />
                          )}
                          {metric.suffix}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-white font-semibold mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700 hover:border-blue-400 hover:bg-slate-700 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    View Code
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
