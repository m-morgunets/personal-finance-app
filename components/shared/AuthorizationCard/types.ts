import { ReactNode } from "react";

export interface AuthorizationCardProps {
  type: 'login' | 'signup';
  children?: ReactNode;
}
