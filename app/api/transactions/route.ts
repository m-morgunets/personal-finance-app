import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const transactions = await prisma.transactions.findMany();

  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    category: string;
    title: string;
    date: Date;
    amount: number;
  };

  await prisma.transactions.create({
    data: body,
  });

  return NextResponse.json({});
}

export async function DELETE(req: NextRequest) {
  const body = (await req.json()) as {
    id: string;
  };

  await prisma.transactions.delete({
    where: { id: body.id },
  });

  return NextResponse.json({});
}

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as {
    id: string;
    category: string;
    title: string;
    date: Date;
    amount: number;
  };

  const { id, ...rest } = body;

  await prisma.transactions.update({
    where: { id },
    data: rest,
  });

  return NextResponse.json({});
}
