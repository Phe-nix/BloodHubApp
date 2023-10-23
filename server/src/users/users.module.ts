import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { ImageModule } from 'src/images/images.module';

@Module({
  imports: [ImageModule],
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
