import { DataTable } from "../../types";

export interface FormDialogProps {
  setOpen: (isOpen: boolean) => void;
  onSubmit: (data: DataTable) => void;
  data?: DataTable;
}
