import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { Repository } from 'typeorm';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';

@Injectable()
export class ParentService {
    constructor(@InjectRepository(Parent) private parentRepository: Repository<Parent>) {}

    async findAll(): Promise<Parent[]> {
        return await this.parentRepository.find();
    }

    async findOne(id: number): Promise<Parent> {
        const parent = await this.parentRepository.findOneBy({ id });

        if (!parent) {
            throw new NotFoundException("Parent not found.");
        }
        return parent;
    }

    async create(createParentDto: CreateParentDto): Promise<Parent> {
        const parent = this.parentRepository.create({ ...createParentDto });
        return this.parentRepository.save(parent);
    }

    async update(id: number, parentDto: UpdateParentDto) : Promise<Parent> {
        const parent = await this.parentRepository.findOneBy({ id });

        if (!parent) {
            throw new NotFoundException("Parent not found.");
        }

        Object.assign(parent, parentDto);
        return this.parentRepository.save(parent);
    }

    async remove(id: number) : Promise<void> {
        const parent = await this.parentRepository.findOneBy({ id });

        if (!parent) {
            throw new NotFoundException("Parent not found.");
        }

        await this.parentRepository.delete(id);
    }


}
