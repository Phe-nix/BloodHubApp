import { ApiProperty } from "@nestjs/swagger";

enum AppointmentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Cancelled = "Cancelled"
}

export class AppointmentCreateDto {

  @ApiProperty({ type: 'string', enum: AppointmentStatus, example: AppointmentStatus.Pending })
  status: AppointmentStatus;

  @ApiProperty({ type: 'date', description: 'Appointment date', example: new Date('2021-10-10T00:00:00.000Z') })
  canncelled_at?: Date;

  @ApiProperty({type: 'string', example: '123456789'})
  donatorId: string;

  @ApiProperty({type: 'string' , example: '123456789'})
  postId: string;
}
