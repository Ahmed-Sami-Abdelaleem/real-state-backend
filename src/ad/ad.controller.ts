import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AdService } from './ad.service';
import { CreateAdDto } from './dto/create-ad.dto';

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {}
  @Get()
  findAll() {
    return this.adService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adService.remove(id);
  }
  @Post()
  create(@Body() createAdDto: any) {
    return this.adService.create(createAdDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdDto: CreateAdDto) {
    return this.adService.update(id, updateAdDto);
  }
}
