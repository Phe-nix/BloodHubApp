import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { AuthRegisterDto } from 'src/auth/dto/auth-register.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ){}

  async createUser(data: Prisma.UserCreateInput): Promise<any> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { phoneNumber: data.phoneNumber },
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

    const newUser = await this.prisma.user.create({data});
    return newUser;
  }

  async updateUser(data: Prisma.UserCreateInput): Promise<AuthRegisterDto>{
    return await this.prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        ...data
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

  async findOne(userInput: string): Promise<User | null> {
    try {
      if(userInput.length === 13){
        const user = await this.prisma.user.findUnique({
          where: {
            citizenId: userInput,
          },
        });

        return user; 
      } else if (userInput.length === 10) {
        const user = await this.prisma.user.findUnique({
          where: {
            phoneNumber: userInput,
          },
        });

        return user; 
      }
  
    } catch (error) {

      throw error;
    }
  }
}