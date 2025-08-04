import { formatDate } from "@/shared/utils/formatDate";
import Image from "next/image";
import { Box } from "../Box";
import { CATEGORIES, DATA } from "@/components/pages/Transactions/constants";

export const Transactions = () => {
  return (
    <Box title="Операции" linkText="Посмотреть всё" linkTo={"/transactions"}>
      <div className="mt-5">
        {DATA.slice(0, 5).map((item, index) => {
          const colorAmount = item.amount > 0 ? "#4b7a74" : "#201f24";
          const category = CATEGORIES.find((cat) => cat.key === item.category);

          return (
            <div
              className="py-5 flex justify-between items-center border-t border-[#eee] first:border-t-0 last:pb-0"
              key={index}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: category?.color }}
                >
                  <Image
                    src={category?.iconSrc ?? ''}
                    alt={category?.name ?? ""}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="font-bold text-sm">{item.name}</div>
              </div>
              <div className="text-right">
                <div
                  className="font-bold text-sm"
                  style={{ color: colorAmount }}
                >
                  {item.amount.toFixed(2)}₽
                </div>
                <div className="text-xs text-[#606060] pt-2.5 capitalize">
                  {formatDate(item.date)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};
