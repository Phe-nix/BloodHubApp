import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class ResetPasswordDto {
  @ApiProperty({example: '1234567890'})
  @MinLength(10)
  phoneNumber: string;

  @ApiProperty({example: '12345678'})
  @MinLength(8)
  password: string;
}