import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as crypto from 'crypto';
import otp from 'otp-generator';

import { UsersService } from 'src/users/users.service';
import { ForgotPasswordDto } from './dto/auth-forgot-password.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { ResetPasswordDto } from './dto/auth-reset-password.dto';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma.service';
import { OTPService } from 'src/otp/otp.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService,
    private otpService: OTPService,
  ) {}

  async validateAccount(otp: string, userId: string): Promise<any>{
    const user = await this.usersService.findByUserId(userId)
    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const validateDto = {userId, otp}
    const OTP = await this.otpService.validateOTP(validateDto)
    if(OTP) {
      let userUpdate = {...user, verified: true}
      const verifiedAccount = await this.usersService.updateUser(userUpdate)
      
      return {
        message: "ACCOUNT VERIFIED",
        user: verifiedAccount
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'INVALID OTP',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }  

  async login(authDto: AuthLoginDto): Promise<any> {
    const user = await this.usersService.findOne(authDto);

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if(!user.verified){
      return {
        message: 'USER NOT VERIFIED',
      }
    }

    const hashedPassword = crypto
      .createHash('sha256')
      .update(authDto.password)
      .digest('hex');

    if (hashedPassword !== user.password) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'INVALID PASSWORD',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { sub: user.id };
    return {
      userId: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(authDto: AuthRegisterDto): Promise<any> {
    const hashedPassword = crypto
      .createHash('sha256')
      .update(authDto.password)
      .digest('hex');

    const user = await this.usersService.createUser({
      ...authDto,
      prefix: authDto.prefix,
      firstName: authDto.firstName,
      lastName: authDto.lastName,
      dob: authDto.dob,
      email: authDto.email,
      citizenId: authDto.citizenId,
      citizenBack: authDto.citizenBack,
    });

    const OTP = await this.otpService.generateOTP({
      userId: user.id,
      email: user.email
    })

    return {
      message: 'USER CREATED',
      user: user,
    };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<any> {
    const user = await this.usersService.findOne(forgotPasswordDto);

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const OTP = await this.otpService.generateOTP({
      userId: user.id,
      email: user.email
    })
    
    return {
      message: 'FORGOT PASSWORD!',
    };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<string> {
    const user = await this.usersService.findOne(resetPasswordDto);

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    // เหลือ validate password
    const hashedPassword = crypto
      .createHash('sha256')
      .update(resetPasswordDto.password)
      .digest('hex');

    const updateUser = await this.usersService.updatePassword(
      user.id,
      hashedPassword,
    );
    return 'PASSWORD UPDATED';
  }
}
