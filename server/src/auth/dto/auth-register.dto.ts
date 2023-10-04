import { ApiProperty } from '@nestjs/swagger';

export class AuthRegisterDto {
  @ApiProperty({ example: 'john' })
  username: string;

  @ApiProperty({ example: 'changeme' })
  password: string;
}