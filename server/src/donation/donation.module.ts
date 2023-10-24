import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DonationController } from "./donation.controller";
import { DonationService } from "./donation.service";
import { ImageModule } from "src/images/images.module";

@Module({
  imports: [ImageModule],
  controllers: [DonationController],
  providers: [DonationService, PrismaService],
  exports: [DonationService]
})
export class DonationModule {}