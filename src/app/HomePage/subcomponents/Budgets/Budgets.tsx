import { ROUTE } from "router/routes";
import { Card } from "../Card";
import { AppRoutePage } from "router/types";
import s from "./styles.module.scss";
import { Cell, Pie, PieChart } from "recharts";

export const Budgets = () => {
  const list = [
    { name: "Развлечения", amount: 50, color: "#277C77" },
    { name: "Платежки", amount: 500, color: "#81C9D7" },
    { name: "Ужины", amount: 75, color: "#F0CEAB" },
    { name: "Личная гигиена", amount: 100, color: "#615E70" },
  ];

  return (
    <Card
      title="Бюджеты"
      linkText="Подробнее"
      linkTo={ROUTE[AppRoutePage.Budgets]}
    >
      <div className={s.root}>
        <div className={s.chart}>
          <PieChart width={240} height={240}>
            <Pie
              data={list}
              innerRadius={80}
              outerRadius={120}
              dataKey="amount"
            >
              {list.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className={s.amount}>
            <div className={s.spent}>₽338</div>
            <div className={s.limit}>из ₽975 лимита</div>
          </div>
        </div>
        <div className={s.list}>
          {list.map((item) => (
            <div className={s.item}>
              <div
                className={s.itemLine}
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <div className={s.itemTitle}>{item.name}</div>
                <div className={s.itemAmount}>₽{item.amount.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
