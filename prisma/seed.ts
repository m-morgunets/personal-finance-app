import { PrismaClient } from "@prisma/client";
import { TRANSACTIONS } from "./constants";

const prisma = new PrismaClient();

async function main() {
  await prisma.transactions.createMany({
    data: TRANSACTIONS,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
