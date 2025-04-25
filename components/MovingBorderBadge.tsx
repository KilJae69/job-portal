"use client";
import React, { ReactElement } from "react";
import { Button } from "./ui/moving-border";
import { cn } from "@/lib/utils";

export function MovingBorderBadge({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: ReactElement;
  className?: string;
}) {
  return (
    <Button
      as={"div"}
      borderRadius="1.75rem"
      className={cn("bg-blue-100 flex items-center justify-center text-accent py-2 px-4 text-xl font-semibold  border-neutral-200 ",className)}
    >
      {icon} {text}
    </Button>
  );
}
