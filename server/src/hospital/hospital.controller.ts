import { Body, Controller, Post, UploadedFile, UseInterceptors, Get } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { HospitalCreateDto } from "./dto/hospital-create.dto";
import { HospitalService } from "./hospital.service";
import { HospitalUpdateDto } from "./dto/hospital-update.dto";
import { HospitalDeleteDto } from "./dto/hospital-delete.dto";

@Controller('hospital')
@ApiTags('hospital')
export class HospitalController {
  constructor(
    private hospitalService: HospitalService
  ) {}

  @Post("create")
  @UseInterceptors(FileInterceptor("image"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({ type: HospitalCreateDto })
  async createHospital(
    @UploadedFile() image: Express.Multer.File,
    @Body() hospitalDto: HospitalCreateDto
  ): Promise<any> {
    return await this.hospitalService.createHospital(image, hospitalDto);
  }

  @Post("update")
  @UseInterceptors(FileInterceptor("image"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({ type: HospitalUpdateDto })
  async updateHospital(
    @UploadedFile() image: Express.Multer.File,
    @Body() hospitalDto: HospitalUpdateDto
  ): Promise<any> {
    return await this.hospitalService.updateHospital(image, hospitalDto);
  }

  @Post("delete")
  @ApiBody({ type: HospitalDeleteDto })
  async deleteHospital(@Body() hospitalDto: HospitalDeleteDto): Promise<any> {
    return await this.hospitalService.deleteHospital(hospitalDto);
  }

  @Get()
  async getAllHospitals(): Promise<any> {
    return await this.hospitalService.getAllHospitals();
  }
}