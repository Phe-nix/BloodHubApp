import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    private usersService: UsersService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('getall')
  getAll() {
    return this.usersService.getAll();
  }
}