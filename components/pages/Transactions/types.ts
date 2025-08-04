export interface DataTable {
  id: string;
  category: string;
  name: string;
  date: Date;
  amount: number;
}

export interface Categories {
  [key: string]: {
    name: string;
    iconSrc: any;
    color: string;
  };
}
