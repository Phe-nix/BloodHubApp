import { Module } from "@nestjs/common";
import { ImageModule } from "src/images/images.module";
import { PrismaService } from "src/prisma.service";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Module({
  imports: [ImageModule],
  controllers: [PostController],
  providers: [PostService, PrismaService],
  exports: [PostService],
})

export class PostModule {}