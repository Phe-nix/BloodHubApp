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
    apiKey: "AIzaSyBFakmWIECI3o1VFtsdQ33ANYBHbFB9HbE",
    authDomain: "bloodbbuh.firebaseapp.com",
    projectId: "bloodbbuh",
    storageBucket: "bloodbbuh.appspot.com",
    messagingSenderId: "124405952342",
    appId: "1:124405952342:web:060a949edaac417d1570f7"
  };
  
  const firebase = initializeApp(firebaseConfig);

  await app.listen(3000);
}

bootstrap();
