import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Controller('children')
export class ChildController {
    constructor(private readonly childService: ChildService) {}

    @Get()
    async findAll() {
        return this.childService.findAll();
    }

    @Post()
    async createParent(@Body() body: CreateChildDto) {
        return this.childService.create(body);
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.childService.findOne(id);
    }

    @Put(':id')
    async updateParent(@Param('id') id: number, @Body() body: UpdateChildDto) {
        return this.childService.update(id, body);
    }

    @Delete(':id')
    async deleteParent(@Param('id') id: number) {
        return this.childService.remove(id);
    }
}
