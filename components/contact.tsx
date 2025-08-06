"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kschimme@andrew.cmu.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone", 
      value: "425-633-7653"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Seattle, WA"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss internship opportunities or collaborate on exciting projects? I'd
            love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm actively seeking software engineering internship opportunities
              for Summer 2025. Whether you're a recruiter, fellow developer, or
              someone with an interesting project, I'm always excited to connect
              and explore new possibilities.
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 transition-colors"
                >
                  <div className="text-blue-400 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{info.title}</p>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Find me online</h4>
              {/* Social links would go here */}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <Input
                  placeholder="What's this about?"
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <Textarea
                  placeholder="Tell me about your project, internship opportunity, or just say hello!"
                  rows={6}
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
