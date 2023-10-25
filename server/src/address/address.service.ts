import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AddressCreateDto } from "./dto/address-create.dto";
import { AddressDeleteDto } from "./dto/address-delete.dto";
import { AddressUpdateDto } from "./dto/address-update.dto";

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  
  async addAddress(adddessDto: AddressCreateDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where:{
        id: adddessDto.userId
      }
    });

    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    const address = await this.prisma.address.create({
      data: {
        ...adddessDto,
        address: JSON.parse(adddessDto.address)
      }
    });

    return {
      message: 'ADDRESS CREATED SUCCESSFULLY',
      address: address
    }
  }

  async updateAddress(adddessDto: AddressUpdateDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: adddessDto.userId
      }
    })

    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    const address = await this.prisma.address.update({
      where: {
        userId: adddessDto.userId
      },
      data: {
        ...adddessDto,
        address: JSON.stringify(adddessDto.address)
      }
    })

    return {
      message: "ADDRESS UPDATED SUCCESSFULLY",
      address: address
    }
  }

  async deleteAddress(addressDto: AddressDeleteDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: addressDto.userId
      }
    })

    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    const address = await this.prisma.address.delete({
      where: {
        userId: addressDto.userId
      }
    })

    return {
      message: "ADDRESS DELETED SUCCESSFULLY",
      address: address
    }
  }

  async getAddress(addressDto: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: addressDto
      }
    })

    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      );
    }

    const address = await this.prisma.address.findUnique({
      where: {
        userId: addressDto
      }
    })

    if(!address) {
      return {
        message: "ADDRESS NOT FOUND",
        address: []
      }  
    }

    return {
      message: "ADDRESS FOUND",
      address: address
    }
  }
}