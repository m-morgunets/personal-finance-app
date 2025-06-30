import s from "./styles.module.scss";
import { PropsWithChildren } from "react";

export const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};
