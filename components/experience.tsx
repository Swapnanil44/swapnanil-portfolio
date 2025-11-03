interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
  skills?: string[]
}

interface ExperienceProps {
  item?: ExperienceItem
}

export default function Experience({
  item = {
    title: "Blockchain Development Intern",
    company: "Code Partner IT Solutions Pvt. Ltd",
    period: "Apr 2025 - Sep 2025",
    location: "Remote",
    highlights: [
      "Worked on a Web3 Payment Gateway Application (nodepe.com) supporting multi-chain payments (BTC, ETH, SOL, POL)",
      "Implemented secure authentication module using JWT with access and refresh token mechanism",
      "Designed and implemented automated report generation module with scheduled cron jobs generating transaction reports in PDF and CSV formats, reducing manual workload by 52%",
      "Built automated mail notification system using SMTP protocol and Nodemailer",
      "Implemented real-time notification system using Socket.IO for live web notifications",
    ],
    skills: ["TypeScript", "NestJS", "Node.js", "RabbitMQ", "JWT", "Socket.IO", "Nodemailer", "Web3", "Blockchain"],
  },
}: ExperienceProps) {
  return (
    <section className="pb-24">
      <div className="max-w-4xl">
        {/* Section Title */}
        <div className="mb-12">
            <h2 className="title">Experience</h2>
          {/* <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
          <div className="w-12 h-px bg-muted-foreground/30"></div> */}
        </div>

        {/* Experience Card */}
        <div className="border border-muted-foreground/20 rounded-lg p-8 hover:border-muted-foreground/40 transition-colors duration-300">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-2">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {item.company} • {item.location}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-muted-foreground/10 mb-6"></div>

          {/* Highlights */}
          <div className="mb-6">
            <ul className="space-y-3">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-muted-foreground/50 shrink-0 mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <>
              <div className="w-full h-px bg-muted-foreground/10 mb-6"></div>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground border border-muted-foreground/20 rounded-md hover:border-muted-foreground/40 hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
