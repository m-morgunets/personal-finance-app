import { TransactionsTable } from "@/components/shared/TransactionsTable";

export default function Transactions() {
  return (
    <>
      <header className="pb-10 text-3xl font-bold">Операции</header>
      <TransactionsTable />
    </>
  );
}
