import { Module } from "@nestjs/common";
import { ImageModule } from "src/images/images.module";
import { PrismaService } from "src/prisma.service";
import { HospitalService } from "./hospital.service";
import { HospitalController } from "./hospital.controller";

@Module({
  imports: [ImageModule],
  controllers: [HospitalController],
  providers: [HospitalService, PrismaService],
  exports: [HospitalService],
})
export class HospitalModule {}