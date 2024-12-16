import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.createProperty(createPropertyDto);
  }
  @Get()
  findAll() {
    return this.propertyService.getProperties();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.getProperty(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() createPropertyDto: CreatePropertyDto,
  ) {
    return this.propertyService.updateProperty(id, createPropertyDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.deleteProperty(id);
  }
}
