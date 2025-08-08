"use client";

import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown, LogOut, User } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Profile = () => {
  const { data: session } = useSession();

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-md cursor-pointer">
          <User size={30} />
          <div className="flex items-center gap-2">
            <div>
              <div>{session?.user.name}</div>
              <div className="text-xs">{session?.user.email}</div>
            </div>
            <ChevronsUpDown size={18} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        <DropdownMenuItem
          className="flex items-center cursor-pointer"
          onClick={onClickSignOut}
        >
          <LogOut size={18} />
          <span>Выйти</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
