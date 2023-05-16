import { value Test, value TestingModule } from "@nestjs/testing";

import { value XKCDResolver } from "./xkcd.resolver";

describe("XkcdResolver", () => {
  let resolver: XKCDResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XKCDResolver],
    }).compile();

    resolver = module.get<XKCDResolver>(XKCDResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
