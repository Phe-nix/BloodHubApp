import { ApiProperty } from "@nestjs/swagger";
import { BloodType, DonationStatus } from "@prisma/client";

export class DonationUpdateDto {
  @ApiProperty({ type: 'string', description: 'Id', example: '123456789' })
  id: string;

  @ApiProperty({type: 'string', enum: DonationStatus, example: DonationStatus.PENDING})
  status: DonationStatus;
}
