import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    coverImage: string;
}
