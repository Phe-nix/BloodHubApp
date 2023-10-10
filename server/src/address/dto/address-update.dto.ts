import { ApiProperty } from "@nestjs/swagger";

export class AddressDetailsDto {
  @ApiProperty({ type: 'string', description: 'house number', example: '123/456' })
  houseNo: string;
  
  @ApiProperty({ type: 'string', description: 'moo', example: '-' })
  moo: string;

  @ApiProperty({ type: 'string', description: 'soi', example: '46' })
  soi: string;

  @ApiProperty({ type: 'string', description: 'road', example: 'รามอินทรา' })
  subDistrict: string;

  @ApiProperty({ type: 'string', description: 'district', example: 'คันนายาว' })
  district: string;

  @ApiProperty({ type: 'string', description: 'province', example: 'กรุงเทพมหานคร' })
  province: string;

  @ApiProperty({ type: 'string', description: 'country', example: 'ประเทศไทย' })
  country: string;

  @ApiProperty({ type: 'string', description: 'post code', example: '10230' })
  postcode: string;
}

export class AddressUpdateDto {
  @ApiProperty({ type: 'string', description: 'user id', example: '1234567890' })
  userId: string;

  @ApiProperty({ type: AddressDetailsDto, description: 'address' })
  address: AddressDetailsDto;
}






