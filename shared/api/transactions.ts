import { TransactionRequest, TransactionDto } from "./transactions.schemas";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchTransactionsTable(): Promise<TransactionDto[]> {
  const { data } = await axios.get<TransactionDto[]>("/api/transactions");
  return data;
}

export function useTransactionsTable() {
  const response = useQuery({
    queryKey: ["transactionsTable"],
    queryFn: () => fetchTransactionsTable(),
  });

  return {
    isLoading: response.isLoading,
    isError: response.isError,
    data: response.data ?? [],
  };
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TransactionRequest) =>
      axios.post("/api/transactions", body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactionsTable"],
      });
    },
  });
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      axios.delete("/api/transactions", { data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactionsTable"],
      });
    },
  });
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TransactionRequest) =>
      axios.patch("/api/transactions", body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactionsTable"],
      });
    },
  });
}
