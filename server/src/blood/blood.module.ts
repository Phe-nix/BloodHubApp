import {Module} from '@nestjs/common'
import { ImageModule } from 'src/images/images.module'
import { PrismaService } from 'src/prisma.service'
import { HospitalController } from './blood.controller'
import { HospitalService } from './blood.service'

@Module({
    imports: [ImageModule],
    controllers: [HospitalController],
    providers: [HospitalService, PrismaService],
    exports: [HospitalService]
})

export class BloodModule {}