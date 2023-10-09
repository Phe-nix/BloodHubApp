import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ example: '1234567890123' })
  citizenId: string;

  @ApiProperty({ example: '1234567890' })
  password: string;
}