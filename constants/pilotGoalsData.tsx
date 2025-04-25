// /constants/pilotGoalsData.tsx
import { Globe, Users, Settings2 } from "lucide-react"

export type PilotGoalConfig = {
  id: number
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  benefitKeys: string[]      // ← now an array of individual keys
  statusKey: string
}

export const pilotGoals: PilotGoalConfig[] = [
  {
    id: 1,
    icon: <Globe className="w-8 h-8 text-[#1A73E8]" />,
    titleKey:       "PilotGoalsSection.cards.agencyNetworkBuilding.title",
    descriptionKey: "PilotGoalsSection.cards.agencyNetworkBuilding.description",
    benefitKeys: [
      "PilotGoalsSection.cards.agencyNetworkBuilding.benefits.0",
      "PilotGoalsSection.cards.agencyNetworkBuilding.benefits.1",
      "PilotGoalsSection.cards.agencyNetworkBuilding.benefits.2",
    ],
    statusKey:      "PilotGoalsSection.cards.agencyNetworkBuilding.status",
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-[#1A73E8]" />,
    titleKey:       "PilotGoalsSection.cards.employerInterestValidation.title",
    descriptionKey: "PilotGoalsSection.cards.employerInterestValidation.description",
    benefitKeys: [
      "PilotGoalsSection.cards.employerInterestValidation.benefits.0",
      "PilotGoalsSection.cards.employerInterestValidation.benefits.1",
      "PilotGoalsSection.cards.employerInterestValidation.benefits.2",
    ],
    statusKey:      "PilotGoalsSection.cards.employerInterestValidation.status",
  },
  {
    id: 3,
    icon: <Settings2 className="w-8 h-8 text-[#1A73E8]" />,
    titleKey:       "PilotGoalsSection.cards.processPrototyping.title",
    descriptionKey: "PilotGoalsSection.cards.processPrototyping.description",
    benefitKeys: [
      "PilotGoalsSection.cards.processPrototyping.benefits.0",
      "PilotGoalsSection.cards.processPrototyping.benefits.1",
      "PilotGoalsSection.cards.processPrototyping.benefits.2",
    ],
    statusKey:      "PilotGoalsSection.cards.processPrototyping.status",
  },
]
