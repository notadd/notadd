import { FooCoreModule } from './core.module';

describe('FooCoreModule', () => {
  it('should work', () => {
    expect(new FooCoreModule(null)).toBeDefined();
  });
});
