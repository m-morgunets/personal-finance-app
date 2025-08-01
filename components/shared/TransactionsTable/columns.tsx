import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORIES } from "@/shared/constants/transactions";
import { DataTable } from "@/shared/types/transactions";
import { formatDate } from "@/shared/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FormDialog } from "./subcomponents";

type DateRange = "day" | "week" | "month" | "year" | "all";
const now = new Date();

const isInRange = (date: Date, range: DateRange): boolean => {
  const d = new Date(date);

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

export const buildColumns = (
  deleteTransaction: (id: string) => void,
  editTransaction: (data: DataTable) => void
): ColumnDef<DataTable>[] => {
  return [
    {
      accessorKey: "category",
      header: () => <div className="text-left pl-9">Категория</div>,
      cell: ({ row }) => {
        const categoryName = row.getValue("category") as string;
        const category = CATEGORIES[categoryName];

        return (
          <div className="text-left flex items-center gap-5 pl-9">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-[100%]"
              style={{ backgroundColor: category.color }}
            >
              <Image src={category.iconSrc} width={20} height={20} alt="name" />
            </div>
            {category.name}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Название",
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Дата
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{formatDate(row.getValue("date"))}</div>
      ),
      filterFn: (row, columnId, filterValue: DateRange) => {
        return isInRange(new Date(row.getValue(columnId)), filterValue);
      },
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <div className="text-right">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Сумма
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        return <div className="font-bold text-right">{amount.toFixed(2)}₽</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      size: 50,
      cell: ({ row }) => {
        const rowData = row.original;
        const [openAlert, setOpenAlert] = useState(false);
        const [openDialog, setOpenDialog] = useState(false);
        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                  Редактировать
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={() => setOpenAlert(true)}
                >
                  Удалить
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Это действие невозможно отменить. Это приведет к
                    необратимому удалению!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Отменить</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteTransaction(rowData.id);
                      setOpenAlert(false);
                    }}
                  >
                    Удалить
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Редактирование операции</DialogTitle>
                  <DialogDescription>
                    Можете изменить название, сумму, категорию и дату.
                    <br /> Нажмите «Сохранить», чтобы подтвердить.
                  </DialogDescription>
                </DialogHeader>

                <FormDialog
                  setOpen={setOpenDialog}
                  onSubmit={(data) => editTransaction(data)}
                  data={rowData}
                />
              </DialogContent>
            </Dialog>
          </>
        );
      },
    },
  ];
};
