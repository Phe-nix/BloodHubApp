import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DonationCreateDto } from "./dto/donation-create.dto";
import { DonationDeleteDto } from "./dto/donation-delete.dto";
import { DonationGetDto } from "./dto/donation-get-donation.dto";
import { DonationUpdateDto } from "./dto/donation-update.dto";
import { ImagesService } from "src/images/images.service";

@Injectable()
export class DonationService {
  constructor(
    private imageService: ImagesService,
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
      
      const donation = await this.prismaSerivce.donation.create({
        data: {
          postId: donationDto.postId,
          userId: donationDto.donatorId,
        }
      })

      const donationHistory = await this.prismaSerivce.donationHistory.create({
        data: {
          postId: donationDto.postId,
          userId: donationDto.donatorId,
        },
      });
      
      const reservation = await this.prismaSerivce.reservationSlot.create({
        data: {
          userId: donationDto.userId,
          donatorId: donationDto.donatorId,
          postId: donationDto.postId,
          donationId: donation.id,
          donationHistoryId: donationHistory.id,
        }
      })
      
      return {
        message: "Donation created successfully",
        reservation: reservation,
        donation: donation,
        donationHistory: donationHistory,
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

  async updateDonation(donationDto: any): Promise<any>{
    try {
      const reservation = await this.prismaSerivce.reservationSlot.delete({
        where: {
          id: donationDto.reservationId,
        }
      })

      if(!reservation) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'RESERVATION NOT FOUND'
          },
          HttpStatus.NOT_FOUND
        )
      }

      const donation = await this.prismaSerivce.donation.update({
        where: {
          id: donationDto.donationId,
        },
        data: {
          status: donationDto.status,
        }
      })

      const donationHistory = await this.prismaSerivce.donationHistory.update({
        where: {
          id: donationDto.donationHistoryId,
        },
        data: {
          status: donationDto.status,
        }
      })

      return {
        message: "Donation updated successfully",
        reservation: reservation,
        donation: donation,
        donationHistory: donationHistory,
      };


    } catch (error) {
      console.log("Error updating donation:", error);
      throw error;
    }
  }

  async getReservation(id: string): Promise<any>{
    const reservation = await this.prismaSerivce.reservationSlot.findMany({
      where: {
        userId: id
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            profileImage: true,
            bloodType: true,
            phoneNumber: true,
            dob: true,
            disease: true,
          }
        },
      }
    })

    if(!reservation) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'RESERVATION NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const reservationFilter = reservation.filter((item) => (
      id !== item.donatorId
    ))

    const reservationFireStore = await Promise.all(reservationFilter.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.user.profileImage);
      return {
        ...item,
        user: {
          ...item.user,
          profileImage: firestoreImage,
        }
      }
    }))

    return {
      message: "Reservation found successfully",
      reservation: reservationFireStore
    }
  }

  async getlDonation(id: string): Promise<any>{
    const donation = await this.prismaSerivce.donation.findMany({
      where:{
        userId: id
      },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            image: true,
            description: true,
            phoneNumber: true,
            case: true,
            bloodType: true,
            address: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                profileImage: true,
              }
            }
          }
        }
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

    const donationFireStore = await Promise.all(donation.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.post.image);
      return {
        ...item,
        post: {
          ...item.post,
          image: firestoreImage,
        }
      }
    }))

    const donationUpdate = await Promise.all(donationFireStore.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.post.user.profileImage);
      return {
        ...item,
        post: {
          ...item.post,
          user: {
            ...item.post.user,
            profileImage: firestoreImage,
          }
        }
      }
    }))

    return {
      message: "Donation found successfully",
      donation: donationUpdate
    }
  }

  async getDonationHistory(id: string): Promise<any>{
    const donationHistory = await this.prismaSerivce.donationHistory.findMany({
      where:{
        userId: id
      },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            image: true,
            description: true,
            phoneNumber: true,
            case: true,
            bloodType: true,
            address: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                profileImage: true,
              }
            }
          }
        }
      }
    })

    if(!donationHistory) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'DONATION NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const donationHistoryFireStore = await Promise.all(donationHistory.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.post.image);
      const firestoreImageUser = await this.imageService.getImage(item.post.user.profileImage);

      return {
        ...item,
        post: {
          ...item.post,
          image: firestoreImage,
          user: {
            ...item.post.user,
            profileImage: firestoreImageUser,
          }
        }
      }
    }))

    return {
      message: "DonationHistory found successfully",
      donation: donationHistoryFireStore
    }
  }

  async getPostDonator(id: string): Promise<any>{
    const donator = await this.prismaSerivce.donation.findMany({
      where: {
        postId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            profileImage: true,
            bloodType: true,
            phoneNumber: true,
            dob: true,
            disease: true,
          }
        },
      }
    })

    if(!donator) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'DONATOR NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const donatorFireStore = await Promise.all(donator.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.user.profileImage);
      return {
        ...item,
        user: {
          ...item.user,
          profileImage: firestoreImage,
        }
      }
    }))

    return {
      message: "Donator found successfully",
      donator: donatorFireStore
    }
  }
}