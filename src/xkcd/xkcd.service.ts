import { Injectable, NotFoundException } from '@nestjs/common';
import { XKCD } from './models/xkcd.model';
import { FAVORITE_COMICS_NUMS } from './xkcd.constants';
import { consola } from 'consola';
import axios from 'axios';

type XKCDResponse = {
  month: string
  num: number
  link: string
  year: string
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: string
}

@Injectable()
export class XKCDService {
  private static xkcdCacheMap = new Map<number, XKCD>();

  static async loadCache() {
    for (const num of FAVORITE_COMICS_NUMS) {
      const exists = XKCDService.xkcdCacheMap.get(num);
      if (!exists) {
        const xkcd = await XKCDService.load(num);
        if (xkcd) {
          XKCDService.xkcdCacheMap.set(num, xkcd);
        }
      }
    }
    consola.info(`Loaded ${XKCDService.xkcdCacheMap.size} XKCD comics into cache`);
  }

  private static async load(num: number) {
    const response = await axios.get<XKCDResponse>( 
     `https://xkcd.com/${num}/info.0.json`,
    );

    if (response.status !== 200) {
      console.error(`Failed to fetch XKCD ${num}: ${response.statusText}`)
      return null;
    }

    consola.info(`Fetched XKCD ${num}: "${response.data.title}" from XKCD API`);

    return {
      canonicalUrl: `https://xkcd.com/${num}`,
      ...response.data
    }

  }

  isAFavorite(num: number): boolean {
    return FAVORITE_COMICS_NUMS.includes(num);
  }

  async getComic(num: number): Promise<XKCD> {
    const exists = XKCDService.xkcdCacheMap.get(num);
    if (exists) {
      return exists;
    }

    const xkcd = await XKCDService.load(num);
    if (!xkcd) {
      throw new NotFoundException(`XKCD ${num} not found`);
    }

    XKCDService.xkcdCacheMap.set(num, xkcd);

    return xkcd;
  }
}
