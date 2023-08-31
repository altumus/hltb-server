import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Request } from 'express';
import { UAParser } from 'ua-parser-js';

@Injectable()
export class RawgService {
  constructor(private config: ConfigService) {}

  async getGameList(request: Request): Promise<object> {
    const userHeaders = UAParser(request.headers['user-agent']);

    const axiosConfig = {
      url: `https://api.rawg.io/api/games?key=${this.config.get(
        'RAWG_API_KEY',
      )}&page=3&page_size=8`,
      method: 'GET',
      headers: {
        'User-Agent': userHeaders.ua,
      },
    } as AxiosRequestConfig;

    const result = await axios.request(axiosConfig);

    console.log('resuuult', result.data);

    return result.data;
  }
}
