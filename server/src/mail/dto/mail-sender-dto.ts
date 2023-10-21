import { ApiProperty } from "@nestjs/swagger"

export class MailSenderDto {

  @ApiProperty({ type: 'string', description: 'Email address to send to', example: 'nrpt.smiz@gmail.com'})
  to: string

  @ApiProperty({ type: 'string', description: 'OTP', example: '422478'})
  otp: string
}