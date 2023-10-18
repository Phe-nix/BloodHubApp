import { ApiProperty } from "@nestjs/swagger";

export class bookMarkDto {
  @ApiProperty({type: 'string'})
  userId: string;

  @ApiProperty({type: 'string'})
  postId: string;
}