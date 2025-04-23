"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";

import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaViber, FaWhatsapp } from "react-icons/fa6";

// Define bubbles with positions and delays
const contacts = [
  {
    id: 1,
    icon: <FaViber className="text-purple-500 w-6 h-6" />,
    text: "Viber",
    position: "top-40 left-0",
    delay: 0.2,
    href:"viber://chat?number=+38763699111"
  },
  {
    id: 2,
    icon: <FaWhatsapp className="text-green-500 w-6 h-6" />,
    text: "WhatsApp",
    position: "top-5 right-0",
    delay: 0.4,
    href:"https://wa.me/+38763699111"
  },
  {
    id: 3,
    icon: <FaPhoneVolume className="text-red-500 w-6 h-6" />,
    text: "Phone",
    position: "top-30 right-0",
    delay: 0.6,
     href:"tel:+38763699111"
  },
  {
    id: 4,
    icon: <MdEmail className="text-orange-500 w-6 h-6" />,
    text: "Email",
    position: "top-4 left-0",
    delay: 0.8,
    href:"mailto:adi.toromanovic@outlook.com"
  },
];

export default function CtaBubbles() {
  return (
    <div className="  absolute inset-0 size-full ">
      {contacts.map((bubble) => (
        <m.a
        href={bubble.href}
        target="_blank"
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
          <span className="text-sm lg:text-lg font-medium">{bubble.text}</span>
        </m.a>
      ))}
    </div>
  );
}
