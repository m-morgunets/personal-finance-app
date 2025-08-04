import { DataTable } from "../../types";

export interface TableActionsProps {
  rowData: DataTable;
  deleteTransaction: (id: string) => void;
  editTransaction: (data: DataTable) => void;
}
