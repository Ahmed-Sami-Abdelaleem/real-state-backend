import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  about: string;

  @IsString()
  type: string;

  @IsString()
  address: string;

  profilePicture: string;
}
