import { Module } from '@nestjs/common';
import { LiveResolver } from './live.resolver';
import { LiveService } from './live.service';

@Module({
  providers: [LiveResolver, LiveService]
})
export class LiveModule {}
