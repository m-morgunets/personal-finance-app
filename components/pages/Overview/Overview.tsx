import React from "react";
import { Budgets, Cards, Transactions } from "./subcomponents";
import { Header } from "@/components/shared/Header";

export const Overview = () => {
  return (
    <>
      <Header title="Обзор" />
      <Cards />

      <div className="pt-[30px] grid grid-cols-[1fr_450px] gap-6 items-start">
        <Transactions />
        <Budgets />
      </div>
    </>
  );
};
