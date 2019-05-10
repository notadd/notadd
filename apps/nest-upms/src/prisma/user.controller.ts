import { PrismaService } from './prisma.service';
import { User } from './prisma.binding';
import { Body, Post, Controller } from '@nestjs/common';

@Controller('user2')
export class UserController {
    constructor(private readonly prisma: PrismaService) { }

    //创建一个用户
    @Post("createUser")
    async createUser(@Body() user:User):Promise<User>{
       const exinting= await this.prisma.mutation.createUser({data:user});
       return exinting;
    }

}