import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Child } from './child.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
    constructor (
        @InjectRepository(Child) private childRepository: Repository<Child>,
    ) {}

    async findAll(): Promise<Child[]> {
        return await this.childRepository.find();
    }

    // findById

    // create

    // update

    // delete
}
