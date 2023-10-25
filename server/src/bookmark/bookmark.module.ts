import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookMarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { ImageModule } from 'src/images/images.module';

@Module({
  imports: [ImageModule],
  controllers: [BookMarkController],
  providers: [BookmarkService, PrismaService],
  exports: [BookmarkService]
})
export class BookmarkModule {}
