"use client";

import { registerUser } from "@/app/actions";
import { AuthorizationCard, FormInput } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  formRegisterSchema,
  FormRegisterValues,
} from "@/shared/types/form.schemas";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

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

  const onSubmit = async (data: FormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Регистрация прошла успешно 📝.", {
        icon: "✅",
      });

      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/overview",
      });
    } catch (error) {
      console.log(error);
      return toast.error("Неверный E-Mail или пароль", {
        icon: "❌",
      });
    }
  };

  return (
    <AuthorizationCard type="signup">
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="fullName" label="Полное имя" required />
          <FormInput name="password" label="Пароль" type="password" required />
          <FormInput
            name="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            required
          />

          <Button type="submit" className="w-full">
            Зарегистрироваться
          </Button>
        </form>
      </FormProvider>
    </AuthorizationCard>
  );
};
