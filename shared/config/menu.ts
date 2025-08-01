import { HouseIcon, ArrowsIcon, ChartIcon, SavingsIcon } from "@/shared/assets";
import { FunctionComponent, SVGProps } from "react";

export type MenuItem = {
  title: string;
  href: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export const MENU_CONFIG: MenuItem[] = [
  {
    title: "Обзор",
    href: "/overview",
    Icon: HouseIcon,
  },
  {
    title: "Операции",
    href: "/transactions",
    Icon: ArrowsIcon,
  },
  {
    title: "Бюджеты",
    href: "/budgets",
    Icon: ChartIcon,
  },
  {
    title: "Накопления",
    href: "/savings",
    Icon: SavingsIcon,
  },
];
