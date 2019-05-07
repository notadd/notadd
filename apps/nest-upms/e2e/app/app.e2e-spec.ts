import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { ApplicationModule } from '../../src/app.module';
import { AppService } from '../../src/app.service';

describe('Application', () => {
  let app: INestApplication;
  let appService = { getHello: () => 'Hello world' };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule]
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET app`, () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(appService.getHello());
  });

  afterAll(async () => {
    await app.close();
  });
});
