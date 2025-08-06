"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-12">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-600">
                          <Image
                src="/profile.jpg"
                alt="Kurt Schimmel"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-400">Kurt</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-400 mb-8">
          Aspiring Full-Stack Developer
        </p>

        {/* Description */}
        <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
          Computer Science student at Carnegie Mellon University passionate about
          building innovative solutions. Currently seeking software engineering internship
          opportunities to apply my skills in full-stack development and AI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg">
            <span className="mr-2">View My Work</span>
            <ChevronDown className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:bg-gray-800 px-10 py-4 text-lg rounded-lg bg-transparent">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <a
            href="#"
            className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
