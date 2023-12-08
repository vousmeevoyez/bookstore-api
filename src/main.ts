import {getFromContainer, MetadataStorage} from 'class-validator';
import {validationMetadatasToSchemas} from 'class-validator-jsonschema';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const swaggerConfig = new DocumentBuilder().setTitle('Bookstore API').build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  // Creating all the swagger schemas based on the class-validator decorators
  const metadata = (getFromContainer(MetadataStorage) as any).validationMetadatas;
  document.components.schemas = Object.assign({}, document.components.schemas || {}, validationMetadatasToSchemas(metadata));

  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
