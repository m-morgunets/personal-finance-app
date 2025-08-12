import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (date: string) => {
  return format(date, "dd MMMM yyyy", { locale: ru });
};
