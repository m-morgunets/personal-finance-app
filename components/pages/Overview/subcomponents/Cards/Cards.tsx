"use client";

import React from "react";
import { Card } from "../Card";
import { useOverviewBalance } from "@/shared/api/overview";

export const Cards = () => {
  const { data } = useOverviewBalance();
  return (
    <div className="flex justify-between gap-6 w-full">
      <Card
        title="Текущий баланс"
        value={data?.balance}
        className="bg-[#201f24] text-white"
      />
      <Card title="Доход" value={data?.income} />
      <Card title="Расходы" value={data?.expenses} />
    </div>
  );
};
