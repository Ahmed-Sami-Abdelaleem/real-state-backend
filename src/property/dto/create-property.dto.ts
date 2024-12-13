import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  categoryID: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  status: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  images: string[];

  amenities: string[];
  roomsDetails: string[];
}
