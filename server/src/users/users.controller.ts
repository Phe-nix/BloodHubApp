import { Body, Controller, HttpException, HttpStatus, Post, Get, Delete, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserGetDto } from "./dto/users-get.dto";
import { UsersService } from './users.service';
import { UpdateUserDto } from "./dto/users-update.dto";
import { DeleteUserDto } from "./dto/users-delete.dto";


@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UsersService,
  ){}

  @Get(":id")
  async getUser(@Param('id') userId: string): Promise<any> {
    try{
      return this.userService.findByUserId(userId);

    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post()
  async updateUser(@Body() data: UpdateUserDto): Promise<any> {
    try{
      return this.userService.updateUser(data);

    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete()
  async deleteUser(@Body() data: DeleteUserDto): Promise<any> {
    try{
      return this.userService.deleteUser(data);

    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}