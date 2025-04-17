"use client";

import { Button } from "@/components/ui/button"; // Ensure ShadCN button is imported
import Link from "next/link";
import { cn } from "@/lib/utils"; // ShadCN utility for conditional classes

interface PrimaryButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline"; // Two variants: solid and outline
  className?: string;
}

export default function PrimaryButton({ href, children, variant = "solid", className }: PrimaryButtonProps) {
  const baseStyles = "px-8 py-6 text-md inline-block font-medium rounded-md transition cursor-pointer";

  const solidStyles = "bg-blue-600 text-white hover:opacity-90";
  const outlineStyles = "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50";

  const buttonClass = cn(
    baseStyles,
    variant === "solid" ? solidStyles : outlineStyles,
    className
  );

  if (href) {
    return (
      
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return <Button className={buttonClass}>{children}</Button>;
}
