import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { CATEGORIES } from "../../constants";
import { FiltersProps } from "./types";

export const Filters = ({ table, setColumnFilters }: FiltersProps) => {
  return (
    <div className="flex items-center gap-4">
      <Select
        value={(table.getColumn("category")?.getFilterValue() as string) ?? ""}
        onValueChange={(data) =>
          table.getColumn("category")?.setFilterValue(data)
        }
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Все категории" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(CATEGORIES).map(([key, { name }]) => (
            <SelectItem key={key} value={key}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
        onValueChange={(data) => table.getColumn("date")?.setFilterValue(data)}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Все даты" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="day">День</SelectItem>
          <SelectItem value="week">Неделя</SelectItem>
          <SelectItem value="month">Месяц</SelectItem>
          <SelectItem value="year">Год</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={() => setColumnFilters([])}>
        Сброс
      </Button>
    </div>
  );
};
