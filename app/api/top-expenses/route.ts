import { getUserSession } from "@/lib/getUserSession";
import { prisma } from "@/prisma/prisma-client";
import { endOfMonth, startOfMonth } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getUserSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();

    // Группировка по категориям
    const grouped = await prisma.transactions.groupBy({
      by: ["category"],
      where: {
        userId: session.id,
        date: {
          gte: startOfMonth(now),
          lte: endOfMonth(now),
        },
        amount: { lt: 0 }, // только траты
      },
      _sum: {
        amount: true,
      },
    });

    // Сортируем по абсолютной сумме и берём топ-4
    const topCategories = grouped
      .sort(
        (a, b) => Math.abs(b._sum.amount || 0) - Math.abs(a._sum.amount || 0)
      )
      .slice(0, 4)
      .map((item) => ({
        category: item.category,
        amount: Math.abs(item._sum.amount || 0),
      }));

    return NextResponse.json(topCategories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
