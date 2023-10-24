import { ApiProperty } from "@nestjs/swagger";
import { BloodType, DonationStatus } from "@prisma/client";

export class DonationCreateDto {
  
  @ApiProperty({type: 'string', enum: DonationStatus, example: DonationStatus.PENDING})
  status: DonationStatus;

  @ApiProperty({ type: 'string', description: 'User Id', example: '123456789' })
  userId: string;

  @ApiProperty({ type: 'string', example: '123123123123' })
  postId: string
}
