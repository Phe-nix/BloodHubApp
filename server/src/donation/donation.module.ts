import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DonationController } from "./donation.controller";
import { DonationService } from "./donation.service";

@Module({
  controllers: [DonationController],
  providers: [DonationService, PrismaService],
  exports: [DonationService]
})
export class DonationModule {}