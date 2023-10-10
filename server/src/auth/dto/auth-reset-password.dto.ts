import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class ResetPasswordDto {
  @IsString()
  @ApiProperty({ type: 'string', description: 'user id'})
  userId?: string;

  @MinLength(13)
  @MaxLength(13)
  @ApiProperty({ type: 'string', description: 'citizen id'})
  citizenId?: string;
  
  @MaxLength(10)
  @MinLength(10)
  @ApiProperty({ type: 'string', description: 'phonenumber'})
  phoneNumber?: string;

  @ApiProperty({example: '12345678'})
  @MinLength(8)
  password: string;
}