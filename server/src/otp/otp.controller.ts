import { Body, Controller, Post } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { OtpGenerateDto } from "./dto/otp-generate.dto";
import { OtpValidateDto } from "./dto/otp-validate.dto";
import { OTPService } from "./otp.service";

@Controller('otp')
@ApiTags('otp')
export class OtpController {
  constructor(
    private otpService: OTPService
  ){}

  @Post()
  async generateOTP(@Body() otpDto: OtpGenerateDto): Promise<any>{
    return await this.otpService.generateOTP(otpDto)
  }

  @Post()
  async validateOtp(@Body() otpDto: OtpValidateDto): Promise<boolean>{
    return await this.otpService.validateOTP(otpDto)
  }
}