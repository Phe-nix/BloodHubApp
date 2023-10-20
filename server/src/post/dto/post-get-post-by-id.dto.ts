import { ApiProperty } from "@nestjs/swagger";

export class PostGetByIdDto {

  @ApiProperty({description: 'Post id'})
  id: string;
}