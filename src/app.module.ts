import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module'; // Import the Prisma module
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule, // Add the Prisma module
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
