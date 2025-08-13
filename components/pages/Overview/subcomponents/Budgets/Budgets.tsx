"use client";

import { Cell, Pie, PieChart } from "recharts";
import { Box } from "../Box";
import { useTopExpenses } from "@/shared/api/overview";
import { buildData } from "./utils";

export const Budgets = () => {
  const { data: topExpenses } = useTopExpenses();
  const data = buildData(topExpenses);

  return (
    <Box title="Бюджеты" linkText="Подробнее" linkTo={"/budgets"}>
      <div className="flex items-center gap-5 mt-11">
        <div className="relative inline-block">
          <PieChart width={240} height={240}>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              dataKey="amount"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-bold text-3xl">₽338</div>
            <div className="text-xs text-[#606060]">из ₽975 лимита</div>
          </div> */}
        </div>
        <div>
          {data.map((item) => (
            <div className="flex items-center gap-3.5 mt-3.5" key={item.name}>
              <div
                className="h-12 w-1 rounded-2xl"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <div className="text-xs text-[#606060]">{item.name}</div>
                <div className="font-semibold text-sm mt-2.5">
                  ₽{item.amount.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};
