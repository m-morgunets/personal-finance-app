import { DateRange } from "./types";

export const isInRange = (date: Date, range: DateRange): boolean => {
  const d = new Date(date);
  const now = new Date();

  switch (range) {
    case "day":
      return (
        d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    case "week": {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return d >= startOfWeek && d <= endOfWeek;
    }
    case "month":
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    case "year":
      return d.getFullYear() === now.getFullYear();
    case "all":
    default:
      return true;
  }
};
