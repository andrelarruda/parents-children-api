import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Parent } from "../parent/parent.entity"

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

    @ManyToOne(() => Parent, (parent) => parent.children)
    parent: Parent
}