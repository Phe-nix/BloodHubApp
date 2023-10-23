import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserGetDto } from './dto/users-get.dto';
import { DeleteUserDto } from './dto/users-delete.dto';

import fs from 'fs';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImagesService,

  ){}

  async createUser(data: any): Promise<any> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { phoneNumber: data.phoneNumber },
          { email: data.email },
          { citizenId: data.citizenId },
          { citizenBack: data.citizenBack },
        ],
      },
    });

    if(existingUser){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'USER ALREADY EXIST'
        },
        HttpStatus.BAD_REQUEST
      );
    };

    try {
      const newUser = await this.prisma.user.create({
        data: {
          ...data,
          profileImage: 'default.png'
        },
      });
      return newUser;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to read and set profile image',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateUser(image: Express.Multer.File, data: any): Promise<any>{
    const imagedto = {
      ...image,
      originalname: `${Date.now()}`
    }

    console.log(data);
    

    const user = await this.prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        phoneNumber: data.phoneNumber,
        profileImage: imagedto.originalname,
        weight: data.weight,
        height: data.height,
        disease: data.disease,
      }
    })
    if(user && user.profileImage !== 'default.png'){
      await this.imageService.deleteImage(user.profileImage);
      await this.imageService.uploadImage(imagedto);
    } else {
      await this.imageService.uploadImage(imagedto);
    }

    return {
      message: 'USER UPDATED',
      user: user
    }
  }

  async userValidation(id: any) {
    return await this.prisma.user.update({
      where:{
        id: id
      },
      data: {
        verified: true
      }
    })
  }

  async updatePassword(id : string, password: string): Promise<void>{
    await this.prisma.user.update({
      where:{
        id: id
      },
      data: {
        password: password
      }
    })
  }

  async findByUserId(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        address: true,
      }
    })

    return {
      ...user,
      profileImage: await this.imageService.getImage(user.profileImage)
    }
  }

  async findOne(userDto: UserGetDto): Promise<User | null> {
    try {
        const user = await this.prisma.user.findFirst({
          where: {
            OR: [
              { id: userDto.userId },
              { citizenId: userDto.citizenId },
              { phoneNumber: userDto.phoneNumber },
              { email: userDto.email }
            ]
          },
          include: {
            address: true,
          }
        });

        if(!user){
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'USER NOT FOUND'
            },
            HttpStatus.NOT_FOUND
          );
        }

        return {
          ...user,
          profileImage: await this.imageService.getImage(user.profileImage)
        }; 
      } catch (error) {
        
        throw error;
    }
  }

  async deleteUser(userDto: DeleteUserDto): Promise<any> {
    try{
      const user = await this.prisma.user.findFirst({
        where: { id: userDto.id }
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

      const deleteUser = await this.prisma.user.delete({
        where: { id: userDto.id }
      })

      return {
        message: 'USER DELETED',
        data: deleteUser
      }
    } catch(error){
      
      throw error;
    }
  }
}