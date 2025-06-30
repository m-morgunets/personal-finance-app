import s from "./styles.module.scss";
import { MENU_CONFIG } from "../../config/menu";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const NavigationSidebar = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>finance</div>

      <ul className={s.list}>
        {MENU_CONFIG.map(({ title, href, Icon }) => (
          <NavLink
            to={href}
            className={({ isActive }) => clsx(s.item, { [s.active]: isActive })}
          >
            <Icon /> {title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
