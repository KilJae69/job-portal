"use client"

import type React from "react"

import { useState } from "react"
import {  X } from "lucide-react"
import { painPoints } from "@/constants/painPointsData"
import { Container } from "../shared/Container"



export function PainPointsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)



  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section className="w-full py-12 lg:py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231A73E8' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <Container className=" relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-gray-900 mb-3">The Real-World Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Employers across Bosnia share these common challenges
          </p>
        </div>

        <div className="relative mt-16 px-4">
          {/* Overlapping cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            {painPoints.map((point, index) => (
              <div
                key={point.id}
                className={`
                  bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                  p-6 relative z-${10 + index} transform 
                  ${expandedCard === point.id ? "scale-105 shadow-xl z-50" : "hover:-translate-y-1"}
                `}
                style={{
                  transformOrigin: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(point.id)}
              >
                {expandedCard === point.id && (
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
                    <h3 className="font-medium text-gray-900">{point.industry}</h3>
                    <p className="text-sm text-gray-500">{point.companySize}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-paragraph">
                    {expandedCard === point.id ? point.fullQuote : point.quote}
                    {expandedCard !== point.id && <span className="text-accent text-sm ml-1">Read more</span>}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-accent">
                    {point.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
