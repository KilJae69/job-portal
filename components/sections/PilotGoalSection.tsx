import type React from "react";
import {
  CheckCircle2,

  ChevronRight,
} from "lucide-react";
import { Container } from "../shared/Container";
import Image from "next/image";
import { MovingBorderBadge } from "../MovingBorderBadge";
import PrimaryButton from "../shared/PrimaryButton";
import { pilotGoals } from "@/constants/pilotGoalsData";
import { Locale } from "@/lib/locales";
import { getTranslations } from "next-intl/server";



export default async function PilotGoalsSection({ locale }: { locale: Locale }) {
  
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return (
    <section className="w-full py-12 lg:py-24 relative">
      <Image
        src="/bg-hero.jpg"
        alt="hero bg"
        fill
        className="object-cover size-full -z-10"
      />
      <Container className="">
        <div className="text-center flex flex-col items-center mb-12">
          <MovingBorderBadge text={t("PilotGoalsSection.badge")} className="" />
          <h2 className="text-h2 my-3">{t("PilotGoalsSection.heading")}</h2>
          <p className="text-paragraph max-w-3xl mx-auto">
          {t("PilotGoalsSection.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pilotGoals.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-600 mb-6"> {t(card.descriptionKey)}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {card.benefitKeys.map((b, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1A73E8] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{t(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 flex justify-center items-center border-t border-gray-100">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    card.statusKey === "PilotGoalsSection.cards.agencyNetworkBuilding.status"
                      ? "bg-green-100 text-green-800"
                      : card.statusKey === "PilotGoalsSection.cards.employerInterestValidation.status"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {t(card.statusKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-8">
          <PrimaryButton href="/about" className="flex gap-2">
          {t("PilotGoalsSection.cta")}
            <ChevronRight />
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
