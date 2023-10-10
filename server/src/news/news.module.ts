import { Module } from "@nestjs/common";
import { ImageModule } from "src/images/images.module";
import { PrismaService } from "src/prisma.service";
import { NewsController } from "./news.controller";
import { NewsService } from "./news.service";

@Module({
  imports: [ImageModule],
  controllers: [NewsController],
  providers: [NewsService, PrismaService],
  exports: [NewsService]  
})

export class NewsModule {}