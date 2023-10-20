import { ApiProperty } from "@nestjs/swagger";

export class AppointmentGeyById{
  @ApiProperty({type: 'string', description: 'Appointment id', example: '123456789'})
  id?: string
  
  @ApiProperty({type: 'string', description: 'User id', example: '123456789'})
  userId?: string

  @ApiProperty({type: 'string', description: 'Post id', example: '123456789'})
  postId?: string
}