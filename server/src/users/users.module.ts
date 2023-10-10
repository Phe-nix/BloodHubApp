import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
