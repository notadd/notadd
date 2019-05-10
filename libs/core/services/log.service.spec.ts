// angular
import { TestBed, inject } from '@angular/core/testing';
// app
import { LogService } from './log.service';

const reset = () => {
  for (const key in LogService.DEBUG) {
    LogService.DEBUG[key] = false;
  }
};
describe('core: LogService', () => {
  beforeEach(() => {
    // ensure statics are in default state
    reset();
    // spy
    spyOn(console, 'log');
    spyOn(console, 'error');
    spyOn(console, 'warn');
    spyOn(console, 'info');

    TestBed.configureTestingModule({
      providers: [LogService]
    });
  });

  describe('api', () => {
    it('sanity', inject([LogService], (log: LogService) => {
      expect(log.debug).toBeDefined();
      expect(log.error).toBeDefined();
      expect(log.warn).toBeDefined();
      expect(log.info).toBeDefined();
    }));

    it('should not log anything by default', inject(
      [LogService],
      (log: LogService) => {
        log.debug('debug');
        expect(console.log).not.toHaveBeenCalledWith(['debug']);
        log.error('error');
        expect(console.error).not.toHaveBeenCalledWith(['error']);
        log.warn('warn');
        expect(console.warn).not.toHaveBeenCalledWith(['warn']);
        log.info('info');
        expect(console.info).not.toHaveBeenCalledWith(['info']);
      }
    ));
  });

  describe('debug levels', () => {
    beforeEach(() => {
      reset();
    });

    it('LEVEL_5: info only', inject([LogService], (log: LogService) => {
      LogService.DEBUG.LEVEL_5 = true;

      log.info('info');
      expect(console.info).toHaveBeenCalledWith(['info']);
      log.debug('debug');
      expect(console.log).not.toHaveBeenCalledWith(['debug']);
      log.error('error');
      expect(console.error).not.toHaveBeenCalledWith(['error']);
      log.warn('warn');
      expect(console.warn).not.toHaveBeenCalledWith(['warn']);
      log.info('info');
      expect(console.info).toHaveBeenCalledWith(['info']);
    }));

    it('LEVEL_4: everything', inject([LogService], (log: LogService) => {
      LogService.DEBUG.LEVEL_4 = true;

      log.info('info');
      expect(console.info).toHaveBeenCalledWith(['info']);
      log.debug('debug');
      expect(console.log).toHaveBeenCalledWith(['debug']);
      log.error('error');
      expect(console.error).toHaveBeenCalledWith(['error']);
      log.warn('warn');
      expect(console.warn).toHaveBeenCalledWith(['warn']);
    }));

    it('LEVEL_3: log + all the above', inject(
      [LogService],
      (log: LogService) => {
        LogService.DEBUG.LEVEL_3 = true;

        log.info('info');
        expect(console.info).not.toHaveBeenCalledWith(['info']);
        log.debug('debug');
        expect(console.log).toHaveBeenCalledWith(['debug']);
        log.error('error');
        expect(console.error).toHaveBeenCalledWith(['error']);
        log.warn('warn');
        expect(console.warn).toHaveBeenCalledWith(['warn']);

        // always overrides lower levels and allows them to come through
        LogService.DEBUG.LEVEL_4 = true;

        log.info('info w/level_4');
        expect(console.info).toHaveBeenCalledWith(['info w/level_4']);
        log.debug('debug w/level_4');
        expect(console.log).toHaveBeenCalledWith(['debug w/level_4']);
        log.error('error w/level_4');
        expect(console.error).toHaveBeenCalledWith(['error w/level_4']);
        log.warn('warn w/level_4');
        expect(console.warn).toHaveBeenCalledWith(['warn w/level_4']);
      }
    ));

    it('LEVEL_2: error only', inject([LogService], (log: LogService) => {
      LogService.DEBUG.LEVEL_2 = true;

      log.info('info');
      expect(console.info).not.toHaveBeenCalledWith(['info']);
      log.debug('debug');
      expect(console.log).not.toHaveBeenCalledWith(['debug']);
      log.error('error');
      expect(console.error).toHaveBeenCalledWith(['error']);
      log.warn('warn');
      expect(console.warn).not.toHaveBeenCalledWith(['warn']);
    }));

    it('LEVEL_1: warn only', inject([LogService], (log: LogService) => {
      LogService.DEBUG.LEVEL_1 = true;

      log.info('info');
      expect(console.info).not.toHaveBeenCalledWith(['info']);
      log.debug('debug');
      expect(console.log).not.toHaveBeenCalledWith(['debug']);
      log.error('error');
      expect(console.error).not.toHaveBeenCalledWith(['error']);
      log.warn('warn');
      expect(console.warn).toHaveBeenCalledWith(['warn']);
    }));
  });
});
