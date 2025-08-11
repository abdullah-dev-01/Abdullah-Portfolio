"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "MERN Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      // 👆 added pt-16 so content starts below navbar
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2310b981' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-down">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-400/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture-0RnvIK9hQAhfCdN4JCMI2koAmBfFO8.png"
                  alt="Muhammad Abdullah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 opacity-20 blur-lg animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up text-white">
              Muhammad Abdullah
            </h1>
            <div
              className="text-xl md:text-2xl text-gray-300 font-mono mb-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-emerald-400">{"> "}</span>
              <span className="typing-animation">{displayText}</span>
            </div>
            <p
              className="text-lg text-gray-400 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              4th Semester BSCS Student at NUML, Islamabad
            </p>
          </div>

          {/* Description */}
          <div
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="code-block rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-gray-400 font-mono">
                  about.js
                </span>
              </div>
              <div className="text-left font-mono text-sm">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">{"{"}</span>
                <br />
                <span className="ml-4 text-emerald-400">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">
                  "Muhammad Abdullah"
                </span>
                <span className="text-white">,</span>
                <br />
                <span className="ml-4 text-emerald-400">skills</span>
                <span className="text-white">:</span>{" "}
                <span className="text-white">['</span>
                <span className="text-yellow-300">MongoDB</span>
                <span className="text-white">',</span>{" "}
                <span className="text-yellow-300">'Express'</span>
                <span className="text-white">',</span>{" "}
                <span className="text-yellow-300">'React'</span>
                <span className="text-white">',</span>{" "}
                <span className="text-yellow-300">'Node.js'</span>
                <span className="text-white">],</span>
                <br />
                <span className="ml-4 text-emerald-400">passion</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">
                  "Building amazing web experiences"
                </span>
                <br />
                <span className="text-white">{"}"}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-mono bg-transparent"
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
    </section>
  )
}
