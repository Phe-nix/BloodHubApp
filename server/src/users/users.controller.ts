import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserGetDto } from "./dto/users-get.dto";
import { UsersService } from './users.service';


@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UsersService,
  ){}

  @Post()
  async getUser(@Body() data: UserGetDto): Promise<any> {
    try{
      return this.userService.findOne(data);

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