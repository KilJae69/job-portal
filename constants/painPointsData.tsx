// /constants/painPointsData.tsx
import { Building2, Factory, ShoppingBag, Code, Utensils, Stethoscope } from "lucide-react"

export type PainPointConfig = {
  id: number
  icon: React.ReactNode
  industryKey: string
  companySizeKey: string
  categoryKey: string
  quoteKey: string
  fullQuoteKey: string
}

export const painPoints: PainPointConfig[] = [
  {
    id: 1,
    icon: <Code className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.technology.industry",
    companySizeKey: "PainPointsSection.cards.technology.companySize",
    categoryKey:    "PainPointsSection.cards.technology.category",
    quoteKey:       "PainPointsSection.cards.technology.quote",
    fullQuoteKey:   "PainPointsSection.cards.technology.fullQuote",
  },
  {
    id: 2,
    icon: <Factory className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.manufacturing.industry",
    companySizeKey: "PainPointsSection.cards.manufacturing.companySize",
    categoryKey:    "PainPointsSection.cards.manufacturing.category",
    quoteKey:       "PainPointsSection.cards.manufacturing.quote",
    fullQuoteKey:   "PainPointsSection.cards.manufacturing.fullQuote",
  },
  {
    id: 3,
    icon: <Utensils className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.hospitality.industry",
    companySizeKey: "PainPointsSection.cards.hospitality.companySize",
    categoryKey:    "PainPointsSection.cards.hospitality.category",
    quoteKey:       "PainPointsSection.cards.hospitality.quote",
    fullQuoteKey:   "PainPointsSection.cards.hospitality.fullQuote",
  },
  {
    id: 4,
    icon: <Stethoscope className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.healthcare.industry",
    companySizeKey: "PainPointsSection.cards.healthcare.companySize",
    categoryKey:    "PainPointsSection.cards.healthcare.category",
    quoteKey:       "PainPointsSection.cards.healthcare.quote",
    fullQuoteKey:   "PainPointsSection.cards.healthcare.fullQuote",
  },
  {
    id: 5,
    icon: <ShoppingBag className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.retail.industry",
    companySizeKey: "PainPointsSection.cards.retail.companySize",
    categoryKey:    "PainPointsSection.cards.retail.category",
    quoteKey:       "PainPointsSection.cards.retail.quote",
    fullQuoteKey:   "PainPointsSection.cards.retail.fullQuote",
  },
  {
    id: 6,
    icon: <Building2 className="w-5 h-5" />,
    industryKey:    "PainPointsSection.cards.construction.industry",
    companySizeKey: "PainPointsSection.cards.construction.companySize",
    categoryKey:    "PainPointsSection.cards.construction.category",
    quoteKey:       "PainPointsSection.cards.construction.quote",
    fullQuoteKey:   "PainPointsSection.cards.construction.fullQuote",
  },
]
