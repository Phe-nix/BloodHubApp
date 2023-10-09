import { Body, Controller, Delete, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { PostCreateDto } from './dto/post-create-dto';
import { PostDeleteDto } from './dto/post-delete-dto';
import { PostService } from './post.service';

@Controller('posts')
@ApiTags('posts')
export class PostController {
  constructor(
    private postService: PostService
  ) {}

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({type: PostCreateDto})
  async createPost(@UploadedFile() image: Express.Multer.File, @Body() postDto: PostCreateDto): Promise<any> {
    try {
      return await this.postService.createPost(image, postDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Delete('delete')
  @ApiBody({type: PostDeleteDto})
  async deletePost(@Body() postDto: PostDeleteDto): Promise<any> {
    try {
      return await this.postService.deletePost(postDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
