import { ApiProperty } from "@nestjs/swagger";

enum AppointmentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Cancelled = "Cancelled"
}

export class AppointmentUpdateDto {
  @ApiProperty({type: 'string', description: 'Appointment id', example: '123456789'})
  id: string;

  @ApiProperty({type: 'string', description: 'Status', enum: AppointmentStatus})
  status: AppointmentStatus;
}