import { getUserSession } from "@/lib/getUserSession";
import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";
import { startOfMonth, endOfMonth } from "date-fns";

export async function GET() {
  try {
    const session = await getUserSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    const totalIncome = await prisma.transactions.aggregate({
      _sum: { amount: true },
      where: {
        userId: session.id,
        amount: { gt: 0 },
        date: {
          gte: startOfMonth(now),
          lte: endOfMonth(now),
        },
      },
    });

    const totalExpenses = await prisma.transactions.aggregate({
      _sum: { amount: true },
      where: {
        userId: session.id,
        amount: { lt: 0 },
        date: {
          gte: startOfMonth(now),
          lte: endOfMonth(now),
        },
      },
    });

    const totalBalance = await prisma.transactions.aggregate({
      _sum: { amount: true },
      where: { userId: session.id },
    });

    const income = totalIncome._sum.amount || 0;
    const expenses = Math.abs(totalExpenses._sum.amount || 0);
    const balance = totalBalance._sum.amount || 0;

    return NextResponse.json({
      income,
      expenses,
      balance,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
