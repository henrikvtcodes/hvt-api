import { Test, TestingModule } from '@nestjs/testing';
import { LiveResolver } from './live.resolver';

describe('LiveResolver', () => {
  let resolver: LiveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveResolver],
    }).compile();

    resolver = module.get<LiveResolver>(LiveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
