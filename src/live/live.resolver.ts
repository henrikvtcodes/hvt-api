import { LiveService } from './live.service';
import { LiveStream } from './models/livestream.model';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(of => LiveStream)
export class LiveResolver {
  constructor(private readonly liveService: LiveService) {}

  @Query(returns => Boolean)
  async isLive(): Promise<boolean> {
    return this.liveService.isLive();
  }

  @Query(returns => [LiveStream])
  async allLiveStreams(): Promise<LiveStream[]> {
    return this.liveService.getAllLiveStreams();
  }

  @Query(returns => LiveStream)
  async primaryLiveStream(): Promise<LiveStream> {
    return this.liveService.getLiveStream();
  }
}
