import { Module } from '@nestjs/common';
import { MagnusServerModule } from '@magnus/server'
@Module({
  imports: [MagnusServerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
