import s from "./styles.module.scss";
import { ROUTE } from "router/routes";
import { AppRoutePage } from "router/types";
import { Card } from "../Card";
import { CATEGORIES, DATA } from "app/Operations/constants";
import { formatDate } from "shared/utils";

export const Operations = () => {

  return (
    <Card
      title="Операции"
      linkText="Посмотреть всё"
      linkTo={ROUTE[AppRoutePage.Operations]}
    >
      <div className={s.list}>
        {DATA.slice(0, 5).map((item, index) => {
          const colorAmount = item.amount > 0 ? "#4b7a74" : "#201f24";
          const { Icon, color } = CATEGORIES[item.category];
          return (
            <div className={s.item} key={index}>
              <div className={s.itemLeft}>
                <div className={s.itemImage} style={{ backgroundColor: color }}>
                  <Icon width={20} height={20}/>
                </div>
                <div className={s.itemName}>{item.name}</div>
              </div>
              <div className={s.itemRight}>
                <div className={s.itemCash} style={{ color: colorAmount }}>
                  {item.amount.toFixed(2)}₽
                </div>
                <div className={s.itemDate}>{formatDate(item.date)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
