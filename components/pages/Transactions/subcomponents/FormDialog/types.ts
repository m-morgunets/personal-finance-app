import { TransactionDto, TransactionRequest } from "@/shared/api/transactions.schemas";

export interface FormDialogProps {
  setOpen: (isOpen: boolean) => void;
  onSubmit: (data: TransactionRequest) => void;
  data?: TransactionDto;
}
