"use client"

import { Github, Linkedin, Mail, Heart, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-bold font-mono text-white">{"<Abdullah />"}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                MERN Stack Developer passionate about creating efficient, scalable, and user-friendly web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-mono text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-2">
                <a
                  href="mailto:muhammadabdullahconnnect@gmail.com"
                  className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  muhammadabdullahconnnect@gmail.com
                </a>
                <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/abdullah-dev-01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullahconnects"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:muhammadabdullahconnnect@gmail.com"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Muhammad Abdullah. Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and lots of</span>
                <Code className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-gray-400 text-sm font-mono">Built with React & Next.js</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
