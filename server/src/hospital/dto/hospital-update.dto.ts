import { ApiProperty } from "@nestjs/swagger";

export class HospitalUpdateDto {

  @ApiProperty({type: 'string', description: 'Hospital ID', example: '1123123123'})
  id: string

  @ApiProperty({type: 'string', description: "Hospital name", example: "Siriraj Hospital"})
  hospitalName?: string;

  @ApiProperty({type: 'string', format: 'binary', description: 'Image file'})
  image?: string;

  @ApiProperty({type: 'string', description: "Location", example: "latitude,longitude"})
  location?: string;
  
  @ApiProperty({type: 'string', description: "Link", example: "https://www.google.com"})
  link?: string;
}