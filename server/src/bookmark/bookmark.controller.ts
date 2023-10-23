import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BookmarkService } from "./bookmark.service";
import { bookMarkPostDto } from "./dto/bookmark-post.dto";
import { bookMarkNewsDto } from "./dto/bookmark-news.dto";


@Controller('bookmark')
@ApiTags('bookmark')
export class BookMarkController {
  constructor(
    private readonly bookmarkService: BookmarkService
  ){}

  @Post('post/add')
  async addBookMarkPost(@Body() bookMarkDto: bookMarkPostDto): Promise<any>{
    try{
      return this.bookmarkService.createBookmarkPost(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  @Delete('post/delete')
  async deleteBookMarkPost(@Body() bookMarkDto: bookMarkPostDto): Promise<any>{
    try{
      return this.bookmarkService.deleteBookmarkPost(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  @Post('news/add')
  async addBookMarkNews(@Body() bookMarkDto: bookMarkNewsDto): Promise<any>{
    try{
      return this.bookmarkService.createBookmarkNew(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  @Delete('news/delete')
  async deleteBookMarkNews(@Body() bookMarkDto: bookMarkNewsDto): Promise<any>{
    try{
      return this.bookmarkService.deleteBookmarkNew(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }
}