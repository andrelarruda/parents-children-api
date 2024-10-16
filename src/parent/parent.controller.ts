import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParentService } from './parent.service';
import { UpdateParentDto } from './dto/update-parent.dto';
import { CreateParentDto } from './dto/create-parent.dto';

@Controller('parents')
export class ParentController {
    constructor(private readonly parentService: ParentService) {}

    @Get()
    async findAll() {
        return this.parentService.findAll();
    }

    @Post()
    async createParent(@Body() body: CreateParentDto) {
        return this.parentService.create(body);
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.parentService.findOne(id);
    }

    @Put(':id')
    async updateParent(@Param('id') id: number, @Body() body: UpdateParentDto) {
        return this.parentService.update(id, body);
    }

    @Delete(':id')
    async deleteParent(@Param('id') id: number) {
        return this.parentService.remove(id);
    }

}
