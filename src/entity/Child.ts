


import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Parent } from "./Parent"

@Entity()
export class Child {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    gender: string

    @Column()
    birthDate: Date

    father: Parent

    mother: Parent

}