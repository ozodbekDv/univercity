import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors(); // Enable CORS for frontend
  app.useGlobalPipes(new ValidationPipe());
  
  // Serve static files (uploads)
  app.use('/uploads', express.static(join(__dirname, '..', 'public', 'uploads')));

  await app.listen(3001); // Run on 3001 to avoid conflict with Next.js (3000)
}
bootstrap();
