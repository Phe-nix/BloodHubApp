import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ImagesService } from "src/images/images.service";
import { PrismaService } from "src/prisma.service";
import { BloodCreateDto } from "./dto/blood-create-dto";
import { BloodUpdateDto } from "./dto/blood-update-dto";

@Injectable()
export class HospitalService {
    constructor(
        private prismaService: PrismaService,
        private imageService: ImagesService
    ) { }

    async createBlood(bloodDto: BloodCreateDto): Promise<any> {
        try {
            const blood = await this.prismaService.bloodNeed.create({
                data: {
                    ...bloodDto
                }
            })

            return {
                message: "Blood Created",
                blood: blood
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateBlood(hospitalDto: BloodUpdateDto): Promise<any> {
        try {
            const blood = await this.prismaService.bloodNeed.update({
                where: {
                    id: hospitalDto.id
                },
                data: {
                    ...hospitalDto
                }
            })

            return {
                message: "Blood Updated",
                blood: blood
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getBlood(): Promise<any> {
        try {
            const blood = await this.prismaService.bloodNeed.findMany()

            if(!blood) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: "Blood Not Found"
                    },
                    HttpStatus.BAD_REQUEST
                )
            }

            return {
                message: "Blood Found",
                blood: blood
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}