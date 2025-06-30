import { PageContainer } from "containers";
import s from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTE } from "router/routes";
import { AppRoutePage } from "router/types";
import { ArrowRight } from "./assets";
import { PieChart, Pie, Cell } from "recharts";
import { Budgets, Operations } from "./subcomponents";

export const HomePage = () => {
  return (
    <PageContainer title="Обзор">
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.cardTitle}>Текущий баланс</div>
          <div className={s.cardValue}>₽4,836.00</div>
        </div>
        <div className={s.card}>
          <div className={s.cardTitle}>Доход</div>
          <div className={s.cardValue}>₽3,814.25</div>
        </div>
        <div className={s.card}>
          <div className={s.cardTitle}>Расходы</div>
          <div className={s.cardValue}>₽1,700.50</div>
        </div>
      </div>

      <div className={s.main}>
        <Operations />
        <Budgets />
      </div>
    </PageContainer>
  );
};
