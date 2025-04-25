"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import { painPoints } from "@/constants/painPointsData";
import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../MovingBorderBadge";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function PainPointsSection() {
  const t = useTranslations("HomePage");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="w-full py-12 lg:py-24  relative overflow-hidden">
      {/* Background pattern */}
      <Image
        src="/bg-hero.jpg"
        alt="hero bg"
        fill
        className="object-cover size-full -z-10"
      />

      <Container className=" relative z-10">
        <div className="text-center flex items-center flex-col mb-12">
          <MovingBorderBadge text={t("PainPointsSection.badge")} className="" />
          <h2 className="text-h2  my-3">{t("PainPointsSection.heading")}</h2>
          <p className="text-paragraph max-w-3xl mx-auto">
          {t("PainPointsSection.subheading")}
          </p>
        </div>

        <div className="relative mt-16">
          {/* Overlapping cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
  {painPoints.map((point, index) => {
    const isOpen = expandedCard === point.id
    return (
      <div
        key={point.id}
        className={`
          bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
          p-6 relative z-${10 + index} transform 
          ${isOpen ? "scale-105 shadow-xl z-50" : "hover:-translate-y-1"}
        `}
        style={{ transformOrigin: "center", cursor: "pointer" }}
        onClick={() => handleCardClick(point.id)}
      >
        {isOpen && (
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={(e) => {
              e.stopPropagation()
              setExpandedCard(null)
            }}
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-start mb-4">
          <div className="w-10 h-10 bg-blue-100 text-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            {point.icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">
              {t(point.industryKey)}
            </h3>
            <p className="text-sm text-gray-500">
              {t(point.companySizeKey)}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-paragraph">
            {isOpen ? t(point.fullQuoteKey) : t(point.quoteKey)}
            {!isOpen && (
              <span className="text-accent text-sm ml-1">
                {t("PainPointsSection.readMore")}
              </span>
            )}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-accent">
            {t(point.categoryKey)}
          </span>
        </div>
      </div>
    )
  })}
</div>

        </div>
      </Container>
    </section>
  );
}
