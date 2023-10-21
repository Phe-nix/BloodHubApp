import { ApiProperty } from "@nestjs/swagger"

export class OtpValidateDto {
    @ApiProperty({description: 'User Id', example: '102937182568912'})
    userId: string

    @ApiProperty({description: 'OTP', example: '123123'})
    otp: string
}