import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MainSvg from "@/public/main.svg";

export const Home = () => {
  return (
    <div className="py-5 px-10">
      <div className="flex gap-3 justify-end">
        <Button variant={"outline"}>Войти</Button>
        <Button>Регистрация</Button>
      </div>

      <div className="pt-[180px] flex justify-center items-center gap-20">
        <div className="text-right">
          <div className="text-5xl font-bold">
            Финансовая осознанность <br />
            начинается здесь
          </div>
          <div className="text-2xl font-medium mt-20 w-[525px] ml-auto">
            Удобный трекер финансов для тех, кто хочет держать всё под
            контролем.
            <br />
            Простой интерфейс — мощный результат.
          </div>
          <Button className="mt-10" size={"lg"}>
            Начать сейчас
          </Button>
        </div>
        <Image src={MainSvg} alt="Картинка" width={520} />
      </div>
    </div>
  );
};
