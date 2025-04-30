import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma:PrismaService) {}
  async create(createCartDto: CreateCartDto) {
    const existingCartItem = await this.prisma.cart.findFirst({
      where: {
        customerId: createCartDto.customerId,
        productId: createCartDto.productId,
      },
    });
  
    if (existingCartItem) {
      return this.prisma.cart.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + 1,
        },
      });
    } else {
      return this.prisma.cart.create({
        data: {
          customerId: createCartDto.customerId,
          productId: createCartDto.productId,
          quantity: createCartDto.quantity ?? 1, // default to 1 if not provided
        },
      });
    }
  }
  getUserCart(userId: number) {
    return this.prisma.cart.findMany({
      where: {
        customerId: userId,
      },  
      include: {
        product: true, // Include product details
      },
     
    })
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
