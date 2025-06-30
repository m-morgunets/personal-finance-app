import { ArrowRight } from "app/HomePage/assets";
import s from "./styles.module.scss";
import breadIcon from "assets/bread.svg";
import personIcon from "assets/person.svg";
import { NavLink } from "react-router-dom";
import { ROUTE } from "router/routes";
import { AppRoutePage } from "router/types";
import { Card } from "../Card";

export const Operations = () => {
  const LIST = [
    {
      name: 'Бистро "Пикантные закуски"',
      backgroundColor: "#916751",
      amount: -555.5,
      date: "27 Июня 2025",
      icon: breadIcon,
    },
    {
      name: "Михаил Моргунец",
      backgroundColor: "#CCB267",
      amount: 725.5,
      date: "28 Июня 2025",
      icon: personIcon,
    },
    {
      name: 'Бистро "Пикантные закуски"',
      backgroundColor: "#916751",
      amount: -310.1,
      date: "27 Июня 2025",
      icon: breadIcon,
    },
    {
      name: "Анна Моргунец",
      backgroundColor: "#CCB267",
      amount: 530,
      date: "28 Июня 2025",
      icon: personIcon,
    },
    {
      name: "Михаил Моргунец",
      backgroundColor: "#CCB267",
      amount: -140,
      date: "28 Июня 2025",
      icon: personIcon,
    },
  ];

  return (
    <Card
      title="Операции"
      linkText="Посмотреть всё"
      linkTo={ROUTE[AppRoutePage.Operations]}
    >
      <div className={s.list}>
        {LIST.map((item, index) => {
          const colorAmount = item.amount > 0 ? "#4b7a74" : "#201f24";
          return (
            <div className={s.item} key={index}>
              <div className={s.itemLeft}>
                <div
                  className={s.itemImage}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <img src={item.icon} />
                </div>
                <div className={s.itemName}>{item.name}</div>
              </div>
              <div className={s.itemRight}>
                <div className={s.itemCash} style={{ color: colorAmount }}>
                  {item.amount.toFixed(2)}₽
                </div>
                <div className={s.itemDate}>{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
