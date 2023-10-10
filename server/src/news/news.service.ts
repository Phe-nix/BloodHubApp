import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { NewsCreateDto } from "./news-create.dto";

@Injectable()
export class NewsService {
  constructor(
    private prismaSerivce: PrismaService,
  ){}

  async createNews(newsDto:  NewsCreateDto): Promise<any>{
    try {
      const news = await this.prismaSerivce.news.create({
        data: {
          title: newsDto.title,
          description: newsDto.description,
        },
      });
      
      return {
        message: "News created successfully",
        news: news,
      };
    } catch (error) {

      console.error("Error creating news:", error);
      throw error;
    }
  }
}