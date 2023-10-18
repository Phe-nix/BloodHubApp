import { ApiProperty } from "@nestjs/swagger";

export class BloodgetbyidDto {

    @ApiProperty({description: 'News id'})
    id: string;
  }