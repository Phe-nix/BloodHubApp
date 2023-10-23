import { ApiProperty } from "@nestjs/swagger";

export class bookMarkPostDto {
  @ApiProperty({type: 'string'})
  userId: string;

  @ApiProperty({type: 'string'})
  postId: string;
}