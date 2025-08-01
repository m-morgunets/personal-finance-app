import { ReactNode } from "react";

export interface CardProps {
  title: string;
  linkTo: string;
  linkText: string;
  children?: ReactNode;
}
