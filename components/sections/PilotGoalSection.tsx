import type React from "react"
import { CheckCircle2, Globe, Users, Settings2, ChevronRight } from "lucide-react"

type PilotCard = {
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
  status: "Active" | "Open for Beta" | "In Planning"
}

export function PilotGoalsSection() {
  const pilotCards: PilotCard[] = [
    {
      title: "Agency Network Building",
      description: "Forge strong partnerships in PH, NP & IN to secure vetted candidates.",
      icon: <Globe className="w-8 h-8 text-[#1A73E8]" />,
      benefits: [
        "Identify top 5 recruitment partners per country",
        "Set up MoUs & SLA frameworks",
        "Establish communication & data-sharing channels",
      ],
      status: "Active",
    },
    {
      title: "Employer Interest Validation",
      description: "Engage BiH businesses to gauge demand and collect real-time feedback.",
      icon: <Users className="w-8 h-8 text-[#1A73E8]" />,
      benefits: [
        "Run 20 discovery calls with target industries",
        "Capture willingness-to-pay & feature requests",
        "Prioritize sectors by urgency & volume",
      ],
      status: "Open for Beta",
    },
    {
      title: "Process Prototyping & Iteration",
      description: "Build & refine our permit-to-onboard workflow based on pilot learnings.",
      icon: <Settings2 className="w-8 h-8 text-[#1A73E8]" />,
      benefits: [
        "Map the 5-step hiring flow end-to-end",
        "Automate document templates & reminders",
        "Iterate with employer & agency feedback loops",
      ],
      status: "In Planning",
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our First Pilot Goals
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            What we’re focusing on right now as we build and validate our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilotCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {card.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1A73E8] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    card.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : card.status === "Open for Beta"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {card.status}
                </span>
                <a
                  href="#"
                  className="text-sm font-medium text-[#1A73E8] hover:text-blue-700 flex items-center"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
