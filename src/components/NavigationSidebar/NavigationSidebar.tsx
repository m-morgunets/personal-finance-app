import s from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { MENU_CONFIG } from "shared/config/menu";

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
