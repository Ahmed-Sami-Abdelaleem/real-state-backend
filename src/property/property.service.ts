import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}
  createProperty(data: CreatePropertyDto) {
    return this.prisma.property.create({
      data,
    });
  }
  getProperties() {
    return this.prisma.property.findMany();
  }
  getProperty(id: string) {
    return this.prisma.property.findUnique({
      where: {
        id,
      },
    });
  }
  updateProperty(id: string, data: CreatePropertyDto) {
    return this.prisma.property.update({
      where: {
        id,
      },
      data,
    });
  }
  deleteProperty(id: string) {
    return this.prisma.property.delete({
      where: {
        id,
      },
    });
  }
}
