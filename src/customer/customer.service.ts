import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class CustomerService {
  constructor(private primsa: PrismaService) { }
  create(createCustomerDto: CreateCustomerDto) {
    return this.primsa.customer.create({
      data: {
        name: createCustomerDto.name,
        email: createCustomerDto.email,
        password: createCustomerDto.password,
        role: 'CUSTOMER',
      }
    });
  }

  async login(loginDTO: LoginDto) {
    const customer = await this.primsa.customer.findUnique({
      where: {
        email: loginDTO.email,
      }
    })
    if (customer) {
      if (customer.password !== loginDTO.password) {
        throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
      } else {
        const { password, createdAt, updatedAt, ...customerWithoutPassword } = customer;
        return customerWithoutPassword
      }
    } else {
      throw new HttpException('Invalid email', HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return this.primsa.customer.findUnique({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
