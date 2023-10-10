import { ApiProperty } from "@nestjs/swagger";
import { BloodType, DonationStatus } from "@prisma/client";

export class DonationCreateDto {
  
  @ApiProperty({type: 'string', enum: BloodType, description: 'Donation date', example: BloodType.A_POSITIVE })
  blood_type: BloodType;

  @ApiProperty({type: 'string', enum: DonationStatus, example: DonationStatus.PENDING})
  status: DonationStatus;

  @ApiProperty({ type: 'string', description: 'User Id', example: '123456789' })
  userId: string; // Make sure this is the correct type, e.g., 'string'
}
