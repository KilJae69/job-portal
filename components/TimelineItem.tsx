"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export default function TimelineItem({ number, title, description, isLast = false }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative pl-10 pb-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLast && <div className="absolute left-5 top-0 -ml-px h-full w-0.5 bg-slate-200"></div>}

      <div
        className={cn(
          "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-slate-200 text-slate-700 font-bold transition-all duration-300",
          isHovered && "bg-accent text-white scale-110",
        )}
      >
        {number}
      </div>

      <div className={cn("transition-all duration-300 transform ml-2", isHovered && "translate-x-2")}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div
          className={cn(
            "bg-white p-4 rounded-lg shadow-sm max-w-2xl transition-all duration-300",
            isHovered && "shadow-md",
          )}
        >
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
