import { ApiProperty } from "@nestjs/swagger";

export class DonationGetDto {

  @ApiProperty({type: 'string', example: '123456789'})
  userId: string;
}