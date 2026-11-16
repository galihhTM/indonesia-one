import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Inisialisasi adapter dengan URL dari .env
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    // log: ['query'], Log query untuk debugging hapus jika ingin production
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;