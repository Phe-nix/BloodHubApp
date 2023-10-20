import { ApiProperty } from "@nestjs/swagger";

export class NewsGetByIdDto {

  @ApiProperty({description: 'News id'})
  id: string;
}