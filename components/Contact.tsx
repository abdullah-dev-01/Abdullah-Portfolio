"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-emerald-400 font-mono">04.</span> <span className="text-white">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="code-block rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-sm text-gray-400 font-mono">contact.js</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <a
                        href="mailto:muhammadabdullahconnnect@gmail.com"
                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        muhammadabdullahconnnect@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-300">Islamabad, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">GitHub</h3>
                      <a
                        href="https://github.com/abdullah-dev-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        abdullah-dev-01
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/abdullahconnects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        abdullahconnects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="code-block rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-sm text-gray-400 font-mono">message.js</span>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="code-block rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance work and full-time opportunities. Let's build something amazing
                together!
              </p>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono">
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
