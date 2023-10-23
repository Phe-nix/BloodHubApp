import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { OtpValidateDto } from "./dto/otp-validate.dto";
import { MailerService } from "@nestjs-modules/mailer";

type otpGenerateDto = {
  userId: string
  email?: string
}

@Injectable()
export class OTPService {
  constructor(
    private mailerService: MailerService,
    private prismaService: PrismaService
  ) {}

  async generateOTP(otpDto: otpGenerateDto): Promise<any>{
    const OneTimePassword = `${Math.floor(100000 + Math.random() * 900000)}`

    const OTPexist = await this.prismaService.verifications.findFirst({
      where:{
        userId: otpDto.userId
      }
    })

    if(OTPexist){
      await this.prismaService.verifications.delete({
        where:{
          id: OTPexist.id
        }
      })
    }

    const OTP = await this.prismaService.verifications.create({
      data:{
        userId: otpDto.userId,
        email: otpDto.email,
        otp: OneTimePassword
      }
    })

    this.mailerService.sendMail({
      to: otpDto.email,
      from: 'Developer of Bloodhub',
      subject: 'Verification OTP',
      text: `Your Verification Code is ${OneTimePassword}`,
    })

    return {
      message: 'OTP GENERATED',
      userId: otpDto.userId,
      otp: OTP
    }
  }

  async validateOTP(otpDto: OtpValidateDto): Promise<any>{
    const OTP = await this.prismaService.verifications.findFirst({
      where: {
        userId: otpDto.userId
      }
    })

    if(!OTP){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'OTP NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if(OTP.otp !== otpDto.otp){
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'INVALID OTP',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const user = await this.prismaService.user.update({
      where: {
        id: otpDto.userId
      },
      data: {
        verified: true
      }
    })
    
    const deleteOTP = await this.prismaService.verifications.delete({
      where:{
        id: OTP.id
      }
    })

    return true
  }
}
