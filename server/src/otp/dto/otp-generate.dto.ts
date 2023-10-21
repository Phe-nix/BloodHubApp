import { ApiProperty, ApiTags } from "@nestjs/swagger"

export class OtpGenerateDto {
    @ApiProperty({description: 'User Id', example: '182389125124'})
    userId: string

    @ApiProperty({description: 'OTP', example: '123123'})
    otp: string
  }