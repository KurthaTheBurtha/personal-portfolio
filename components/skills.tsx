"use client"

import { Code, Globe, Database, Brain, Smartphone, Wrench } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-600",
      skills: ["Java", "Python", "C++", "C", "JavaScript", "Go", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: <Globe className="w-8 h-8" />,
      color: "bg-green-600",
      skills: ["React", "Node.js", "Express", "Django", "Flutter", "TailwindCSS"]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-8 h-8" />,
      color: "bg-purple-600", 
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "AWS", "Git"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-orange-600",
      skills: ["OpenCV", "Linear Regression", "Computer Vision", "Data Analysis"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-pink-600",
      skills: ["Flutter", "Dart", "Mobile UI/UX", "Cross-platform Development"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-blue-600",
      skills: ["Git", "Confluence", "Stripe API", "RESTful APIs", "Agile Development"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
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
                    {category.icon}
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
