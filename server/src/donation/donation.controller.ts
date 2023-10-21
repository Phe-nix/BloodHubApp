import { Body, Controller, Delete, Post, Put } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { DonationService } from "./donation.service";
import { DonationCreateDto } from "./dto/donation-create.dto";
import { DonationDeleteDto } from "./dto/donation-delete.dto";
import { DonationGetDto } from "./dto/donation-get-donation.dto";
import { DonationUpdateDto } from "./dto/donation-update.dto";

@Controller('donation')
@ApiTags('Donation')
export class DonationController {
  constructor(
    private donationService: DonationService
  ){}

  async getDonation(donationDto: DonationGetDto): Promise<any>{
    return await this.donationService.getDonation(donationDto);
  }

  @Post("create")
  @ApiBody({type: DonationCreateDto})
  async createDonation(@Body() donationDto: DonationCreateDto): Promise<any>{
    return await this.donationService.createDonation(donationDto);
  }

  @Delete("delete")
  @ApiBody({type: DonationDeleteDto})
  async deleteDonation(@Body() donationDto: DonationDeleteDto): Promise<any>{
    return await this.donationService.deleteDonation(donationDto);
  }

  @Put("update")
  @ApiBody({type: DonationUpdateDto})
  async updateDonation(@Body() donationDto: DonationUpdateDto): Promise<any>{
    return await this.donationService.deleteDonation(donationDto);
  }


}