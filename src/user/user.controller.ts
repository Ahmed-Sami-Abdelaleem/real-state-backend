import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      return { message: `Error creating user: ${error.message}` };
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      return { message: `Error fetching users: ${error.message}` };
    }
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    try {
      return await this.userService.findOne(id);
    } catch (error) {
      return { message: `Error fetching user: ${error.message}` };
    }
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return await this.userService.update(id, updateUserDto);
    } catch (error) {
      return { message: `Error updating user: ${error.message}` };
    }
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    try {
      return await this.userService.remove(id);
    } catch (error) {
      return { message: `Error deleting user: ${error.message}` };
    }
  }
}
