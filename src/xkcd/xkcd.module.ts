import { Module } from '@nestjs/common';
import { XKCDResolver as XKCDResolver } from './xkcd.resolver';
import { XKCDService } from './xkcd.service';

@Module({
  providers: [XKCDResolver, XKCDService]
})
export class XKCDModule {}
