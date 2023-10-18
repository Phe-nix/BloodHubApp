import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { NewsCreateDto } from "./dto/news-create.dto";
import { NewsDeleteDto } from "./dto/news-delete.dto";
import { NewsUpdateDto } from "./dto/news-update.dto";
import { NewsService } from "./news.service";

@Controller('news')
@ApiTags('news')
export class NewsController {
  constructor(
    private newsService: NewsService
  ) {}

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({type: NewsCreateDto})
  async createNews(@UploadedFile() image: Express.Multer.File, @Body() newsDto: NewsCreateDto): Promise<any> {
    try {
      return await this.newsService.createNews(image, newsDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Delete('delete')
  @ApiBody({type: NewsDeleteDto})
  async deleteNews(@Body() newsDto: NewsDeleteDto): Promise<any> {
    try {
      return await this.newsService.deleteNews(newsDto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Put('update')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({type: NewsUpdateDto})
  async updateNews(@UploadedFile() image: Express.Multer.File, @Body() newsDto: NewsUpdateDto): Promise<any> {
    try {
      return await this.newsService.updateNews(image, newsDto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get('getAllNews')
  async getAllNews(): Promise<any> {
    try {
      return await this.newsService.getAllNews();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get('getNewsById/:id')
  async getNewsById(@Param('id') id: string): Promise<any> {
    try {
      return await this.newsService.getNewsById(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
