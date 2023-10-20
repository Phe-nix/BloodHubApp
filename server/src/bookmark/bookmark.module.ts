import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookMarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';

@Module({
  controllers: [BookMarkController],
  providers: [BookmarkService, PrismaService],
  exports: [BookmarkService]
})
export class BookmarkModule {}
