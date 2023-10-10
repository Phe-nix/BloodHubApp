import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BookmarkService } from "./bookmark.service";
import { bookMarkDto } from "./dto/bookmark-add-dto";


@Controller('bookmark')
@ApiTags('bookmark')
export class BookMarkController {
  constructor(
    private readonly bookmarkService: BookmarkService
  ){}

  @Post('add')
  async addBookMark(@Body() bookMarkDto: bookMarkDto): Promise<any>{
    try{
      return this.bookmarkService.createBookmark(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  @Delete('delete')
  async deleteBookMark(@Body() bookMarkDto: bookMarkDto): Promise<any>{
    try{
      return this.bookmarkService.deleteBookmark(bookMarkDto);
    } catch(error){
      console.error(error);
      throw error;
    }
  }
}