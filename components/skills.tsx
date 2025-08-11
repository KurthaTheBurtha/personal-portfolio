"use client"

import { Code, Globe, Database, Brain, Smartphone, Wrench } from 'lucide-react'
import skillsContent from '@/content/skills.json'

const iconMap = { Code, Globe, Database, Brain, Smartphone, Wrench } as const

export default function Skills() {
  const skillCategories = skillsContent.categories.map(cat => ({
    ...cat,
    Icon: iconMap[cat.icon as keyof typeof iconMap] || Code,
  }))

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {skillsContent.heading.split(' ')[0]} <span className="text-blue-400">{skillsContent.heading.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {skillsContent.subheading}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg mr-4`}>
                  <div className="text-white">
                    <category.Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
