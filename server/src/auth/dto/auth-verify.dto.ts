import { ApiProperty } from "@nestjs/swagger";

export class AuthVerifyDto {

  @ApiProperty({description: 'OTP', example: '123456'})
  otp: string;

  @ApiProperty({description: 'User ID', example: '12312451342'})
  userId: string;
}