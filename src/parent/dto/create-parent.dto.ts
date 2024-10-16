import { ApiProperty } from "@nestjs/swagger"

export class CreateParentDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    gender: string
    @ApiProperty()
    birthDate: Date
}