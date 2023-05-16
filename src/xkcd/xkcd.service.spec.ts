import { Test, TestingModule } from '@nestjs/testing';
import { XKCDService } from './xkcd.service';

describe('XkcdService', () => {
  let service: XKCDService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XKCDService],
    }).compile();

    service = module.get<XKCDService>(XKCDService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
