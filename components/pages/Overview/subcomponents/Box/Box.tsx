import arrowRightIcon from "@/public/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "./types";

export const Box = ({ title, linkTo, linkText, children }: CardProps) => {
  return (
    <div className="bg-white p-9 rounded-2xl">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">{title}</div>
        <Link
          href={linkTo}
          className="text-sm text-[#606060] flex gap-2.5 items-center"
        >
          {linkText}
          <Image src={arrowRightIcon} alt="" width={15} />
        </Link>
      </div>
      {children}
    </div>
  );
};
