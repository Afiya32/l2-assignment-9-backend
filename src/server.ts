import { PrismaClient } from '@prisma/client';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();


const prisma = new PrismaClient();

async function main() {
  
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1); 
  }

  // Start the server
  const port = process.env.PORT || 3000; 
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
    
  });
}

// Ensure proper connection cleanup in serverless environments
process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing database connection...');
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing database connection...');
  await prisma.$disconnect();
});

// Start the server
main().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});
