import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdDto } from './dto/create-ad.dto';
@Injectable()
export class AdService {
  constructor(private prisma: PrismaService) {}
  async create(createAdDto: CreateAdDto) {
    try {
      // Validate propertyID
      const property = await this.prisma.property.findUnique({
        where: { id: createAdDto.propertyID },
      });
      if (!property) {
        throw new Error(
          `Property with ID ${createAdDto.propertyID} does not exist`,
        );
      }

      // Proceed with ad creation
      const ad = await this.prisma.ad.create({
        data: createAdDto,
      });
      return ad;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to create ad: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const ads = await this.prisma.ad.findMany();
      return ads;
    } catch (error) {
      throw new Error(`Failed to fetch ads: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const ad = await this.prisma.ad.findUnique({
        where: {
          id: id,
        },
      });
      return ad;
    } catch (error) {
      throw new Error(`Failed to fetch ad: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const ad = await this.prisma.ad.delete({
        where: {
          id: id,
        },
      });
      return ad;
    } catch (error) {
      throw new Error(`Failed to delete ad: ${error.message}`);
    }
  }
  async update(id: string, updateAdDto: any) {
    try {
      const ad = await this.prisma.ad.update({
        where: {
          id: id,
        },
        data: updateAdDto,
      });
      return ad;
    } catch (error) {
      throw new Error(`Failed to update ad: ${error.message}`);
    }
  }
}
