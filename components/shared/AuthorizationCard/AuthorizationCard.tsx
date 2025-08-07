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
import { LINK } from "./consts";

export const AuthorizationCard = ({
  type,
  children,
}: AuthorizationCardProps) => {
  const link = LINK[type];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Зерегестрируйте учетную запись</CardTitle>
        <CardAction>
          <Link href={link.href}>
            <Button variant="link">{link.title}</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {children}

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
  );
};
