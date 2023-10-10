import { ApiProperty } from "@nestjs/swagger";

export class NewsCreateDto {

  @ApiProperty({ type: 'string', description: 'Title', example: 'News Title' })
  title: string;

  @ApiProperty({ type: 'string', description: 'Description', example: 'News Description' })
  description: string;
}
