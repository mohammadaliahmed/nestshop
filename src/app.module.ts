import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductModule, PrismaModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService, CustomerService, ProductService, PrismaService, PrismaService],
})
export class AppModule {}
