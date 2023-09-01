import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { RawgService } from 'src/rawg/rawg.service';

@Controller()
export class RawgController {
  constructor(private readonly rawgService: RawgService) {}

  @Get()
  getGameList(@Req() request: Request): Promise<object> {
    return this.rawgService.getGameList(request);
  }

  @Get('search/:searchValue')
  getGamesFromSearch(
    @Req() request: Request,
    @Param('searchValue') searchValue: string,
  ) {
    return this.rawgService.getGameListFromSearch(request, searchValue);
  }
}
