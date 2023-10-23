import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";
import { OtpGenerateDto } from "./dto/otp-generate.dto";
import { OtpValidateDto } from "./dto/otp-validate.dto";
import { OTPService } from "./otp.service";

@Controller('otp')
@ApiTags('otp')
export class OtpController {
  constructor(
    private otpService: OTPService
  ){}

  @Post('validate')
  @ApiBody({type: OtpValidateDto})
  async validateOtp(@Body() otpDto: OtpValidateDto): Promise<boolean>{
    return await this.otpService.validateOTP(otpDto)
  }
}