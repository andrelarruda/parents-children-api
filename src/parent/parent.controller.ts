import { Controller, Get } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('parents')
export class ParentController {
    constructor(private readonly parentService: ParentService) {}

    @Get()
    async findAll() {
        return this.parentService.findAll();
    }
}
