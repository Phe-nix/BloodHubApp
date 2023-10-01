import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() authDto: AuthRegisterDto) {
    return this.authService.signIn(authDto.username, authDto.password)
  }
}
