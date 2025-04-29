import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for Angular dev server
  app.enableCors({
    origin: 'http://localhost:4200', // or use '*' during development
    credentials: true
  });

  await app.listen(3000);
}
bootstrap();