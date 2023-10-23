import { BloodType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsObject, IsArray, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'User ID', example: 'clnizwqdl0000i5j5az3d6b6j' })
  id: string;

  @ApiProperty({ description: 'Prefix information', example: 'นาย'})
  prefix?: String;

  @ApiProperty({ description: 'First name', example: 'John' })
  firstName?: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  lastName?: string;

  @ApiProperty({ description: 'Phone number', example: '555-123-4567' })
  phoneNumber?: string;

  @ApiProperty({ description: 'Date of birth', example: '1990-01-15T12:00:00Z' })
  dob?: Date;

  @ApiProperty({ description: 'Profile image URL',format: 'binary',  example: 'https://example.com/image.jpg' })
  profileImage?: string;

  @ApiProperty({ description: 'Gender', example: 'Male' })
  gender?: String;

  @ApiProperty({ description: 'Weight', example: 70.5 })
  weight?: number;

  @ApiProperty({ description: 'Height', example: 180.0 })
  height?: number;

  @ApiProperty({ description: 'Disease information', example: 'Allergies to peanuts' })
  disease?: string;
}
