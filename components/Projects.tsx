"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with MERN stack featuring user authentication, product management, shopping cart, and payment integration.",
      image: "/images/e.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/task.png",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "A responsive social media dashboard for managing multiple accounts with analytics, post scheduling, and engagement tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Weather App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "A full-featured blog platform with markdown support, comment system, and admin panel for content management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Markdown"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-emerald-400 font-mono">03.</span>{" "}
              <span className="text-white">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <div>
                    <p className="text-emerald-400 font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <div className="code-block rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="code-block rounded-lg p-6 hover:border-emerald-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Code className="w-8 h-8 text-emerald-400" />
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
