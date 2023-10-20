import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { AuthRegisterDto } from 'src/auth/dto/auth-register.dto';
import { PrismaService } from 'src/prisma.service';
import { UserGetDto } from './dto/users-get.dto';
import { UpdateUserDto } from './dto/users-update.dto';
import { DeleteUserDto } from './dto/users-delete.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
  ){}

  async createUser(data: Prisma.UserCreateInput): Promise<any> {
    console.log(data)
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

  async updateUser(data: UpdateUserDto): Promise<AuthRegisterDto>{
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

  async findByUserId(userId: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        address: true,
      }
    })
  }

  async findOne(userDto: UserGetDto): Promise<User | null> {
    try {
        const user = await this.prisma.user.findFirst({
          where: {
            OR: [
              { id: userDto.userId },
              { citizenId: userDto.citizenId },
              { phoneNumber: userDto.phoneNumber },
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

        return user; 
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