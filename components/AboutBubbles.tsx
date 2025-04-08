"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";

import { MdOutlineQuestionMark } from "react-icons/md";

// Define bubbles with positions and delays
const employerPainPoints = [
    {
      id: 1,
      icon: <MdOutlineQuestionMark className="text-blue-500 w-6 h-6" />,
      text: "Where will I find workers?",
      position: "top-0 right-0",
      delay: 0.2,
    },
    {
      id: 2,
      icon: <MdOutlineQuestionMark className="text-orange-500 w-6 h-6" />,
      text: "Do I need to close?",
      position: "bottom-52 right-0",
      delay: 0.4,
    },
    {
      id: 3,
      icon: <MdOutlineQuestionMark className="text-red-500 w-6 h-6" />,
      text: "Permits take too long!",
      position: "bottom-32 right-10",
      delay: 0.6,
    },
    {
      id: 4,
      icon: <MdOutlineQuestionMark className="text-green-500 w-6 h-6" />,
      text: "Why won't locals apply?",
      position: "top-20 left-0",
      delay: 0.8,
    },
  ];

export default function AboutBubbles() {


  return (
    <div className="  relative w-full h-[600px]">
      {employerPainPoints.map((bubble) => (
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
