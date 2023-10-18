import { BloodType, Gender, Prefix } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsObject, IsArray, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty({ description: 'User ID', example: 'clnizwqdl0000i5j5az3d6b6j' })
  id: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Citizen ID', example: '12345' })
  citizenId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Citizen Back ID', example: '54321' })
  citizenBack?: string;

  @IsObject()
  @IsOptional()
  @ApiProperty({ description: 'Prefix information', example: { title: 'Mr.', abbreviation: 'Mr' } })
  prefix?: Prefix;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'First name', example: 'John' })
  firstName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Last name', example: 'Doe' })
  lastName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Phone number', example: '555-123-4567' })
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Password', example: 'yourpassword' })
  password?: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ description: 'Date of birth', example: '1990-01-15T12:00:00Z' })
  dob?: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Profile image URL',format: 'binary',  example: 'https://example.com/image.jpg' })
  profileImage?: string;

  @IsObject()
  @IsOptional()
  @ApiProperty({ description: 'Blood type', example: { type: 'A', rh: '+' } })
  bloodType?: BloodType;

  @IsObject()
  @IsOptional()
  @ApiProperty({ description: 'Gender', example: { type: 'Male' } })
  gender?: Gender;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'Weight', example: 70.5 })
  weight?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'Height', example: 180.0 })
  height?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Disease information', example: 'Allergies to peanuts' })
  disease?: string;
}
