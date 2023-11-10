import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(session({secret:"blithe",rolling:true,name:"blithe.sid",cookie:{maxAge:999999}}))
  await app.listen(3000);
}
bootstrap();
