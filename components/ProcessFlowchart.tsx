"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Search, FileCheck, Briefcase, GraduationCap } from "lucide-react"

export default function ProcessFlowchart() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Assessment",
      description: "We analyze your workforce needs and requirements",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Selection",
      description: "We match qualified candidates to your specific needs",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Documentation",
      description: "We handle all legal permits and compliance requirements",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Integration",
      description: "We ensure smooth onboarding and cultural adaptation",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-1 flex-col items-center">
            <div
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300",
                activeStep === index ? "bg-emerald-600 text-white scale-110" : "bg-slate-100 text-slate-700",
              )}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {step.icon}
            </div>
            <h4 className="font-medium text-center mb-2">{step.title}</h4>
            <p className="text-sm text-slate-600 text-center">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute translate-x-[80px] mt-8">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center mt-4">
        {[0, 1, 2].map((index) => (
          <ArrowRight key={index} className="h-5 w-5 text-slate-400 my-2 rotate-90" />
        ))}
      </div>
    </div>
  )
}
