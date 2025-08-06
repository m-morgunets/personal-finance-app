import { Button } from "@/components/ui/button";
import { formatDate } from "@/shared/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { DateRange } from "./types";
import { isInRange } from "./utils";
import { CATEGORIES } from "../../constants";
import { TableActions } from "../TableActions";
import { TransactionDto } from "@/api/transactions.schemas";

export const columns: ColumnDef<TransactionDto>[] = [
  {
    accessorKey: "category",
    header: () => <div className="text-left pl-9">Категория</div>,
    cell: ({ row }) => {
      const categoryName = row.getValue("category") as string;
      const category = CATEGORIES.find((cat) => cat.key === categoryName);

      return (
        <div className="text-left flex items-center gap-5 pl-9">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-[100%]"
            style={{ backgroundColor: category?.color }}
          >
            <Image
              src={category?.iconSrc ?? ""}
              width={20}
              height={20}
              alt="name"
            />
          </div>
          {category?.name}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
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
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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
      return <TableActions rowData={rowData} />;
    },
  },
];
