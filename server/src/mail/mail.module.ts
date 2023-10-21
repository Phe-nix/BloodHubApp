import { Module } from "@nestjs/common";
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from "./mail.service";
import { MailController } from "./mail.controller";

@Module({
    imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: '64070054@kmitl.ac.th',
          pass: '@SDK47b3k!'
        }
      }
    })],
    controllers: [MailController],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}