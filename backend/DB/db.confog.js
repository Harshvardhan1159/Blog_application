import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query'], // Shows SQL queries in console for debugging
});

export default prisma;