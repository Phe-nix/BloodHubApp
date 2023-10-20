import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DonationCreateDto } from "./dto/donation-create.dto";
import { DonationDeleteDto } from "./dto/donation-delete.dto";
import { DonationGetDto } from "./dto/donation-get-donation.dto";
import { DonationUpdateDto } from "./dto/donation-update.dto";

@Injectable()
export class DonationService {
  constructor(
    private prismaSerivce: PrismaService,
  ){}

  async createDonation(donationDto:  DonationCreateDto): Promise<any>{
    try {
      const user = await this.prismaSerivce.user.findFirst({
        where: {
          id: donationDto.userId,
        },
      })

      if(!user) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'USER NOT FOUND'
          },
          HttpStatus.NOT_FOUND
        )
      }

      const donationHistory = await this.prismaSerivce.donationHistory.create({
        data: {
          blood_type: donationDto.blood_type,
          status: donationDto.status,
          userId: donationDto.userId,
        },
      });
      
      return {
        message: "Donation created successfully",
        donation: donationHistory,
      };
    } catch (error) {

      console.error("Error creating donation:", error);
      throw error;
    }
  }

  async deleteDonation(donationDto: DonationDeleteDto): Promise<any>{
    try {
      const donationHistory = await this.prismaSerivce.donationHistory.findFirst({
        where: {
          id: donationDto.id,
        },
      });
      if (!donationHistory){
          throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'DONATION NOT FOUND'
          }, HttpStatus.NOT_FOUND)
      }
      return {
        message: "Donation deleted successfully",
        donation: donationHistory,
      };
    } catch (error) {
      console.log("Error deleting donation:", error);
      throw error;
    }
  }

  async updateDonation(donationDto: DonationUpdateDto): Promise<any>{
    try {
      const donationHistory = await this.prismaSerivce.donationHistory.findFirst({
        where: {
          id: donationDto.id,
        },
      });
      if (!donationHistory){
        throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'DONATION NOT FOUND'
        }, HttpStatus.NOT_FOUND)
      }
      return {
        message: "Donation updated successfully",
        donation: donationHistory,
      }
    } catch (error) {
      console.log("Error updating donation:", error);
      throw error;
    }
  }

  async getDonation(donationDto: DonationGetDto): Promise<any>{
    const donation = await this.prismaSerivce.donationHistory.findMany({
      where:{
        userId: donationDto.userId
      }
    })

    if(!donation) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'DONATION NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    return {
      message: "Donation found successfully",
      donation: donation
    }
  }
}