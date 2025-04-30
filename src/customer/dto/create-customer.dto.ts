import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    email: string
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string
    role: string

}
