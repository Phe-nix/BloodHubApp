import { Body, Controller, HttpException, HttpStatus, Post, Get, Delete, Param, UseInterceptors, UploadedFile } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { UserGetDto } from "./dto/users-get.dto";
import { UsersService } from './users.service';
import { UpdateUserDto } from "./dto/users-update.dto";
import { DeleteUserDto } from "./dto/users-delete.dto";
import { FileInterceptor } from "@nestjs/platform-express";


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

  @Post('update')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profileImage'))
  @ApiBody({type: UpdateUserDto})
  async updateUser(@UploadedFile() profileImage: Express.Multer.File, @Body() data: UpdateUserDto): Promise<any> {
    try{
      return this.userService.updateUser(profileImage, data);
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

  @Delete('delete')
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