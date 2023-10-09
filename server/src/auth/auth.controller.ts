import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ForgotPasswordDto } from './dto/auth-forgot-password.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { ResetPasswordDto } from './dto/auth-reset-password.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
  
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public login(
    @Body() authDto: AuthLoginDto,
    ): Promise<LoginResponseType> {
    return this.authService.login(authDto)
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(
    @Body() authDto: AuthRegisterDto,
    ): Promise<string> {
   return await this.authService.register(authDto)
  }

  @Post('forgotPassword')
  @HttpCode(HttpStatus.OK)
  public async forgotPassword(
    @Body() forgotDto: ForgotPasswordDto,
    ): Promise<string> {
    return await this.authService.forgotPassword(forgotDto.phoneNumber)
  }

  @Post('resetPassword')
  @HttpCode(HttpStatus.OK)
  public async resetPassword(
    @Body() resetDto: ResetPasswordDto,
    ): Promise<string> {
    return await this.authService.resetPassword(resetDto)
  }
}
