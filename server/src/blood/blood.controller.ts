import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { HospitalService } from './blood.service'
import { BloodCreateDto } from './dto/blood-create-dto';
import { BloodUpdateDto } from './dto/blood-update-dto';

@Controller('blood')
@ApiTags('blood')
export class HospitalController {
  constructor(
    private hospitalService: HospitalService
  ) {}

  @Post('create')
  @ApiBody({type: BloodCreateDto})
  async createPost(@Body() hospitalDto: BloodCreateDto): Promise<any> {
    return await this.hospitalService.createBlood(hospitalDto);
  }

  @Post('update')
  @ApiBody({type: BloodCreateDto})
  async updatePost(@Body() hospitalDto: BloodUpdateDto): Promise<any> {
    return await this.hospitalService.updateBlood(hospitalDto);
  }

  @Get()
  async getPost(): Promise<any> {
    return await this.hospitalService.getBlood();
  }
}