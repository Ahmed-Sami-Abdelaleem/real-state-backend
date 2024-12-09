import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.prisma.category.create({
        data: createCategoryDto,
      });
      return category;
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      const categories = this.prisma.category.findMany();
      return categories;
    } catch (error) {
      return error;
    }
  }
}
