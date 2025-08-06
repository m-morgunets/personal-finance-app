import { TransactionDto, TransactionRequest } from "@/api/transactions.schemas";

export interface FormDialogProps {
  setOpen: (isOpen: boolean) => void;
  onSubmit: (data: TransactionRequest) => void;
  data?: TransactionDto;
}
