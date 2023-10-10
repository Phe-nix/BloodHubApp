import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadImageDto } from './dto/upload-image.dto';
import { ImagesService } from './images.service';

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(
    private readonly imagesService: ImagesService,
  ){}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({type: UploadImageDto})
  async uploadImage(@UploadedFile() image: Express.Multer.File): Promise<void>{
    try{
      await this.imagesService.uploadImage(image);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
