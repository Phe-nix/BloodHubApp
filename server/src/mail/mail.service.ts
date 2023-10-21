import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailSenderDto } from './dto/mail-sender-dto';

type MailDto = {
  to: string
  from: string
  subject: string
  text: string
}

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async postMail(mailDto: MailSenderDto){
    let {to, otp} = mailDto;
    
    try{
      await this.mailerService.sendMail({
        from: 'Developer of Bloodhub',
        to: to,
        subject: 'Verification OTP',
        text: `Your Verification Code is ${otp}`,
      })

      return {
        message: 'Email sent successfully',
        to: to,
        status: true
      }
    } catch (error) {
      console.log(error);
    }
  }
}