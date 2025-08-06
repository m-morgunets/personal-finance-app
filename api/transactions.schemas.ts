export interface TransactionDto {
  id: string;
  category: string;
  title: string;
  date: string;
  amount: number;
}

export interface TransactionRequest {
  id?: string;
  category: string;
  title: string;
  date?: Date;
  amount: number;
}
