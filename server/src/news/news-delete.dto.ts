import { ApiProperty } from "@nestjs/swagger";

export class NewsDeleteDto {
  @ApiProperty({ type: 'string', description: 'Id', example: '123456789' })
  id: string;
}
