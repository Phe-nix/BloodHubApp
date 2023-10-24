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
    apiKey: "AIzaSyCRY2Pr5pUY7V7XA9M7Hc6-Wyl2qs_paZE",
    authDomain: "pure-highlander-401409.firebaseapp.com",
    projectId: "pure-highlander-401409",
    storageBucket: "pure-highlander-401409.appspot.com",
    messagingSenderId: "543294479126",
    appId: "1:543294479126:web:2536c1a1864e1ccf92ce37"
  };
  
  const firebase = initializeApp(firebaseConfig);

  await app.listen(3000);
}

bootstrap();
