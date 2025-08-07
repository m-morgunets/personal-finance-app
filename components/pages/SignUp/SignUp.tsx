"use client";

import { AuthorizationCard, FormInput } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  formRegisterSchema,
  FormRegisterValues,
} from "@/shared/types/form.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const SignUp = () => {
  const form = useForm<FormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <AuthorizationCard type="signup">
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(() => {})}
          >
            <FormInput name="email" label="E-Mail" required />
            <FormInput name="fullName" label="Полное имя" required />
            <FormInput
              name="password"
              label="Пароль"
              type="password"
              required
            />
            <FormInput
              name="confirmPassword"
              label="Подтвердите пароль"
              type="password"
              required
            />

            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>
        </FormProvider>
      </AuthorizationCard>
    </div>
  );
};
