import { ColumnFiltersState, Table } from "@tanstack/react-table";
import { DataTable } from "../../types";

export interface FiltersProps {
  table: Table<DataTable>;
  setColumnFilters: (val: ColumnFiltersState) => void;
}
