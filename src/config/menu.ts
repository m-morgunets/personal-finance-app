import { AppRoutePage } from "router/types";
import { MainIcon, ChartIcon, ArrowsIcon, SavingsIcon } from "../components/NavigationSidebar/assets";
import { FunctionComponent, SVGProps } from "react";
import { ROUTE } from "router/routes";

export declare type MenuItem = {
  id: string;
  title: string;
  href: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export const MENU_CONFIG: MenuItem[] = [
  {
    id: AppRoutePage.HomePage,
    title: "Обзор",
    href: ROUTE[AppRoutePage.HomePage],
    Icon: MainIcon,
  },
  {
    id: AppRoutePage.Operations,
    title: "Операции",
    href: ROUTE[AppRoutePage.Operations],
    Icon: ArrowsIcon,
  },
  {
    id: AppRoutePage.Budgets,
    title: "Бюджеты",
    href: ROUTE[AppRoutePage.Budgets],
    Icon: ChartIcon,
  },
  {
    id: AppRoutePage.Savings,
    title: "Накопления",
    href: ROUTE[AppRoutePage.Savings],
    Icon: SavingsIcon,
  },
];
