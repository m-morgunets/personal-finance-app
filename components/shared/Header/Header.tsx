import React from "react";
import { HeaderProps } from "./types";
import { cn } from "@/lib/utils";

export const Header = ({ title, className }: HeaderProps) => {
  return (
    <header className={cn("pb-10 text-3xl font-bold", className)}>
      {title}
    </header>
  );
};
