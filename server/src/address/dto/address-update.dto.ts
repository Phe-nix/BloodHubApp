import { ApiProperty } from "@nestjs/swagger";

export class AddressUpdateDto {
  @ApiProperty({ type: 'string', description: 'user id', example: '1234567890' })
  userId: string;

  @ApiProperty({type: 'number', description: 'latitude', example: 10.1234567890})
  latitude: number;

  @ApiProperty({type: 'number', description: 'longitude', example: 10.1234567890})
  longitude: number;

  @ApiProperty({type: 'string', description: 'address', example: '1234567890'})
  address: string;
}






