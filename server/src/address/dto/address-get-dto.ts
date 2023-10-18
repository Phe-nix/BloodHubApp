import { ApiProperty } from "@nestjs/swagger";

export class AddressGetDto {
  @ApiProperty({ type: 'string', description: 'user id', example: '1234567890' })
  userId: string;
}