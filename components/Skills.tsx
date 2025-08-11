"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-400" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Express.js", level: 85, color: "bg-gray-500" },
        { name: "MongoDB", level: 80, color: "bg-green-600" },
        { name: "REST APIs", level: 85, color: "bg-purple-500" },
        { name: "JWT", level: 75, color: "bg-red-500" },
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", level: 80, color: "bg-orange-600" },
        { name: "GitHub", level: 85, color: "bg-gray-600" },
        { name: "VS Code", level: 90, color: "bg-blue-600" },
        { name: "Postman", level: 75, color: "bg-orange-500" },
        { name: "npm/yarn", level: 80, color: "bg-red-600" },
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-emerald-400 font-mono">02.</span>{" "}
              <span className="text-white">Skills & Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                className={`code-block rounded-lg p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${groupIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-sm text-gray-400 font-mono">{skillGroup.category.toLowerCase()}.js</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 font-mono">{skillGroup.category}</h3>

                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-mono text-sm">{tech.name}</span>
                        <span className="text-emerald-400 font-mono text-sm">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${tech.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${tech.level}%` : "0%",
                            transitionDelay: `${groupIndex * 0.2 + techIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div
            className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className="code-block rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-gray-400 font-mono">learning.js</span>
              </div>
              <p className="text-gray-300 font-mono text-sm">
                <span className="text-purple-400">const</span> <span className="text-blue-400">currentlyLearning</span>{" "}
                <span className="text-white">=</span> <span className="text-white">['</span>
                <span className="text-yellow-300">Next.js</span>
                <span className="text-white">',</span> <span className="text-yellow-300">'TypeScript'</span>
                <span className="text-white">',</span> <span className="text-yellow-300">'GraphQL'</span>
                <span className="text-white">'];</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
