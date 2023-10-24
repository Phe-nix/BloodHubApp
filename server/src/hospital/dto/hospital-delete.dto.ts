import { ApiProperty } from "@nestjs/swagger";

export class HospitalDeleteDto {
  @ApiProperty({type: 'string', description: 'Hospital ID', example: '1123123123'})
  id: string
}