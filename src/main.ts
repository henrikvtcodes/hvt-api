import { NestFactory } from '@nestjs/core';
import { config as dotenv } from 'dotenv';
dotenv({ path: '.env' });

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  const env = (await import('./env')).env;
  await app.listen(env.PORT);
}
bootstrap();
