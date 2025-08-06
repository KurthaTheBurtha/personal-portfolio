"use client"

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
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Professional Qualities */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Qualities</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            Beyond technical expertise, I bring strong interpersonal skills developed through varsity athletics
            and collaborative project work. These qualities enable me to thrive in team environments and
            deliver results under pressure.
          </p>

          {/* Qualities Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {qualities.map((quality, index) => (
              <span
                key={index}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors cursor-default"
              >
                {quality}
              </span>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-blue-400">Languages</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language.name}
                </h3>
                <p className="text-gray-400 text-lg">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
