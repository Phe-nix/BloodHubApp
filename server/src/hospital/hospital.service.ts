import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ImagesService } from "src/images/images.service";
import { PrismaService } from "src/prisma.service";
import { HospitalUpdateDto } from "./dto/hospital-update.dto";
import { HospitalCreateDto } from "./dto/hospital-create.dto";
import { HospitalDeleteDto } from "./dto/hospital-delete.dto";

@Injectable()
export class HospitalService {
    constructor(private imageService: ImagesService, private prismaService: PrismaService) {}

    async createHospital(image: Express.Multer.File, hospitalDto: HospitalCreateDto): Promise<any> {
        try {
            const imageDto = {
                ...image,
                originalname: `${Date.now()}`
            }
            const hospitalDtoUpdate = {
                ...hospitalDto,
                image: imageDto.originalname
            }

            const hospital = await this.prismaService.hospital.create({
                data: {
                    ...hospitalDtoUpdate,
                }
            });
            
            if (hospital) {
                await this.imageService.uploadImage(imageDto)
            }

            return {
                message: "Hospital Created",
                hospital: hospital,
            };
        } catch (error) {
            throw error;
        }
    }

    async updateHospital(image: Express.Multer.File, hospitalDto: HospitalUpdateDto): Promise<any> {
        try {
            const imageDto = {
                ...image,
                originalname: `${Date.now()}`
            }

            const hospital = await this.prismaService.hospital.findFirst({
                where: {
                    id: hospitalDto.id
                }
            })
            
            if(!hospital) {
                throw new HttpException(
                {
                status: HttpStatus.BAD_REQUEST,
                    error: "Hospital Not Found"
                },
                    HttpStatus.BAD_REQUEST
                )
            }

            const updateHospital = await this.prismaService.hospital.update({
                where: {
                    id: hospitalDto.id
                },
                data: {
                    ...hospitalDto
                }
            })
            if(image) {
                await this.imageService.deleteImage(hospital.image)
                await this.imageService.uploadImage(imageDto)
            }

            return {
                message: 'Hospital Updated',
                hospital: updateHospital
            }
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHospital(hospitalDto: HospitalDeleteDto): Promise<any> {
        try {
            const hospital = await this.prismaService.hospital.findFirst({
                where: {
                    id: hospitalDto.id
                }
            })
            if (!hospital) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: "Hospital Not Found"
                    },
                    HttpStatus.BAD_REQUEST
                )
            }
            const deleteHospital = await this.prismaService.hospital.delete({
                where: {
                    id: hospitalDto.id
                }
            })
            if (deleteHospital) {
                await this.imageService.deleteImage(deleteHospital.image)
            }
            return {
                message: 'Hospital Deleted',
                hospital: deleteHospital
            }
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getAllHospitals(): Promise<any> {
        try {
            const hospital = await this.prismaService.hospital.findMany()
            if(!hospital) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: "Hospital Not Found"
                    },
                    HttpStatus.BAD_REQUEST
                )
            }
            
            return {
                message: "Hospital Found",
                hospital: hospital
            }
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}