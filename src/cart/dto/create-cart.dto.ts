import { CreateProductDto } from "src/product/dto/create-product.dto";

export class CreateCartDto {
    customerId: number;
    productId: number;
    quantity: number;
    product: CreateProductDto
}
