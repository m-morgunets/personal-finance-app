import { NextResponse } from "next/server";
import { getUserSession } from "@/lib/getUserSession";
import { prisma } from "@/prisma/prisma-client";

type Params = Promise<{ id: string }>;

export async function DELETE(_: Request, { params }: { params: Params }) {
  try {
    const session = await getUserSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const transaction = await prisma.transactions.findUnique({
      where: { id },
    });

    if (!transaction || transaction.userId !== session.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.transactions.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Transaction deleted" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: { params: Params }) {
  try {
    const session = await getUserSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const transaction = await prisma.transactions.findUnique({
      where: { id },
    });

    if (!transaction || transaction.userId !== session.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const { title, category, amount, date } = await req.json();

    const updated = await prisma.transactions.update({
      where: { id },
      data: {
        title: title ?? transaction.title,
        category: category ?? transaction.category,
        amount: typeof amount === "number" ? amount : transaction.amount,
        date: date ? new Date(date) : transaction.date,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating transaction:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
