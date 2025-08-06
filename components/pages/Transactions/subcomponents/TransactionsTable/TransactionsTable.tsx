"use client";

import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import { CreateButton } from "../CreateButton";
import { Filters } from "../Filters";
import {
  useDeleteTransaction,
  useTransactionsTable,
  useUpdateTransaction,
} from "@/api/transactions";
import { TransactionRequest, TransactionDto } from "@/api/transactions.schemas";

export const TransactionsTable = () => {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "date",
      desc: true,
    },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const { data } = useTransactionsTable();

  const table = useReactTable<TransactionDto>({
    data,
    columns,
    defaultColumn: {
      size: undefined,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const total = table.getRowModel().rows.reduce((sum, row) => {
    return sum + (row.getValue("amount") as number);
  }, 0);

  return (
    <>
      <div className="flex items-center gap-6 mb-8">
        <CreateButton />
        <Filters table={table} setColumnFilters={setColumnFilters} />
      </div>

      <div className="bg-white flex-1 overflow-auto relative rounded-[15px] max-h-max">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="h-[60px]">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="sticky top-0 bg-background z-10"
                      style={{ width: header.column.columnDef.size }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="h-[60px]"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Никаких результатов
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <TableFooter className="sticky bottom-0 bg-background z-10">
            <TableRow className="h-[60px]">
              <TableCell colSpan={3} className="pl-11">
                Итого
              </TableCell>
              <TableCell className="font-bold text-right pr-[50px]" colSpan={2}>
                {total.toFixed(2)}₽
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};
