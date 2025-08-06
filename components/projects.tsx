"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, DollarSign, Users, Zap, Star } from 'lucide-react'
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Waprep Tuition Portal",
      period: "May 2025 - Present",
      status: "Production",
      statusColor: "bg-blue-600",
      description: "Enterprise-grade full-stack payment portal serving 50+ families at Washington Preparatory School, improving payment efficiency and accessibility by 60%.",
      metrics: [
        { icon: <DollarSign className="w-4 h-4" />, text: "$100k+ annual payments processed" },
        { icon: <Users className="w-4 h-4" />, text: "50+ families served" },
        { icon: <Zap className="w-4 h-4" />, text: "60% efficiency improvement" }
      ],
      technologies: ["React", "Node.js", "Stripe API", "PostgreSQL", "Express"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured%20projects-hiCpBtrjqhJwoNcTa8UisfichwMQWb.png"
    },
    {
      title: "Hurdle Touchdown Time Finder", 
      period: "Nov 2024 - Dec 2024",
      status: "Completed",
      statusColor: "bg-green-600",
      description: "Advanced computer vision tool using OpenCV for frame-by-frame video analysis, achieving >95% timing accuracy for hurdle race performance analysis.",
      metrics: [
        { icon: <Zap className="w-4 h-4" />, text: ">95% timing accuracy" },
        { icon: <Users className="w-4 h-4" />, text: "±0.3 second precision" },
        { icon: <Star className="w-4 h-4" />, text: "110m hurdle race analysis" }
      ],
      technologies: ["Python", "OpenCV", "Machine Learning", "Linear Regression"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hurdle%20touchdown%20finder-Vsb32jqkNPDcsnJGhBmzn1hm0i151I.png"
    },
    {
      title: "AI Teaching Assistant",
      period: "Apr 2024 - Aug 2024", 
      status: "Completed",
      statusColor: "bg-green-600",
      description: "Developed a COPPA-compliant PII detection system during an internship at Teachally.com, integrated into student onboarding workflows, supporting 50+ student accounts per classroom for K-12 use.",
      metrics: [
        { icon: <Users className="w-4 h-4" />, text: "50+ students per classroom" },
        { icon: <Zap className="w-4 h-4" />, text: "COPPA-compliant design" },
        { icon: <Star className="w-4 h-4" />, text: "K-12 education focus" }
      ],
      technologies: ["Go", "Flutter", "AI/ML", "Privacy Compliance"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai%20teaching%20assistant-KXjNHaaOu1vQE5vehd3kU5KE628kZd.png"
    },
    {
      title: "Free Lance Web Services",
      period: "Sep 2023 - Current",
      status: "Ongoing", 
      statusColor: "bg-orange-600",
      description: "Custom website development for local businesses, including athlete registration systems and restaurant sites with modern UX/UI design.",
      metrics: [
        { icon: <Users className="w-4 h-4" />, text: "80+ athlete registrations" },
        { icon: <Zap className="w-4 h-4" />, text: "500+ residents benefited" },
        { icon: <Star className="w-4 h-4" />, text: "4.3-star Google reviews" }
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free%20lance%20ws-Eiu1wi16BEjBU9cTBnDuEDr7h5nwOX.png"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`${project.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
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
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-300">
                      <div className="text-blue-400 mr-3">
                        {metric.icon}
                      </div>
                      <span>{metric.text}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-white font-semibold mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
