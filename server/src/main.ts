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
    apiKey: "AIzaSyAVzCXDF-FLDI_z3wuwrWNYh7mIG4DK5Kc",
    authDomain: "bloodbuhhh.firebaseapp.com",
    projectId: "bloodbuhhh",
    storageBucket: "bloodbuhhh.appspot.com",
    messagingSenderId: "635470153514",
    appId: "1:635470153514:web:8bc3c7f9397375342b8053"
  };
  
  const firebase = initializeApp(firebaseConfig);

  await app.listen(3000);
}

bootstrap();
