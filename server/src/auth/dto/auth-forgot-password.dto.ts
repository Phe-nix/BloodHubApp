import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class ForgotPasswordDto {
  @ApiProperty({example: '1234567890'})
  @MinLength(10)
  phoneNumber: string;
}