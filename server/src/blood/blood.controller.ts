import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { HospitalService } from './blood.service'
import { HospitalCreateDto } from './dto/blood-create-dto';
import { HospitalUpdateDto } from './dto/blood-update-dto';
import { HospitalDeleteDto } from './dto/blood-delete-dto';

@Controller('hospital')
@ApiTags('Hospital')
export class HospitalController {
    constructor(
        private hospitalService: HospitalService
    ) { }

    @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hospitalImg'))
  @ApiBody({type: HospitalCreateDto})
  async createPost(@UploadedFile() image: Express.Multer.File, @Body() hospitalDto: HospitalCreateDto): Promise<any> {
    try {
        
        return await this.hospitalService.createHospital(image, hospitalDto);
    } catch (error) {
      throw error;
    }
  }
}