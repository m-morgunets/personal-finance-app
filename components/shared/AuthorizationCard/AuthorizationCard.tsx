import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { AuthorizationCardProps } from "./types";
import { TYPE_TO_DATA } from "./consts";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const AuthorizationCard = ({
  type,
  children,
}: AuthorizationCardProps) => {
  const data = TYPE_TO_DATA[type];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardAction>
          <Link href={data.href}>
            <Button variant="link">{data.linkTitle}</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {children}

        <hr />

        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/overview",
                redirect: true,
              })
            }
          >
            <Image
              alt="GitHub"
              width={24}
              height={24}
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/overview",
                redirect: true,
              })
            }
          >
            <Image
              alt="Google"
              width={24}
              height={24}
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
