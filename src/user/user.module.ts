/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaClient],
  exports: [UserService], // Export UserService if other modules need it
})
export class UserModule {}
