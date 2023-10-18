import { Module } from "@nestjs/common";

@Module({
  controllers: [],
  providers: [AppointmentModule],
  exports: [AppointmentModule]
})
export class AppointmentModule {}