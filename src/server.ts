import { PrismaClient } from '@prisma/client';
import app from './app';

const port = 3000;
const prisma = new PrismaClient();

async function main() {
  app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    // Test the database connection
    try {
      await prisma.$connect();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  });
}

main().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});
