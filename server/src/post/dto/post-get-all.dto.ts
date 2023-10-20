import { ApiProperty } from "@nestjs/swagger";

export class PostGetAllDto {

  @ApiProperty({description: 'User ID'})
  id: string;
}