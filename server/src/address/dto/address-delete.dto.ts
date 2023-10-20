import { ApiProperty } from "@nestjs/swagger";

export class AddressDeleteDto {
  
  @ApiProperty({ type: 'string', description: 'user id', example: '1234567890' })
  userId: string;
}