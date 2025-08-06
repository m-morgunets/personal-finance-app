import { ColumnFiltersState, Table } from "@tanstack/react-table";
import { TransactionDto } from "@/api/transactions.schemas";

export interface FiltersProps {
  table: Table<TransactionDto>;
  setColumnFilters: (val: ColumnFiltersState) => void;
}
