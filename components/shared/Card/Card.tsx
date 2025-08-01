import React from "react";
import { CardProps } from "./types";
import { cn } from "@/lib/utils";

export const Card = ({ title, value, className }: CardProps) => {
  return (
    <div className={cn("w-full bg-white p-6 rounded-2xl", className)}>
      <div className="text-[14px]">{title}</div>
      <div className="text-[32px] font-bold">₽{value.toFixed(2)}</div>
    </div>
  );
};
