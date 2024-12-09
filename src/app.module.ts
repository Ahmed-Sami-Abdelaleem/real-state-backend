import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module'; // Import the Prisma module
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    PrismaModule, // Add the Prisma module
    UserModule, CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
