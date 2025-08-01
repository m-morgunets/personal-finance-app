import {
  Card,
  OverviewBudgets,
  OverviewTransactions,
} from "@/components/shared";

export default function Overview() {
  return (
    <div>
      <header className="pb-10 text-3xl font-bold">Обзор</header>
      <div className="flex justify-between gap-6 w-full">
        <Card
          title="Текущий баланс"
          value={4836}
          className="bg-[#201f24] text-white"
        />
        <Card title="Доход" value={3814.25} />
        <Card title="Расходы" value={1700.5} />
      </div>

      <div className="pt-[30px] grid grid-cols-[1fr_450px] gap-6 items-start">
        <OverviewTransactions />
        <OverviewBudgets />
      </div>
    </div>
  );
}
