import { ApiProperty } from "@nestjs/swagger";

export class UserGetDto {

  @ApiProperty({ type: 'string', description: 'user id'})
  userId?: string;

  @ApiProperty({ type: 'string', description: 'citizen id'})
  citizenId?: string;

  @ApiProperty({ type: 'string', description: 'phonenumber'})
  phoneNumber?: string;
}