import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { Repository } from 'typeorm';
import { CreateParentDto } from './dto/create-parent.dto';

@Injectable()
export class ParentService {
    constructor(@InjectRepository(Parent) private parentRepository: Repository<Parent>) {}

    async findAll(): Promise<Parent[]> {
        return await this.parentRepository.find();
    }

    async findById(id: number): Promise<Parent> {
        return await this.parentRepository.findOneBy({ id });
    }

    async create(createParentDto: CreateParentDto): Promise<Parent> {
        const parent = this.parentRepository.create({ ...createParentDto });
        return this.parentRepository.save(parent);
    }
}
