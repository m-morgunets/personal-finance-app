import React, { useState } from "react";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { TableActionsProps } from "./types";
import { FormDialog } from "../FormDialog";
import { useDeleteTransaction, useUpdateTransaction } from "@/shared/api/transactions";

export const TableActions = ({
  rowData,
}: TableActionsProps) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const { mutateAsync: deleteTransaction } = useDeleteTransaction();
  const { mutateAsync: updateTransaction } = useUpdateTransaction();
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
              Это действие невозможно отменить. Это приведет к необратимому
              удалению!
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
            onSubmit={(data) => updateTransaction(data)}
            data={rowData}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
