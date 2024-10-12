

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


export class Parent {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    gender: string

    @Column()
    birthDate: Date

}