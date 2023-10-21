import { Module } from "@nestjs/common";
import { OTPService } from "./otp.service";
import { PrismaService } from "src/prisma.service";

@Module({
  providers: [OTPService, PrismaService],
  exports: [OTPService]
})
export class OTPModule {}