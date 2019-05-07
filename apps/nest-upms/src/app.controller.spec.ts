import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appService = testingModule.get<AppService>(AppService);
    appController = testingModule.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should return "Hello world" string', async () => {
      const result = 'Hello world';
      jest.spyOn(appService, 'getHello').mockImplementation(() => result);

      expect(await appController.getHello()).toBe(result);
    });
  });
});
