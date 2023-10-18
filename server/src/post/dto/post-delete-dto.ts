import { ApiProperty } from "@nestjs/swagger";

export class PostDeleteDto {
  @ApiProperty({ type: 'string', description: 'Post ID', example: 'clnizwqdl0000i5j5az3d6b6j'})
  id: string;
}