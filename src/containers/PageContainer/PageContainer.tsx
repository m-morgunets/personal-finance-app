import { PageContainerProps } from "./types";
import s from "./styles.module.scss";

export const PageContainer = ({
  title,
  children,
}: PageContainerProps) => {
  return (
    <div className={s.root}>
      <header className={s.title}>{title}</header>
      {children}
    </div>
  );
};
