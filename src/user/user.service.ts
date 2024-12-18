import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    createUserDto.type = 'user';
    try {
      return this.prisma.user.create({
        data: createUserDto,
      });
    } catch (error) {
      return error;
    }
  }
  findAll() {
    try {
      const users = this.prisma.user.findMany();
      return users;
    } catch (error) {
      return error;
    }
  }
  findOne(id: string) {
    try {
      const user = this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  update(id: string, CreateUserDto: any) {
    try {
      const user = this.prisma.user.update({
        where: {
          id: id,
        },
        data: CreateUserDto,
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  remove(id: string) {
    try {
      const user = this.prisma.user.delete({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
  //check if user email and password exists
  async checkUser(email: string, password: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email,
          password: password,
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  }
}
