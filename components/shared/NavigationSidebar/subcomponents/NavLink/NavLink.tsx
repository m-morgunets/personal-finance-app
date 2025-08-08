"use client";

import React from "react";
import { MenuItem } from "@/shared/config/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavLink = ({ href, title, Icon }: MenuItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      key={href}
      className={cn(
        "cursor-pointer text-[16px] font-bold flex items-center pl-[35px] border-l-4 gap-[20px] w-[245px] h-[55px] rounded-r-[15px]",
        isActive
          ? "bg-[#f8f5f0] text-[#201f24] border-[#237d79]"
          : "border-transparent"
      )}
    >
      <Icon
        className={cn(
          "w-[18px] h-[18px]",
          isActive ? "fill-[#237d79]" : "fill-[#b5b5b5]"
        )}
      />
      {title}
    </Link>
  );
};
