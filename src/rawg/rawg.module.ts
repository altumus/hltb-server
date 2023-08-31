import { Module } from '@nestjs/common';
import { RawgService } from './rawg.service';
import { RawgController } from './rawg.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [RawgController],
  providers: [RawgService, ConfigService],
})
export class RawgModule {}
