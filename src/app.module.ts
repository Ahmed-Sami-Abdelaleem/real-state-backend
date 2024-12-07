import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; // Import the Prisma module

@Module({
  imports: [
    PrismaModule, // Add the Prisma module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
