import { ApiProperty } from "@nestjs/swagger";

export class AppointmentDeleteDto{
    @ApiProperty({type: 'string', description: 'Appointment id', example: '123456789'})
    id: string;
}