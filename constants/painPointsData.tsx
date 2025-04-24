import { Building2, Factory, ShoppingBag, Code, Utensils, Stethoscope } from "lucide-react"

type PainPoint = {
  id: number
  quote: string
  fullQuote: string
  industry: string
  icon: React.ReactNode
  companySize: string
  category: string
}

export const painPoints: PainPoint[] = [
    {
      id: 1,
      quote: "We've had to turn down three major contracts this year due to staffing shortages in our IT department.",
      fullQuote:
        "We've had to turn down three major contracts this year due to staffing shortages in our IT department. Despite offering competitive salaries, we simply can't find enough qualified developers with the specialized skills we need. This has directly impacted our growth trajectory and our ability to serve our existing clients effectively.",
      industry: "Technology",
      icon: <Code className="w-5 h-5" />,
      companySize: "Medium (50-250)",
      category: "Talent Shortage",
    },
    {
      id: 2,
      quote:
        "The lengthy work permit process has cost us several qualified candidates who couldn't wait 6+ months to start.",
      fullQuote:
        "The lengthy work permit process has cost us several qualified candidates who couldn't wait 6+ months to start. We identified perfect matches for our manufacturing roles from neighboring countries, but the bureaucratic hurdles were insurmountable. By the time we navigated halfway through the process, the candidates had accepted positions elsewhere.",
      industry: "Manufacturing",
      icon: <Factory className="w-5 h-5" />,
      companySize: "Large (250+)",
      category: "Regulatory Barriers",
    },
    {
      id: 3,
      quote:
        "Our restaurant has operated understaffed for over a year. We've reduced hours and simplified our menu as a result.",
      fullQuote:
        "Our restaurant has operated understaffed for over a year. We've reduced hours and simplified our menu as a result. The hospitality industry in Bosnia is struggling to attract and retain talent, especially for kitchen positions. We've tried training programs and higher wages, but the local talent pool is simply too small for the growing tourism sector.",
      industry: "Hospitality",
      icon: <Utensils className="w-5 h-5" />,
      companySize: "Small (10-50)",
      category: "Service Impact",
    },
    {
      id: 4,
      quote:
        "We've spent over €30,000 on recruitment agencies this year with minimal success finding specialized medical staff.",
      fullQuote:
        "We've spent over €30,000 on recruitment agencies this year with minimal success finding specialized medical staff. The healthcare brain drain is real - our best professionals leave for Western Europe, and we struggle to replace them. We need a more sustainable approach to staffing our clinics that doesn't rely on expensive and ineffective recruitment methods.",
      industry: "Healthcare",
      icon: <Stethoscope className="w-5 h-5" />,
      companySize: "Medium (50-250)",
      category: "Recruitment Costs",
    },
    {
      id: 5,
      quote: "Our expansion plans are on hold indefinitely until we can solve our critical staffing challenges.",
      fullQuote:
        "Our expansion plans are on hold indefinitely until we can solve our critical staffing challenges. We've secured funding and identified locations for three new retail outlets, but without confidence in our ability to staff these stores properly, we cannot move forward. This staffing bottleneck is the single biggest obstacle to our company's growth in Bosnia.",
      industry: "Retail",
      icon: <ShoppingBag className="w-5 h-5" />,
      companySize: "Medium (50-250)",
      category: "Growth Limitations",
    },
    {
      id: 6,
      quote: "The skills gap between what our projects require and what local graduates offer is widening each year.",
      fullQuote:
        "The skills gap between what our projects require and what local graduates offer is widening each year. We're spending the first 6-12 months training new hires on basic skills they should have learned during their education. This creates project delays and increases our operational costs significantly. We need access to talent that's ready to contribute from day one.",
      industry: "Construction",
      icon: <Building2 className="w-5 h-5" />,
      companySize: "Large (250+)",
      category: "Skills Gap",
    },
  ]