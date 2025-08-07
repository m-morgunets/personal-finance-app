"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "@/components/shared";
import Link from "next/link";

export const passwordSchema = z
  .string()
  .min(4, { message: "Введите корректный пароль" });

export const formLoginSchema = z.object({
  email: z.email({ message: "Введите корректную почту" }),
  password: passwordSchema,
});
export type TFormLoginValues = z.infer<typeof formLoginSchema>;

export const LogIn = () => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Войдите в свою учетную запись</CardTitle>
          <CardAction>
            <Button variant="link">
              <Link href={"/signup"}>Регистрация</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-5"
              onSubmit={form.handleSubmit(() => {})}
            >
              <FormInput name="email" label="E-Mail" required />
              <FormInput
                name="password"
                label="Пароль"
                type="password"
                required
              />

              <Button type="submit" className="w-full">
                Войти
              </Button>
            </form>
          </FormProvider>
          <hr />

          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1">
              <img
                className="w-6 h-6"
                src="https://github.githubassets.com/favicons/favicon.svg"
              />
              GitHub
            </Button>
            <Button variant="outline" className="flex-1">
              <img
                className="w-6 h-6"
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              />
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
