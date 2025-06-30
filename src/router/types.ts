import { ReactNode } from 'react';

export interface RouteConfig {
  id: AppRoutePage;
  element?: ReactNode;
}

export enum AppRoutePage {
  HomePage = 'HomePage',
  Operations = 'Operations',
  Budgets = 'Budgets',
  Savings = 'Savings',
}
