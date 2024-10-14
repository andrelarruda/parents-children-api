import { Column, PrimaryGeneratedColumn, Entity, OneToMany, } from "typeorm"
import { Child } from "../child/child.entity"

@Entity()
export class Parent {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    gender: string

    @Column()
    birthDate: Date

    @OneToMany(() => Child, (child) => child.parent)
    children: Child[]
}