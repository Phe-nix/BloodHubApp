import { ApiProperty } from "@nestjs/swagger";

export class bookMarkNewsDto {
  @ApiProperty({type: 'string'})
  userId: string;

  @ApiProperty({type: 'string'})
  newId: string;
}