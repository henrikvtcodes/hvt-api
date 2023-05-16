import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { XKCD } from './models/xkcd.model';
import { XKCDService } from './xkcd.service';
import { NotFoundException } from '@nestjs/common';

@Resolver(_of => XKCD)
export class XKCDResolver {
  constructor(private readonly xkcdService: XKCDService) {}

  @Query(_returns => Boolean)
  isAFavorite(@Args('id', { type: () => Int }) num: number) {
    return this.xkcdService.isAFavorite(num);
  }

  @Query(_returns => XKCD)
  async comic(@Args('id', { type: () => Int }) num: number): Promise<XKCD> {
    if (!this.xkcdService.isAFavorite(num)) {
      throw new NotFoundException(`Comic ${num} not a favorite`)
    }

    return this.xkcdService.getComic(num);
  }

}
