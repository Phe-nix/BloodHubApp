import { ApiProperty } from "@nestjs/swagger";

export class NewsGetAllDto {

  @ApiProperty({description: 'User id'})
  id: string;
}