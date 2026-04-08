"use client"

const experience = [
  {
    company: "Maynooth University",
    role: "Robotics Software Intern (incoming)",
    period: "Summer 2026",
    description:
      "AURA is a research project developing a sustainable autonomous agriculture robotic platform.",
    link: { label: "aura", href: "https://aura-mu.github.io/" },
  },
  {
    company: "UCSD",
    role: "Information Technology Support Specialist",
    period: "2025 - Present",
    description: "Managing user accounts and device deployments across a 30,000+ user enterprise environment at UC San Diego ITS.",
  },
]

const projects = [
  {
    title: "FlipIt",
    description:
      "An autonomous resale agent that identifies thrift store finds, estimates profit, drafts listings, and hunts marketplaces for rare items, built at DiamondHacks @ UCSD.",
    links: [{ label: "github", href: "https://github.com/Jay-Thpr/FlipIt" }],
  },
  {
    title: "Malaysian Housing Predictor",
    description:
      "A machine learning project that predicts Malaysian housing prices from market and property features.",
    links: [
      {
        label: "github",
        href: "https://github.com/piqim/Malaysian-Housing-Price-Predictive-Model",
      },
    ],
  },
  {
    title: "CAfE",
    description:
      "An automated compliance form-filling engine that streamlines paperwork and reduces manual entry, built at the LPL Financial Hackathon.",
    links: [{ label: "github", href: "https://github.com/Rafael215/compliance-autofill-engine" }],
  },
]

const socialLinks = [
  { label: "github", href: "https://github.com/Eliot-2006" },
  { label: "linkedin", href: "https://www.linkedin.com/in/eliotboda/" },
  { label: "email", href: "mailto:eboda@ucsd.edu" },
]

export function PortfolioSection() {
  return (
    <div className="font-sans w-full max-w-xl">
      {/* Name */}
      <header className="mb-2">
        <h1 className="text-foreground text-4xl md:text-5xl font-normal leading-tight">
          Eliot Boda
        </h1>
      </header>

      {/* Social Links */}
      <nav className="flex flex-wrap gap-x-4 gap-y-1 mb-12">
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="text-foreground/40 hover:text-foreground/80 text-sm transition-colors"
          >
            {link.label}
            {i < socialLinks.length - 1 && <span className="ml-4 text-foreground/20">·</span>}
          </a>
        ))}
      </nav>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-foreground text-xl mb-3">about</h2>
        <p className="text-foreground/60 text-sm leading-relaxed">
          Hi, I&apos;m Eliot. I study computer science at UCSD. I&apos;m interested in AI, and I also enjoy staying active and spending time outside.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-foreground text-xl mb-4">experience</h2>
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={item.company} className="group">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-foreground text-sm">{item.company}</span>
                  <span className="text-foreground/40 text-sm"> · {item.role}</span>
                </div>
                <span className="text-foreground/30 text-xs shrink-0">{item.period}</span>
              </div>
              <p className="text-foreground/50 text-sm mt-0.5">{item.description}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  className="inline-block mt-1 text-foreground/30 hover:text-foreground/60 text-xs transition-colors"
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
        <h2 className="text-foreground text-xl mb-4">projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title}>
              <h3 className="text-foreground text-sm font-medium">{project.title}</h3>
              <p className="text-foreground/50 text-sm mt-0.5 leading-relaxed">
                {project.description}
              </p>
              {project.links && (
                <div className="flex gap-3 mt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-foreground/30 hover:text-foreground/60 text-xs transition-colors"
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
