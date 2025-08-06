"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from './animated-section'
import ParallaxElement from './parallax-element'
import FloatingElement from './floating-element'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement duration={9} delay={0} intensity={22} className="absolute top-10 left-10">
          <div className="w-3 h-3 bg-blue-400/6 rounded-full"></div>
        </FloatingElement>
        <FloatingElement duration={7} delay={2} intensity={18} className="absolute top-1/3 right-20">
          <div className="w-2 h-2 bg-purple-400/8 rotate-45"></div>
        </FloatingElement>
        <FloatingElement duration={11} delay={1} intensity={25} className="absolute bottom-1/3 left-1/4">
          <div className="w-4 h-4 bg-cyan-400/5 rounded-full"></div>
        </FloatingElement>
        <FloatingElement duration={6} delay={3} intensity={15} className="absolute bottom-20 right-10">
          <div className="w-1 h-1 bg-green-400/10 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with parallax */}
        <ParallaxElement speed={0.1}>
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to discuss internship opportunities or collaborate on exciting projects? I'd
              love to hear from you!
            </p>
          </AnimatedSection>
        </ParallaxElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info with slide-in animations */}
          <ParallaxElement speed={0.05}>
            <div>
              <AnimatedSection delay={200} animation="slide-right">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  I'm actively seeking software engineering internship opportunities
                  for Summer 2025. Whether you're a recruiter, fellow developer, or
                  someone with an interesting project, I'm always excited to connect
                  and explore new possibilities.
                </p>
              </AnimatedSection>

              {/* Contact Information with staggered slide-in */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <AnimatedSection
                    key={index}
                    delay={400 + (index * 150)}
                    animation="slide-right"
                  >
                    <FloatingElement duration={4 + index} delay={index * 0.3} intensity={3}>
                      <div className="flex items-center p-4 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 hover:bg-slate-750 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <div className="text-blue-400 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 relative z-10">
                          {info.icon}
                        </div>
                        <div className="relative z-10">
                          <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{info.title}</p>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{info.value}</p>
                        </div>
                      </div>
                    </FloatingElement>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={800} animation="slide-right">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Find me online</h4>
                  <div className="flex gap-4">
                    {[
                      {
                        href: "https://github.com/KurthaTheBurtha",
                        icon: Github,
                        title: "GitHub",
                        subtitle: "@KurthaTheBurtha",
                        delay: 0
                      },
                      {
                        href: "https://www.linkedin.com/in/kurt-schimmel-67a27b252/",
                        icon: Linkedin,
                        title: "LinkedIn",
                        subtitle: "Kurt Schimmel",
                        delay: 0.2
                      }
                    ].map((social, index) => (
                      <FloatingElement key={index} duration={5 + index} delay={social.delay} intensity={4}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 hover:bg-slate-700 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                          <social.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                          <div className="relative z-10">
                            <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{social.title}</p>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{social.subtitle}</p>
                          </div>
                        </a>
                      </FloatingElement>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </ParallaxElement>

          {/* Right Side - Contact Form with slide-in from left */}
          <ParallaxElement speed={0.08} direction="down">
            <AnimatedSection delay={300} animation="slide-left">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            </AnimatedSection>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedSection delay={400} animation="slide-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingElement duration={4} delay={0} intensity={2}>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400 hover:border-slate-600 transition-all duration-300"
                        required
                      />
                    </div>
                  </FloatingElement>
                  <FloatingElement duration={4.5} delay={0.2} intensity={2}>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400 hover:border-slate-600 transition-all duration-300"
                        required
                      />
                    </div>
                  </FloatingElement>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500} animation="slide-left">
                <FloatingElement duration={5} delay={0.1} intensity={2}>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400 hover:border-slate-600 transition-all duration-300"
                      required
                    />
                  </div>
                </FloatingElement>
              </AnimatedSection>

              <AnimatedSection delay={600} animation="slide-left">
                <FloatingElement duration={5.5} delay={0.3} intensity={2}>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, internship opportunity, or just say hello!"
                      rows={6}
                      className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-400 hover:border-slate-600 transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                </FloatingElement>
              </AnimatedSection>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <AnimatedSection animation="fade-in">
                  <div className={`flex items-center gap-2 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-900/20 border border-red-500/30 text-red-400'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={700} animation="slide-left">
                <FloatingElement duration={3} delay={0.5} intensity={3}>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3 text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </div>
                  </Button>
                </FloatingElement>
              </AnimatedSection>
            </form>
          </ParallaxElement>
        </div>
      </div>
    </section>
  )
}
