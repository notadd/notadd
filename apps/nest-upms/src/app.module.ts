import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './prisma/user.controller';

@Module({
 
  imports: [PrismaModule],
  
  controllers: [AppController ,UserController],
  providers: [AppService]
})
export class ApplicationModule {}
