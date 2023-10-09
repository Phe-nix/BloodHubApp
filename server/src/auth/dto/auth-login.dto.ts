import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ example: '1235567890123' })
  citizenId: string;

  @ApiProperty({ example: 'my_password123' })
  password: string;
}