import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AddressService } from "./address.service";
import { AddressCreateDto } from "./dto/address-create.dto";
import { AddressDeleteDto } from "./dto/address-delete.dto";
import { AddressUpdateDto } from "./dto/address-update.dto";
import { AddressGetDto } from "./dto/address-get-dto";

@Controller('address')
@ApiTags('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
  ){}

  @Post('add')
  @ApiBody({type: AddressCreateDto})
  async addAddress(@Body() data: AddressCreateDto): Promise<any> {
    try{
      console.log(data);
      
      return await this.addressService.addAddress(data);
    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('update')
  @ApiBody({type: AddressUpdateDto})
  async updateAddress(@Body() data: AddressUpdateDto): Promise<any> {
    try{
      
      return await this.addressService.updateAddress(data);
    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('delete')
  @ApiBody({type: AddressDeleteDto})
  async deleteAddress(@Body() data: AddressDeleteDto): Promise<any> {
    try{
      
      return await this.addressService.deleteAddress(data);
    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get(':id')
  async getAddress(@Param('id') id: string): Promise<any> {
    try{
      return await this.addressService.getAddress(id);
    } catch(error){
      console.log(error);
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'INTERNAL SERVER ERROR'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}