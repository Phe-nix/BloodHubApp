import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ImagesService } from "src/images/images.service";
import { PrismaService } from "src/prisma.service";
import { NewsCreateDto } from "./dto/news-create.dto";
import { NewsDeleteDto } from "./dto/news-delete.dto";
import { NewsUpdateDto } from "./dto/news-update.dto";

@Injectable()
export class NewsService {
  constructor(
    private prismaSerivce: PrismaService,
    private imageService: ImagesService,

  ){}

  async createNews(image: Express.Multer.File, newsDto:  NewsCreateDto): Promise<any>{
    try {
      const imagedto = {
        ...image,
        originalname: `${Date.now()}`
      }
      const news = await this.prismaSerivce.news.create({
        data: {
          image: imagedto.originalname,
          title: newsDto.title,
          description: newsDto.description,
        },
      });
      if (news){
        await this.imageService.uploadImage(imagedto);
      }
      return {
        message: "News created successfully",
        news: news,
      };
    } catch (error) {

      console.error("Error creating news:", error);
      throw error;
    }
  }

  async deleteNews(newsDto: NewsDeleteDto): Promise<any>{
    try {
      const news = await this.prismaSerivce.news.findFirst({
        where: {
          id: newsDto.id,
        },
      });
      if (!news){
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'NEWS NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      }
      const deletedNews = await this.prismaSerivce.news.delete({
        where: {
          id: newsDto.id,
        },
      });
      if (deletedNews){
        await this.imageService.deleteImage(news.image);
      }

      return deletedNews;
    } catch (error) {
      console.log("Error deleting news:", error);
      throw error;
    }
  }

  async getAllNews(): Promise<any>{
    try {
      const news = await this.prismaSerivce.news.findMany();
      return news;
    } catch (error) {
      console.log("Error getting news:", error);
      throw error;
    }
  }

  async getNewsById(id: string): Promise<any>{
    const news = await this.prismaSerivce.news.findFirst({
      where:{
        id: id
      },
    });
    if (!news){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'NEWS NOT FOUND'
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const firestoreImage = await this.imageService.getImage(news.image);
    return {
      ...news,
      image: firestoreImage
    }
  }

  async updateNews(image: Express.Multer.File, newsDto: NewsUpdateDto): Promise<any>{
    try {
      const oldNews = await this.prismaSerivce.news.findFirst({
        where: {
          id: newsDto.id,
        },
      });

      if(!oldNews){
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'NEWS NOT FOUND'
          }, HttpStatus.BAD_REQUEST
        )
      }

      const imagedto = {
        ...image,
        originalname: `${Date.now()}`
      }

      const news = await this.prismaSerivce.news.update({
        where: {
          id: newsDto.id,
        },
        data: {
          image: imagedto.originalname,
          title: newsDto.title,
          description: newsDto.description,
        },
      });
      if (news){
        await this.imageService.deleteImage(oldNews.image);
        await this.imageService.uploadImage(imagedto);
      }
      return {
        message: "News updated successfully",
        news: news,
      };
    } catch (error) {

      console.error("Error creating news:", error);
      throw error;
    }
  }
}