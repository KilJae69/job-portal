"use client";
import React from "react";
import { Button } from "./ui/moving-border";


export function MovingBorderBadge({text}:{text:string}) {
  return (
    
      <Button
      as={"div"}
        borderRadius="1.75rem"
        className="bg-white  text-accent py-2 px-4 text-xl font-semibold  border-neutral-200 "
      >
        {text}
      </Button>
   
  );
}
