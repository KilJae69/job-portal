"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";
import { LuBriefcase, LuUpload, LuUsers, LuMail } from "react-icons/lu";

// Define bubbles with positions and delays
const bubbles = [
  {
    id: 1,
    icon: <LuMail className="text-yellow-500 w-6 h-6" />,
    text: "Work Inquiry From Ali Tufan",
    position: "top-42 -right-20",
    delay: 0.2,
  },
  {
    id: 2,
    icon: <LuUsers className="text-purple-500 w-6 h-6" />,
    text: "10k+ Candidates",
    position: "top-10 right-10",
    delay: 0.4,
  },
  {
    id: 3,
    icon: <LuBriefcase className="text-red-500 w-6 h-6" />,
    text: "Creative Agency",
    position: "bottom-32 -right-20",
    delay: 0.6,
  },
  {
    id: 4,
    icon: <LuUpload className="text-green-500 w-6 h-6" />,
    text: "Upload Your CV",
    position: "top-10 -left-24",
    delay: 0.8,
  },
];

export default function HeroBubbles() {


  return (
    <div className="  relative w-full h-[600px]">
      {bubbles.map((bubble) => (
        <m.div
          key={bubble.id}
          className={cn(
            "absolute flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg cursor-pointer",
            bubble.position
          )}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0], // Subtle bounce effect
          }}
          transition={{
            duration: 1.5,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
         
         
        >
          {bubble.icon}
          <span className="text-sm font-medium">{bubble.text}</span>
        </m.div>
      ))}
    </div>
  );
}
