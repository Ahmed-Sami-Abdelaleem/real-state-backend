import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';
@Module({
  controllers: [AdController],
  providers: [AdService, PrismaClient],
  exports: [AdService],
})
export class AdModule {}
