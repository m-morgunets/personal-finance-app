"use client";

import { Header } from "@/components/shared/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CATEGORIES } from "../Transactions/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Budgets = () => {
  const [categories, setCategories] = useState(CATEGORIES);

  const handleBudgetChange = (key: string, value: string | undefined) => {
    setCategories((prev) => {
      const val = value?.length ? Number(value) : undefined;
      return prev.map((item) =>
        item.key === key ? { ...item, budget: val } : item
      );
    });
  };

  return (
    <>
      <Header title="Бюджеты" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="grid grid-cols-[repeat(4,1fr)] gap-5">
          {categories.map((item) => {
            return (
              <Card key={item.key}>
                <CardHeader className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <Image
                      src={item.iconSrc}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Label htmlFor={`budget-${item.key}`}>Бюджет (₽)</Label>
                    <Input
                      id={`budget-${item.key}`}
                      type="number"
                      value={item.budget ?? ""}
                      onChange={(e) =>
                        handleBudgetChange(item.key, e.target.value)
                      }
                      className="max-w-sm"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex gap-5 justify-end">
          <Button variant={"outline"} size={"lg"}>
            Сбросить
          </Button>
          <Button size={"lg"}>Сохранить</Button>
        </div>
      </div>
    </>
  );
};
