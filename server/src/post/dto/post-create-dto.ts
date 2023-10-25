import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";

enum BloodType {
  A_POSITIVE = 'A_POSITIVE',
  B_POSITIVE = 'B_POSITIVE',
  O_POSITIVE = 'O_POSITIVE',
  AB_POSITIVE = 'AB_POSITIVE',
  A_NEGATIVE = 'A_NEGATIVE',
  B_NEGATIVE = 'B_NEGATIVE',
  O_NEGATIVE = 'O_NEGATIVE',
  AB_NEGATIVE = 'AB_NEGATIVE',
}

enum CaseType {
  NORMAL = 'NORMAL',
  EMERGENCY = 'EMERGENCY',
}

export class PostCreateDto {
  @ApiProperty({type: 'string', description: 'Post title', example: 'This is a sample post title'})
  title: string;

  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file'})
  image?: any;

  @ApiProperty({ type: 'string', description: 'Post description', example: 'This is a sample post description' })
  description: string;

  @ApiProperty({ type: 'string', description: 'Phone Number', example: '123-456-7890' })
  phoneNumber: string;

  @ApiProperty({ type: 'string', description: 'Blood type', enum: BloodType, example: BloodType.AB_NEGATIVE })
  @IsEnum(BloodType)
  bloodType: BloodType;

  @ApiProperty({ type: 'string', description: 'Case type', enum: CaseType, example: CaseType.EMERGENCY })
  @IsEnum(CaseType)
  case: CaseType;

  @ApiProperty({type: 'string', description: 'Address', example: '1234 Main St, City, State, Zip'})
  address: string;

  @ApiProperty({ type: 'string', description: 'User ID', example: 'clnizwqdl0000i5j5az3d6b6j'})
  userId: string;
}