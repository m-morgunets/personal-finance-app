"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { FormDialog } from "../FormDialog";
import { AddButtonProps } from "./types";

export const AddButton = ({ addTransaction }: AddButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"lg"}>Добавить</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавление операции</DialogTitle>
          <DialogDescription>
            Укажите название, сумму, категорию и дату.
            <br /> Нажмите «Сохранить», чтобы подтвердить.
          </DialogDescription>
        </DialogHeader>

        <FormDialog setOpen={setOpen} onSubmit={addTransaction} />
      </DialogContent>
    </Dialog>
  );
};
