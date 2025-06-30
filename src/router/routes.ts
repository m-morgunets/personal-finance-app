import { AppRoutePage } from 'router/types';

export const ROUTE: Record<AppRoutePage, string> = {
  [AppRoutePage.HomePage]: '/',
  [AppRoutePage.Operations]: '/operations',
  [AppRoutePage.Budgets]: '/budgets',
  [AppRoutePage.Savings]: '/savings',
};
