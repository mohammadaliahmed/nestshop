import { Global, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Global() // 👈 This makes PrismaService available everywhere
@Module({  
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {

}
