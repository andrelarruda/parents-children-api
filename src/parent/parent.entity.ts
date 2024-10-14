import { Column, PrimaryGeneratedColumn, Entity, } from "typeorm"

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
}