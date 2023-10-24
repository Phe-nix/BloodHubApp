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
    apiKey: "AIzaSyBcaBU8xRI8xfEwQL-DOcbren-FHPm_Ml4",
    authDomain: "bloodbuh-64ed1.firebaseapp.com",
    projectId: "bloodbuh-64ed1",
    storageBucket: "bloodbuh-64ed1.appspot.com",
    messagingSenderId: "816592382446",
    appId: "1:816592382446:web:eebfb289e189acb72446ff"
  };
  
  const firebase = initializeApp(firebaseConfig);

  await app.listen(3000);
}

bootstrap();
