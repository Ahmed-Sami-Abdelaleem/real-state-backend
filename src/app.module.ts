import { Module } from '@nestjs/common';

import { AdModule } from './ad/ad.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module'; // Import the Prisma module
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    PrismaModule, // Add the Prisma module
    UserModule,
    CategoryModule,
    PropertyModule,
    AdModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
