import { Controller, Get } from '@nestjs/common';
import { ChildService } from './child.service';

@Controller('child')
export class ChildController {
    constructor(private readonly childService: ChildService) {}

    @Get()
    async getAllChildren() {
        return this.childService.findAll();
    }
}
