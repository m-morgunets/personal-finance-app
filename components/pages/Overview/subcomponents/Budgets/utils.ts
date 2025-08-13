import { CATEGORIES } from "@/components/pages/Transactions/constants";
import { TopExpensesDto } from "@/shared/api/overview.schemas";

export const buildData = (topExpenses: TopExpensesDto[]) => {
  return topExpenses.map((item) => {
    const category = CATEGORIES.find((cat) => cat.key === item.category);
    return {
      name: category?.name ?? "",
      amount: item.amount,
      color: category?.color ?? "",
    };
  });
};
