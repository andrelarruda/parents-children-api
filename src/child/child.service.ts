import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Child } from './child.entity';
import { Repository } from 'typeorm';
import { CreateChildDto } from './dto/create-child.dto';
import { Parent } from '../parent/parent.entity';
import { ParentService } from '../parent/parent.service';
import { ParentDto } from '../parent/dto/parent.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildService {
    constructor (
        @InjectRepository(Child) private childRepository: Repository<Child>,
    ) {}

    async findAll(): Promise<Child[]> {
        return await this.childRepository.find();
    }

    // findById
    async findOne(id: number): Promise<Child> {
        const child = await this.childRepository.findOneBy({ id });

        if (!child) {
            throw new NotFoundException("Child not found.");
        }
        return child;
    }

    // create
    async create(createChildDto: CreateChildDto): Promise<Child> {
        const child = this.childRepository.create({ ...createChildDto });
        return this.childRepository.save(child);
    }

    // update
    async update(id: number, childDto: UpdateChildDto) : Promise<Child> {
        const child = await this.childRepository.findOneBy({ id });

        if (!child) {
            throw new NotFoundException("Child not found.");
        }

        Object.assign(child, childDto);
        return this.childRepository.save(child);
    }

    // delete
    async remove(id: number) : Promise<void> {
        const child = await this.childRepository.findOneBy({ id });

        if (!child) {
            throw new NotFoundException("Child not found.");
        }

        await this.childRepository.delete(id);
    }

}
