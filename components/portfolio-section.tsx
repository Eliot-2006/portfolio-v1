"use client"

import { Instrument_Serif } from "next/font/google"
import { useEffect, useState } from "react"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const experience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Period",
    description: "Description of your role and responsibilities",
  },
  {
    company: "Another Company",
    role: "Position Title",
    period: "Start — Present",
    description: "What you worked on and accomplishments.",
    link: { label: "Link", href: "#" },
  },
]

const projects = [
  {
    title: "Project Title",
    description: "Brief description of what this project does and its impact.",
    links: [
      { label: "demo", href: "#" },
      { label: "github", href: "#" },
    ],
  },
  {
    title: "Another Project",
    description: "Description of another project you&apos;ve built.",
    links: [{ label: "link", href: "#" }],
  },
  {
    title: "Third Project",
    description: "More details about this project and what makes it interesting.",
    links: [
      { label: "live", href: "#" },
      { label: "github", href: "#" },
    ],
  },
]

const socialLinks = [
  { label: "github", href: "#" },
  { label: "linkedin", href: "#" },
  { label: "twitter", href: "#" },
  { label: "email", href: "#" },
]

function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).toLowerCase()
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <span className="text-white/40 text-sm font-sans">{time}</span>
}

export function PortfolioSection() {
  return (
    <div className="w-full max-w-xl">
      {/* Name & Time */}
      <header className="mb-2">
        <h1
          className={`${instrumentSerif.className} text-white text-4xl md:text-5xl font-normal leading-tight`}
        >
          Your Name
        </h1>
        <LiveClock />
      </header>

      {/* Social Links */}
      <nav className="flex flex-wrap gap-x-4 gap-y-1 mb-12">
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/40 hover:text-white/80 text-sm font-sans transition-colors"
          >
            {link.label}
            {i < socialLinks.length - 1 && <span className="ml-4 text-white/20">·</span>}
          </a>
        ))}
      </nav>

      {/* About */}
      <section className="mb-10">
        <h2 className={`${instrumentSerif.className} text-white text-xl mb-3`}>about</h2>
        <p className="text-white/60 text-sm leading-relaxed font-sans">
          Tell us about yourself. Share what you do, what you&apos;re passionate about, and any relevant background information.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className={`${instrumentSerif.className} text-white text-xl mb-4`}>experience</h2>
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={item.company} className="group">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-white text-sm font-sans">{item.company}</span>
                  <span className="text-white/40 text-sm font-sans"> · {item.role}</span>
                </div>
                <span className="text-white/30 text-xs font-sans shrink-0">{item.period}</span>
              </div>
              <p className="text-white/50 text-sm font-sans mt-0.5">{item.description}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  className="inline-block mt-1 text-white/30 hover:text-white/60 text-xs font-sans transition-colors"
                >
                  [{item.link.label}]
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className={`${instrumentSerif.className} text-white text-xl mb-4`}>projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title}>
              <h3 className="text-white text-sm font-sans font-medium">{project.title}</h3>
              <p className="text-white/50 text-sm font-sans mt-0.5 leading-relaxed">
                {project.description}
              </p>
              {project.links && (
                <div className="flex gap-3 mt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/30 hover:text-white/60 text-xs font-sans transition-colors"
                    >
                      ·{link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
