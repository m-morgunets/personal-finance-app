import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import s from "./styles.module.scss";
import { ArrowRightIcon } from "./assets";
import { CardProps } from "./types";

export const Card = ({ title, linkTo, linkText, children }: CardProps) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.title}>{title}</div>
        <NavLink to={linkTo} className={s.link}>
          {linkText}
          <ArrowRightIcon />
        </NavLink>
      </div>
      {children}
    </div>
  );
};
