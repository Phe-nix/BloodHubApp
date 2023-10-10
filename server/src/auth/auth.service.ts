import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { ResetPasswordDto } from './dto/auth-reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  
  async login(authDto: AuthLoginDto): Promise<LoginResponseType> {
    const user = await this.usersService.findOne(authDto.citizenId);

    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    const hashedPassword = crypto
      .createHash('sha256')
      .update(authDto.password)
      .digest('hex');

    if (hashedPassword !== user.password) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'INVALID PASSWORD'
        },
        HttpStatus.UNAUTHORIZED
      );
    }

    const payload = { sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
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
      password: hashedPassword,
      dob: authDto.dob,
      phoneNumber: authDto.phoneNumber,
      citizenId: authDto.citizenId,
      citizenBack: authDto.citizenBack,
    })
    return {
      message: "USER CREATED",
      user: user
    }
  }

  async forgotPassword(phoneNumber: string): Promise<string> {
    const user = await this.usersService.findOne(phoneNumber);

    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return 'OTP SENT'

    // ยิง service ไปยัง phone ขอ OTP ยิง phoneNumber ไปด้วย
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<string> {
    const user = await this.usersService.findOne(resetPasswordDto.phoneNumber);

    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    // เหลือ validate password
    const hashedPassword = crypto
      .createHash('sha256')
      .update(resetPasswordDto.password)
      .digest('hex');

    const updateUser = await this.usersService.updatePassword(user.id, hashedPassword);
    return 'PASSWORD UPDATED'
  }
}
