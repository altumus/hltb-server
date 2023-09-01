import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Request } from 'express';
import { UAParser } from 'ua-parser-js';
import { getRandomNumber } from 'src/helpers/functions';

@Injectable()
export class RawgService {
  constructor(private config: ConfigService) {}

  async getGameList(request: Request): Promise<object> {
    const userHeaders = UAParser(request.headers['user-agent']);

    const randomPageNumber = getRandomNumber(1, 15);

    const axiosConfig = {
      url: `https://api.rawg.io/api/games?key=${this.config.get(
        'RAWG_API_KEY',
      )}&page=${randomPageNumber}&page_size=8`,
      method: 'GET',
      headers: {
        'User-Agent': userHeaders.ua,
      },
    } as AxiosRequestConfig;

    const result = await axios.request(axiosConfig);

    return result.data;
  }

  async getGameListFromSearch(
    request: Request,
    searchValue: string,
  ): Promise<object> {
    const userHeaders = UAParser(request.headers['user-agent']);

    const axiosConfig = {
      url: `https://api.rawg.io/api/games?key=${this.config.get(
        'RAWG_API_KEY',
      )}&search=${searchValue}&search_precise=1&search_exact=1&ordering=-rating`,
      method: 'GET',
      headers: {
        'User-Agent': userHeaders.ua,
      },
    } as AxiosRequestConfig;

    const result = await axios.request(axiosConfig);

    return result.data;
  }
}
