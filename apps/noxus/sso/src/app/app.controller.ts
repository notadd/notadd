import { Controller, Get } from '@nestjs/common';
import {MagnusClient} from '@notadd/magnus-client'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly client: MagnusClient) {}

  @Get()
  getData() {
    return [];
  }
}
