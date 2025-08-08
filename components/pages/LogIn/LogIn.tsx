"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { AuthorizationCard, FormInput } from "@/components/shared";
import { formLoginSchema, FormLoginValues } from "@/shared/types/form.schemas";

export const LogIn = () => {
  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        callbackUrl: "/overview",
      });

      if (!resp?.ok) {
        throw Error();
      }
    } catch (error) {
      console.error("Error [LOGIN]", error);
    }
  };

  return (
    <AuthorizationCard type="login">
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="password" label="Пароль" type="password" required />

          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
      </FormProvider>
    </AuthorizationCard>
  );
};
