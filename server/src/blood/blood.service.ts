import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ImagesService } from "src/images/images.service";
import { PrismaService } from "src/prisma.service";
import { HospitalCreateDto } from "./dto/blood-create-dto";
import { HospitalUpdateDto } from "./dto/blood-update-dto";
import { HospitalDeleteDto} from "./dto/blood-delete-dto";

@Injectable()
export class HospitalService {
    constructor(
        private prisma: PrismaService,
        private imageService: ImagesService
    ) { }

    async createHospital(image: Express.Multer.File, hospitalDto: HospitalCreateDto): Promise<any> {
        try {
            const imageDto = {
                ...image,
                originalname: `${Date.now()}`
            }

            const hospital = await this.prisma.hospital.create({
                data: {
                    hospitalImg: imageDto.originalname,
                    hospitalName: hospitalDto.hospitalName
                }
            });
            
            if (hospital) {
                await this.imageService.uploadImage(imageDto)
            }

            const blood = JSON.parse(`${hospitalDto.blood}`)
            
            
            
            const bloodNeed = await this.prisma.bloodNeed.create({
                data: {
                    ...blood,
                    hospitalId: hospital.id,
                }
            });
            return {
                message: "Hospital Created",
                hospital: hospital,
                bloodNeed: bloodNeed
            };
        } catch (error) {
            throw error;
        }
    }

    async deleteHospital(hospitalDto: HospitalDeleteDto): Promise<any> {
        try {
            const hospital = await this.prisma.hospital.findFirst({
                where: {
                    id: hospitalDto.hospitals.id
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
            const deleteHospital = await this.prisma.hospital.delete({
                where: {
                    id: hospitalDto.hospitals.id
                }
            })
            if (deleteHospital) {
                await this.imageService.deleteImage(deleteHospital.hospitalImg)
            }
            return deleteHospital
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async updateHospital(hospitalDto: HospitalUpdateDto): Promise<any> {
        const hospital = await this.prisma.hospital.update({
            where:{
                id: hospitalDto.hospitals.id
            },
            data: {
                ...hospitalDto.hospitals
            }
        })

        if(hospitalDto.hospitals.hospitalImage){
            await this.imageService.deleteImage(hospitalDto.hospitals.hospitalImage)
        }

        const blood = await this.prisma.bloodNeed.update({
            where: {
                id: hospitalDto.blood.id
            },
            data: {
              ...hospitalDto.blood
            }
        })

        return {
            message: "Hospital Updated",
            hospital: hospital,
            blood: blood
        }
    }
}