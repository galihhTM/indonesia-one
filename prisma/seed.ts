import "dotenv/config";
import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter }); 

async function main() {
  console.log('Mulai melakukan seeding...');

  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@indonesiaone.com' },
    update: {}, // Jika sudah ada, jangan lakukan apa-apa
    create: {
      name: 'Super Admin',
      email: 'admin@indonesiaone.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log(`Akun Admin berhasil dibuat: ${admin.email}`);

  const southTower = await prisma.tower.create({
    data: {
      name: 'South Tower',
      slug: 'south-tower',
      zones: {
        create: [
          {
            categoryName: 'High-Zone',
            floorsRange: 'Lantai 36 - 50',
            points: '375,169 413,120 510,158 507,258 407,245 373,269',
            imageUrl: '/images/zone/zone3.png',
            facilities: {
              create: [
                { title: 'Luxury Suites', category: 'Residential' },
                { title: 'Infinity Pool Access', category: 'Wellness' },
                { title: 'Private Concierge', category: 'Service' },
                { title: '24/7 Butler Service', category: 'Service' },
              ]
            }
          }
        ]
      }
    }
  });
  
  console.log(`Data Tower berhasil dimasukkan: ${southTower.name}`);
  console.log('Seeding selesai!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });