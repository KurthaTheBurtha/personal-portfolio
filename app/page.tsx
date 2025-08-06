import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import ProfessionalQualities from "@/components/professional-qualities"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ProfessionalQualities />
      <Contact />
    </div>
  )
}
