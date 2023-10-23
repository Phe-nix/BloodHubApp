import { Module } from "@nestjs/common";
import { OTPService } from "./otp.service";
import { PrismaService } from "src/prisma.service";
import { OtpController } from "./otp.controller";

@Module({
  controllers: [OtpController],
  providers: [OTPService, PrismaService],
  exports: [OTPService]
})
export class OTPModule {}