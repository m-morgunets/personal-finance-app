import React from "react";
import { TransactionsTable } from "./subcomponents";
import { Header } from "@/components/shared/Header";

export const Transactions = () => {
  return (
    <>
      <Header title="Операции" />
      <TransactionsTable />
    </>
  );
};
