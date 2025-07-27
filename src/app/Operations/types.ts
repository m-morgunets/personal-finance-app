import { CATEGORIES } from './constants';

export type CategoryKey = keyof typeof CATEGORIES;

export interface DataTable {
  category: CategoryKey;
  name: string;
  date: Date;
  amount: number;
}
