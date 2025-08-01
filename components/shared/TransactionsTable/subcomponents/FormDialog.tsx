import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES } from "@/shared/constants/transactions";
import { ChevronDownIcon } from "lucide-react";
import { DataTable } from "@/shared/types/transactions";
import { v4 as uuidv4 } from "uuid";

interface FormDialogProps {
  setOpen: (isOpen: boolean) => void;
  onSubmit: (data: DataTable) => void;
  data?: DataTable;
}

export const FormDialog = ({ setOpen, onSubmit, data }: FormDialogProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [changedDate, setChangedDate] = useState<Date | undefined>(
    data?.date ?? new Date()
  );

  const [changedName, setChangedName] = useState(data?.name ?? "");
  const [changedAmount, setChangedAmount] = useState(data?.amount ?? 0);
  const [changedCategory, setChangedCategory] = useState(data?.category ?? "");

  const submitHandler = () => {
    onSubmit({
      id: data?.id ?? uuidv4(),
      date: changedDate || new Date(),
      name: changedName,
      amount: changedAmount,
      category: changedCategory,
    });
    setOpen(false);
  };

  return (
    <>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Название операции</Label>
          <Input
            id="name"
            name="name"
            value={changedName}
            onChange={(e) => setChangedName(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="amount">Сумма (₽)</Label>
          <Input
            id="amount"
            name="amount"
            value={changedAmount}
            onChange={(e) => setChangedAmount(Number(e.target.value))}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="category">Категория</Label>
          <Select value={changedCategory} onValueChange={setChangedCategory}>
            <SelectTrigger id="category" className="w-[200px]">
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
        </div>

        <div className="grid gap-3">
          <Label htmlFor="date">Дата операции</Label>
          <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="justify-between font-normal w-[200px]"
              >
                {changedDate
                  ? changedDate.toLocaleDateString()
                  : "Выбранная дата"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={changedDate}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setChangedDate(date);
                  setOpenPopover(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Закрыть</Button>
        </DialogClose>
        <Button onClick={submitHandler}>Сохранить</Button>
      </DialogFooter>
    </>
  );
};
