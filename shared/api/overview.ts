import { OverviewBalanceDto, TopExpensesDto } from "./overview.schemas";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchOverviewBalance(): Promise<OverviewBalanceDto> {
  const { data } = await axios.get<OverviewBalanceDto>("/api/overview");
  return data;
}

export function useOverviewBalance() {
  const response = useQuery({
    queryKey: ["overviewBalance"],
    queryFn: () => fetchOverviewBalance(),
  });

  return {
    isLoading: response.isLoading,
    isError: response.isError,
    data: response.data,
  };
}

async function fetchTopExpenses(): Promise<TopExpensesDto[]> {
  const { data } = await axios.get<TopExpensesDto[]>("/api/top-expenses");
  return data;
}

export function useTopExpenses() {
  const response = useQuery({
    queryKey: ["topExpenses"],
    queryFn: () => fetchTopExpenses(),
  });

  return {
    isLoading: response.isLoading,
    isError: response.isError,
    data: response.data ?? [],
  };
}
