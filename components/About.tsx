"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award, MapPin } from "lucide-react"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-emerald-400 font-mono">01.</span> <span className="text-white">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-6 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="code-block rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-sm text-gray-400 font-mono">story.md</span>
                </div>
                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    Hello! I'm Muhammad Abdullah, a passionate MERN Stack Developer currently pursuing my Bachelor's in
                    Computer Science at NUML, Islamabad. I'm in my 4th semester and have successfully completed a
                    comprehensive MERN Stack course from NAVTTC, Islamabad.
                  </p>
                  <p className="mb-4">
                    My journey in web development started with curiosity and has evolved into a passion for creating
                    efficient, scalable, and user-friendly applications. I love turning complex problems into simple,
                    beautiful, and intuitive solutions.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or learning about the latest trends in web development.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className={`space-y-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="code-block rounded-lg p-6 hover:border-emerald-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                    <p className="text-gray-400">Academic Background</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>BSCS</strong> - National University of Modern Languages
                  </p>
                  <p className="text-sm text-gray-400">4th Semester • Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="code-block rounded-lg p-6 hover:border-emerald-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Certification</h3>
                    <p className="text-gray-400">Professional Training</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>MERN Stack Development</strong>
                  </p>
                  <p className="text-sm text-gray-400">NAVTTC • Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="code-block rounded-lg p-6 hover:border-emerald-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Location</h3>
                    <p className="text-gray-400">Based in</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>Islamabad, Pakistan</strong>
                  </p>
                  <p className="text-sm text-gray-400">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
