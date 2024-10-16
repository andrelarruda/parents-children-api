import { ParentDto } from "../../parent/dto/parent.dto"

export class CreateChildDto {

    name: string

    gender: string

    birthDate: Date

    parent: ParentDto

}