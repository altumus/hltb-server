import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { RawgService } from 'src/rawg/rawg.service';

@Controller()
export class RawgController {
  constructor(private readonly rawgService: RawgService) {}

  @Get()
  getgGameList(@Req() request: Request): Promise<object> {
    return this.rawgService.getGameList(request);
  }
}
