import { Injectable, NotImplementedException } from '@nestjs/common';
import { LiveStream } from './models/livestream.model';

@Injectable()
export class LiveService {
  async isLive(): Promise<boolean> {
    throw new NotImplementedException("LiveService.isLive() is not implemented")
  }

  async getLiveStream(): Promise<LiveStream> {
    throw new NotImplementedException("LiveService.getLiveStream() is not implemented")
  }

  async getAllLiveStreams(): Promise<LiveStream[]> {
    throw new NotImplementedException("LiveService.getAllLiveStreams() is not implemented")
  }
}
