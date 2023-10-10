import { ApiProperty } from "@nestjs/swagger";

export class NewsUpdateDto {
  @ApiProperty({ type: 'string', description: 'Id', example: '123456789' })
  id: string;

  @ApiProperty({ type: 'string', description: 'Title', example: 'News Title' })
  title: string;

  @ApiProperty({ type: 'string', description: 'Description', example: 'News Description' })
  description: string;
}
