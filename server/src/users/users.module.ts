import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  imports: [UsersModule],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
