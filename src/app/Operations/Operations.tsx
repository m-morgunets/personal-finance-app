import { PageContainer } from "containers";
import s from "./styles.module.scss";
import { CATEGORIES, DATA } from "./constants";
import { formatDate } from "shared/utils";

export const Operations = () => {
  return (
    <PageContainer title="Операции">
      <div className={s.controls}>
        <button type="button" className={s.addButton}>
          Добавить
        </button>
        <div className={s.filter}>
          <select className={s.filterSelect}>
            <option value="">Все категории</option>
            {Object.entries(CATEGORIES).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
          <select className={s.filterSelect}>
            <option value="">Все даты</option>
            <option value="month">Этот месяц</option>
            <option value="year">Этот год</option>
          </select>
        </div>
      </div>

      <div className={s.table}>
        <table>
          <thead>
            <tr>
              <th>Категория</th>
              <th>Название</th>
              <th>Дата</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((item) => {
              const { Icon, color, name } = CATEGORIES[item.category];
              return (
                <tr className={s.tableLine}>
                  <td className={s.tableCategory}>
                    <div
                      className={s.categoryImage}
                      style={{ backgroundColor: color }}
                    >
                      <Icon width={20} height={20} />
                    </div>
                    {name}
                  </td>
                  <td>{item.name}</td>
                  <td className={s.tableDate}>{formatDate(item.date)}</td>
                  <td className={s.tableAmount}>{item.amount.toFixed(2)}₽</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};
