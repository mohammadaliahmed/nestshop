import { IsEmail, IsNotEmpty, isNotEmpty, IsString, MinLength } from "class-validator"

export class LoginDto {
    @IsEmail()
    email: string
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    password: string
}