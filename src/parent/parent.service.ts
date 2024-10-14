import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParentService {
    constructor(@InjectRepository(Parent) private parentRepository: Repository<Parent>) {}

    async findAll(): Promise<Parent[]> {
        return await this.parentRepository.find();
    }
}
