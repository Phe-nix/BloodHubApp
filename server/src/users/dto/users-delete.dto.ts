import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteUserDto {
  @IsString()
  @ApiProperty({ description: 'User ID', example: 'clnizwqdl0000i5j5az3d6b6j' })
  id: string;
}