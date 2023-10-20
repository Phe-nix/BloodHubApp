import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { initializeApp } from "firebase/app";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('BloodHub')
    .setDescription("BloodHub's API")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      mothodKey: string,
    ) => mothodKey,
  }

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  // Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA0UHw2-5jVwBF7x0ymg9rZ_gXI96J8DMk",
    authDomain: "bloodhub-864b9.firebaseapp.com",
    databaseURL: "https://bloodhub-864b9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bloodhub-864b9",
    storageBucket: "bloodhub-864b9.appspot.com",
    messagingSenderId: "404999362264",
    appId: "1:404999362264:web:99bf48e78b41a4faade9ad"
  };
  
  const firebase = initializeApp(firebaseConfig);

  await app.listen(3000);
}

bootstrap();
