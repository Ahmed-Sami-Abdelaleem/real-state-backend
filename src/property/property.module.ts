import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
@Module({
  controllers: [PropertyController],
  providers: [PropertyService, PrismaClient],
  exports: [PropertyService],
})
export class PropertyModule {}
